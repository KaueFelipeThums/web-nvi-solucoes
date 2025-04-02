import { cn } from '@/lib/utils';

const PageDescription = ({ className, ...props }: React.ComponentProps<'p'>) => {
  return <p className={cn('text-lg md:text-xl', className)} {...props} />;
};

export { PageDescription };
