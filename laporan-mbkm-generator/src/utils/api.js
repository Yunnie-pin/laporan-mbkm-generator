async function getProfile(token) {
    try {
        const response = await fetch(import.meta.env.VITE_URL_PROFILE, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
              }
            });
            //response status 200
            if (response.status !== 200) {
                return 'error';
            }else{
                const data = await response.json();
                return data.data;
            }
    } catch (error) {
        return 'error';
    }
}

async function getActiveKegiatan(token) {
    const response = await fetch(import.meta.env.VITE_URL_ACTIVITIES, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        });
        const data = await response.json();

        // console.log(data.data.filter((kegiatan) => {
        //     return kegiatan.activity_in_progress === true;
        // })[0]);

        //mengambil pertama yang didapatkan
        return data.data.filter((kegiatan) => {
            return kegiatan.activity_in_progress === true;
        })[0];

        
}

export { getProfile, getActiveKegiatan };