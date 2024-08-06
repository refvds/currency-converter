import React from 'react';
import styled from 'styled-components';
import CurrencyInput from './Input/CurrencyInput';
import SwitchButton from './SwitchButton';
import CurrencyDropdown from './Input/CurrencyDropdown';
import { useStore } from '../store/currencyStore';

const ConverterWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  align-items: center;
  gap: 10px;
`;

export default function Converter() {
  const { baseCurrency, targetCurrency, currencyList } = useStore();
  console.log({ baseCurrency, targetCurrency, currencyList });
  return (
    <ConverterWrapper>
      <CurrencyInput
        rightSection={<CurrencyDropdown position='base' from={baseCurrency} to={targetCurrency} list={currencyList} />}
      />
      <SwitchButton />
      <CurrencyInput
        rightSection={
          <CurrencyDropdown position='target' from={targetCurrency} to={baseCurrency} list={currencyList} />
        }
      />
    </ConverterWrapper>
  );
}
