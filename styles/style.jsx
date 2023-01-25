import styled, { keyframes } from "styled-components";

// nav styles
export const Nav = styled.div`
  
`;
export const Logo = styled.h1`
  font-size: 2rem;
  color: white;
  text-align: center;
  cursor: pointer;
  &:hover {
  }
`;

export const Navpos = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem 1rem 2rem;
`;
export const Links = styled.a`
  text-decoration: none;
  color: #fc6d6d;
  align-items: center;
  text-align: center;
  padding-left: 2rem;
  font-size: 1rem;
  font-family: monospace;
  cursor: cell;
  &:hover {
    color: white;
  }
`;
//textwrapers

export const Textdiv = styled.div`
  display: flex;
  position: relative;
  top: 15rem;
  right: 0;
  flex-direction: column;
`;
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const TypingText = styled.div`
  overflow: hidden;
  color: #fc6d6d;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-family: monospace;
  animation: ${typing} 7s steps(400, end);
`;
export const TypingCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100vh;
`;

// social links

export const Sochub = styled.div`
  position: fixed;
  top: 36rem;
  right: 5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
`;
export const Sfooter = styled.footer`
  position: sticky;
  padding-right: 3rem;
`;
export const Follow = styled.p`
  padding-right: 30px;
  position: absolute;
  bottom: 100%;
  right: 0;
  color: #fff;
  font-size: 0.7rem;
  line-height: 24px;
  height: 24px;
  white-space: nowrap;
  transform-origin: 100% 0;
  text-align: right;
  transform: rotate(90deg);
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    left: 5rem;
    width: 30px;
    height: 1px;
    background: #fff;
  }
  &:hover {
    color: palevioletred;
  }
`;

export const Iconsi = styled.p`
  padding-right: 1px;
  padding-top: 0.2rem;
  font-size: 1rem;
  &:hover {
    color: palevioletred;
  }
`;

export const Contacti = styled.div`
  position: fixed;
  left: 0;
  top: 43rem;
  margin-left: 2rem;
`;
export const EmailNum = styled.div`
  margin: 2px 0 0 0;
  font-size: 14px;
  color: white;
`;
