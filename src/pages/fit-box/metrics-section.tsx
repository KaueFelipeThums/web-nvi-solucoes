import { Icon, Separator } from '@kaue-thums/web-ui-components';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const MetricsSectionItem = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'flex  items-center md:justify-center justify-stretch w-full md:w-max md:flex-row flex-col md:gap-10 gap-5',
        className,
      )}
      {...props}
    />
  );
};

const MetricsSectionIcon = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('text-primary', className)} {...props} />;
};

const MetricsSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={cn('text-primary', className)} {...props} />;
};

const MetricsSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={cn('text-center', className)} {...props} />;
};

const MetricsSectionDescriptionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-2 text-center', className)} {...props} />;
};

const MetricsSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col lg:flex-row gap-5 items-center justify-between', className)} {...props} />;
};

const MetricsSection = () => {
  return (
    <Section className="my-20">
      <MetricsSectionContainer>
        <MetricsSectionItem>
          <MetricsSectionIcon>
            <Icon name="ShoppingCart" className="size-12" />
          </MetricsSectionIcon>

          <MetricsSectionDescriptionContainer>
            <MetricsSectionTitle>1.000.000 +</MetricsSectionTitle>
            <MetricsSectionDescription>
              Instalações <br /> Padronizadas
            </MetricsSectionDescription>
          </MetricsSectionDescriptionContainer>
        </MetricsSectionItem>

        <Separator orientation="vertical" className="hidden !h-20 lg:block bg-primary/20" />
        <Separator orientation="horizontal" className="block lg:hidden bg-primary/20" />

        <MetricsSectionItem>
          <MetricsSectionIcon>
            <Icon name="Star" className="size-12" />
          </MetricsSectionIcon>

          <MetricsSectionDescriptionContainer>
            <MetricsSectionTitle>5</MetricsSectionTitle>
            <MetricsSectionDescription>
              Estrelas em
              <br /> Satisfação
            </MetricsSectionDescription>
          </MetricsSectionDescriptionContainer>
        </MetricsSectionItem>
        <Separator orientation="vertical" className="hidden !h-20 lg:block bg-primary/20" />
        <Separator orientation="horizontal" className="block lg:hidden bg-primary/20" />

        <MetricsSectionItem>
          <MetricsSectionIcon>
            <Icon name="Handshake" className="size-12" />
          </MetricsSectionIcon>

          <MetricsSectionDescriptionContainer>
            <MetricsSectionTitle>300 +</MetricsSectionTitle>
            <MetricsSectionDescription>
              Provedores
            </MetricsSectionDescription>
          </MetricsSectionDescriptionContainer>
        </MetricsSectionItem>
      </MetricsSectionContainer>
    </Section>
  );
};

export { MetricsSection };
