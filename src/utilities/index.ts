import { ICurrency } from '../types';

export function getCurrencyByCode(currencyCode: string, list: Array<ICurrency>): ICurrency | undefined {
  return list.find((currency) => currency.code === currencyCode);
}

export function getSortedList(
  list: Array<ICurrency>,
  state?: { target: ICurrency; base: ICurrency }
): Array<ICurrency> {
  const newList = [...list];
  newList.sort((a, b) => a.name!.localeCompare(b.name!));
  if (state) {
    const { base, target } = state;
    const filteredList = newList.filter((elem) => elem.code !== base.code && elem.code !== target.code);
    filteredList.unshift(base, target);

    return filteredList;
  }

  return newList;
}
