import { Button, Sheet } from '@kaue-thums/web-ui-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

type HeaderNavigationProps = React.ComponentProps<'a'>;

const HeaderSheetNavigationLink = ({ className, ...props }: HeaderNavigationProps) => {
  return (
    <li className="hover:scale-105 duration-300 transition-all">
      <a
        className={cn(
          'hover:text-primary hover:scale-110 text-muted-foreground transition-all duration-300 cursor-pointer',
          className,
        )}
        {...props}
      />
    </li>
  );
};

const HeaderSheetNavigation = ({ className, ...props }: React.ComponentProps<typeof Sheet>) => {
  const navigate = useNavigate();

  return (
    <Sheet
      {...props}
      className={cn('w-[250px]', className)}
      trigger={<Button size="icon" variant="link" className="text-white md:hidden" icon="Menu" />}
    >
      <nav>
        <ul className="flex flex-col gap-5 text-xl font-bold text-gray-300">
          <HeaderSheetNavigationLink onClick={() => navigate('/company')}>Sobre</HeaderSheetNavigationLink>
          <HeaderSheetNavigationLink onClick={() => navigate('/')}>Fit Box</HeaderSheetNavigationLink>
          <HeaderSheetNavigationLink onClick={() => navigate('/contact')}>Contato</HeaderSheetNavigationLink>
        </ul>
      </nav>
    </Sheet>
  );
};

export { HeaderSheetNavigation };
