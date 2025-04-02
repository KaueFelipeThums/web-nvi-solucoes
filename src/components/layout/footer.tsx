import { Icon } from '@kaue-thums/web-ui-components';
import { useNavigate } from 'react-router-dom';
import { Section } from './section';
import { Facebook } from '../svg/facebook';
import { Instagram } from '../svg/instagram';
import { WhatsApp } from '../svg/whatsapp';
import { PageDescription } from '../ui/description';
import { PageLabel } from '../ui/label';
import logo from '@/assets/images/logo.png';
import { cn } from '@/lib/utils';

const FooterContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 md:grid-cols-3 z-10 gap-10 py-7', className)} {...props} />;
};
const FooterContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-2', className)} {...props} />;
};

const FooterLabel = ({ className, ...props }: React.ComponentProps<typeof PageLabel>) => {
  return <PageLabel className={cn('!text-lg', className)} {...props} />;
};

const FooterDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={cn('!text-lg', className)} {...props} />;
};

const FooterLink = ({ className, ...props }: React.ComponentProps<'a'>) => {
  return (
    <a
      className={cn(
        'hover:text-primary hover:fill-primary text-lg transition-colors duration-300 cursor-pointer flex items-center gap-2',
        className,
      )}
      {...props}
    />
  );
};

const FooterBackgroundBlurStartContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('absolute flex w-full', className)} {...props} />;
};

const FooterBackgroundBlurStartCircle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('rounded-full blur-3xl opacity-30 aspect-square', className)} {...props} />;
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Section className="bg-indigo-300/30 relative overflow-hidden bottom-0">
      <FooterContainer>
        <FooterContent className="col-span-full">
          <img src={logo} className="w-full max-w-40" />
        </FooterContent>
      </FooterContainer>

      <FooterContainer>
        <FooterContent>
          <FooterLabel>NVI SOLUCOES EM INJECAO PLASTICA LTDA</FooterLabel>
          <FooterDescription>Rua Angela Griza, SN Lot. Nelso GrizaIrani, Irani - SC 89680-000</FooterDescription>
          <FooterDescription>+55 (49) 99911-4784</FooterDescription>
        </FooterContent>
        <FooterContent>
          <FooterLabel>Acesse</FooterLabel>
          <FooterDescription>
            <FooterLink onClick={() => navigate('/company')}>Sobre</FooterLink>
          </FooterDescription>
          <FooterDescription>
            <FooterLink onClick={() => navigate('/')}>Fit Box</FooterLink>
          </FooterDescription>
          <FooterDescription>
            <FooterLink onClick={() => navigate('/contact')}>Contato</FooterLink>
          </FooterDescription>
        </FooterContent>
        <FooterContent>
          <FooterLabel>Redes Sociais</FooterLabel>
          <FooterDescription>
            <FooterLink onClick={() => window.open('https://www.instagram.com/nvisolucoes')}>
              <Instagram className="size-6" />
              @nvisolucoes
            </FooterLink>
          </FooterDescription>
          <FooterDescription>
            <FooterLink onClick={() => window.open('https://www.facebook.com/nvisolucoes')}>
              <Facebook className="size-6" />
              NVI Solucoes Praticas
            </FooterLink>
          </FooterDescription>
          <FooterDescription>
            <FooterLink
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send/?phone=5549999114784&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Fit+Box&type=phone_number&app_absent=0',
                )
              }
            >
              <WhatsApp className="size-6" />
              (49) 99911-4784
            </FooterLink>
          </FooterDescription>
          <FooterDescription>
            <FooterLink>
              <Icon name="Mail" />
              comercial@nvisolucoes.com.br
            </FooterLink>
          </FooterDescription>
        </FooterContent>
      </FooterContainer>

      <FooterContainer>
        <FooterContent className="col-span-full flex items-center">
          <FooterDescription className="text-center">
            <FooterLink className="text-sm">© 2023 Copyright - Kaue Thums </FooterLink>
          </FooterDescription>
        </FooterContent>
      </FooterContainer>

      <FooterBackgroundBlurStartContainer>
        <FooterBackgroundBlurStartCircle className="bg-primary mt-[-30vh] w-[clamp(200px,40vw,500px)]" />
        <FooterBackgroundBlurStartCircle className="bg-seccondary-alt ml-[-5vw] mt-[-10vh] w-[clamp(200px,25vw,300px)]" />
      </FooterBackgroundBlurStartContainer>
    </Section>
  );
};

export { Footer };
