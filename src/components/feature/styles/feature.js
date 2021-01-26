import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 110px;

  @media (max-width: 530px) {
    padding-top: 40px;
  }
`;

export const Title = styled.h1`
  display: block;
  width: 640px;
  color: white;
  font-size: 3.125rem;
  text-align: center;
  font-weight: bold;
  margin: 15px 0;
  padding: 0 20px;
  word-break: keep-all;

  @media (max-width: 530px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: normal;
  text-align: center;
  margin: 15px 0;
  padding: 0 20px;
  word-break: keep-all;

  @media (max-width: 530px) {
    font-size: 1.125rem;
  }
`;

export const Disclaimer = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: normal;
`;
