import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    margin: 10,
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontFamily: "Times-Bold",
    fontWeight: "bold",
    fontSize: 16,
  },
  section: {
    fontFamily: "Times-Roman",
    fontSize: 12,
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  table: {
    margin : 10,
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

// Create Document Component
function DokumenBulanan() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text>LAPORAN KEGIATAN MAGANG MBKM BULAN AGUSTUS 2023</Text>
            <Text>UNIVERSITAS AMIKOM YOGYAKARTA</Text>
            <Text>PROGRAM STUDI S1 INFORMATIKA</Text>
            <Text>TAHUN AJAR 2023/2024</Text>
          </View>
          <View style={styles.section}>
            <Text>Nama : Arifin Yunianta</Text>
            <Text>NIM: 18.11.2345</Text>
            <Text>Perusahaan : </Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Product</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Type</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Period</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Price</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>React-PDF</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>3 User </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5€</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default DokumenBulanan;
