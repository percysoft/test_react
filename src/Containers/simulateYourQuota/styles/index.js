import styled from 'styled-components';
import { COLORS } from '../../../@designSystem/colors';

export const ContainerBorder = styled.div`
  border: 2px solid ${COLORS.GREY_1};
  height: auto;
  border-radius: 10px;
  padding: ${props => props.padding};
`;