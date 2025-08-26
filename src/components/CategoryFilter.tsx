import React from 'react';
import { Button } from 'react-native';
import { categories } from '../constants';
import styled, { useTheme } from 'styled-components/native';

type Props = {
  selected?: string;
  onSelect: (category: string) => void;
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: 8px;
`;

export default function CategoryFilter({ selected, onSelect }: Props) {
  const theme = useTheme();

  return (
    <Container>
      {Object.keys(categories).map(key => (
        <Button
          key={key}
          title={key}
          onPress={() => onSelect(selected === key ? '' : key)}
          color={selected === key ? theme.colors.primary : theme.colors.muted}
        />
      ))}
    </Container>
  );
}
