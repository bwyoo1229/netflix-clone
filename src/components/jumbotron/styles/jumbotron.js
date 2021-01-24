// styled-compents/macro gives the component name (good to use :))
import styled from 'styled-components/macro';

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
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  z-index: 2;
  max-width: 100%;
  @media (max-width: 950px) {
    max-width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Video = styled.video`
  position: absolute;
  margin-bottom: 1rem;
  max-width: 32%;

  @media (max-width: 950px) {
    max-width: 65%;
  }
`;
