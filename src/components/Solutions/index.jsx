import {
  Section,
  Inner,
  LeftCol,
  Tag,
  Title,
  Description,
  CardsGrid,
  Card,
  CardIcon,
  CardTitle,
  CardText,
  CardLink,
  ImageCol,
  ImgWrapper,
  Img,
  DecorSquare,
} from "./styles";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Business Intelligence",
    text:
      "Utilize nossos dashboards personalizados para que as decisões da sua empresa sejam tomadas de forma inteligente e embasadas em dados.",
    link: "#",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Web Analytics",
    text:
      "Integre todas suas plataformas de vendas num só lugar e veja com clareza as ações e comportamentos que trazem conversão e resultados.",
    link: "#",
  },
];

function Solutions() {
  return (
    <Section id="solucoes">
      <Inner>
        {/* LEFT – text */}
        <LeftCol>
          <Tag>SOLUÇÕES DE ANALYTICS</Tag>
          <Title>Business Intelligence</Title>
          <Description>
            Transformamos os dados em inteligência para o seu negócio, trazendo
            confiabilidade para suas estratégias.
          </Description>

          <CardsGrid>
            {cards.map((c) => (
              <Card key={c.title}>
                <CardIcon>{c.icon}</CardIcon>
                <CardTitle>{c.title}</CardTitle>
                <CardText>{c.text}</CardText>
                <CardLink href={c.link}>Saiba mais →</CardLink>
              </Card>
            ))}
          </CardsGrid>
        </LeftCol>

        {/* RIGHT – image with organic fade */}
        <ImageCol>
          <ImgWrapper>
            <Img src="/data-analytics.png" alt="Analista de dados trabalhando" />
            <DecorSquare size="20px" top="14%" right="-12px" />
            <DecorSquare size="12px" top="22%" right="12px" />
            <DecorSquare size="18px" bottom="16%" left="-10px" />
          </ImgWrapper>
        </ImageCol>
      </Inner>
    </Section>
  );
}

export default Solutions;
