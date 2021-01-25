import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 8px solid #222;
  padding-bottom: 90px;

  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Text = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: normal;
  word-break: keep-all;
  text-align: center;
  padding: 0 40px;

  @media (max-width: 950px) {
    font-size: 18px;
    padding: 0 150px;
  }

  @media (max-width: 530px) {
    padding: 0 40px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  height: 50px;
  padding: 0 8px;

  @media (max-width: 950px) {
    max-width: 450px;
  }

  @media (max-width: 530px) {
    height: 40px;
    width: 80%;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
  padding: 15px 25px;
  font-size: 24px;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }

  &:active {
    background: #db0510;
  }

  img {
    filter: brightness(0) invert(1);
    width: 10px;
    margin-left: 5px;
  }

  @media (max-width: 950px) {
    margin-top: 15px;
    font-size: 16px;
    padding: 10px 20px;
  }
`;
