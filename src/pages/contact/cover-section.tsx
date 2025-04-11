import { Icon } from '@kaue-thums/web-ui-components';
import { ContactForm } from './form';
import { Header } from '@/components/layout/header/header';
import { Section } from '@/components/layout/section';
import { Facebook } from '@/components/svg/facebook';
import { Instagram } from '@/components/svg/instagram';
import { WhatsApp } from '@/components/svg/whatsapp';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const CoverSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 md:grid-cols-2 z-10 gap-20 py-20', className)} {...props} />;
};
const CoverSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-5', className)} {...props} />;
};

const CoverSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={className} {...props} />;
};

const CoverSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={className} {...props} />;
};

const CoverSectionIcon = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
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

const CoverSectionSocialContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex items-center gap-5', className)} {...props} />;
};

const CoverSectionSocialLink = ({ className, ...props }: React.ComponentProps<'a'>) => {
  return (
    <a
      className={cn(
        'hover:fill-primary hover:scale-110 fill-foreground text-md cursor-pointer trabsition-all duration-300',
        className,
      )}
      {...props}
    />
  );
};

const CoverSection = () => {
  return (
    <Section className="min-h-screen">
      <Header type="default" />
      <CoverSectionContainer>
        <CoverSectionContent className="">
          <CoverSectionIcon>
            <Icon name="Mail" />
          </CoverSectionIcon>
          <CoverSectionTitle>
            Está interessado em <br /> adquirir o <span className="text-primary">Fit Box</span>?
          </CoverSectionTitle>
          <CoverSectionDescription>
            Realize seu pedido com praticidade através do nosso site. Preencha o formulário disponível e aguarde nosso
            contato.
          </CoverSectionDescription>

          <CoverSectionSocialContainer>
            <CoverSectionSocialLink onClick={() => window.open('https://www.facebook.com/nvisolucoes')}>
              <Facebook className="size-6" href="#" />
            </CoverSectionSocialLink>
            <CoverSectionSocialLink onClick={() => window.open('https://www.instagram.com/nvisolucoes')}>
              <Instagram className="size-6" />
            </CoverSectionSocialLink>
            <CoverSectionSocialLink
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send/?phone=5549999114784&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Fit+Box&type=phone_number&app_absent=0',
                )
              }
            >
              <WhatsApp className="size-6" />
            </CoverSectionSocialLink>
          </CoverSectionSocialContainer>
        </CoverSectionContent>

        <CoverSectionContent className="px-4">
          <ContactForm />
        </CoverSectionContent>
      </CoverSectionContainer>
    </Section>
  );
};

export { CoverSection };
