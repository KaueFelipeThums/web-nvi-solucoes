import { Icon } from '@kaue-thums/web-ui-components';
import { useNavigate } from 'react-router-dom';
import nviLogo from '@/assets/images/icon.png';
import mercadoLivreLogo from '@/assets/images/mercado-livre-logo.png';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { PageLabel } from '@/components/ui/label';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const BuyOptionsSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 md:grid-cols-2  z-10 gap-10', className)} {...props} />;
};
const BuyOptionsSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-5', className)} {...props} />;
};

const BuyOptionsSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={cn(className)} {...props} />;
};

const BuyOptionsSectionIcon = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('size-16 rounded-full flex items-center justify-center bg-primary/50', className)} {...props}>
      <div
        className={cn('size-12 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold')}
      >
        {children}
      </div>
    </div>
  );
};

const BuyOptionsSectionBackgroundBlurStartContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('absolute flex w-full', className)} {...props} />;
};

const BuyOptionsSectionBackgroundBlurStartCircle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('rounded-full blur-3xl opacity-30 aspect-square', className)} {...props} />;
};

const BuyOptionsSectionButton = ({ className, ...props }: React.ComponentProps<'button'>) => {
  return <button className={cn('flex gap-5 items-center text-start hover:underline', className)} {...props} />;
};

const BuyOptionsSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={cn(className)} {...props} />;
};

const BuyOptionsSectionLabel = ({ className, children, ...props }: React.ComponentProps<typeof PageLabel>) => {
  return (
    <PageLabel className={cn(className)} {...props}>
      {children}
    </PageLabel>
  );
};

const BuyOptionsSection = () => {
  const navigate = useNavigate();

  return (
    <Section className="bg-indigo-300/30 py-20 relative overflow-hidden">
      <BuyOptionsSectionContainer>
        <BuyOptionsSectionContent className="col-span-full">
          <BuyOptionsSectionIcon>
            <Icon name="ShoppingBasket" />
          </BuyOptionsSectionIcon>
          <BuyOptionsSectionTitle>Como comprar?</BuyOptionsSectionTitle>
          <BuyOptionsSectionDescription>
            Adquirir nossos produtos é simples e rápido! Basta seguir as opções abaixo e garantir sua compra de forma
            prática e segura.
          </BuyOptionsSectionDescription>
        </BuyOptionsSectionContent>
        <BuyOptionsSectionContent>
          <BuyOptionsSectionButton onClick={() => navigate('/contact')}>
            <img src={nviLogo} className="w-14 md:w-20" />
            <div className="space-y-3">
              <BuyOptionsSectionLabel>Compre pelo site</BuyOptionsSectionLabel>
              <BuyOptionsSectionDescription>
                Recomendado para negociações e pedidos em maior quantidade.
              </BuyOptionsSectionDescription>
            </div>
          </BuyOptionsSectionButton>
        </BuyOptionsSectionContent>

        <BuyOptionsSectionContent>
          <BuyOptionsSectionButton onClick={() => window.open('https://lista.mercadolivre.com.br/fit-box-fttx')}>
            <img src={mercadoLivreLogo} className="w-14 md:w-20" />
            <div className="space-y-3">
              <BuyOptionsSectionLabel>Compre pelo Mercado Livre</BuyOptionsSectionLabel>
              <BuyOptionsSectionDescription>
                Recomendado para pequenas compras, usuários ou empresas que querem conhecer e testar o produto.
              </BuyOptionsSectionDescription>
            </div>
          </BuyOptionsSectionButton>
        </BuyOptionsSectionContent>
      </BuyOptionsSectionContainer>

      <BuyOptionsSectionBackgroundBlurStartContainer>
        <BuyOptionsSectionBackgroundBlurStartCircle className="bg-primary mt-[-30vh] w-[clamp(200px,40vw,500px)]" />
        <BuyOptionsSectionBackgroundBlurStartCircle className="bg-seccondary-alt ml-[-5vw] mt-[-10vh] w-[clamp(200px,25vw,300px)]" />
      </BuyOptionsSectionBackgroundBlurStartContainer>
    </Section>
  );
};

export { BuyOptionsSection };
