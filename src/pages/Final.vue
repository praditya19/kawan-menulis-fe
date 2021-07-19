<template>
  <div class="all">
    <!-- header -->
    <div class="head">
      <p>Latihan Menulis</p>
    </div>

    <!-- stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/13.png" />
    </div>

    <!-- tengah -->
    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <!-- body -->
    <div class="body">
      <!-- Button Tips -->
      <div class="col-md-2.5">
        <div class="tips">
          <b-button class="tips_judul" @click="showModal = true">
            Tips
          </b-button>
        </div>
      </div>

      <!-- popup -->
      <div v-if="showModal === true">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <!-- Modal Body -->
                  <!-- <div class="modal-body"> -->
                  <div class="image-container">
                    <img
                      style="width: 40px;height:38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat1">
                    <div style="padding: 2% 0% 2% 12%; width: 85%;">
                      Klik Revisi jika Anda ingin merevisi paragraf
                    </div>
                  </div>

                  <div class="tombol">
                    <button class="ok" block @click="showModal = false">
                      OK
                    </button>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="col-md-9.5">
        <div class="isi">
          <div class="kalimat">
            <p class="kalimat_p">
              Apakah Anda ingin melanjutkan revisi atau siap untuk menerbitkan?
              <br />
              Jika Anda ingin merevisi, klik <strong>Revisi</strong>. Sistem
              akan kembali ke tahapan 8: Revisi. <br /><br />
              Click <strong>Pemeriksa Ejaan</strong> jika Anda ingin sistem
              membantu Anda memeriksa ejaan Anda. <br /><br />
              Click <strong>Terbitkan/Terbitkan</strong> ketika Anda siap untuk
              menyimpan paragraf melalui email yang akan dikirimkan sistem
              kepada Anda. <br /><br />
              Setelah menyimpan Anda akan dapat menterbitkan dan menyalin
              pekerjaan Anda ke aplikasi pengolah kata (Microsoft Word, Notepad,
              dll).
            </p>
          </div>
          <div class="all-button">
            <button class="all-button_satu" @click="toRevisi()">Revisi</button>
            <button class="all-button_satu" @click="toStyle()">
              Pemeriksaan Ejaan
            </button>
            <button class="all-button_satu" @click="sumbit()">
              Terbitkan/terbitkan
            </button>
          </div>

          <!-- Konsep Paragraf -->
          <div class="content-konsep">
            <div class="border">
              <div class="border_konsep">
                <h4>Paragraf</h4>
              </div>
            </div>

            <div class="border_list">
              <div
                v-for="(data, index) in proFeridingDataSesion.konsepParagraf"
                :key="index"
              >
                <p>
                  {{ data }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Button OK -->
    <div class="button">
      <button class="button1 justify-content-center" @click="sumbit()">
        <b>OK</b>
      </button>
    </div>
  </div>
</template>

<script src="./js/final.js" />

<style lang="scss" scoped>
// all
.all {
  overflow: hidden;
}

// head
.head {
  padding: 110px 0px 0px 0px;
  font-family: Poppins;
  font-weight: 700;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 110px 5px 0px 5px;
    font-size: 40px;
  }
}

// Stepper
.steper {
  padding: 10px 200px 10px 200px;
  &_image {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    padding: 10px 20px 10px 20px;
    &_image {
      width: 100%;
      height: auto;
    }
  }
}

// tengah
.center {
  display: flex;
  width: 100%;
  height: auto;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  padding: 11px 0px 0px 140px;
  &_topik {
    padding-left: 80px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 11px 20px 0px 20px;
  }
}

// body
.body {
  display: flex;
  @media (max-width: 768px) {
    display: flex;
  }
}
// Tips dan Kalimat
.tips {
  padding: 25px 0px 0px 135px;
  font-size: 16px;
  @media (max-width: 768px) {
    padding: 20px 10px 0px 20px;
  }
  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    width: 115px;
    @media (max-width: 768px) {
      width: 70px;
    }
  }
}

.isi {
  padding: 30px 200px 10px 20px;
  width: 100%;
  @media (max-width: 768px) {
    margin-left: 0px;
    padding: 25px 10px 10px 0px;
  }
}

.kalimat {
  &_p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
  }
}
// end Tips dan Kalimat

// Button Gaya Menulis dll
.all-button {
  padding: 32px 0px 0px 0px;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
  &_satu {
    border: none;
    background: #e0e0e0;
    border-radius: 20px;
    width: 181px;
    height: 37px;
    margin: 0.3%;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
}

.all-button_satu:hover {
  background-color: #f1f6cc;
}
// End Button Gaya Menulis dll

// Tombol OK
.button {
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    .button1 {
      margin-left: 0px;
      position: center;
    }
  }
  .button1 {
    background-color: #0a4da3;
    height: 44px;
    width: 110px;
    border-radius: 42px;
    border: none;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border-radius: 30px;
    display: flex;
    padding-top: 8px;
    b {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .button1:hover {
    background-color: #0a4da3;
  }
}
// End Tombol OK

// Konsep Menulis
.content-konsep {
  margin-top: 42px;
}

.border {
  background-color: #455a64;
  height: 42px;
  width: 101px;
  border-radius: 7px 7px 0px 0px;
  border: none;
  h4 {
    color: #fff;
    font-size: 16px;
    text-align: center;
    padding-top: 10px;
  }
  &_list {
    display: flex;
    font-family: Poppins;
    background-color: #e0e0e0;
    width: 100%;
    padding: 13px;
    border-radius: 0px 0px 14px 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;

    color: #030303;
  }
  &konsep {
  }
}
// End Konsep Menulis
.modal-content {
  background: #e8f1fd;
  width: 100%;
  border-radius: 34px;
  padding: 20px 0px 20px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
/* end style Modal */

/* Style Isi Modal */
.image-container {
  text-align: center;
  /* background: red; */
}

.kalimat1 {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
}

.tombol {
  /* background: red; */
  text-align: center;
  padding: 5px;
}

.ok {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
}

/* end style isi modal */

/* Background belakang modal */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  padding-top: 150px;
  @media (max-width: 768px) {
    padding-top: 95px;
  }
}

/* End Background Belakang Modal */

// Kalimat bawah tombol Tips kedua
.content-cara {
  font-family: Poppins;
  width: 100%;
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 0px 10px 0px 0px;
  }
  .kata {
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
  }

  .form {
    width: 800px;
    height: 50px;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
}

// Button OK dan previus
.btn-back-ok {
  // background: red;
  text-align: center;
  margin-bottom: 20px;
}

.submit_ok {
  background-color: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
  margin-left: 80px;
}

.submit_ok:hover {
  background-color: #0a4da3;
}
</style>
