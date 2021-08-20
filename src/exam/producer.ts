import { Operation, Range } from '@lib/types/constants';
import { Formula } from '@lib/types/exams';

const randNum = (range: Range) => {
  const r = parseInt(range, 10);
  return Math.floor(Math.random() * r) + 1;
};

const count = (exam: Formula) => {
  switch (exam.Operator) {
    case Operation.add:
      return exam.A + exam.B;
    case Operation.sub:
      return exam.A - exam.B;
    case Operation.mul:
      return exam.A * exam.B;
    case Operation.div:
      return exam.A / exam.B;
    default:
      return 0;
  }
};

const validAnswer = (exam: Formula, range: Range) => {
  const a = exam.Answer;
  if (a >= 0 && a <= parseInt(range, 10) && a % 1 === 0) {
    return true;
  }
  return false;
};

const buildExam = (range: Range, operations: Operation[]): Formula => {
  const exam: Formula = {
    A: randNum(range),
    B: randNum(range),
    Operator: operations[Math.floor(Math.random() * operations.length)],
    Answer: 0
  };
  exam.Answer = count(exam);
  return validAnswer(exam, range) ? exam : buildExam(range, operations);
};

export const buildExams = (range: Range, operations: Operation[], acount: number) => {
  const exams: Formula[] = [];
  for (let i = 0; i < acount; i++) {
    exams.push(buildExam(range, operations));
  }
  return exams;
};
