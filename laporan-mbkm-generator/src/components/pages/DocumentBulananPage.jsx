import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";
import { withCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { checkToken } from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import { getProfile, getActiveKegiatan, getReport } from "../../utils/api";
import React from "react";

import styles from "../../style/style";

const Br = () => "\n";

function DokumenBulananWrapper(props) {
  const [searchParams] = useSearchParams();
  const [cookies] = useState(props.cookies);

  const [token, setToken] = useState(null);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const token = cookies.get("token");
    setToken(token);
    const login = checkToken(token);
    setLogin(login);
    // const profile = getProfile(token);
    // setProfile(profile);
    // console.log(profile);
    if (login.error) {
      cookies.remove("token");
      setToken(null);
      setLogin(null);
      return;
    }
  }, []);

  const type = searchParams.get("type");
  const filter = searchParams.get("filter");

  if (token === null) {
    return <>Silahkan masukkan token terlebih dahulu</>;
  }

  function renderDocument() {
    if (type === "bulanan") {
      return <DokumenBulanan cookies={cookies} filter={filter} />;
    } else if (type === "mingguan") {
      return <>Progress coy...</>;
    } else {
      return <>Tidak ada dokumen yang dipilih</>;
    }
  }

  return <div>{renderDocument()}</div>;
}

class DokumenBulanan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      kegiatan: null,
      report: null,
    };
  }

  async componentDidMount() {
    const { cookies } = this.props;
    const profile = await getProfile(cookies.get("token"));
    this.setState({
      profile: profile,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.profile !== this.state.profile) {
      const { cookies } = this.props;
      const kegiatan = await getActiveKegiatan(cookies.get("token"));
      const report = await getReport(kegiatan.id, cookies.get("token"));
      this.setState({
        kegiatan: kegiatan,
        report: report,
      });
    }
  }

  render() {
    if (this.state.profile == null) {
      return <>Loading...</>;
    } else {
      if (this.state.profile.data == null) {
        return <>Token Invalid...</>;
      } else {
        return (
          <PDFViewer style={styles.viewer}>
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                  <Text>
                    LAPORAN KEGIATAN MAGANG MBKM{" "}
                    {this.props.filter ? `Bulan ${this.props.filter}` : ``}
                  </Text>
                  <Text>
                    {this.state.profile ? this.state.profile.data.pt_name : ``}
                  </Text>
                  <Text>
                    PROGRAM STUDI{" "}
                    {this.state.profile
                      ? this.state.profile.data.jenjang_name
                      : ``}{" "}
                    {this.state.profile
                      ? this.state.profile.data.prodi_name
                      : ``}
                  </Text>
                  <Text>
                    TAHUN AJAR {new Date().getFullYear()}/
                    {new Date().getFullYear() + 1}
                  </Text>
                </View>
                <View style={styles.section}>
                  <View style={styles.bio}>
                    <View style={styles.bioRow}>
                      <View style={styles.bioCol1}>
                        <Text style={styles.tableCell}>NAMA</Text>
                      </View>
                      <View style={styles.bioCol2}>
                        <Text style={styles.tableCell}>
                          :{" "}
                          {this.state.profile
                            ? this.state.profile.data.name
                            : ``}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.bioRow}>
                      <View style={styles.bioCol1}>
                        <Text style={styles.tableCell}>NIM</Text>
                      </View>
                      <View style={styles.bioCol2}>
                        <Text style={styles.tableCell}>
                          :{" "}
                          {this.state.profile
                            ? this.state.profile.data.nim
                            : ``}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.bioRow}>
                      <View style={styles.bioCol1}>
                        <Text style={styles.tableCell}>Perusahaan</Text>
                      </View>
                      <View style={styles.bioCol2}>
                        <Text style={styles.tableCell}>
                          :{" "}
                          {this.state.kegiatan
                            ? this.state.kegiatan.mitra_brand_name
                            : ``}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* <View style={styles.table}>
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
                </View> */}

                <TabelLaporan report={
                  (this.state.report && this.props.filter) ? this.state.report.filter((item) => {
                    return item.monthYear === this.props.filter;
                  }) : this.state.report
                } />
              </Page>
            </Document>
          </PDFViewer>
        );
      }
    }
  }
}

const TabelLaporan = (props) => {
  const { report } = props;
  return (
    <View>
      {report
        ? report.map((item, index) => {
            return (
              <>
                <TabelLaporanBulanan data={item} key={index} />;
              </>
            );
          })
        : ``}
    </View>
  );
};

const TabelLaporanBulanan = (props) => {
  const { data } = props;
  return (
    <>
      <Text style={styles.monthYear}>{data.monthYear}</Text>
      {data.data ? (
        data.data.map((item, index) => {
          return <TabelLaporanMingguan data={item} key={index} />;
        })
      ) : (
        <Text style={styles.tableCell}>Tidak ada data</Text>
      )}
    </>
  );
};

const TabelLaporanMingguan = (props) => {
  const { data } = props;
  return (
    <>
      <Text style={styles.week}>Minggu ke-{data.counter}</Text>
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
        {data.daily_report ? (
          data.daily_report.map((item, index) => {
            return <TabelLaporanHarian data={item} key={index} />;
          })
        ) : (
          <Text style={styles.tableCell}>Tidak ada data</Text>
        )}
      </View>
    </>
  );
};

const TabelLaporanHarian = (props) => {
  const { data, key } = props;
  return (
    <View style={styles.tableRow}>
      <View style={styles.tableCol1}>
        <Text style={styles.tableHeader}>{data.counter}</Text>
      </View>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>
          (
          {new Date(data.report_date).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          )
        </Text>
      </View>

      <View style={styles.tableCol3}>
        <Text style={styles.tableCell}>
          {data.report ? data.report : `Tidak ada laporan`}
        </Text>
      </View>
    </View>
  );
};

export default withCookies(DokumenBulananWrapper);
