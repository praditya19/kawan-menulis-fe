<template>
  <div class="container">
    <div class="row">
      <div>
        <br /><br /><br /><br />

        <h1>Latihan Menulis</h1>

        <br />

        <!-- Stepper -->
        <div class="container-progress">
          <ul class="progressbar">
            <li class="active active-step">
              <label>Topik</label>
            </li>
            <li class="active active-step">
              <label>Pramenulis</label>
            </li>
            <li class="active active-step">
              <label>Menulis Kalimat Utama</label>
            </li>
            <li class="active active-step">
              <label>Pramenulis lanjutan</label>
            </li>
            <li class="active active-step">
              <label>Menulis Isi</label>
            </li>
            <li class="active active-step">
              <label>Pengorganisasian</label>
            </li>
            <li>
              <label>Menulis Kesimpulan</label>
            </li>
            <li>
              <label>Revisi</label>
            </li>
            <li>
              <label>Style</label>
            </li>
            <li>
              <label>Struktu Kalimat</label>
            </li>
            <li>
              <label>Grammar</label>
            </li>
            <li>
              <label>Pemeriksaan Akhir</label>
            </li>
            <li>
              <label>Final</label>
            </li>
            <li>
              <label>Cetak</label>
            </li>
          </ul>
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
        <br />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-family:  Poppins;
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

// Stepper 1 -7

.container-progress {
  margin: 100px auto;
  font-size: 16px;
  font-weight: bold;
  font-family:  Poppins;
  color: white;
  margin-top: 50px;
  padding: 0;
}

.progressbar {
  margin: 0 50px;
  padding: 0;
  counter-reset: step;
  position: relative;
  border: 2px solid #738ded;
  border-left: none;
  min-height: 200px;
}

.progressbar li {
  list-style-type: none;
  width: 16%;
  /*float: left;*/
  font-size: 16px;
  position: absolute;
  text-align: center;
  text-transform: capitalize;
}

/*First 4*/
.progressbar li:nth-child(-n + 7) {
  top: -46px;
}

/*Last 4*/
.progressbar li:nth-last-child(-n + 7) {
  bottom: -55px;
}

/*Left*/
.progressbar li:nth-child(1),
.progressbar li:nth-child(14) {
  left: -45px;
}

/*Middle*/
.progressbar li:nth-child(2),
.progressbar li:nth-child(13) {
  left: calc(15% - 45px);
}

/*Middle*/
.progressbar li:nth-child(3),
.progressbar li:nth-child(12) {
  left: calc(30% - 45px);
}

/*Right*/
.progressbar li:nth-child(4),
.progressbar li:nth-child(11) {
  left: calc(45% - 45px);
}

/*Right*/
.progressbar li:nth-child(5),
.progressbar li:nth-child(10) {
  left: calc(60% - 45px);
}

/*Right*/
.progressbar li:nth-child(6),
.progressbar li:nth-child(9) {
  left: calc(75% - 45px);
}

/*Right*/
.progressbar li:nth-child(7),
.progressbar li:nth-child(8) {
  left: calc(90% - 45px);
}
.progressbar li:nth-last-child(-n + 7):before,
.progressbar li:nth-child(-n + 7):after {
  width: 32px;
  height: 32px;
  content: counter(step);
  counter-increment: step;
  line-height: 30px;
  border: 2px solid #d4d4d4;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  padding: 0;
  border-radius: 50%;
  background-color: #d4d4d4;
  font-size: 16px;
  font-weight: bold;
}

/*.progressbar li:first-child:after {
  content: none;
}*/

.progressbar li.active {
  color: white;
}

.progressbar li.active:before,
.progressbar li.active:after {
  border-color: #d4d4d4;
  background: #738ded;
}

.progressbar li.active + li:after {
  background-color: dodgerblue;
}

.progressbar label {
  color: black;
}
</style>
