<template>
  <div class="container">
    <div class="row">
      <div>
        <br /><br /><br /><br /><br />

        <h1>Latihan Menulis</h1>

        <br />

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

        <!-- <br /><br /><br /><br /><br /> -->
        <div class="paragraf">
          <p>
            Sebelum menentukan topik harap memilih
            <strong>jenis paragraf</strong> dan <strong>topik</strong> terlebih
            dahulu.
          </p>
        </div>
        <!-- <br /> -->

        <div class="label1">
          <label><strong>Jenis Paragraf</strong></label>
        </div>

        <div class="pilih">
          <select>
            <option value="">Ekposisi</option>
            <option value="">Deskripsi</option>
          </select>
        </div>
        <br />

        <div class="label2">
          <label for=""><strong>Topik</strong></label>
        </div>
        <!-- <br> -->
        <div class="tengah">
          <div class="pilih2">
            <select>
              <option value=""
                >Apakah kamu punya kemahiran dalam membuat sesuatu? Coba
                sebutkan satu.</option
              >
            </select>
            <!-- <b-button v-b-modal.modal-lg  class="button">Tips</b-button> -->
            <b-button
              id="show-btn"
              class="button"
              @click="$bvModal.show('bv-modal-example')"
              >Tips</b-button
            >

            <!-- popup -->
            <div class="b-modal">
              <b-modal id="bv-modal-example" hide-footer hide-header-close>
                <template #modal-title>
                  <div class="image-container">
                    <img
                      src="@/assets/checklist.png"
                      style="text-align:center"
                    />
                  </div>
                </template>
                <div class="d-block text-center">
                  <p>
                    Topik ini akan memberimu kesempatan menulis cara melakukan
                    sesuatu yang kamu kuasai.
                  </p>
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
            </div>
          </div>
        </div>
        <br />

        <div class="mulai">
          <router-link to="topik2" type="button" class="button-mulai"
            >Mulai</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/topik.js"></script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-family:  Poppins;
  font-weight: 700;
  // background: red;
}
.p {
  margin-top: 1px;
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
  // background: red;
  // margin-top: -20px;
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

// Sebelum Menentukan Topik.....
.paragraf {
  font-family:  Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  // margin-top: -150px;
  // background: red;
}

// Jenis Paragraf
.label1 {
  // background: red;
  label {
    font-family:  Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-left: 185px;
  }
}

// Ekposisi
.pilih {
  // background: red;
  margin-top: 1px;
}
select {
  width: 300px;
  border: 1 px;
  background: #f4f4f4;
  font-size: 18px;
  font-family:  Poppins;
  padding: 5px;
  // margin-right: 300px;
  margin-left: 185px;
  // margin-right: 1%;
  border-radius: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
}

// Topik
.label2 {
  // background: red;
  label {
    font-family:  Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-left: 185px;
  }
}

.pilih2 {
  // background: red;
  margin-top: 1px;

  select {
    width: 800px;
    border: 1 px;
    background: #f4f4f4;
    font-size: 18px;
    font-family:  Poppins;
    padding: 5px;
    margin-left: 185px;
    border-radius: 4px;
  }
}

.button {
  background-color: #00a279;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 18px;
  margin-top: 5px;
  width: 115px;
  margin-left: 10px;
  margin-bottom: 5px;
}
.mulai {
  // background: red;
  text-align: center;
  .button-mulai {
    background-color: #0a4da3;
    border: none;
    color: white;
    padding: 10px 23px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 42px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 150px;
    // margin-left: 50%;
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
