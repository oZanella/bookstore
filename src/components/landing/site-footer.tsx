import { Instagram, Mail } from 'lucide-react';

import { SupportDialog } from '@/components/landing/support-dialog';
import { WhatsappIcon } from '@/components/ui/whatsapp-icon';
import { siteConfig } from '@/lib/site-config';
import { buildWhatsappInquiryUrl } from '@/lib/whatsapp';

const contactLinks = [
  {
    label: 'E-mail',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: 'Instagram',
    href: siteConfig.instagram,
    icon: Instagram,
  },
];

export function SiteFooter() {
  const whatsappUrl = buildWhatsappInquiryUrl(siteConfig.whatsappNumber, 'Olá! Tenho interesse em suas obras.');

  return (
    <footer className="border-t border-border px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-5">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="size-5" strokeWidth={1.5} />
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <WhatsappIcon className="size-5" />
          </a>
        </div>

        <SupportDialog />

        <p className="text-xs text-muted-foreground">
          © 2026 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
