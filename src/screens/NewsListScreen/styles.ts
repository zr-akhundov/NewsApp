import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ListFooter = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
