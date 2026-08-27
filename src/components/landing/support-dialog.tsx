'use client';

import { HeartHandshake } from 'lucide-react';
import Image from 'next/image';

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

        {siteConfig.pixQrCodeUrl ? (
          <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-(--radius) bg-muted">
            <Image src={siteConfig.pixQrCodeUrl} alt="QR Code de doação via Pix" fill sizes="192px" className="object-contain" />
          </div>
        ) : (
          <ImagePlaceholder label="QR Code de doação" className="mx-auto aspect-square w-48 rounded-(--radius)" />
        )}
      </DialogContent>
    </Dialog>
  );
}
