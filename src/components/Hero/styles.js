import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 68px); /* full viewport minus navbar */
  background-color: rgb(38, 40, 42);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px;
  box-sizing: border-box;
  /* subtle radial glow behind the text */
  background-image: radial-gradient(
    ellipse 70% 55% at 50% 46%,
    rgba(58, 173, 96, 0.07) 0%,
    transparent 75%
  );
`;

export const Headline = styled.h1`
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 24px;
  max-width: 760px;
  animation: ${fadeUp} 0.65s ease both;
`;

export const Subtitle = styled.p`
  font-size: clamp(0.95rem, 1.6vw, 1.08rem);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.65;
  max-width: 560px;
  margin: 0 0 44px;
  animation: ${fadeUp} 0.65s 0.12s ease both;
`;

export const CtaBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #3aad60;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 36px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.18s ease,
    box-shadow 0.2s ease;
  animation: ${fadeUp} 0.65s 0.24s ease both;

  &:hover {
    background-color: #2e9450;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(58, 173, 96, 0.35);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const BtnIcon = styled.span`
  display: flex;
  align-items: center;
`;
