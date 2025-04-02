import { Icon } from '@kaue-thums/web-ui-components';
import patent from '@/assets/documents/patent.pdf';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { cn } from '@/lib/utils';

const PatentSectionButton = ({ className, ...props }: React.ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'w-full py-3 rounded-xl bg-indigo-300/30 flex items-center px-5 text-primary gap-3 hover:underline',
        className,
      )}
      {...props}
    />
  );
};

const PatentSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={cn('text-sm md:!text-base', className)} {...props} />;
};

const PatentSection = () => {
  return (
    <Section>
      <PatentSectionButton onClick={() => window.open(patent)}>
        <Icon name="BadgeCheck" />
        <PatentSectionDescription>
          Este produto é protegido por patente, garantindo exclusividade e inovação.
        </PatentSectionDescription>

        <Icon name="ChevronRight" className="ml-auto size-4" />
      </PatentSectionButton>
    </Section>
  );
};

export { PatentSection };
