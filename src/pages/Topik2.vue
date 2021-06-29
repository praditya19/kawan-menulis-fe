<template>
  <div class="container">
    <div class="row">
      <div>
        <br /><br /><br /><br />

        <h1><b-button>Tips</b-button>Latihan Menulis</h1>

        <br />

        <!-- Stepper -->
        <div class="container">
          <div class="progressbar1">
            <ul>
              <li class="active">Topik</li>
              <li>Pramenulis</li>
              <li>Menulis Kalimat Utama</li>
              <li>Pramenulis lanjutan</li>
              <li>Menulis Isi</li>
              <li>Pengorganisasian</li>
              <li>Menulis Kesimpulan</li>
            </ul>
          </div>
        </div>

        <div class="grsver"></div>
        <div class="grshor1"></div>
        <div class="grshor2"></div>

        <br /><br /><br /><br />
        <div class="container2">
          <div class="progressbar2">
            <ul>
              <li>Revisi</li>
              <li>Style</li>
              <li>Struktu Kalimat</li>
              <li>Grammar</li>
              <li>Pemeriksaan Akhir</li>
              <li>Final</li>
              <li>Cetak</li>
            </ul>
          </div>
        </div>
        <!-- End Stepper  -->

        <br /><br /><br /><br /><br />
        <div class="satu">
          <p>
            <strong>Jenis Paragraf</strong>: Deskripsi <strong>Topik</strong>:
            Apakah kamu punya kemahiran dalam membuat sesuatu? Coba sebutkan
            satu.
          </p>
        </div>

        <h6>
          <b-button class="btn">Tips</b-button> Kamu hendak menjelaskan cara
          melakukan sesuatu yang sangat kamu kuasai.
        </h6>

        <div class="dua">
          <h6>Cara apa yang ingin kamu uraikan itu?</h6>
          <h6>Contoh:</h6>
          <ul>
            <li><h6>Cara membuat kopi hitam yang nikmat</h6></li>
            <li><h6>Cara menanam sayur sawi</h6></li>
            <li><h6>Cara membuat media salindia yang menarik</h6></li>
          </ul>
        </div>

        <div class="tiga">
          <form action="">
            <table>
              <tr>
                <label><h6>Gunakan kalimat atau klausa sederhana</h6></label
                ><br />
              </tr>
              <tr>
                <td>
                  <input
                    style="width:600px"
                    type="text"
                    placeholder="Cara Membuat Kopi"
                  />
                </td>
              </tr>
            </table>
          </form>
        </div>
        <br />
        <div class="empat">
          <a href="/topik">
            <img src="@/assets/Shape.png" alt="logo" class="img" />
          </a>
          <a href="https://www.google.com/">
            <b-button id="ok">OK</b-button>
          </a>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script src="./js/topik2.js"></script>

<style lang="scss" scoped>
h1 {
  // text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 120px;
  font-weight: 800;
}
.p {
  margin-top: 1px;
}
.satu {
  text-align: center;
  background: rgba(139, 181, 236, 0.1);
}
.satu strong {
  margin-left: 100px;
}
.dua {
  margin-left: 260px;
}
.tiga {
  margin-left: 260px;
}
.empat {
  margin-left: 500px;
}
#ok {
  margin-left: 50px;
  background: #0a4da3;
  width: 20%;
  border-radius: 20px;
  padding: 5px;
}
// Stepper 1 -7
.container {
  width: 100%;
}
.progressbar1 {
  counter-reset: step;
}
.progressbar1 li {
  list-style-type: none;
  float: left;
  width: 12.5%;
  position: relative;
  text-align: center;
}
.progressbar1 li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: #d4d4d4;
  color: white;
}
.progressbar1 li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar1 li:first-child:after {
  content: none;
}
.progressbar1 li {
  color: #d4d4d4;
}
.progressbar1 li.active {
  color: black;
}
.progressbar1 li.active:before {
  //   border-color: #738DED;
  background-color: #738ded;
}
.progressbar1 li.active + li:after {
  //   background-color: #738DED;
}
// garis vertikal
.grsver {
  border-left: 1px solid #d4d4d4;
  height: 114px;
  position: absolute;
  left: 82%;
  top: 34%;
}
.grshor1 {
  background-color: #d4d4d4;
  display: block;
  width: 50px;
  height: 1px;
  content: "";
  position: absolute;
  right: 227px;
  top: 34%;
  z-index: -1;
}
.grshor2 {
  background-color: #d4d4d4;
  display: block;
  width: 50px;
  height: 1px;
  content: "";
  position: absolute;
  right: 227px;
  top: 52.5%;
  z-index: -1;
}
// Stepper 8-14
.container2 {
  width: 100%;
}
.progressbar2 {
  counter-reset: step2 7;
  margin-right: 150px;
  margin-left: -110px;
}
.progressbar2 li {
  list-style-type: none;
  float: right;
  width: 12.5%;
  position: relative;
  text-align: center;
}
.progressbar2 li:before {
  content: counter(step2);
  counter-increment: step2 1;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: #d4d4d4;
  color: white;
}
.progressbar2 li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar2 li:last-child:after {
  content: none;
}
.progressbar2 li.active {
  background-color: #738ded;
}
.progressbar2 li {
  color: #d4d4d4;
}
.progressbar2 li.active:before {
  border-color: #738ded;
}
.progressbar2 li.active + li:after {
  background-color: #738ded;
}
// btn tips
.btn {
  background-color: #00a279;
  color: white;
  border-radius: 10px;
  width: 7%;
  padding: 2px;
  margin-left: 165px;
  margin-right: 10px;
}
</style>
