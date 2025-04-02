import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const HeaderNavigationLink = ({ className, ...props }: React.ComponentProps<'a'>) => {
  return (
    <li className="hover:scale-105 duration-300 transition-all">
      <a className={cn('transition-colors duration-300 cursor-pointer', className)} {...props} />
    </li>
  );
};

type HeaderNavigationProps = React.ComponentProps<'nav'> & {
  type?: 'default' | 'white';
};

const HeaderNavigation = ({ type, ...props }: HeaderNavigationProps) => {
  const navigate = useNavigate();

  return (
    <nav {...props}>
      <ul className={cn('flex items-center gap-10 text-xl font-bold', type === 'white' && 'text-gray-300')}>
        <HeaderNavigationLink
          onClick={() => navigate('/company')}
          className={type === 'white' ? 'hover:text-white' : 'hover:text-primary'}
        >
          Sobre
        </HeaderNavigationLink>
        <HeaderNavigationLink
          onClick={() => navigate('/')}
          className={type === 'white' ? 'hover:text-white' : 'hover:text-primary'}
        >
          Fit Box
        </HeaderNavigationLink>
        <HeaderNavigationLink
          onClick={() => navigate('/contact')}
          className={type === 'white' ? 'hover:text-white' : 'hover:text-primary'}
        >
          Contato
        </HeaderNavigationLink>
      </ul>
    </nav>
  );
};

export { HeaderNavigation };
