import { Icon } from '@kaue-thums/web-ui-components';
import company2 from '@/assets/images/company2.png';
import company3 from '@/assets/images/company3.png';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const AboutSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 md:grid-cols-2 z-10 gap-20 py-20', className)} {...props} />;
};
const AboutSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-5', className)} {...props} />;
};

const AboutSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={className} {...props} />;
};

const AboutSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={className} {...props} />;
};

const AboutSectionIcon = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
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

const AboutSection = () => {
  return (
    <Section className="min-h-screen">
      <AboutSectionContainer>
        <AboutSectionContent className="px-4 order-2 md:order-1">
          <img src={company2} />
        </AboutSectionContent>
        <AboutSectionContent className="order-1 md:order-2">
          <AboutSectionIcon>
            <Icon name="BriefcaseBusiness" />
          </AboutSectionIcon>
          <AboutSectionTitle>
            Com mais de <span className="text-primary">20 anos</span> de experiência, a NVI Soluções é reconhecida por
            sua qualidade e profissionalismo.
          </AboutSectionTitle>
          <AboutSectionDescription>
            Explorando novas oportunidades, introduzimos o FIT BOX, um <strong>suporte srganizador</strong> que
            revoluciona a instalação de internet. Este produto exclusivo simplifica o processo para provedores e
            usuários em todo o Brasil, redefinindo a eficiência e oferecendo conveniência.
          </AboutSectionDescription>

          <AboutSectionDescription>
            Nossa tradição combinada com inovação nos mantém na vanguarda, comprometidos com excelência e valores
            sólidos. Conte conosco para suas necessidades em informática, telecomunicações e projetos inovadores.
          </AboutSectionDescription>
        </AboutSectionContent>
      </AboutSectionContainer>

      <AboutSectionContainer>
        <AboutSectionContent>
          <AboutSectionIcon>
            <Icon name="Crown" />
          </AboutSectionIcon>
          <AboutSectionTitle>Leandro César Savoldi</AboutSectionTitle>
          <AboutSectionDescription>
            Diretor, Fundador da NVI Soluções e idealizador do revolucionário FIT BOX.
          </AboutSectionDescription>
        </AboutSectionContent>
        <AboutSectionContent className="px-4">
          <img src={company3} />
        </AboutSectionContent>
      </AboutSectionContainer>
    </Section>
  );
};

export { AboutSection };
