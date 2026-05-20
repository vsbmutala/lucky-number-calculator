'use client';

import { useState, useCallback } from 'react';
import { calculateLuckyNumber, isValidDateOfBirth } from '@/lib/luckyNumberCalculator';
import { CalculatorState, LuckyNumberResult, CalculationStatus } from '@/types';

export function useLuckyNumberCalculator() {
  const [state, setState] = useState<CalculatorState>({
    status: 'idle',
    result: null,
    error: null,
  });

  const calculate = useCallback(async (dateOfBirth: Date) => {
    // Validate date
    if (!isValidDateOfBirth(dateOfBirth)) {
      setState({
        status: 'error',
        result: null,
        error: 'Please enter a valid date of birth (must be in the past)',
      });
      return;
    }

    // Set loading state
    setState({
      status: 'loading',
      result: null,
      error: null,
    });

    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const luckyNumber = calculateLuckyNumber(dateOfBirth);
      
      // Generate calculation steps for display
      const year = dateOfBirth.getFullYear();
      const month = String(dateOfBirth.getMonth() + 1).padStart(2, '0');
      const day = String(dateOfBirth.getDate()).padStart(2, '0');
      const dateString = `${year}${month}${day}`;
      
      const steps: string[] = [];
      steps.push(`Date: ${year}-${month}-${day}`);
      steps.push(`Digits: ${dateString.split('').join(' + ')}`);
      
      let sum = 0;
      for (const char of dateString) {
        sum += parseInt(char, 10);
      }
      steps.push(`First sum: ${sum}`);
      
      while (sum >= 10) {
        let newSum = 0;
        const sumString = sum.toString();
        steps.push(`${sumString.split('').join(' + ')}`);
        for (const char of sumString) {
          newSum += parseInt(char, 10);
        }
        sum = newSum;
        steps.push(`Next sum: ${sum}`);
      }

      const result: LuckyNumberResult = {
        luckyNumber: sum,
        dateOfBirth,
        calculationSteps: steps,
      };

      setState({
        status: 'success',
        result,
        error: null,
      });
    } catch (error) {
      setState({
        status: 'error',
        result: null,
        error: 'An error occurred while calculating your lucky number',
      });
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      status: 'idle',
      result: null,
      error: null,
    });
  }, []);

  return {
    state,
    calculate,
    reset,
  };
}
