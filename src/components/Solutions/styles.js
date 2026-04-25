import styled from "styled-components";

const BG = "rgb(38, 40, 42)";
const GREEN = "#3aad60";
const TEXT_DIM = "rgba(255,255,255,0.55)";
const BORDER = "rgba(255,255,255,0.08)";

export const Section = styled.section`
  width: 100%;
  background-color: ${BG};
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.18) 0%,
    transparent 100%
  );
  padding: 80px 96px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 48px;
  }
`;

/* ── Left – text ─────────────────────────────────────────────────── */
export const LeftCol = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Tag = styled.span`
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${GREEN};
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 20px;
  line-height: 1.15;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${TEXT_DIM};
  line-height: 1.65;
  max-width: 460px;
  margin: 0 0 40px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid ${BORDER};
  border-radius: 8px;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: rgba(58, 173, 96, 0.4);
    background-color: rgba(58, 173, 96, 0.06);
  }
`;

export const CardIcon = styled.div`
  color: ${GREEN};
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
`;

export const CardText = styled.p`
  font-size: 0.835rem;
  color: ${TEXT_DIM};
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

export const CardLink = styled.a`
  font-size: 0.835rem;
  font-weight: 600;
  color: ${GREEN};
  text-decoration: none;
  transition: opacity 0.2s ease;
  margin-top: 4px;

  &:hover {
    opacity: 0.75;
  }
`;

/* ── Right – image with organic LEFT-edge fade ───────────────────── */
export const ImageCol = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: flex-end;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
`;

export const Img = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
  /* organic fade: fades at left edge into dark bg */
  -webkit-mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const DecorSquare = styled.div`
  position: absolute;
  width: ${({ size }) => size || "16px"};
  height: ${({ size }) => size || "16px"};
  background-color: ${GREEN};
  top: ${({ top }) => top || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
`;
