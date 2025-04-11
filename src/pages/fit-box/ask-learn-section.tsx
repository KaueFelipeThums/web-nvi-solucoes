import {
  BaseAccordion,
  BaseAccordionContent,
  BaseAccordionItem,
  BaseAccordionTrigger,
  Icon,
} from '@kaue-thums/web-ui-components';
import fttx2 from '@/assets/images/fttx2.png';
import fttx3 from '@/assets/images/fttx3.png';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const AskLearnSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 md:grid-cols-2  z-10 gap-10 py-20', className)} {...props} />;
};
const AskLearnSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-5 justify-center', className)} {...props} />;
};

const AskLearnSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={className} {...props} />;
};

const AskLearnSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={className} {...props} />;
};

const AskLearnSectionYoutubeVideo = ({ className, ...props }: React.ComponentProps<'iframe'>) => {
  return (
    <iframe
      title="YouTube video player"
      allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className={cn('w-full aspect-video rounded-2xl', className)}
      {...props}
    />
  );
};

const AskLearnSectionIcon = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
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

const AskLearnSection = () => {
  return (
    <Section>
      <AskLearnSectionContainer>
        <AskLearnSectionContent className="col-span-full">
          <AskLearnSectionTitle>Duvidas e Informações</AskLearnSectionTitle>
          <AskLearnSectionDescription>
            Abaixo listamos algumas informações e duvidas frequentes
          </AskLearnSectionDescription>
        </AskLearnSectionContent>
        <AskLearnSectionContent className="col-span-full">
          <BaseAccordion collapsible type="single" className="w-full" defaultValue="item-3">
            <BaseAccordionItem value="item-3">
              <BaseAccordionTrigger className="[&>svg]:size-6">
                <PageDescription>Informações técnicas</PageDescription>
              </BaseAccordionTrigger>
              <BaseAccordionContent className="py-5" forceMount>
                <AskLearnSectionContainer className="py-5">
                  <AskLearnSectionContent className="items-center order-2 md:order-1">
                    <img src={fttx2} className="max-w-[400px] w-full" />
                  </AskLearnSectionContent>
                  <AskLearnSectionContent className="order-1 md:order-2">
                    <AskLearnSectionIcon>
                      <Icon name="Lightbulb" />
                    </AskLearnSectionIcon>
                    <AskLearnSectionDescription>
                      Nosso suporte garante praticidade e eficiência, mantendo os{' '}
                      <strong>LEDs do roteador e da ONU sempre visíveis</strong>. Isso facilita o monitoramento da rede,
                      permitindo identificar rapidamente conexões ativas, falhas ou necessidade de manutenção sem mover
                      os dispositivos.
                    </AskLearnSectionDescription>
                  </AskLearnSectionContent>
                </AskLearnSectionContainer>

                <AskLearnSectionContainer className="py-5">
                  <AskLearnSectionContent>
                    <AskLearnSectionIcon>
                      <Icon name="ShieldCheck" />
                    </AskLearnSectionIcon>
                    <AskLearnSectionDescription>
                      Foi <strong>projetado para manter os conectores e a ONU protegidos</strong>, evitando danos e
                      garantindo maior durabilidade dos equipamentos. Sua estrutura proporciona uma organização mais
                      segura e eficiente para a rede.
                    </AskLearnSectionDescription>
                  </AskLearnSectionContent>

                  <AskLearnSectionContent className="items-center">
                    <img src={fttx3} className="max-w-[400px] w-full" />
                  </AskLearnSectionContent>
                </AskLearnSectionContainer>
              </BaseAccordionContent>
            </BaseAccordionItem>

            <BaseAccordionItem value="item-1">
              <BaseAccordionTrigger className="[&>svg]:size-6">
                <PageDescription>Como funciona o fit box fttx?</PageDescription>
              </BaseAccordionTrigger>
              <BaseAccordionContent forceMount>
                <AskLearnSectionContainer className="py-10">
                  <AskLearnSectionContent className="order-2 md:order-1">
                    <AskLearnSectionYoutubeVideo src="https://www.youtube.com/embed/XtZC1xIR1zc?si=BBDB9QtYxBQZCftr" />
                  </AskLearnSectionContent>
                  <AskLearnSectionContent className="order-1 md:order-2">
                    <AskLearnSectionIcon>
                      <Icon name="Video" />
                    </AskLearnSectionIcon>
                    <AskLearnSectionDescription>
                      Assista ao vídeo explicativo sobre o Suporte Organizador FIT BOX, uma{' '}
                      <strong>solução inovadora</strong> que otimiza a organização de instalações de fibra óptica. Com
                      um design funcional e eficiente, essa tecnologia redefine os padrões de organização e praticidade
                      no setor.
                    </AskLearnSectionDescription>
                  </AskLearnSectionContent>
                </AskLearnSectionContainer>
              </BaseAccordionContent>
            </BaseAccordionItem>

            <BaseAccordionItem value="item-2">
              <BaseAccordionTrigger className="[&>svg]:size-6">
                <PageDescription>Como realizar a instalação?</PageDescription>
              </BaseAccordionTrigger>
              <BaseAccordionContent forceMount>
                <AskLearnSectionContainer className="py-10">
                  <AskLearnSectionContent>
                    <AskLearnSectionIcon>
                      <Icon name="Video" />
                    </AskLearnSectionIcon>
                    <AskLearnSectionDescription>
                      Este guia apresenta as <strong>melhores práticas</strong> para organização e segurança dos
                      equipamentos utilizados na instalação de internet, com foco na implementação do{' '}
                      <strong>FIT BOX</strong>. Seguindo este passo a passo, você garantirá um ambiente eficiente,
                      protegido e funcional para os componentes essenciais.
                    </AskLearnSectionDescription>
                  </AskLearnSectionContent>
                  <AskLearnSectionContent>
                    <AskLearnSectionYoutubeVideo src="https://www.youtube.com/embed/TdwJ7cjRT4c?si=UfHjldKMFwfX1966" />
                  </AskLearnSectionContent>
                </AskLearnSectionContainer>
              </BaseAccordionContent>
            </BaseAccordionItem>
          </BaseAccordion>
        </AskLearnSectionContent>
      </AskLearnSectionContainer>
    </Section>
  );
};

export { AskLearnSection };
