import styled from 'styled-components';

export const ContainerLoader = styled.div`
  min-width: 20px;
  text-align: center;
  div {
    animation: wave 1.7s infinite ease-in-out;
    background-color: ${(props) => props.fill };
    border-radius: 50%;
    display: inline-block;
    height: ${(props) => props.height };
    margin: 0 1px;
    transform: translateY(0);
    width:  ${(props) => props.width };
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
  @keyframes wave
  {
    0%, 60%, 100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(13px);
    }
    40% {
      transform: translateY(-13px);
    }
  }
`;

