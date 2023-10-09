import React from "react";
import sstoken from "../assets/sstoken.jpg";

function HintGetToken() {
  return (
    <>
      <h5 class="card-title">1. Buka dan Login di Web Kampus Merdeka</h5>
      <h5 class="card-title">2. Buka Console</h5>
      <p class="card-text">
        Klik kanan pada halaman web, lalu pilih inspect element, lalu pilih tab
        console atau tekan{" "}
        <kbd>
          <kbd>ctrl</kbd>+ <kbd>shift</kbd>+ <kbd>I</kbd> lalu pilih tab console
        </kbd>
      </p>
      <h5 class="card-title">3. Copy kode dibawah ini</h5>
      <p class="card-text">
        <div className="card">
          <div className="card-body">
            <code>
              function getCookie(namaCookie) &#123;
              <br />
              &nbsp;&nbsp;var cookies = document.cookie.split(';');
              <br />
              &nbsp;&nbsp;for (var i = 0; i &lt; cookies.length; i++) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;var cookie = cookies[i].trim();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;if (cookie.indexOf(namaCookie + "=") ===
              0) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
              cookie.substring(namaCookie.length + 1, cookie.length);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;return "Token tidak ditemukan, silahkan login terlebih dahulu";
              <br />
              &#125;
              <br />
              <br />
              // Menggunakan fungsi getCookie
              <br />
              var nilaiCookie = getCookie("mbkmtoken");
              <br />
              console.log("Nilai dari token adalah: " + nilaiCookie);
            </code>
          </div>
        </div>
      </p>
      <img src={sstoken} alt="sstoken" className="img-fluid" />
    </>
  );
}

export default HintGetToken;
