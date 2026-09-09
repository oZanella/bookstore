'use client';

import { CircleCheck, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { brazilianStates } from '@/lib/br-states';
import { CepLookupError, fetchAddressByCep } from '@/lib/cep';
import { formatCep } from '@/lib/masks';
import { siteConfig } from '@/lib/site-config';
import { redirectToWhatsappPurchase } from '@/lib/whatsapp';

interface PurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookTitle: string;
  bookPrice: string;
}

const emptyForm = {
  name: '',
  cep: '',
  address: '',
  neighborhood: '',
  city: '',
  state: '',
};

type AutoFieldKey = 'address' | 'neighborhood' | 'city' | 'state';

const emptyFieldLoading: Record<AutoFieldKey, boolean> = {
  address: false,
  neighborhood: false,
  city: false,
  state: false,
};

const CEP_SUCCESS_DURATION_MS = 3500;

export function PurchaseDialog({ open, onOpenChange, bookTitle, bookPrice }: PurchaseDialogProps) {
  const [form, setForm] = useState(emptyForm);
  const [cepStatus, setCepStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [cepError, setCepError] = useState('');
  const [fieldLoading, setFieldLoading] = useState(emptyFieldLoading);
  const [cepSuccess, setCepSuccess] = useState(false);
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  function clearCepSuccess() {
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }
    setCepSuccess(false);
  }

  function handleChange(field: keyof typeof emptyForm) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, cep: formatCep(event.target.value) }));
    setCepStatus('idle');
    setCepError('');
    setFieldLoading(emptyFieldLoading);
    clearCepSuccess();
  }

  async function handleCepBlur(event: React.FocusEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '');
    if (digits.length !== 8) {
      return;
    }

    setCepStatus('loading');
    setCepError('');
    clearCepSuccess();
    setFieldLoading({ address: true, neighborhood: true, city: true, state: true });

    try {
      const foundAddress = await fetchAddressByCep(digits);
      setForm((prev) => ({
        ...prev,
        address: foundAddress.street || prev.address,
        neighborhood: foundAddress.neighborhood || prev.neighborhood,
        city: foundAddress.city,
        state: foundAddress.state,
      }));
      setCepStatus('idle');
      setCepSuccess(true);
      successTimeoutRef.current = setTimeout(() => setCepSuccess(false), CEP_SUCCESS_DURATION_MS);
    } catch (error) {
      setCepStatus('error');
      setCepError(error instanceof CepLookupError ? error.message : 'Não foi possível consultar o CEP.');
    } finally {
      setFieldLoading(emptyFieldLoading);
    }
  }

  function handleStateChange(value: string) {
    setForm((prev) => ({ ...prev, state: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    redirectToWhatsappPurchase(siteConfig.whatsappNumber, bookTitle, bookPrice, form);
    onOpenChange(false);
    setForm(emptyForm);
    setCepStatus('idle');
    setCepError('');
    setFieldLoading(emptyFieldLoading);
    clearCepSuccess();
  }

  function renderFieldLoadingIcon(key: AutoFieldKey) {
    if (!fieldLoading[key]) {
      return null;
    }
    return <Loader2 className="size-4 animate-spin text-muted-foreground" aria-hidden />;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onOpenAutoFocus={(event) => event.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Dados para entrega</DialogTitle>
          <DialogDescription>
            Após o preenchimento, os dados serão encaminhados diretamente ao responsável pelo pagamento e pelo frete.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" required value={form.name} onChange={handleChange('name')} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="cep">CEP</Label>
              <Input
                id="cep"
                required
                inputMode="numeric"
                placeholder="00000-000"
                maxLength={9}
                value={form.cep}
                onChange={handleCepChange}
                onBlur={handleCepBlur}
                aria-invalid={cepStatus === 'error'}
              />
              {cepStatus === 'loading' && (
                <p className="text-xs text-muted-foreground">Buscando endereço...</p>
              )}
              {cepStatus === 'error' && <p className="text-xs text-accent">{cepError}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="state">Estado</Label>
              <div className="relative">
                <Select required name="state" value={form.state} onValueChange={handleStateChange}>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    {brazilianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="pointer-events-none absolute right-9 top-1/2 -translate-y-1/2">
                  {renderFieldLoadingIcon('state')}
                </div>
              </div>
            </div>
          </div>

          {cepSuccess && (
            <div className="flex items-center gap-2 rounded-(--radius) border border-border bg-muted px-3 py-2 text-sm text-foreground animate-in fade-in slide-in-from-top-1">
              <CircleCheck className="size-4 shrink-0 text-emerald-600" aria-hidden />
              <span>Endereço encontrado com sucesso!</span>
            </div>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="address">Endereço</Label>
            <div className="relative">
              <Input
                id="address"
                required
                value={form.address}
                onChange={handleChange('address')}
                className="pr-9"
              />
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                {renderFieldLoadingIcon('address')}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="neighborhood">Bairro</Label>
              <div className="relative">
                <Input
                  id="neighborhood"
                  required
                  value={form.neighborhood}
                  onChange={handleChange('neighborhood')}
                  className="pr-9"
                />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  {renderFieldLoadingIcon('neighborhood')}
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="city">Cidade</Label>
              <div className="relative">
                <Input id="city" required value={form.city} onChange={handleChange('city')} className="pr-9" />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  {renderFieldLoadingIcon('city')}
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full">
              Prosseguir com a compra
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
