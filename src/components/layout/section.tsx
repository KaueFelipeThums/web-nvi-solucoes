import React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = React.ComponentProps<'section'> & {
  children: React.ReactNode;
};

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section {...props} className={cn('w-full flex justify-center', className)}>
      <div className="max-w-full w-[1300px] px-4 min-h-full flex flex-col">{children}</div>
    </section>
  );
};

export { Section };
