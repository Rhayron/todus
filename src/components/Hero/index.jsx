import { Section, Headline, Subtitle, CtaBtn, BtnIcon } from "./styles";

function Hero() {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById("fale-conosco")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Headline>
        Leve inteligência para os seus dados
      </Headline>
      <Subtitle>
        Consultoria em BI, Engenharia de Dados, Machine Learning e Visão
        Computacional para transformar dados em vantagem competitiva.
      </Subtitle>
      <CtaBtn href="#fale-conosco" onClick={handleClick}>
        <BtnIcon aria-hidden="true">
          {/* chat / message icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </BtnIcon>
        QUERO FALAR COM UM ESPECIALISTA
      </CtaBtn>
    </Section>
  );
}

export default Hero;
