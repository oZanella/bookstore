'use client';

import { HeartHandshake } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { siteConfig } from '@/lib/site-config';

export function SupportDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <HeartHandshake />
          Apoiar a autora
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apoie meu trabalho</DialogTitle>
          <DialogDescription>Escaneie o QR Code abaixo para fazer uma doação via Pix.</DialogDescription>
        </DialogHeader>

        <ImagePlaceholder label="QR Code de doação" className="mx-auto aspect-square w-48 rounded-(--radius)" />

        <p className="text-center text-xs text-muted-foreground">
          Chave Pix: <span className="font-medium text-foreground">{siteConfig.pixKey}</span>
        </p>
      </DialogContent>
    </Dialog>
  );
}
