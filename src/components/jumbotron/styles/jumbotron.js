// styled-compents/macro gives the component name (good to use :))
import styled, { css } from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 950px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  &:not(:first-child) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 950px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 8px;
  word-break: keep-all;

  @media (max-width: 950px) {
    font-size: 2.5rem;
  }

  @media (max-width: 550px) {
    font-size: 1.625rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;
  word-break: keep-all;

  @media (max-width: 950px) {
    font-size: 1.25rem;
  }

  @media (max-width: 550px) {
    font-size: 1.125rem;
  }
`;

const mobileImg = css`
  ${({ mobileImg }) =>
    mobileImg ? { 'max-width': '45%' } : { 'max-width': '100%' }}
`;

export const Image = styled.img`
  z-index: 2;
  ${mobileImg}

  @media (max-width: 950px) {
    ${mobileImg}
    padding: 0 45px;
  }
`;

export const Video = styled.video`
  position: absolute;
  margin-top: -16px;
  max-width: 32%;

  @media (min-width: 710px) and (max-width: 950px) {
    max-width: 470px;
  }

  @media (max-width: 710px) {
    max-width: 66%;
  }
`;
