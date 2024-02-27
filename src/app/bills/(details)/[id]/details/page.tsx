'use client'
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
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
type Props = { params: { id: string } }
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default function BillDetailPage({ params: { id: billId } }: Props) {
  console.log(`${__dirname}/bill${billId}.pdf`)
  console.log(billId)
  ReactPDF.render(<MyDocument />, `${__dirname}/bill${billId}.pdf`)

  return <h1 className="text-2xl">Bill Id {billId}</h1>
}
