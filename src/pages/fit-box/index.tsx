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
      <CoverSection />
      <PatentSection />
      <MetricsSection />
      <AboutSection />
      <ProductSection />
      <BeforeAfterSection />
      <NewsSection />
      <BuyOptionsSection />
      <ReportsSection />
      <AskLearnSection />
    </div>
  );
};

export default FitBox;
