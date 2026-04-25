import {
  Section,
  Inner,
  ImageCol,
  ImgWrapper,
  Img,
  DecorSquare,
  ContentCol,
  Tag,
  Title,
  Description,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  FeatureLink,
} from "./styles";

function AISolutions() {
  return (
    <Section id="inteligencia-artificial">
      <Inner>
        {/* LEFT – image with organic bleed and decorative squares */}
        <ImageCol>
          <ImgWrapper>
            <Img src="/ai-solutions.png" alt="Especialista em Inteligência Artificial" />
            <DecorSquare size="20px" top="18%" left="-12px" />
            <DecorSquare size="12px" top="26%" left="12px" />
            <DecorSquare size="18px" bottom="18%" right="-10px" />
          </ImgWrapper>
        </ImageCol>

        {/* RIGHT – text content */}
        <ContentCol>
          <Tag>INTELIGÊNCIA ARTIFICIAL</Tag>
          <Title>
            Soluções de inteligência artificial
          </Title>
          <Description>
            Otimizamos processos e tarefas para reduzir riscos e impulsionar o
            crescimento da sua empresa.
          </Description>

          <FeatureCard>
            <FeatureIcon aria-hidden="true">
              {/* brain / ML icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                width="24" height="24">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </FeatureIcon>
            <FeatureTitle>Machine Learning</FeatureTitle>
            <FeatureText>
              Implementamos algoritmos para aprender com a Big Data da sua empresa,
              analisando, interpretando e prevendo tendências e resultados.
            </FeatureText>
            <FeatureLink href="#">Saiba mais →</FeatureLink>
          </FeatureCard>
        </ContentCol>
      </Inner>
    </Section>
  );
}

export default AISolutions;
