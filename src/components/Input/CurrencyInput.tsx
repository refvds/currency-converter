import { ReactNode } from 'react';
import styled from 'styled-components';

interface ICurrencyInput {
  placeholder?: string;
  value?: number;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

const InputWrappaer = styled.div`
  position: relative;
  height: 50px;
  width: 280px;
  display: flex;
  padding: 10px;
`;

const Input = styled.input`
  height: inherit;
  width: 100%;
  border: inherit;
  border-radius: 5px;
  padding: 10px;
  padding-right: 45%;
  text-align: right;
  &:focus {
    outline: none;
  }
`;

export default function CurrencyInput({ placeholder, value, rightSection, leftSection }: ICurrencyInput) {
  return (
    <InputWrappaer>
      {leftSection || ''}
      <Input type='number' min={0} value={value} placeholder={placeholder} />
      {rightSection || ''}
    </InputWrappaer>
  );
}
