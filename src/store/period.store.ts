import { create } from 'zustand';
import type { Period } from '../types/data';

interface PeriodState {
  period: Period;
  setPeriod: (newPeriod: Period) => void
}

export const usePeriodStore = create<PeriodState>((set)=>({
  period: 'daily',
  setPeriod: (newPeriod: Period) => set(()=>({
    period: newPeriod
  }))
}));