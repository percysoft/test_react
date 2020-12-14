import styled from "styled-components";
import { COLORS } from "../colors";

export const TextStyle = styled.div`
  color: ${(props) => (props.color ? props.color : COLORS.TEXT)} };
  font-family: 'Lato', sans-serif ;
  font-size:${(props) => (props.size ? `${props.size}px` : "24px")};
  font-stretch: normal;
  font-style: normal;
  font-weight: ${(props) => props.bold};
  margin: 10px 0;
  text-align: ${(props) => (props.textAlign)} };
`;


export const Line = styled.div`
  border-top: 3px solid ${props => props.color};
  width: ${props => props.width};
  margin: 20px 0;
`