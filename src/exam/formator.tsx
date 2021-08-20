import React, { FC } from 'react';
import { Formula } from '@lib/types/exams';
import { Operation } from '@lib/types/constants';

const getOperator = (o: Operation) => {
  switch (o) {
    case Operation.add:
      return '+';
    case Operation.sub:
      return '-';
    case Operation.mul:
      return 'X';
    case Operation.div:
      return '/';
    default:
      return '?';
  }
};

export const FormattedExams: FC<{
  exams: Formula[];
}> = ({ exams }) => {
  return (
    <>
      {exams.map(e => {
        const op = getOperator(e.Operator);
        const a = e.A;
        const b = e.B;
        return `${a} ${op} ${b} = 
      `;
      })}
    </>
  );
};
