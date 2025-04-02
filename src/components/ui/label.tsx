import { cn } from '@/lib/utils';

const PageLabel = ({ className, ...props }: React.ComponentProps<'p'>) => {
  return <p className={cn('text-xl font-bold', className)} {...props} />;
};

export { PageLabel };
