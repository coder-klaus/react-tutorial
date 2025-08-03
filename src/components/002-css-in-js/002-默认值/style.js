import styled from 'styled-components';

const AppWrapper = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.size} + 'px';
`;

export {
  AppWrapper
}