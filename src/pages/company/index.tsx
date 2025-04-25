import { AboutSection } from './about-section';
import { CoverSection } from './cover-section';

const Company = () => {
  return (
    <div>
      <title>Sobre Nós | NVI Soluções em Suporte Técnico e Instalações</title>
      <meta
        name="description"
        content="Saiba mais sobre a NVI Soluções: soluções digitais para instalações de internet mais eficientes."
      />
      <meta
        name="keywords"
        content="NVI Soluções, equipe NVI, suporte técnico, soluções digitais, instalações de internet, suporte Fit Box"
      />
      <link rel="canonical" href="https://nvisolucoes.com.br/company" />

      <CoverSection />
      <AboutSection />
    </div>
  );
};

export default Company;
