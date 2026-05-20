export interface LuckyNumberResult {
  luckyNumber: number;
  dateOfBirth: Date;
  calculationSteps: string[];
}

export type CalculationStatus = 'idle' | 'loading' | 'success' | 'error';

export interface CalculatorState {
  status: CalculationStatus;
  result: LuckyNumberResult | null;
  error: string | null;
}
