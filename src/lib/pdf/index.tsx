import React, { FC } from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const PDFDocument: FC<{
  data: React.ReactElement;
}> = ({ data }) => (
  <Document>
    <Page size="A4" style={pdfStyles.page}>
      <View style={pdfStyles.section}>
        <Text>{data}</Text>
      </View>
    </Page>
  </Document>
);

export const PDFDocumentPanel: FC<{
  data: React.ReactElement;
  className?: string;
}> = ({ data, className }) => {
  return (
    <PDFViewer className={className}>
      <PDFDocument data={data} />
    </PDFViewer>
  );
};
