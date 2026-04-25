import styled from "styled-components";

/* ── Brand color ───────────────────────────────────────────────── */
const GREEN = "#3aad60";
const GREEN_DARK = "#2e9450";

/* ── Full-screen split section ─────────────────────────────────── */
export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  position: relative;
  padding-top: 68px; /* navbar height */
  box-sizing: border-box;
  background: linear-gradient(
      rgba(10, 20, 25, 0.82),
      rgba(10, 20, 25, 0.82)
    ),
    url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80")
      center / cover no-repeat;
`;

/* ── Left panel ─────────────────────────────────────────────────── */
export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 60px 80px 96px;
  position: relative;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${GREEN};
  margin-bottom: 20px;
`;

export const Headline = styled.h1`
  font-size: clamp(1.8rem, 3.2vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.18;
  margin: 0 0 20px;
  max-width: 520px;
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  max-width: 340px;
  margin: 0;
`;

export const DecorSquare = styled.div`
  position: absolute;
  width: ${({ size }) => size || "16px"};
  height: ${({ size }) => size || "16px"};
  background-color: ${GREEN};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  top: ${({ top }) => top || "auto"};
`;

/* ── Right panel – form ─────────────────────────────────────────── */
export const RightPanel = styled.div`
  width: 460px;
  min-width: 380px;
  background-color: ${GREEN};
  display: flex;
  flex-direction: column;
  padding: 48px 40px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0a1a10;
  margin: 0 0 28px;
  display: none; /* hidden – keeps semantic structure */
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`;

export const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: #0a1a10;
  letter-spacing: 0.02em;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(0, 0, 0, 0.18);
  border-radius: 3px;
  padding: 0 14px;
  font-size: 0.875rem;
  color: #0a1a10;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &::placeholder {
    color: rgba(10, 26, 16, 0.45);
  }

  &:focus {
    border-color: #0a1a10;
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

/* ── reCAPTCHA mock ─────────────────────────────────────────────── */
export const CaptchaBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  padding: 14px 16px;
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
  gap: 14px;
`;

export const CaptchaCheckbox = styled.input`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: ${GREEN_DARK};
`;

export const CaptchaLabel = styled.label`
  font-size: 0.875rem;
  color: #333;
  flex: 1;
  cursor: pointer;
  user-select: none;
`;

export const CaptchaBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;

  svg {
    display: block;
  }

  span {
    font-size: 0.6rem;
    color: #555;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  small {
    font-size: 0.52rem;
    color: #888;
  }
`;

/* ── Submit button ──────────────────────────────────────────────── */
export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #0a1a10;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  font-size: 0.825rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 18px;
  transition: background-color 0.2s ease, transform 0.15s ease;

  &:hover {
    background-color: #162d1e;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

/* ── Disclaimer text ────────────────────────────────────────────── */
export const Disclaimer = styled.p`
  font-size: 0.72rem;
  color: rgba(10, 26, 16, 0.7);
  line-height: 1.55;
  margin: 0;
  text-align: justify;
`;
