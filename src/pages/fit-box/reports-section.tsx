import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Icon,
} from '@kaue-thums/web-ui-components';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const reports = [
  {
    title: 'Dilce',
    subtitle: 'Irani - SC',
    description:
      'Muitas vezes fiquei sem internet porque batia num cabo ou no aparelho quando ia fazer limpeza. Agora esse problema acabou... Indico para todos!',
  },
  {
    title: 'Cleodecir',
    subtitle: 'Catanduvas - SC',
    description:
      'Aqui em casa era uma bagunça a instalação, agora com o FIT BOX FTTx ficou perfeito, tudo organizado... TOP!',
  },
  {
    title: 'Ronoaldo',
    subtitle: 'Ipumirim - SC',
    description: 'Além de ficar muito mais organizado, também passei a ter muito menos problemas com a internet!',
  },
  {
    title: 'Sérgio',
    subtitle: 'Concórdia - SC',
    description:
      'Eu sempre cobrava do meu provedor que organiza-se melhor os aparelhos e cabos, mas por mais que o técnico tenta-se, não ficava bom. Esse produto resolveu meu problema! ',
  },
  {
    title: 'Usuário',
    subtitle: 'Mercado Livre',
    description:
      'Muito bom!! Produto de qualidade. Muito bom, deu outra cara com a organização, coube certinho o roteador tp-link ac1200 e o modem.',
  },
  {
    title: 'Usuário',
    subtitle: 'Mercado Livre',
    description:
      'Produto nota mil em organização e proteção de rede. Produto top, uso e recomendo, acabaram com minhas manutenções, organiza muito bem os equipamentos.',
  },
];

const ReportsSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 md:grid-cols-2  z-10 gap-10 py-20', className)} {...props} />;
};
const ReportsSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-5', className)} {...props} />;
};

const ReportsSectionCard = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  return (
    <div className="p-1">
      <Card className={cn('text-primary select-none', className)} {...props} />
    </div>
  );
};

const ReportsSectionCardHeader = ({ className, ...props }: React.ComponentProps<typeof CardHeader>) => {
  return <CardHeader className={cn('flex flex-row justify-between items-center text-right', className)} {...props} />;
};

const ReportsSectionCardTitle = ({ className, ...props }: React.ComponentProps<typeof CardTitle>) => {
  return <CardTitle className={cn('text-lg', className)} {...props} />;
};

const ReportsSectionCardDescription = ({ className, ...props }: React.ComponentProps<typeof CardDescription>) => {
  return <CardDescription className={cn('text-lg', className)} {...props} />;
};

const ReportsSectionCardFooter = ({ className, ...props }: React.ComponentProps<typeof CardFooter>) => {
  return <CardFooter className={cn('gap-1', className)} {...props} />;
};

const ReportsSectionCardContent = ({ className, ...props }: React.ComponentProps<typeof CardContent>) => {
  return <CardContent className={className} {...props} />;
};

const ReportsSectionStarIcon = ({ className, ...props }: Omit<React.ComponentProps<typeof Icon>, 'name'>) => {
  return <Icon {...props} name="Star" className={cn('size-6 text-amber-400 fill-amber-400', className)} />;
};

const ReportsSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={className} {...props} />;
};

const ReportsSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={className} {...props} />;
};

const ReportsSection = () => {
  return (
    <Section className="py-20">
      <ReportsSectionContainer>
        <ReportsSectionContent className="col-span-full">
          <ReportsSectionTitle>Relatos e Avaliações</ReportsSectionTitle>
          <ReportsSectionDescription>Veja o que nossos clientes dizem sobre o FIT BOX</ReportsSectionDescription>
        </ReportsSectionContent>
        <ReportsSectionContent className="col-span-full px-10">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {reports.map((report, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ReportsSectionCard className={cn(index === 0 ? 'bg-primary text-white ' : 'text-foreground ')}>
                    <ReportsSectionCardHeader>
                      <Icon name="Quote" className="size-12" />
                      <div>
                        <ReportsSectionCardTitle>{report.title}</ReportsSectionCardTitle>
                        <ReportsSectionCardDescription className={index === 0 ? 'text-white' : 'text-foreground'}>
                          {report.subtitle}
                        </ReportsSectionCardDescription>
                      </div>
                    </ReportsSectionCardHeader>
                    <ReportsSectionCardContent className="text-lg">{report.description}</ReportsSectionCardContent>
                    <ReportsSectionCardFooter>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <ReportsSectionStarIcon key={index} />
                      ))}
                    </ReportsSectionCardFooter>
                  </ReportsSectionCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ReportsSectionContent>
      </ReportsSectionContainer>
    </Section>
  );
};

export { ReportsSection };
