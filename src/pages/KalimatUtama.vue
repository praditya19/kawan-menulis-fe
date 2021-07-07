<template>
  <div class="all">
    <div class="judul">
      <p>Latihan Menulis</p>
    </div>

    <!-- Stepper -->
    <div class="container-progress">
      <ul class="progressbar">
        <li class="active active-step">
          <label>Topik</label>
        </li>
        <li class="active active-step">
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
    <!-- End Stepper -->

    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <!-- modal -->
    <!-- page1 -->
    <b-modal
      id="modal-page1"
      hide-footer
      hide-header-close
      hide-header
      no-close-on-backdrop
    >
      <div class="image-container">
        <img src="@/assets/checklist.png" />
      </div>
      <br />
      <p class="mb-4">
        Harap gunakan tanda baca penutup kalimat dengan benar, dan pastikan
        kalimat dimulai dengan huruf kapital.
      </p>
      <div class="ok">
        <b-button class="mt-3" block @click="$bvModal.hide('modal-page1')"
          >OK</b-button
        >
      </div>
    </b-modal>

    <!-- page2 -->
    <b-modal
      id="modal-page2"
      hide-footer
      hide-header-close
      hide-header
      no-close-on-backdrop
    >
      <div class="image-container">
        <img src="@/assets/checklist.png" />
      </div>
      <br />
      <p class="mb-4">
        Kalimat utama mengandung topik yang hendak kamu tulis.
      </p>
      <div class="ok">
        <b-button class="mt-3" block @click="$bvModal.hide('modal-page2')"
          >OK</b-button
        >
      </div>
    </b-modal>

    <!-- page3 -->
    <b-modal
      id="modal-page3"
      hide-footer
      hide-header-close
      hide-header
      no-close-on-backdrop
    >
      <div class="image-container">
        <img src="@/assets/checklist.png" />
      </div>
      <br />
      <p class="mb-4">
        Kalimat utama yang kamu tulis harus menggambarkan ide utama
        paragrafmu:<strong> Cara membuat kopi</strong><br />
        <code>(Ambil dari Topik Input 1)</code>
      </p>
      <div class="ok">
        <b-button
          class="mt-3"
          block
          @click="$bvModal.hide('modal-page3') == $bvModal.show('modal-page1')"
          >OK</b-button
        >
      </div>
    </b-modal>

    <!-- page4 -->
    <b-modal
      id="modal-page4"
      hide-footer
      hide-header-close
      hide-header
      no-close-on-backdrop
    >
      <div class="image-container">
        <img src="@/assets/checklist.png" />
      </div>
      <br />
      <p class="mb-4">
        Lengkapi kalimat di dalam kotak masukan menjadi kalimat utama yang baik.
      </p>
      <div class="ok">
        <b-button class="mt-3" block @click="$bvModal.hide('modal-page4')"
          >OK</b-button
        >
      </div>
    </b-modal>

    <!-- page5 -->
    <b-modal
      id="modal-page5"
      hide-footer
      hide-header-close
      hide-header
      no-close-on-backdrop
    >
      <div class="image-container">
        <img src="@/assets/checklist.png" />
      </div>
      <br />
      <p class="mb-4">
        Contoh kalimat utama: <br />
        Saya sangat mahir dalam membuat media <br />
        salindia yang menarik.
      </p>
      <div class="ok">
        <b-button class="mt-3" block @click="$bvModal.hide('modal-page5')"
          >OK</b-button
        >
      </div>
    </b-modal>
    <!-- penutup modal -->

    <!-- kalimatutama page 1 -->
    <div class="page1" v-if="kalimatUtamaPage1 === true">
      <div class="tengah">
        <p class="tengah_tips" @click="$bvModal.show('modal-page2')">TIPS</p>
        <p class="tengah_text">
          Mari mulai paragrafmu dengan sebuah kalimat utama.<br />
          Kalimat utama adalah kalimat yang mengandung topik/ide tulisanmu.
          Kalimat utama pada umumnya berada di awal paragraf.
        </p>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page1Next">
          OK
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 1 -->

    <!-- kalimat utama page 2 -->
    <div class="page2" v-if="kalimatUtamaPage2 === true">
      <div class="tengah">
        <p class="tengah_tips" @click="$bvModal.show('modal-page3')">TIPS</p>
        <p class="tengah_text2">
          Berikut ini sebuah contoh kalimat utama tentang cara melakukan sesuatu
          yang sangat kamu kuasai. <br />
          <strong
            >Saya sangat mahir dalam membuat media salindia yang
            menarik.</strong
          >
        </p>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page2Next">
          OK
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 2 -->

    <!-- kalimat utama page 3 -->
    <div class="page3" v-if="kalimatUtamaPage3 === true">
      <div class="tengah">
        <p class="tengah_tips3" @click="$bvModal.show('modal-page4')">TIPS</p>
        <p class="tengah_text">
          Kamu juga dapat memulai paragrafmu dengan melihat kata-kata yang kamu
          miliki di kotak masukan. Silakan latihan dengan mengubah kata atau
          klausa itu menjadi kalimat awal yang baik. Pada halaman selanjutnya,
          kamu akan menulis kalimat utamamu sendiri.
        </p>
      </div>
      <div class="tengah_bawah">
        <p class="tengah_bawah_text-bawah">
          Lengkapi kalimat di bawah ini menjadi kalimat utama yang baik.
        </p>
        <b-form-input class="tengah_bawah_form"></b-form-input>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page3Next">
          OK
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 3 -->

    <!-- kalimat utama page 4 -->
    <div class="page4" v-if="kalimatUtamaPage4 === true">
      <div class="tengah">
        <p class="tengah_tips" @click="$bvModal.show('modal-page5')">TIPS</p>
        <p class="tengah_text">
          Sekarang tulislah kalimat utama untuk memulai paragrafmu. Kalimat itu
          harus berisi topik yang ingin kamu jelaskan dalam paragraf ya....
          <br />
          Klik Tips untuk melihat contoh kalimat utama.
        </p>
      </div>
      <div class="tengah_bawah">
        <b-form-input class="tengah_bawah_form4"></b-form-input>
      </div>

      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page4Next">
          OK
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 4 -->

    <div class="gabungan">
      <div class="catatan">
        <p>Catatan Pra Menulis</p>
      </div>
      <div class="daftar">
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="@/pages/js/kalimatUtama.js" />

