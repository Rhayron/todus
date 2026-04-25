import { useState, useRef } from "react";
import {
  Nav,
  LogoWrapper,
  LogoAccent,
  LogoText,
  NavLinks,
  NavItem,
  DropdownTrigger,
  ChevronIcon,
  Dropdown,
  DropdownItem,
  CtaButton,
} from "./styles";

const solutionsMenu = [
  { label: "Business Intelligence", id: "solucoes" },
  { label: "Inteligência Artificial", id: "inteligencia-artificial" },
  { label: "Visão Computacional", id: "visao-computacional" },
];

const topLinks = [
  { label: "Indústrias", id: null },
  { label: "Sobre", id: null },
  { label: "Cases", id: null },
  { label: "Contato", id: "fale-conosco" },
];

function scrollTo(id) {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    scrollTo("fale-conosco");
  };

  return (
    <Nav>
      <LogoWrapper onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <LogoAccent>to</LogoAccent>
        <LogoText>dus</LogoText>
      </LogoWrapper>

      <NavLinks>
        {/* ── Soluções dropdown ── */}
        <NavItem
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DropdownTrigger>
            Soluções
            <ChevronIcon open={open} aria-hidden="true">
              <svg viewBox="0 0 10 6" width="10" height="6" fill="currentColor">
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </ChevronIcon>
          </DropdownTrigger>

          {open && (
            <Dropdown
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {solutionsMenu.map((item) => (
                <DropdownItem
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollTo(item.id);
                  }}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </NavItem>

        {/* ── Other links ── */}
        {topLinks.map((link) => (
          <NavItem key={link.label}>
            <a
              href={link.id ? `#${link.id}` : "#"}
              onClick={(e) => {
                if (link.id) {
                  e.preventDefault();
                  scrollTo(link.id);
                }
              }}
            >
              {link.label}
            </a>
          </NavItem>
        ))}
      </NavLinks>

      <CtaButton
        as="a"
        href="#fale-conosco"
        onClick={handleCtaClick}
      >
        FALE COM UM ESPECIALISTA
      </CtaButton>
    </Nav>
  );
}

export default Navbar;
