import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import CurrencyList from './CurrencyList';
import { CurrecyPossition, ICurrency } from '../../types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useStore } from '../../store/currencyStore';

const Button = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  position: absolute;
  right: 0;
  height: 100%;
  border: none;
  background: #f1f3f5;
  max-width: 120px;
  border-radius: 5px;
  padding: 5px;
`;

interface ICurrencyDropdownProps {
  to: ICurrency;
  from: ICurrency;
  list: Array<ICurrency>;
  position: CurrecyPossition;
}

export default function CurrencyDropdown({ to, from, list, position }: ICurrencyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setCurrency } = useStore();
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!ref.current?.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  const handleClick = (elem: ICurrency, position: CurrecyPossition) => {
    setCurrency(position, elem);
    setIsOpen(false);
  };

  return (
    <div ref={ref} tabIndex={0} onBlur={handleBlur}>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        <img src={from.flag} />
        <span>{from.code}</span>
        {isOpen ? <IoIosArrowUp style={{ marginLeft: 'auto' }} /> : <IoIosArrowDown style={{ marginLeft: 'auto' }} />}
      </Button>
      {isOpen && <CurrencyList to={to} from={from} list={list} onClick={handleClick} position={position} />}
    </div>
  );
}
