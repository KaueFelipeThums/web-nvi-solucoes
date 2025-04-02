import company1 from '@/assets/images/company1.png';
import { Header } from '@/components/layout/header/header';
import { Section } from '@/components/layout/section';
import { Facebook } from '@/components/svg/facebook';
import { Instagram } from '@/components/svg/instagram';
import { WhatsApp } from '@/components/svg/whatsapp';
import { PageDescription } from '@/components/ui/description';
import { PageLabel } from '@/components/ui/label';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const CoverSectionBackgroundBlurStartContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('absolute flex w-full', className)} {...props} />;
};

const CoverSectionBackgroundBlurStartCircle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('rounded-full blur-3xl opacity-40 aspect-square', className)} {...props} />;
};

const CoverSectionBackgroundBlurEndContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('absolute flex items-end h-full', className)} {...props} />;
};

const CoverSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 lg:grid-cols-2 z-10 gap-20 py-20', className)} {...props} />;
};

const CoverSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-5', className)} {...props} />;
};
const CoverSectionLabel = ({ className, ...props }: React.ComponentProps<typeof PageLabel>) => {
  return <PageLabel className={cn(className)} {...props} />;
};

const CoverSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={cn('text-5xl md:text-6xl', className)} {...props} />;
};

const CoverSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={className} {...props} />;
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
    <Section className="bg-indigo-300/30 relative min-h-screen overflow-hidden">
      <Header type="default" />
      <CoverSectionContainer>
        <CoverSectionContent>
          <CoverSectionLabel>Empresa</CoverSectionLabel>
          <CoverSectionTitle>
            <span className="text-primary">NVI Soluções</span> Transformando Telecomunicações
          </CoverSectionTitle>
          <CoverSectionDescription>
            Oferecemos soluções inovadoras para aumentar a produtividade e a qualidade dos serviços no setor de
            Telecomunicações.
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
        <CoverSectionContent>
          <img src={company1} className="w-full object-contain" />
        </CoverSectionContent>
      </CoverSectionContainer>

      <CoverSectionBackgroundBlurStartContainer>
        <CoverSectionBackgroundBlurStartCircle className="bg-seccondary-alt mt-[-20vh] w-[clamp(300px,40vw,500px)]" />
        <CoverSectionBackgroundBlurStartCircle className="bg-primary ml-[-5vw] mt-[-20vh] w-[clamp(200px,25vw,300px)]" />
      </CoverSectionBackgroundBlurStartContainer>

      <CoverSectionBackgroundBlurEndContainer>
        <CoverSectionBackgroundBlurStartCircle className="bg-seccondary-alt mb-[-20vh] md:mb-[-40vh] w-[clamp(400px,60vw,700px)]" />
        <CoverSectionBackgroundBlurStartCircle className="bg-primary ml-[-10vw] mb-[-20vh] md:mb-[-30vh] w-[clamp(500px,70vw,800px)]" />
      </CoverSectionBackgroundBlurEndContainer>
    </Section>
  );
};

export { CoverSection };
