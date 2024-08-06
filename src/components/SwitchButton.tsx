import React from 'react';
import { useStore } from '../store/currencyStore';

export default function SwitchButton() {
  const { switchCurrency } = useStore();
  return <button onClick={switchCurrency}>SwitchButton</button>;
}
