import React, { FC, useState } from 'react';

import { PDFDocumentPanel } from '@lib/pdf';
import { Operation, Range } from '@lib/types/constants';
import { buildExams, FormattedExams } from './exam';
import styles from './styles.module.css';

const generatList = [
  {
    label: '10以内加法',
    range: Range.T,
    operators: [Operation.add],
    count: 10
  },
  {
    label: '10以内减法',
    range: Range.T,
    operators: [Operation.sub],
    count: 10
  },
  {
    label: '100以内加减法',
    range: Range.H,
    operators: [Operation.add, Operation.sub],
    count: 10
  },
  {
    label: '100以内乘法',
    range: Range.H,
    operators: [Operation.mul],
    count: 10
  },
  {
    label: '100以内除法',
    range: Range.H,
    operators: [Operation.div],
    count: 10
  }
];
export const AppPanel: FC<{}> = React.memo(() => {
  const [data, setData] = useState(buildExams(Range.T, [Operation.add], 10));
  return (
    <>
      {generatList.map(p => (
        <button
          key={p.label}
          type="button"
          onClick={() => setData(buildExams(p.range, p.operators, p.count))}
        >
          {p.label}
        </button>
      ))}
      <PDFDocumentPanel className={styles.mainBody} data={<FormattedExams exams={data} />} />
    </>
  );
});
