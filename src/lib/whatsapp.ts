const WHATSAPP_BASE_URL = 'https://wa.me';

export function buildWhatsappPurchaseUrl(phoneNumber: string, bookTitle: string): string {
  const message = `Olá! Tenho interesse em comprar o livro "${bookTitle}". Poderia me passar mais detalhes?`;
  return `${WHATSAPP_BASE_URL}/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function redirectToWhatsappPurchase(phoneNumber: string, bookTitle: string): void {
  const url = buildWhatsappPurchaseUrl(phoneNumber, bookTitle);
  window.open(url, '_blank', 'noopener,noreferrer');
}
