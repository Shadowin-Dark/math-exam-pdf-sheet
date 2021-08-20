import { Operation } from './constants';

export interface Formula {
  A: number;
  B: number;
  Operator: Operation;
  Answer: number;
}
