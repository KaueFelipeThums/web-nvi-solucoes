import ReactCompareImage from 'react-compare-image';
import after from '@/assets/images/after.png';
import before from '@/assets/images/before.png';
import { Section } from '@/components/layout/section';
import { Grid } from '@/components/svg/grid';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const BeforeAfterSectionGridImage = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <Grid
      className={cn('absolute top-0 left-0 w-full overflow-hidden h-full object-cover z-[1]', className)}
      preserveAspectRatio="xMidYMid slice"
      {...props}
    />
  );
};

const BeforeAfterSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 z-10 gap-20 py-20', className)} {...props} />;
};
const BeforeAfterSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-5 items-center', className)} {...props} />;
};

const BeforeAfterSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={cn('text-white text-center', className)} {...props} />;
};

const BeforeAfterSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={cn('text-white  text-center', className)} {...props} />;
};

const BeforeAfterSectionImage = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('p-2 md:p-4 rounded-4xl bg-background w-[800px] max-w-full', className)} {...props}>
      <div className="rounded-3xl overflow-hidden">{children}</div>
    </div>
  );
};

const BeforeAfterSection = () => {
  return (
    <Section className="bg-primary-alt relative min-h-[100dvh]">
      <BeforeAfterSectionContainer>
        <BeforeAfterSectionContent>
          <BeforeAfterSectionTitle>
            Comparação do <span className="text-seccondary-alt">antes</span> e{' '}
            <span className="text-seccondary-alt">depois</span>
          </BeforeAfterSectionTitle>
          <BeforeAfterSectionDescription>
            Com os suportes Fit Box, a diferença em relação à instalação comum de roteadores é notável.
          </BeforeAfterSectionDescription>
          <BeforeAfterSectionImage>
            <ReactCompareImage hover skeleton leftImage={before} rightImage={after} />
          </BeforeAfterSectionImage>
        </BeforeAfterSectionContent>
      </BeforeAfterSectionContainer>
      <BeforeAfterSectionGridImage />
    </Section>
  );
};

export { BeforeAfterSection };
