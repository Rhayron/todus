import {
  FooterWrapper,
  FooterTop,
  Brand,
  BrandName,
  BrandAccent,
  ContactList,
  ContactItem,
  ContactIcon,
  NavColumns,
  NavColumn,
  ColumnTitle,
  ColumnLink,
  Watermark,
  Divider,
  FooterBottom,
  Copyright,
} from "./styles";

const navColumns = [
  {
    title: "Soluções",
    links: ["Data Analytics", "Business Intelligence", "Consultoria"],
  },
  {
    title: "Cases",
    links: ["Todos os Cases"],
  },
  {
    title: "Empresa",
    links: ["Sobre nós", "Carreiras"],
  },
  {
    title: "Blog",
    links: ["Últimos Posts"],
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Watermark>todus</Watermark>

      <FooterTop>
        {/* Left – brand + contacts */}
        <div>
          <Brand>
            <BrandAccent>to</BrandAccent>
            <BrandName>dus</BrandName>
          </Brand>

          <ContactList>
            <ContactItem>
              <ContactIcon aria-hidden="true">
                {/* envelope */}
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </ContactIcon>
              <a href="mailto:contato@todus.com.br">contato@todus.com.br</a>
            </ContactItem>
            <ContactItem>
              <ContactIcon aria-hidden="true">
                {/* linkedin */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </ContactIcon>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Junte-se a nós no LinkedIn
              </a>
            </ContactItem>
          </ContactList>
        </div>

        {/* Right – nav columns */}
        <NavColumns>
          {navColumns.map((col) => (
            <NavColumn key={col.title}>
              <ColumnTitle>{col.title}</ColumnTitle>
              {col.links.map((link) => (
                <ColumnLink key={link} href="#">
                  {link}
                </ColumnLink>
              ))}
            </NavColumn>
          ))}
        </NavColumns>
      </FooterTop>

      <Divider />

      <FooterBottom>
        <Copyright>
          Copyright © {year} todus &nbsp;|&nbsp; Todos os direitos reservados
          &nbsp;|&nbsp;{" "}
          <a href="#">Política de privacidade</a>
        </Copyright>
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
