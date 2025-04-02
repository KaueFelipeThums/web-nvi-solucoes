import { Button, Card } from '@kaue-thums/web-ui-components';
import { useNavigate } from 'react-router-dom';
import product from '@/assets/images/product1.png';
import { Header } from '@/components/layout/header/header';
import { Section } from '@/components/layout/section';
import { Facebook } from '@/components/svg/facebook';
import { Grid } from '@/components/svg/grid';
import { Instagram } from '@/components/svg/instagram';
import { WhatsApp } from '@/components/svg/whatsapp';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const CoverSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('w-full grid grid-cols-12 gap-4 flex-grow z-10 h-full', className)} {...props} />;
};

const CoverSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-8 z-10', className)} {...props} />;
};

const CoverSectionGridImage = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <Grid
      className={cn('absolute top-0 left-0 w-full overflow-hidden h-full object-cover z-[1]', className)}
      preserveAspectRatio="xMidYMid slice"
      {...props}
    />
  );
};

const CoverSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={cn('text-4xl md:text-6xl text-white', className)} {...props} />;
};

const CoverSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <p className={cn('text-white text-xl', className)} {...props} />;
};

const CoverSectionSocialContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex items-center gap-5', className)} {...props} />;
};

const CoverSectionSocialLink = ({ className, ...props }: React.ComponentProps<'a'>) => {
  return (
    <a
      className={cn(
        'hover:fill-white hover:scale-110 fill-gray-300 text-md cursor-pointer trabsition-all duration-300',
        className,
      )}
      {...props}
    />
  );
};

type CoverSectionImageNotificationProps = React.ComponentProps<typeof Card> & {
  orientation?: 'left' | 'right';
};

const CoverSectionImageNotification = ({
  children,
  className,
  orientation = 'left',
  ...props
}: CoverSectionImageNotificationProps) => {
  return (
    <Card
      className={cn(
        'px-4 relative z-[2] py-2 max-w-full w-max text-xs',
        orientation === 'left' ? 'text-left' : 'text-right',
        className,
      )}
      {...props}
    >
      {children}
      <div
        className={cn(
          'size-7 flex items-center justify-center bg-seccondary-alt/40 rounded-full -top-3 absolute',
          orientation === 'left' ? '-left-3' : '-right-3',
        )}
      >
        <div className="size-4 bg-seccondary-alt rounded-full" />
      </div>
    </Card>
  );
};

const CoverSectionImageNotificationContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-4 px-2 w-full', className)} {...props} />;
};

const CoverSectionImageContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('relative mb-[-20%] lg:mb-[-50%] flex items-end', className)} {...props} />;
};
const CoverSectionImageCircleBlur = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('absolute rounded-full bg-primary blur-3xl opacity-70 w-[35%] h-[50%]', className)} {...props} />
  );
};

const CoverSection = () => {
  const navigate = useNavigate();

  return (
    <Section className="bg-primary-alt relative min-h-[100dvh] mb-50">
      <Header type="white" />
      <CoverSectionContainer>
        <CoverSectionContent className="col-span-full lg:col-span-5 py-20">
          <CoverSectionTitle>
            <span className="text-seccondary-alt">Fit Box</span>, o suporte <br /> ideal para seu <br /> roteador!
          </CoverSectionTitle>
          <CoverSectionDescription>
            A solução definitiva para organizar e padronizar o âmbiente de suas instalações <br />
            de internet.
          </CoverSectionDescription>
          <div className="space-y-7">
            <div className="flex gap-3 flex-wrap">
              <Button size="lg" icon="Globe" onClick={() => navigate('/contact')}>
                Comprar Agora
              </Button>

              <Button
                size="lg"
                variant="link"
                className="text-white"
                icon="ShoppingCart"
                onClick={() => window.open('https://lista.mercadolivre.com.br/fit-box-fttx')}
              >
                Mercado Livre
              </Button>
            </div>
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
          </div>
        </CoverSectionContent>

        <CoverSectionContent className="col-span-full lg:col-span-7 items-end">
          <div className="relative w-full">
            <CoverSectionImageContainer>
              <CoverSectionImageNotificationContainer className="absolute top-[25%]">
                <CoverSectionImageNotification>
                  <span>
                    Aprmore suas instalações com <strong>organização</strong> e <br />
                    <strong>praticidade</strong>
                  </span>
                </CoverSectionImageNotification>
                <CoverSectionImageNotification className="ml-auto" orientation="right">
                  <span>
                    Aparelhagem <strong>bonita</strong> e <strong>profissional</strong>
                  </span>
                </CoverSectionImageNotification>
              </CoverSectionImageNotificationContainer>
              <img src={product} className="z-1 object-contain" />
            </CoverSectionImageContainer>

            <CoverSectionImageCircleBlur className="right-10 bottom-60" />
            <CoverSectionImageCircleBlur className="bottom-60 left-10" />
            <CoverSectionImageCircleBlur className="right-10 bottom-0 h-[70%]" />
            <CoverSectionImageCircleBlur className="left-10 bottom-0 h-[70%]" />
          </div>
        </CoverSectionContent>
      </CoverSectionContainer>
      <CoverSectionGridImage />
    </Section>
  );
};

export { CoverSection };
