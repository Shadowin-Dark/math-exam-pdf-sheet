import React, { FC } from 'react';

import { PDFDocumentPanel } from '@lib/pdf';
import { Operation, Range } from '@lib/types/constants';
import { buildExams, FormattedExams } from './exam';
import styles from './styles.module.css';

export const AppPanel: FC<{}> = React.memo(() => {
  const data = buildExams(Range.T, [Operation.add], 100);

  return (
    <>
      <PDFDocumentPanel className={styles.mainBody} data={<FormattedExams exams={data} />} />
    </>
  );
});
