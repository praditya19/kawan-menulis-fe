<template>
  <div>
    <br /><br /><br /><br /><br />
    <div>
      <!-- Clone -->
      <div class="tips1">
        <b-button
          id="show-btn"
          class="tips1_judul"
          @click="$bvModal.show('bv-modal-example1')"
          >Tips</b-button
        >

        <!-- popup -->
        <b-modal id="bv-modal-example1" hide-footer hide-header-close>
          <template #modal-title>
            <div class="image-container1">
              <img src="@/assets/checklist.png" style="text-align:center" />
            </div>
          </template>
          <div class="d-block text-center">
            <p>
              Jika ingin mengganti jenis dan topik paragraf, silahkan klik
              tombol panah kiri.
            </p>
          </div>
          <div class="ok-judul">
            <b-button
              class="mt-judul"
              block
              @click="$bvModal.hide('bv-modal-example1')"
              >OK</b-button
            >
          </div>
        </b-modal>
        <h1 class="tips1_kata1">Latihan Menulis</h1>
      </div>
    </div>
    <br />

    <div class="container">
      <div class="row">
        <!-- Stepper -->
        <div class="container-progress">
          <ul class="progressbar">
            <li class="active active-step">
              <label>Topik</label>
            </li>
            <li>
              <label>Pramenulis</label>
            </li>
            <li>
              <label>Menulis Kalimat Utama</label>
            </li>
            <li>
              <label>Pramenulis lanjutan</label>
            </li>
            <li>
              <label>Menulis Isi</label>
            </li>
            <li>
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
      </div>
    </div>

    <!-- Jenis Paragraf -->

    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <br />
    <!-- Button Tips -->
    <div class="tips">
      <b-button
        id="show-btn"
        class="tips_btn"
        @click="$bvModal.show('bv-modal-example')"
        >Tips</b-button
      >

      <!-- popup -->
      <b-modal id="bv-modal-example" hide-footer hide-header-close>
        <template #modal-title>
          <div class="image-container">
            <img src="@/assets/checklist.png" style="text-align:center" />
          </div>
        </template>
        <div class="d-block text-center">
          <p>Ide lainnya:</p>
          <p>Cara membuat layang-layang</p>
          <p>Cara membuat kompos</p>
          <p>Cara memasak telur dadar</p>
          <p>Cara membersihkan noda dari pakaian</p>
        </div>
        <div class="ok">
          <b-button
            class="mt-3"
            block
            @click="$bvModal.hide('bv-modal-example')"
            >OK</b-button
          >
        </div>
      </b-modal>
      <h6 class="tips_kata">
        Kamu hendak menjelaskan cara melakukan sesuatu yang sangat kamu kuasai.
      </h6>
    </div>

    <!-- Cara apa yang ...... -->
    <div class="content-cara">
      <h6>Cara apa yang ingin kamu uraikan itu?</h6>
      <h6>Contoh:</h6>
      <ul>
        <li><h6>Cara membuat kopi hitam yang nikmat</h6></li>
        <li><h6>Cara menanam sayur sawi</h6></li>
        <li><h6>Cara membuat media salindia yang menarik</h6></li>
      </ul>
    </div>
    <br /><br />
    <!-- Gunakan kalimat klausa -->
    <div class="content-form">
      <form>
        <table>
          <tr>
            <label><h6>Gunakan kalimat atau klausa sederhana</h6></label
            ><br />
          </tr>
          <tr>
            <td>
              <input
                style="width:900px"
                type="text"
                placeholder="Cara Membuat Kopi"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>

    <br />
    <!-- Button Back OK -->
    <div class="btn-back-ok">
      <a href="/topik">
        <img src="@/assets/back.png" alt="logo" class="img" />
      </a>
      <a href="https://www.google.com/">
        <b-button class="ok">OK</b-button>
      </a>
    </div>
  </div>
</template>

<script src="./js/topik2.js"></script>

<style lang="scss" scoped>
// Tombol judul
.tips1 {
  // background: red;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 5px;
    width: 115px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
  &_kata1 {
    padding: 11px 0px 0px 20px;
    // text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
  }
}

.ok-judul {
  // background: red;

  .mt-judul {
    // margin-bottom: 10px;
    background: #0a4da3;
    margin: 0px 0px 5px 180px;
    border-radius: 39px;
    width: 108px;
  }
}

// icon checklist
.image-container1 {
  width: 470px;
  text-align: center;
  // background: red;
}

// Stepper 1 -7

.container-progress {
  margin: 100px auto;
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins;
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
  // background: red;
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

// .progressbar li.active + li:after {
//   // background-color: dodgerblue;
// }

.progressbar label {
  color: black;
}

// Jenis Paragaf.....
.content-center {
  background: rgba(139, 181, 236, 0.1);
  text-align: center;
  font-size: 16px;
}

.center {
  display: flex;
  max-width: 1440px;
  height: 49px;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  &_paragraf {
    padding: 11px 0px 0px 200px;
  }
  &_topik {
    padding: 11px 0px 0px 70px;
  }
}

// Tombol Tips Content Center
.tips {
  // background: red;
  margin-left: 60px;
  font-size: 16px;
  display: flex;
  &_btn {
    // padding: 11px 0px 0px 200px;
    text-align: center;
    width: 120px;
    border-radius: 10px;
    background: #00a279;
  }
  &_kata {
    padding: 11px 0px 0px 20px;
  }
}
.content-cara {
  // background: red;
  margin-left: 200px;
}

.content-form {
  // background: red;
  margin-left: 200px;
  // width: 100px;
}

.btn-back-ok {
  // background: red;
  margin-bottom: 10px;
  margin-left: 550px;
  .img {
    // margin-left: 10px;
  }
  .ok {
    margin-left: 50px;
    border-radius: 42px;
    width: 120px;
    background: #0a4da3;
  }
}

// popup tips
.ok {
  // background: red;

  .mt-3 {
    // margin-bottom: 10px;
    background: #0a4da3;
    margin: 0px 0px 5px 180px;
    border-radius: 39px;
    width: 108px;
  }
}

// icon checklist
.image-container {
  width: 470px;
  text-align: center;
  // background: red;
}
</style>
