import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Checkbox,
  Form,
  FormField,
  InputMask,
  InputText,
  Label,
  Select,
  Separator,
  TextArea,
} from '@kaue-thums/web-ui-components';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { customeNeetOptions, discoveryMethodOptions, statesOptions } from '@/contants/options';

type ConactFormProps = {
  step: 'form' | 'success';
  name: string;
  cpf_cnpj: string;
  state: string;
  city: string;
  email: string;
  phone: string;
  discovery_method: string;
  customer_need: string;
  description: string;
  subscribe_email: boolean;
};

const rules = {
  name: { required: 'O nome é obrigatório!' },
  cpf_cnpj: { required: 'O CPF/CNPJ é obrigatório!' },
  state: { required: 'O estado é obrigatório!' },
  city: { required: 'A cidade é obrigatória!' },
  email: { required: 'O email é obrigatório!' },
  phone: { required: 'O celular é obrigatório!' },
  discovery_method: { required: 'O campo é obrigatório!' },
  customer_need: { required: 'O campo é obrigatório!' },
  description: { required: 'A observação é obrigatória!' },
};

const ContactForm = () => {
  const [loading, startTransition] = useTransition();
  const form = useForm<ConactFormProps>({
    defaultValues: {
      step: 'form',
      name: '',
      cpf_cnpj: '',
      state: '',
      city: '',
      email: '',
      phone: '',
      discovery_method: '',
      customer_need: '',
      description: '',
      subscribe_email: false,
    },
  });

  return (
    <Card>
      <CardContent>
        <Form
          id="form-contact"
          form={form}
          handleSubmit={(e) => console.log(e)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          <FormField
            control={form.control}
            name="name"
            label="Nome"
            rules={rules.name}
            render={({ field }) => (
              <InputText
                value={field.value}
                onChange={field.onChange}
                disabled={loading}
                placeholder="Informe o nome..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="cpf_cnpj"
            label="CPF/CNPJ"
            // rules={rules.cpf_cnpj}
            render={({ field }) => (
              <InputMask
                mask={[
                  {
                    mask: '000.000.000-00',
                    maxLength: 11,
                  },
                  {
                    mask: '00.000.000/0000-00',
                    maxLength: 14,
                  },
                ]}
                value={field.value}
                onChange={field.onChange}
                disabled={loading}
                placeholder="Informe o CPF/CNPJ..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="state"
            label="Estado"
            rules={rules.state}
            render={({ field }) => (
              <Select
                className="w-full"
                options={statesOptions}
                value={field.value}
                onValueChange={field.onChange}
                disabled={loading}
                placeholder="Selecione o estado..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="city"
            label="Cidade"
            rules={rules.city}
            render={({ field }) => (
              <InputText
                value={field.value}
                onChange={field.onChange}
                disabled={loading}
                placeholder="Informe a cidade..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="email"
            label="E-mail"
            rules={rules.email}
            render={({ field }) => (
              <InputText
                value={field.value}
                onChange={field.onChange}
                disabled={loading}
                placeholder="Informe o e-mail..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            label="Celular"
            rules={rules.phone}
            render={({ field }) => (
              <InputMask
                mask="(00) 0000-0000"
                value={field.value}
                onAccept={field.onChange}
                disabled={loading}
                placeholder="Informe o celular..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="discovery_method"
            label="Como nos encontrou?"
            rules={rules.discovery_method}
            render={({ field }) => (
              <Select
                className="w-full"
                options={discoveryMethodOptions}
                value={field.value}
                onValueChange={field.onChange}
                disabled={loading}
                placeholder="Selecione uma opção..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="customer_need"
            label="O que deseja?"
            rules={rules.customer_need}
            render={({ field }) => (
              <Select
                className="w-full"
                options={customeNeetOptions}
                value={field.value}
                onValueChange={field.onChange}
                disabled={loading}
                placeholder="Selecione uma opção..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="description"
            className="col-span-full"
            label="Observações"
            rules={rules.description}
            render={({ field }) => (
              <TextArea
                value={field.value}
                onChange={field.onChange}
                disabled={loading}
                className="min-h-25 max-h-50"
                placeholder="Informe as observações..."
              />
            )}
          />

          <FormField
            control={form.control}
            name="subscribe_email"
            className="col-span-full"
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox id="subscribe_email" checked={field.value} onCheckedChange={field.onChange} />
                <Label htmlFor="subscribe_email">Desejo receber notícias em meu e-mail</Label>
              </div>
            )}
          />
        </Form>
      </CardContent>
      <Separator />
      <CardFooter>
        <Button size="lg" icon="Send" iconPlacement="right" className="w-max" form="form-contact">
          Enviar
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ContactForm };
