import { Button, Card, CardContent, Icon } from '@kaue-thums/web-ui-components';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { PageLabel } from '@/components/ui/label';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const AboutSectionBackgroundBlurStartContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('absolute flex w-full', className)} {...props} />;
};

const AboutSectionBackgroundBlurStartCircle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('rounded-full blur-3xl opacity-40 aspect-square', className)} {...props} />;
};

const AboutSectionBackgroundBlurEndContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('absolute flex items-end h-full', className)} {...props} />;
};

const AboutSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 lg:grid-cols-2 z-10 gap-20 py-20', className)} {...props} />;
};

const AboutSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-5', className)} {...props} />;
};
const AboutSectionLabel = ({ className, ...props }: React.ComponentProps<typeof PageLabel>) => {
  return <PageLabel className={cn('text-primary', className)} {...props} />;
};

const AboutSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={className} {...props} />;
};

const AboutSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={className} {...props} />;
};

const AboutSectionCard = ({ className, children, ...props }: React.ComponentProps<typeof Card>) => {
  return (
    <Card className={cn('shadow-2xl shadow-primary/60 min-h-70 relative', className)} {...props}>
      <CardContent className="space-y-5">{children}</CardContent>
    </Card>
  );
};

const AboutSectionIcon = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('size-14 rounded-full flex items-center justify-center', className)} {...props} />;
};

const AboutSectionCardDescriptionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('space-y-2', className)} {...props} />;
};

const AboutSectionCardTitle = ({ className, ...props }: React.ComponentProps<typeof PageLabel>) => {
  return <PageLabel className={className} {...props} />;
};

const AboutSectionCardDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={cn('!text-lg', className)} {...props} />;
};

const AboutSectionCardBorderTop = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('m-0 absolute w-14 h-14 border-t-4 border-l-4 rounded-tl-xl -top-0.5 -left-0.5', className)}
      {...props}
    />
  );
};

const AboutSectionCardBorderBottom = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('m-0 absolute w-14 h-14 border-b-4 border-r-4 rounded-br-xl -bottom-0.5 -right-0.5', className)}
      {...props}
    />
  );
};

const AboutSection = () => {
  return (
    <Section className="bg-indigo-300/30 relative min-h-screen overflow-hidden">
      <AboutSectionContainer>
        <AboutSectionContent>
          <AboutSectionLabel>Sobre</AboutSectionLabel>
          <AboutSectionTitle>FIT BOX, a resposta perfeita para padronização, proteção e eficiência.</AboutSectionTitle>
          <AboutSectionDescription>
            Apresentamos o FIT BOX, uma solução inovadora para instalações de internet. Projetado para proteger
            conectores de fibra e otimizar a organização, ele melhora a eficiência, reduz custos e simplifica o processo
            para provedores e usuários. A revolução na conectividade começa aqui!
          </AboutSectionDescription>

          <Button
            size="lg"
            className="w-max"
            onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Modelos
          </Button>
        </AboutSectionContent>
        <AboutSectionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
            <AboutSectionCard>
              <AboutSectionCardBorderTop className="border-[#51B05E]" />
              <AboutSectionCardBorderBottom className="border-[#51B05E]" />

              <AboutSectionIcon className="bg-[#51B05E]/20">
                <Icon name="Puzzle" className="text-[#51B05E] size-8" />
              </AboutSectionIcon>

              <AboutSectionCardDescriptionContent>
                <AboutSectionCardTitle>Instalação Simples e Rápida</AboutSectionCardTitle>
                <AboutSectionCardDescription>
                  Reduza em até 50% o tempo de instalação dos equipamentos.
                </AboutSectionCardDescription>
              </AboutSectionCardDescriptionContent>
            </AboutSectionCard>

            <AboutSectionCard>
              <AboutSectionCardBorderTop className="border-[#ED8A44]" />
              <AboutSectionCardBorderBottom className="border-[#ED8A44]" />

              <AboutSectionIcon className="bg-[#ED8A44]/20">
                <Icon name="Hammer" className="text-[#ED8A44] size-8" />
              </AboutSectionIcon>

              <AboutSectionCardDescriptionContent>
                <AboutSectionCardTitle>Suporte e Manutenção</AboutSectionCardTitle>
                <AboutSectionCardDescription>
                  Essa aparelhagem torna a gestão do roteador uma tarefa simples e eficiente.
                </AboutSectionCardDescription>
              </AboutSectionCardDescriptionContent>
            </AboutSectionCard>

            <AboutSectionCard>
              <AboutSectionCardBorderTop className="border-[#389EF2]" />
              <AboutSectionCardBorderBottom className="border-[#389EF2]" />

              <AboutSectionIcon className="bg-[#389EF2]/20">
                <Icon name="WandSparkles" className="text-[#389EF2] size-8" />
              </AboutSectionIcon>
              <AboutSectionCardDescriptionContent>
                <AboutSectionCardTitle>Organização</AboutSectionCardTitle>
                <AboutSectionCardDescription>
                  Instalação notavelmente elegante e profissional, unindo funcionalidade e estética.
                </AboutSectionCardDescription>
              </AboutSectionCardDescriptionContent>
            </AboutSectionCard>
          </div>
        </AboutSectionContent>
      </AboutSectionContainer>

      <AboutSectionBackgroundBlurStartContainer>
        <AboutSectionBackgroundBlurStartCircle className="bg-seccondary-alt mt-[-20vh] w-[clamp(300px,40vw,500px)]" />
        <AboutSectionBackgroundBlurStartCircle className="bg-primary ml-[-5vw] mt-[-20vh] w-[clamp(200px,25vw,300px)]" />
      </AboutSectionBackgroundBlurStartContainer>

      <AboutSectionBackgroundBlurEndContainer>
        <AboutSectionBackgroundBlurStartCircle className="bg-seccondary-alt mb-[-20vh] md:mb-[-40vh] w-[clamp(400px,60vw,700px)]" />
        <AboutSectionBackgroundBlurStartCircle className="bg-primary ml-[-10vw] mb-[-20vh] md:mb-[-30vh] w-[clamp(500px,70vw,800px)]" />
      </AboutSectionBackgroundBlurEndContainer>
    </Section>
  );
};

export { AboutSection };
