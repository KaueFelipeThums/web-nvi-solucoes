import { AboutSection } from './about-section';
import { AskLearnSection } from './ask-learn-section';
import { BeforeAfterSection } from './before-after-section';
import { BuyOptionsSection } from './buy-options-section';
import { CoverSection } from './cover-section';
import { MetricsSection } from './metrics-section';
import { NewsSection } from './news-section';
import { PatentSection } from './patent-dsection';
import { ProductSection } from './product-section';
import { ReportsSection } from './reports-section';

const FitBox = () => {
  return (
    <div>
      <title>NVI Soluções | Suporte Especializado Fit Box FTTx e ONTx</title>
      <meta
        name="description"
        content="Soluções completas para instalações de internet mais organizadas, seguras e padronizadas."
      />
      <meta
        name="keywords"
        content="NVI Soluções, suporte Fit Box FTTx, suporte FitBox ONTx, instalação de internet, organização de rede, soluções em telecom, padronização de instalações"
      />
      <link rel="canonical" href="https://nvisolucoes.com.br/" />
      <CoverSection />
      <PatentSection />
      <MetricsSection />
      <AboutSection />
      <ProductSection />
      <BeforeAfterSection />
      <NewsSection />
      <BuyOptionsSection />
      <AskLearnSection />
      <ReportsSection />
    </div>
  );
};

export default FitBox;
