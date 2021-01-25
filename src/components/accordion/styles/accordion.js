import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 800px;
  width: 70%;
  margin: auto;

  @media (max-width: 950px) {
    width: 80%;
  }

  @media (max-width: 530px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: -10px;
  color: white;
  text-align: center;

  @media (max-width: 950px) {
    font-size: 40px;
  }

  @media (max-width: 530px) {
    font-size: 30px;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 9px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: normal;
  background: #303030;
  padding: 1.5rem 2rem;
  align-items: center;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    margin-left: 20px;
    width: 18px;

    @media (max-width: 530px) {
      width: 16px;
    }
  }

  @media (max-width: 950px) {
    padding: 1rem 1.8rem;
    font-size: 1.2rem;
  }

  @media (max-width: 530px) {
    font-size: 1.1rem;
  }
`;

export const Body = styled.div`
  border-top: 1px black solid;
  max-height: 1200px;
  font-size: 1.5rem;
  background: #303030;
  padding: 1.5rem 2rem;
  white-space: pre-wrap;

  @media (max-width: 950px) {
    padding: 1.2rem 1.8rem;
    font-size: 1.2rem;
  }

  @media (max-width: 530px) {
    font-size: 1.1rem;
  }
`;
