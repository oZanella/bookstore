const WHATSAPP_BASE_URL = 'https://wa.me';

export function buildWhatsappInquiryUrl(phoneNumber: string, message: string): string {
  return `${WHATSAPP_BASE_URL}/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export interface PurchaseDeliveryDetails {
  name: string;
  cep: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
}

export function buildWhatsappPurchaseUrl(
  phoneNumber: string,
  bookTitle: string,
  bookPrice: string,
  delivery: PurchaseDeliveryDetails
): string {
  const message = [
    `Olá! Quero comprar o livro "${bookTitle}" (${bookPrice}).`,
    '',
    '*Meus dados para entrega:*',
    `*Nome:* ${delivery.name}`,
    `*CEP:* ${delivery.cep}`,
    `*Endereço:* ${delivery.address}`,
    `*Bairro:* ${delivery.neighborhood}`,
    `*Cidade/Estado:* ${delivery.city} - ${delivery.state}`,
    '',
    'Aguardo o valor do frete e as instruções de pagamento.',
  ].join('\n');

  return `${WHATSAPP_BASE_URL}/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function redirectToWhatsappPurchase(
  phoneNumber: string,
  bookTitle: string,
  bookPrice: string,
  delivery: PurchaseDeliveryDetails
): void {
  const url = buildWhatsappPurchaseUrl(phoneNumber, bookTitle, bookPrice, delivery);
  window.open(url, '_blank', 'noopener,noreferrer');
}
