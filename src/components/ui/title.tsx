import { cn } from '@/lib/utils';

const PageTitle = ({ className, ...props }: React.ComponentProps<'h1'>) => {
  return <h1 className={cn('text-2xl md:text-4xl font-extrabold leading-tight', className)} {...props} />;
};

export { PageTitle };
