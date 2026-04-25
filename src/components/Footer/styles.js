import styled from "styled-components";

/* ── Same bg as the home container ─────────────────────────────── */
const BG = "rgb(38, 40, 42)";
const BORDER = "rgba(255,255,255,0.07)";
const TEXT_DIM = "rgba(255,255,255,0.45)";
const TEXT_MED = "rgba(255,255,255,0.65)";
const ACCENT = "#3aad60";

export const FooterWrapper = styled.footer`
  background-color: ${BG};
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 64px 96px 0;
  box-sizing: border-box;
`;

/* ── Giant watermark "todus" in the background ──────────────────── */
export const Watermark = styled.span`
  position: absolute;
  right: -24px;
  bottom: 20px;
  font-size: clamp(7rem, 18vw, 14rem);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.04);
  letter-spacing: -0.04em;
  user-select: none;
  pointer-events: none;
  line-height: 1;
`;

/* ── Top row: brand+contacts  |  nav columns ────────────────────── */
export const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 80px;
  padding-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

/* ── Brand / logo ───────────────────────────────────────────────── */
export const Brand = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  margin-bottom: 28px;
  cursor: default;
  user-select: none;
`;

export const BrandAccent = styled.span`
  color: ${ACCENT};
`;

export const BrandName = styled.span`
  color: #ffffff;
`;

/* ── Contact list ───────────────────────────────────────────────── */
export const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: ${TEXT_MED};

  a {
    color: ${TEXT_MED};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const ContactIcon = styled.span`
  color: ${TEXT_DIM};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

/* ── Navigation columns ─────────────────────────────────────────── */
export const NavColumns = styled.div`
  display: flex;
  gap: 56px;
  margin-left: auto;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 32px;
  }
`;

export const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 100px;
`;

export const ColumnTitle = styled.span`
  font-size: 0.825rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
  text-transform: capitalize;
`;

export const ColumnLink = styled.a`
  font-size: 0.825rem;
  color: ${TEXT_MED};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${ACCENT};
  }
`;

/* ── Divider ────────────────────────────────────────────────────── */
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${BORDER};
  margin: 0 -96px;
`;

/* ── Bottom copyright bar ───────────────────────────────────────── */
export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0 24px;
`;

export const Copyright = styled.p`
  font-size: 0.775rem;
  color: ${TEXT_DIM};
  margin: 0;
  line-height: 1.5;

  a {
    color: ${TEXT_DIM};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;
