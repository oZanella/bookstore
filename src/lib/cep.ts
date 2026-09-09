export interface CepAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export class CepLookupError extends Error {}

export async function fetchAddressByCep(cep: string): Promise<CepAddress> {
  const digits = cep.replace(/\D/g, '');

  if (digits.length !== 8) {
    throw new CepLookupError('CEP inválido.');
  }

  let response: Response;
  try {
    response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
  } catch {
    throw new CepLookupError('Não foi possível consultar o CEP. Verifique sua conexão.');
  }

  if (!response.ok) {
    throw new CepLookupError('Não foi possível consultar o CEP.');
  }

  const data = await response.json();

  if (data.erro) {
    throw new CepLookupError('CEP não encontrado.');
  }

  return {
    street: data.logradouro ?? '',
    neighborhood: data.bairro ?? '',
    city: data.localidade ?? '',
    state: data.uf ?? '',
  };
}
