<template>
  <div class="all">
    <div class="head">
      <p>Latihan Menulis</p>
    </div>

    <!-- stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/14.png" />
    </div>
    <!-- Popup Modal -->
    <div v-if="showModalSendEmailSucces === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px;height:38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat">
                    <div
                      style="padding: 0% 0% 0% 12%; width: 85%; text-align: center;"
                    >
                      <p></p>
                      <p>
                        Email terkirim! <br />
                        Silahkan periksa email atau folder spam Anda.
                      </p>
                    </div>
                  </div>

                  <div class="tombol1">
                    <button
                      class="ok1"
                      block
                      @click="showModalSendEmailSucces = false"
                    >
                      OK
                    </button>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="erorSend === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px;height:38.49px;"
                      src="@/assets/Warning.png"
                    />
                  </div>

                  <div class="kalimat">
                    <div
                      style="padding: 0% 0% 0% 12%; width: 85%; text-align: center;"
                    >
                      <p></p>
                      <p>
                        Email belum terkirim! <br />
                        Pastikan email yang anda masukkan benar.
                      </p>
                    </div>
                  </div>
                  <div class="tombol1">
                    <button class="ok1" block @click="erorSend = false">
                      OK
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div v-if="showModalCopy === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container"></div>

                  <div class="kalimat2">
                    <div style="padding: 0% 0% 0% 12%; width: 85%">
                      <p>
                        Paragraf telah disalin ke dalam clipboard. Silahkan
                        "Paste" atau Ctrl+V di aplikasi pengolahan kata Anda
                      </p>
                    </div>
                  </div>

                  <div class="tombol">
                    <button class="ok" block @click="showModalCopy = false">
                      OK
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- tengah -->
    <div class="center">
      <p class="center_paragraf">
        <strong>Jenis Paragraf: </strong>{{ jenisTopics.jenisParagraf }}
      </p>
      <p class="center_topik">
        <strong>Topik: </strong>{{ jenisTopics.topik }}
      </p>
    </div>

    <div class="body">
      <div class="col-md-2">
        <img src="@/assets/cetak3.png" alt="logo" class="image2" />
      </div>
      <div class="col-md-10">
        <div class="isi">
          <div>
            <img src="@/assets/cetak.png" alt="logo" class="image" />
            <div class="kiri">
              <img src="@/assets/cetak3.png" alt="logo" class="image3" />
            </div>
          </div>
          <div class="text">
            <p>
              Selamat
              <strong v-for="(studentList, index) in dataStudent" :key="index"
                ><span
                  v-if="index === 0"
                  v-html="studentList.name"
                ></span></strong
              >! <br />
              Anda telah menyelesaikan paragraf Anda dan sekarang Anda dapat
              memilih dari opsi ini.
            </p>
          </div>
          <div class="all-button">
            <button class="all-button_satu" @click="copyToClipBoard()">
              Salin
            </button>
            <button class="all-button_satu" @click="handleSubmitCetak()">
              Kirim Email
            </button>
            <button class="all-button_satu" @click="toTopik()">
              Mulai topik lain
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
  </div>
</template>

<script src="./js/cetak.js" />

<style lang="scss" scoped>
// all
.all {
  overflow: hidden;
  max-width: 1440px;
  margin: auto;
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
  padding: 10px 150px 10px 150px;
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
  padding: 11px 10px 0px 130px;
  &_paragraf {
    padding-right: 90px;
    // background: #00a279;
    @media (max-width: 768px) {
      padding-right: 20px;
    }
  }
  &_topik {
    // background: #0a4da3;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 11px 10px 0px 10px;
  }
}

.body {
  display: flex;
}
.kiri {
  margin-left: 80px;
}
.image3 {
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 380px;
    width: 100%;
  }
}

.image2 {
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    display: none;
  }
}

.isi {
  padding: 10px 210px 69px 40px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 10px 10px 69px 10px;
  }
}

.image {
  @media (max-width: 768px) {
    margin-left: 0px;
    padding: 0px 50px 30px 50px;
    width: 100%;
    height: auto;
  }
}

.text {
  text-align: left;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  padding-top: 20px;
  margin-left: 10px;
}
// Button Gaya Menulis dll
.all-button {
  padding: 22px 0px 0px 0px;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
  &_satu {
    border: none;
    background: #e0e0e0;
    border-radius: 20px;
    width: 181px;
    height: 37px;
    margin: 0.7%;
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
  width: 131px;
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
    padding: 15px 10px 8px 30px;
    border-radius: 0px 0px 14px 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #030303;
    text-align: left;
  }
}
// End Konsep Menulis
/* Background belakang modal */
/* Style Modal */
/* Style Modal */

.modal-content {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
}

.modal-body {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
}

/* end style Modal */

/* Style Isi Modal */
.image-container {
  text-align: center;
  /* background: red; */
}

.kalimat {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
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
  padding-top: 75px;
  @media (max-width: 768px) {
    padding-top: 95px;
  }
}

/* End Background Belakang Modal */

/* End Background Belakang Modal */
.tombol {
  margin-left: 45%;
  padding: 5px;
}

.ok {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  margin-left: -40px;
  color: #fff;
  font-family: Poppins;
}

.image-container {
  text-align: center;
  /* background: red; */
}

.kalimat2 {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
}

.tombol1 {
  /* background: red; */
  text-align: center;
  padding: 5px;
}

.ok1 {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
}
</style>
