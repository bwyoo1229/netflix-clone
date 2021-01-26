import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) 20%),
    url('../images/misc/home-bg.jpg') top left / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 52px;
  height: 64px;
  padding: 16px 0;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 130px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(Link)`
  display: block;
  font-size: 16px;
  text-align: center;
  background: #e50914;
  width: 48px;
  color: white;
  border: 0;
  border-radius: 2px;
  padding: 8px 13px;
  cursor: pointer;
  text-decoration: none;
`;
