import {
  Section,
  Inner,
  ContentCol,
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
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Detecção de Objetos",
    text:
      "Identificamos e rastreamos objetos em tempo real em imagens e vídeos com modelos de alta precisão para segurança, varejo e indústria.",
    link: "#",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 12h.01" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Análise de Imagens",
    text:
      "Extraímos insights automáticos de imagens industriais, médicas e comerciais usando redes neurais convolucionais de última geração.",
    link: "#",
  },
];

function ComputerVision() {
  return (
    <Section id="visao-computacional">
      <Inner>
        {/* LEFT – text */}
        <ContentCol>
          <Tag>VISÃO COMPUTACIONAL</Tag>
          <Title>Veja o mundo com olhos de dados</Title>
          <Description>
            Aplicamos modelos de visão computacional para transformar imagens e
            vídeos em decisões inteligentes e automatizadas para o seu negócio.
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
        </ContentCol>

        {/* RIGHT – image with organic left-fade */}
        <ImageCol>
          <ImgWrapper>
            <Img src="/computer-vision.png" alt="Sistema de visão computacional em ação" />
            <DecorSquare size="20px" top="14%" right="-12px" />
            <DecorSquare size="12px" top="22%" right="12px" />
            <DecorSquare size="18px" bottom="16%" left="-10px" />
          </ImgWrapper>
        </ImageCol>
      </Inner>
    </Section>
  );
}

export default ComputerVision;
