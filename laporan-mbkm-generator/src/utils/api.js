async function checkToken(token) {
  try {
    const response = await fetch(import.meta.env.VITE_URL_PROFILE, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
    //response status 200
    if (response.status === 200) {
      return {
        status: "success",
        error: null,
      };
    } else {
      const data = await response.json();
      
      return {
        status: "error",
        error: data.error.message,
      };
    }
  } catch (error) {
    return "error";
  }
}

async function getProfile(token) {
  try {
    const response = await fetch(import.meta.env.VITE_URL_PROFILE, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
    //response status 200
    if (response.status === 200) {
      const data = await response.json();
      // console.log(data.error.message);
      return {
        data: data.data,
        error: null,
      };
    } else {
      const data = await response.json();
      return {
        data: null,
        error: data.error,
      };
    }

  } catch (error) {
    return "error";
  }
}

async function getActiveKegiatan(token) {
  const response = await fetch(import.meta.env.VITE_URL_ACTIVITIES, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();

  //mengambil pertama yang didapatkan
  // return data.data.filter((kegiatan) => {
  //   return kegiatan.activity_in_progress === true;
  // })[0];

  // mengambil terakhir yang didapatkan tanpa filter
  // return data.data[data.data.length - 1];

  //mengambil pertama yang didapatkan tanpa filter

  return data.data[0];
}

async function getGithubProfile() {
  const response = await fetch(`https://api.github.com/users/yunnie-pin`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}

async function getRepository() {
  const response = await fetch(
    `https://api.github.com/repos/Yunnie-pin/laporan-mbkm-generator`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}

async function getReport(idKegiatan, token) {
  const response = await fetch(
    import.meta.env.VITE_URL_REPORT + "/" + idKegiatan,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await response.json();

  const dataBulanan = []

  data.data.forEach((report) => {
    const date = new Date(report.start_date)
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()
    const monthYear = month + ' ' + year

    const index = dataBulanan.findIndex((data) => {
      return data.monthYear === monthYear
    })

    if (index === -1) {
      dataBulanan.push({
        monthYear: monthYear,
        data: [report]
      })
    } else {
      dataBulanan[index].data.push(report)
    }
  });

  return dataBulanan;
}

export {
  checkToken,
  getProfile,
  getActiveKegiatan,
  getGithubProfile,
  getRepository,
  getReport,
};
