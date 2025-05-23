import { Button } from '@kaue-thums/web-ui-components';
import { HeaderNavigation } from './header-navigation';
import { HeaderSheetNavigation } from './header-sheet-navigation';
import logoWhite from '@/assets/images/logo-white.png';
import logo from '@/assets/images/logo.png';

type HeaderProps = {
  type?: 'default' | 'white';
};

const Header = ({ type = 'default' }: HeaderProps) => {
  return (
    <header className="flex h-20 items-center gap-2 justify-between z-10">
      <img src={type === 'default' ? logo : logoWhite} className="w-26 md:w-36" />

      <div className="flex items-center gap-5">
        <HeaderNavigation type={type} className="hidden md:block" />
        <Button
          size="icon"
          icon="ShoppingCart"
          onClick={() =>
            window.open(
              'https://lista.mercadolivre.com.br/_CustId_553304382?item_id=MLB3449713861&category_id=MLB271708&seller_id=553304382&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic',
            )
          }
        />
        <HeaderSheetNavigation title="Menu" type={type} />
      </div>
    </header>
  );
};

export { Header };
