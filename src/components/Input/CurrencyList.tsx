import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSortedList } from '../../utilities';
import { CurrecyPossition, ICurrency } from '../../types';
import { useStore } from '../../store/currencyStore';

interface ICurrencyDropdownProps {
  to: ICurrency;
  from: ICurrency;
  list: Array<ICurrency>;
  onClick: (elem: ICurrency, position: CurrecyPossition) => void;
  position: CurrecyPossition;
}

const ListWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 60px;
  max-height: 400px;
  width: 250px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #ccc; /* Optional border */
  background: white; /* Ensure background color is set */
`;

const ScrollableContent = styled.div`
  max-height: 400px; /* Same as ListWrapper max-height */
  overflow-y: scroll;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 8px; /* Add some padding to list items for better UI */
`;

const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

export default function CurrencyList({ to, from, list, onClick, position }: ICurrencyDropdownProps) {
  const [currentList, setCurrentList] = useState<Array<ICurrency>>();
  useEffect(() => {
    const w = () => {
      setCurrentList(() => getSortedList(list, { base: from, target: to }));
    };
    w();
  }, [to, from, list, setCurrentList]);

  return (
    <ListWrapper>
      <ScrollableContent>
        <List>
          {currentList?.map((elem: ICurrency) => (
            <ListItem key={elem.name}>
              <Button onClick={() => onClick(elem, position)}>
                <img src={elem.flag} alt='' style={{ display: 'inline' }} />
                {elem.code} {elem.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </ScrollableContent>
    </ListWrapper>
  );
}
