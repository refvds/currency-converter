import { create } from 'zustand';
import { getCurrencyByCode } from '../utilities';
import currencies from '../curruncies.json';
import { ICurrency } from '../types';
import { devtools } from 'zustand/middleware';

interface ICurrencyState {
  baseCurrency: ICurrency;
  targetCurrency: ICurrency;
  currencyList: Array<ICurrency>;
  switchCurrency: () => void;
  setCurrency: (place: 'base' | 'target', currency: ICurrency) => void;
}

export const useStore = create<ICurrencyState>()(
  devtools((set) => ({
    baseCurrency: getCurrencyByCode('BYN', currencies as Array<ICurrency>)!,
    targetCurrency: getCurrencyByCode('USD', currencies as Array<ICurrency>)!,
    currencyList: currencies as Array<ICurrency>,
    switchCurrency: () => set((state) => ({ baseCurrency: state.targetCurrency, targetCurrency: state.baseCurrency })),
    setCurrency: (place, currency) => {
      set((state) => {
        if (place === 'target') {
          if (currency === state.targetCurrency || currency === state.baseCurrency) {
            state.switchCurrency();
          } else {
            return { targetCurrency: currency };
          }
        } else if (place === 'base') {
          if (currency === state.baseCurrency || currency === state.targetCurrency) {
            state.switchCurrency();
          } else {
            return { baseCurrency: currency };
          }
        }
        return {};
      });
    },
  }))
);
