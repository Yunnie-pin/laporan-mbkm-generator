import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";
import { withCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { checkToken } from "../../utils/api";

import styles from "../../style/style";

const Br = () => "\n";

function DokumenBulanan(props) {
  const { cookies } = props;
  const [token, setToken] = useState(null);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const token = cookies.get("token");
    setToken(token);
    
    const login = checkToken(token);
    if (login.error) {
      cookies.remove("token");
      setToken(null);
      setLogin(null);
      return;
    }
  }, []);

  if (token === null) {
    return <>Silahkan masukkan token terlebih dahulu</>;
  }

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
            <View style={styles.bio}>
              <View style={styles.bioRow}>
                <View style={styles.bioCol1}>
                  <Text style={styles.tableCell}>Nama</Text>
                </View>
                <View style={styles.bioCol2}>
                  <Text style={styles.tableCell}>: Arifin Yunianta</Text>
                </View>
              </View>
              <View style={styles.bioRow}>
                <View style={styles.bioCol1}>
                  <Text style={styles.tableCell}>NIM</Text>
                </View>
                <View style={styles.bioCol2}>
                  <Text style={styles.tableCell}>: 18.11.2345</Text>
                </View>
              </View>
              <View style={styles.bioRow}>
                <View style={styles.bioCol1}>
                  <Text style={styles.tableCell}>Perusahaan</Text>
                </View>
                <View style={styles.bioCol2}>
                  <Text style={styles.tableCell}>: Beecons</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.fullColl}>
                <Text style={styles.tableHeader}>Keterangan</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.fullColl}>
                <Text style={styles.tableHeader}>1</Text>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableHeader}>No</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableHeader}>Tanggal</Text>
              </View>

              <View style={styles.tableCol3}>
                <Text style={styles.tableHeader}>Keterangan</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableHeader}>1</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>3 User </Text>
              </View>

              <View style={styles.tableCol3}>
                <Text style={styles.tableCell}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <Br /> Deleniti nobis ipsa nisi nulla animi? Voluptates
                  facilis quae eos, saepe nam aperiam animi fugiat sit beatae,
                  ab culpa mollitia delectus, adipisci sed explicabo? Ducimus
                  tenetur rerum minima impedit, provident reprehenderit nisi
                  unde porro, odit soluta cupiditate sapiente blanditiis vitae
                  sed labore atque distinctio.
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default withCookies(DokumenBulanan);
