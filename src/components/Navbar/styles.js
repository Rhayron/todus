import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 68px;
  background-color: rgb(38, 40, 42);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 98px 0 96px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  user-select: none;
`;

export const LogoAccent = styled.span`
  color: #3aad60;
`;

export const LogoText = styled.span`
  color: #ffffff;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 36px;
  margin: 0;
  margin-left: 48px;
  padding: 0;
`;

export const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: color 0.2s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0%;
      height: 2px;
      background: #ffffff;
      border-radius: 2px;
      transition: width 0.25s ease;
    }

    &:hover {
      color: #ffffff;

      &::after {
        width: 100%;
      }
    }
  }
`;

export const DropdownTrigger = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const ChevronIcon = styled.span`
  display: flex;
  align-items: center;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
  opacity: 0.6;
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(28, 30, 32);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 8px 0;
  min-width: 220px;
  z-index: 200;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);

  /* arrow pointer */
  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgba(255, 255, 255, 0.08);
  }
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 11px 20px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: background-color 0.15s ease, color 0.15s ease;
  white-space: nowrap;

  &:hover {
    background-color: rgba(58, 173, 96, 0.1);
    color: #3aad60;
  }
`;

export const CtaButton = styled.button`
  margin-left: auto;
  background-color: #3aad60;
  color: #000000;
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  border-radius: 0;
  padding: 10px 22px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
  white-space: nowrap;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #2e9450;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

