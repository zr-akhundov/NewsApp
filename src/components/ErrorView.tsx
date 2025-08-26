import React from 'react';
import { Button } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  margin-bottom: 8px;
`;

export default function ErrorView({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  const theme = useTheme();
  console.log('theme', theme);
  return (
    <Container>
      <Message color={theme.colors.error}>{message}</Message>
      <Button title="Повторить" onPress={onRetry} />
    </Container>
  );
}
