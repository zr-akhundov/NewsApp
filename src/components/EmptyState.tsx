import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
`;

export default function EmptyState({ message }: { message?: string }) {
  const theme = useTheme();
  return (
    <Container>
      <Message color={theme.colors.muted}>
        {message ?? 'Ничего не найдено'}
      </Message>
    </Container>
  );
}
