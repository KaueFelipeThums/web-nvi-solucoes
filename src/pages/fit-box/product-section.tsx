import { Button, Icon } from '@kaue-thums/web-ui-components';
import { useNavigate } from 'react-router-dom';
import fttx from '@/assets/images/fttx1.png';
import modelFttx1 from '@/assets/images/model-fttx1.png';
import modelFttx2 from '@/assets/images/model-fttx2.png';
import modelFttx3 from '@/assets/images/model-fttx3.png';
import modelOntx1 from '@/assets/images/model-ontx1.png';
import modelOntx2 from '@/assets/images/model-ontx2.png';
import modelOntx3 from '@/assets/images/model-ontx3.png';
import ontx from '@/assets/images/ontx1.png';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const ProductSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 md:grid-cols-2 z-10 gap-20 py-20', className)} {...props} />;
};
const ProductSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-5', className)} {...props} />;
};

const ProductSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={className} {...props} />;
};

const ProductSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={className} {...props} />;
};

const ProductSectionCardContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-30', className)} {...props} />;
};

const ProductSectionIcon = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('size-16 rounded-full flex items-center justify-center bg-primary/50', className)} {...props}>
      <div
        className={cn('size-12 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold')}
      >
        {children}
      </div>
    </div>
  );
};

const ProductSecitonCard = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col items-center gap-3', className)} {...props} />;
};

const ProductSectionImageContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('relative max-w-[300px]', className)} {...props} />;
};

const ProductSectionCardIcon = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'size-16 rounded-full flex items-center justify-center bg-primary/50 absolute top-5 left-5',
        className,
      )}
      {...props}
    >
      <div
        className={cn('size-12 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold')}
      >
        {children}
      </div>
    </div>
  );
};

const ProductSection = () => {
  const navigate = useNavigate();

  return (
    <Section className="min-h-screen" id="models">
      <ProductSectionContainer>
        <ProductSectionContent className="px-4 order-2 md:order-1">
          <img src={fttx} />
        </ProductSectionContent>
        <ProductSectionContent className="order-1 md:order-2">
          <ProductSectionIcon>
            <Icon name="Award" />
          </ProductSectionIcon>
          <ProductSectionTitle>
            Suporte <br /> Fit Box <span className="text-primary">FTTx</span>
          </ProductSectionTitle>
          <ProductSectionDescription>
            Perfeito para organizar e padronizar instalações que utilizam roteador e <strong>ONU</strong>, garantindo um
            layout mais eficiente, seguro e esteticamente harmonioso.
          </ProductSectionDescription>
        </ProductSectionContent>
      </ProductSectionContainer>

      <ProductSectionCardContainer>
        <ProductSecitonCard>
          <ProductSectionImageContent>
            <ProductSectionCardIcon>v1</ProductSectionCardIcon>
            <img src={modelFttx1} />
          </ProductSectionImageContent>
          <ProductSectionDescription>
            Com a Marca do <strong>fabricante</strong>.
          </ProductSectionDescription>
          <Button icon="ShoppingCart" size="lg" onClick={() => navigate('/contact')}>
            Comprar Agora
          </Button>
        </ProductSecitonCard>

        <ProductSecitonCard>
          <ProductSectionImageContent>
            <ProductSectionCardIcon>v2</ProductSectionCardIcon>
            <img src={modelFttx2} />
          </ProductSectionImageContent>
          <ProductSectionDescription>
            Com a Marca do <strong>cliente</strong>.
          </ProductSectionDescription>
          <Button icon="ShoppingCart" size="lg" onClick={() => navigate('/contact')}>
            Comprar Agora
          </Button>
        </ProductSecitonCard>

        <ProductSecitonCard>
          <ProductSectionImageContent>
            <ProductSectionCardIcon>v3</ProductSectionCardIcon>
            <img src={modelFttx3} />
          </ProductSectionImageContent>
          <ProductSectionDescription>
            <strong>Sem nenhuma</strong> marca.
          </ProductSectionDescription>
          <Button icon="ShoppingCart" size="lg" onClick={() => navigate('/contact')}>
            Comprar Agora
          </Button>
        </ProductSecitonCard>
      </ProductSectionCardContainer>

      <ProductSectionContainer>
        <ProductSectionContent>
          <ProductSectionIcon>
            <Icon name="Award" />
          </ProductSectionIcon>
          <ProductSectionTitle>
            Suporte <br /> Fit Box <span className="text-primary">ONTx</span>
          </ProductSectionTitle>
          <ProductSectionDescription>
            Indicado para organizar e padronizar instalações com <strong>ONT</strong>, proporcionando um ambiente mais
            eficiente, seguro e bem estruturado.
          </ProductSectionDescription>
        </ProductSectionContent>
        <ProductSectionContent className="px-4">
          <img src={ontx} />
        </ProductSectionContent>
      </ProductSectionContainer>

      <ProductSectionCardContainer>
        <ProductSecitonCard>
          <ProductSectionImageContent>
            <ProductSectionCardIcon>v1</ProductSectionCardIcon>
            <img src={modelOntx1} />
          </ProductSectionImageContent>
          <ProductSectionDescription>
            Com a Marca do <strong>fabricante</strong>.
          </ProductSectionDescription>
          <Button icon="ShoppingCart" size="lg" onClick={() => navigate('/contact')}>
            Comprar Agora
          </Button>
        </ProductSecitonCard>

        <ProductSecitonCard>
          <ProductSectionImageContent>
            <ProductSectionCardIcon>v2</ProductSectionCardIcon>
            <img src={modelOntx2} />
          </ProductSectionImageContent>
          <ProductSectionDescription>
            Com a Marca do <strong>cliente</strong>.
          </ProductSectionDescription>
          <Button icon="ShoppingCart" size="lg" onClick={() => navigate('/contact')}>
            Comprar Agora
          </Button>
        </ProductSecitonCard>

        <ProductSecitonCard>
          <ProductSectionImageContent>
            <ProductSectionCardIcon>v3</ProductSectionCardIcon>
            <img src={modelOntx3} />
          </ProductSectionImageContent>
          <ProductSectionDescription>
            <strong>Sem nenhuma</strong> marca.
          </ProductSectionDescription>
          <Button icon="ShoppingCart" size="lg" onClick={() => navigate('/contact')}>
            Comprar Agora
          </Button>
        </ProductSecitonCard>
      </ProductSectionCardContainer>
    </Section>
  );
};

export { ProductSection };
