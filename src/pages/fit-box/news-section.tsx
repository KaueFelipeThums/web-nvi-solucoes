import { Button, Icon } from '@kaue-thums/web-ui-components';
import magazine from '@/assets/documents/magazine.pdf';
import news from '@/assets/images/news.png';
import { Section } from '@/components/layout/section';
import { PageDescription } from '@/components/ui/description';
import { PageTitle } from '@/components/ui/title';
import { cn } from '@/lib/utils';

const NewsSectionContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('grid h-full grid-cols-1 md:grid-cols-2  z-10 gap-20 py-20', className)} {...props} />;
};
const NewsSectionContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col justify-center gap-5', className)} {...props} />;
};

const NewsSectionTitle = ({ className, ...props }: React.ComponentProps<typeof PageTitle>) => {
  return <PageTitle className={cn(className)} {...props} />;
};

const NewsSectionDescription = ({ className, ...props }: React.ComponentProps<typeof PageDescription>) => {
  return <PageDescription className={cn(className)} {...props} />;
};

const NewsSectionIcon = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
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

const NewsButtonContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('flex gap-2 flex-wrap', className)} {...props} />;
};

const NewsSection = () => {
  return (
    <Section className="min-h-screen">
      <NewsSectionContainer>
        <NewsSectionContent>
          <NewsSectionIcon>
            <Icon name="Newspaper" />
          </NewsSectionIcon>
          <NewsSectionTitle>
            Invenção chega a provedores de <span className="text-primary">15 estados</span> em menos de um ano
          </NewsSectionTitle>
          <NewsSectionDescription>
            &quot;A ideia deu tão certo que a inovação, concebida inicialmente para atender às necessidades da própria
            empresa, foi lançada para todo o mercado brasileiro em março de 2020 e hoje já é fornecida em mais de 15
            estados. [...]&quot;
          </NewsSectionDescription>
          <NewsButtonContent>
            <Button
              size="lg"
              icon="Globe"
              onClick={() =>
                window.open(
                  'https://www.arandanet.com.br/revista/rti/noticia/1360-Invencao-chega-a-provedores-de-15-estados-em-menos-de-um-ano.html',
                )
              }
            >
              Revista Digital
            </Button>
            <Button size="lg" variant="outline" icon="Newspaper" onClick={() => window.open(magazine)}>
              Revista Física
            </Button>
          </NewsButtonContent>
        </NewsSectionContent>
        <NewsSectionContent>
          <img src={news} alt="news" />
        </NewsSectionContent>
      </NewsSectionContainer>
    </Section>
  );
};
export { NewsSection };