<style lang="scss" scoped>
// .all {
// }

.judul {
  padding: 100px 0px 20px 0px;
  p {
    width: 100%;
    font-size: 50px;
    font-weight: 700;
    font-family:  Poppins;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
}

.center {
  display: flex;
  width: 100%;
  height: 50px;
  // position: absolute;
  font-size: 16px;
  padding-top: 12px;
  background-color: rgba(139, 181, 236, 0.1);
  &_paragraf {
    margin-left: 200px;
  }
  &_topik {
    margin-left: 70px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cornflowerblue;
    &_paragraf {
      width: 50%;
    }

    &_topik {
      width: 50%;
    }
  }
}

// page 1 & 3
.tengah {
  // padding: 70px 0px 0px 210px;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  // button tips
  &_tips {
    width: 98px;
    height: 32px;
    border-radius: 10px;
    text-align: center;
    background-color: #00a279;
    color: #fff;
    font-size: 20px;
    margin-bottom: 60px;
    cursor: pointer;
  }

  &_tips3 {
    width: 98px;
    height: 32px;
    border-radius: 10px;
    text-align: center;
    background-color: #00a279;
    color: #fff;
    font-size: 20px;
    margin-bottom: 90px;
    cursor: pointer;
  }

  // text page 1
  &_text {
    margin-left: 30px;
    width: 48%;
    font-family:  Poppins;
    font-size: 20px;
  }

  // text page 2
  &_text2 {
    margin-left: 30px;
    width: 48%;
    font-family:  Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
  }
}

// page 3 & 4
.tengah_bawah {
  padding: 0px 0px 25px 415px;
  font-weight: 400;
  &_text-bawah {
    width: 69.3%;
    height: 90px;
    font-family:  Poppins;
    font-size: 20px;
    letter-spacing: 0em;
    text-align: left;
    font-weight: 400;
  }

  &_form {
    margin-top: -70px;
    height: 59px;
    width: 69.3%;
    background: #fafafa;
    border: 2px solid #0a4da3;
    box-sizing: border-box;
    border-radius: 4px;
  }

  &_form4 {
    margin-top: 0px;
    height: 59px;
    width: 69.3%;
    background: #fafafa;
    border: 2px solid #0a4da3;
    box-sizing: border-box;
    border-radius: 4px;
  }
}

.Button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  .button {
    background-color: #0a4da3;
    border: none;
    color: white;
    text-decoration: none;
    width: 110px;
    height: 44px;
    display: inline-block;
    cursor: pointer;
    border-radius: 44px;
    display: flex;
    position: relative;
    font-size: 20px;
  }

  .button:hover {
    background-color: #0a4da3;
    color: #fff;
  }

  @media (max-width: 768px) {
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.gabungan {
  padding: 69px 0px 80px 259px;
  .catatan {
    width: 238px;
    height: 42px;
    left: 0px;
    color: #fff;
    background: #455a64;
    border-radius: 7px 7px 0px 0px;
    padding: 8px 0px 0px 10px;
    font-weight: 700;
  }

  .daftar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 13px 25px;
    width: 800px;
    height: 191px;
    left: 0px;
    top: 230px;
    font-size: 20px;
    font-weight: 400;
    background: #e0e0e0;
    border-radius: 0px 0px 14px 14px;
    li {
      margin-bottom: -10px;
    }
  }
  @media (max-width: 768px) {
    padding: 50px 35px 80px 35px;
    .daftar {
      width: 100%;
      height: auto;
    }

    .catatan {
      width: 60%;
    }
  }
}

// modal
.ok {
  .mt-3 {
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
}

.mb-4 {
  font-family:  Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #161616;
}

// penutup style css modal

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
  min-height: 110px;
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
  top: -41px;
}

/*Last 4*/
.progressbar li:nth-last-child(-n + 7) {
  bottom: -50px;
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
