<template>
  <div class="container">
    <div class="row">
      <div>
        <br /><br /><br /><br />
        <h1>Latihan Menulis</h1>

        <!-- Steper Utama -->
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
      </div>

      <div class="paragraf">
        <p>
          Sebelum menentukan topik harap memilih
          <strong>jenis paragraf</strong> dan <strong>topik</strong> terlebih
          dahulu.
        </p>
      </div>

      <div class="label">
        <label for=""><strong>Jenis Paragraf</strong></label>
      </div>

      <div class="pilih">
        <div class="select-pilih">
          <select>
            <option value="">Ekposisi</option>
            <option value="">Deskripsi</option>
          </select>
        </div>
      </div>

      <div class="label2">
        <label for=""><strong>Topik</strong></label>
      </div>

      <div class="pilih2">
        <div class="select-pilih2">
          <select>
            <option value=""
              >Apakah kamu punya kemahiran dalam membuat sesuatu? Coba sebutkan
              satu.</option
            >
          </select>
          <button
            type="button"
            onclick="alert('Topik ini akan memberimu kesempatan menulis cara melakukan sesuatu yang kamu kuasai.')"
            class="btn"
          >
            Tips
          </button>
        </div>
      </div>

      <div class="warp">
        <div class="item">
          <a href="/topik2">
            <button class="button">Mulai</button>
          </a>
        </div>
      </div>

      <!-- <div class="popup" id="popup-1">
  <div class="overlay"></div>
  <div class="content3">
    <div class="close-btn" onclick="togglePopup()">&times;</div>
    <img src="@/assets/checklist.png" alt="">
    <p>Topik ini akan memberimu kesempatan menulis cara melakukan sesuatu yang kamu kuasai.</p>
  </div>
</div>
<button onclick="togglePopup()">Mulai</button> -->
    </div>
  </div>
</template>

<script src="./js/topik.js"></script>

// Style CSS

<style lang="scss" scoped="scoped">
// Latihan Menulis
h1 {
  // font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 128%;
  text-align: center;
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
  // border-color: #738DED;
  background-color: #738ded;
}
.progressbar1 li.active + li:after {
  background-color: #738ded;
}
// garis vertikal
.grsver {
  border-left: 1px solid #d4d4d4;
  height: 110px;
  position: absolute;
  left: 82%;
  top: 32.5%;
}
.grshor1 {
  background-color: #d4d4d4;
  display: block;
  width: 50px;
  height: 1px;
  content: "";
  position: absolute;
  right: 227px;
  top: 32.5%;
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
  top: 51%;
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
  color: #738ded;
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

// Sebelum Menentukan Topik.....
.paragraf {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-top: 20px;
}
// Jenis Paragraf
.label {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-left: 220px;
}
// Topik
.label2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-left: 220px;
  margin-top: 20px;
}
// Ekposisi
.pilih {
  width: 60%;
  margin: 0 auto 5px 220px;
}
.select-pilih {
  padding: 0px;
  border: 1px;
}
.select-pilih select {
  width: 55%;
  border: 1 px;
  background: #f4f4f4;
  font-size: 18px;
  font-family: Poppins, Arial;
  padding: 5px;
}

// Apakah kamu punya kemahiran....
.pilih2 {
  width: 200%;
  margin: 0 auto 5px 220px;
}
.select-pilih2 {
  padding: 0px;
  border: 1px;
}
.select-pilih2 select {
  width: 65%;
  border: 1 px;
  background: #f4f4f4;
  font-size: 18px;
  font-family: Poppins, Arial;
  padding: 5px;
}
// Button Tips
.btn {
  background-color: #00a279;
  color: white;
  border-radius: 10px;
  margin: 0 auto 10px 23px;
  width: 6%;
}
// Button Mulai
.button {
  display: block;
  border: 0;
  font-size: 18px;
  text-align: center;
  line-height: 1;
  margin: 0 auto 15px auto;
  padding: 10px 30px;
  border-radius: 30px;
  background: #0a4da3;
  color: white;
  width: 12%;
}
// Popup
.popup .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #e8f1fd;
  z-index: -1;
  display: none;
}
.popup .content3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  background: #fff;
  width: 450px;
  height: 220px;
  z-index: 2;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
.popup .close-btn {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  background: #222;
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
}
.popup.active .overlay {
  display: block;
}
.popup.active .content3 {
  transition: all 300ms ease-in-out;
  transform: translate(-50%, -50%) scale(1);
}
</style>
