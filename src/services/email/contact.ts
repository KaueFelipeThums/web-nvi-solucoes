import emailjs from '@emailjs/browser';

const TEMPLATE = 'template_szaoup9';
const SERVICE = 'service_eapxdme';
const PUBLIC_KEY = 'KAuGyvuhBXHnKAaTF';

// comercial@nvisolucoes.com.br

type sendContactPorps = {
  nome: string;
  cpf_cnpj: string;
  cidade: string;
  estado: string;
  email: string;
  celular: string;
  como_encontrou: string;
  necessidade: string;
  observacoes: string;
  receber_noticias: string;
};

const sendContactRequest = async (data: sendContactPorps): Promise<boolean> => {
  return await emailjs.send(SERVICE, TEMPLATE, data, { publicKey: PUBLIC_KEY }).then(
    () => {
      return true;
    },
    () => {
      return false;
    },
  );
};

export { sendContactRequest };
