'use client';

import { useState } from 'react';

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

export function PurchaseDialog({ open, onOpenChange, bookTitle, bookPrice }: PurchaseDialogProps) {
  const [form, setForm] = useState(emptyForm);

  function handleChange(field: keyof typeof emptyForm) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, cep: formatCep(event.target.value) }));
  }

  function handleStateChange(value: string) {
    setForm((prev) => ({ ...prev, state: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    redirectToWhatsappPurchase(siteConfig.whatsappNumber, bookTitle, bookPrice, form);
    onOpenChange(false);
    setForm(emptyForm);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
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
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="state">Estado</Label>
              <Select required name="state" value={form.state} onValueChange={handleStateChange}>
                <SelectTrigger id="state">
                  <SelectValue placeholder="UF" />
                </SelectTrigger>
                <SelectContent>
                  {brazilianStates.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.value} · {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="address">Endereço</Label>
            <Input id="address" required value={form.address} onChange={handleChange('address')} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="neighborhood">Bairro</Label>
              <Input id="neighborhood" required value={form.neighborhood} onChange={handleChange('neighborhood')} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="city">Cidade</Label>
              <Input id="city" required value={form.city} onChange={handleChange('city')} />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full">
              Continuar no WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
