import React, { useState } from 'react';
import { Button } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

type Props = {
  onSearch: (query: string) => void;
};

const Container = styled.View`
  flex-direction: row;
  padding: 8px;
`;

const Input = styled.TextInput<{ borderColor: string }>`
  flex: 1;
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 8px;
  padding-horizontal: 8px;
  margin-right: 8px;
`;

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState('');
  const theme = useTheme();

  return (
    <Container>
      <Input
        value={query}
        onChangeText={setQuery}
        placeholder="Поиск..."
        borderColor={theme.colors.muted}
      />
      <Button title="Поиск" onPress={() => onSearch(query)} />
    </Container>
  );
}
