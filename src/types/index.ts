export interface ICurrency {
  code: string;
  name?: string;
  country?: string;
  countryCode?: string;
  flag: string;
  currency?: string;
}

export type CurrecyPossition = 'base' | 'target';
