<template>
  <div class="all">
    <div class="content-satu">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
    </div>

    <!-- Stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/4.png" />
    </div>
    <!-- End Stepper  -->
    <div v-if="showModal1 === true">
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
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      <p>
                        Setiap tambahan harus mendukung gagasan utama yang
                        diperkenalkan dalam kalimat utama.
                      </p>
                    </div>
                  </div>

                  <div class="tombol">
                    <button class="ok" block @click="showModal1 = false">
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

    <!-- popup tambah -->
    <div v-if="showModal === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <form action="">
                    <div class="kalimat2">
                      <p>
                        <b>
                          Tambahan Catatan Pra Menulis
                        </b>
                      </p>
                      <div class="text-area">
                        <b-form-textarea
                          v-model="dataForm.tambahPramenulis"
                          rows="4"
                          class="form-textarea"
                          no-resize
                          type="text"
                        ></b-form-textarea>
                      </div>
                    </div>
                    <div class="tombol">
                      <button
                        class="ok"
                        block
                        @click="
                          (showModal = false), (dataForm.tambahPramenulis = '')
                        "
                      >
                        Batal
                      </button>
                      <button
                        class="ok2"
                        type="button"
                        block
                        @click="handleOk()"
                      >
                        OK
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- popup ubah -->
    <div v-if="showModal2 === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <b-form @submit="upCatatanMenulis">
                    <div class="kalimat2">
                      <p>
                        <b>
                          Ubah Catatan Pra Menulis
                        </b>
                      </p>
                      <div class="text-area">
                        <b-form-textarea
                          v-model="dataForm.pramenulisLanjutanPembaruan"
                          rows="4"
                          class="form-textarea"
                          no-resize
                          type="text"
                        ></b-form-textarea>
                      </div>
                    </div>
                    <div class="tombol">
                      <button class="ok" block @click="showModal2 = false">
                        Batal
                      </button>
                      <button class="ok2" block type="submit">
                        OK
                      </button>
                    </div>
                  </b-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Jenis Paragraf -->
    <div class="center">
      <p class="center_paragraf">
        <strong>Jenis Paragraf: </strong>{{ jenisTopics.jenisParagraf }}
      </p>
      <p class="center_topik">
        <strong>Topik: </strong>{{ jenisTopics.topik }}
      </p>
    </div>

    <!-- Button Tips dan Kalimat -->
    <div class="body">
      <div class="col-md-2.5">
        <b-btn class="tengah_tips" @click="showModal1 = true">TIPS</b-btn>
      </div>
      <div class="col-md-9.5">
        <p class="tengah_text2">
          Sekarang setelah Anda menulis kalimat pembuka, atau kalimat topik,
          lihat daftar kata Anda di Catatan Pramenulis. Bisakah Anda membuat
          kata atau frasa tambahan yang berhubungan dengan topik Anda?
        </p>
        <p class="tengah_text2">
          Gunakan <b>Tambah</b> untuk mencantumkan lebih banyak kata atau frasa.
          Jangan menulis kalimat sekarang.
        </p>
        <p class="tengah_text2">
          ketik OK ketika anda siap untuk melanjutkan
        </p>
      </div>
    </div>

    <!-- button -->
    <div class="Button">
      <b-btn class="button  justify-content-center" @click="toMenulisIsi()">
        <b>OK</b>
      </b-btn>
    </div>

    <!-- Catatan PRa Menulis -->
    <div class="gabungan">
      <div class="foot-gabungan">
        <div class="catatan">
          <p class="kata-bawah">Catatan Pra Menulis</p>
        </div>
        <div class="two-button">
          <!-- Tambah -->
          <div class="button3_tombol3">
            <button class="button3" id="show-btn" @click="showModal = true">
              <b>Tambah</b>
            </button>
          </div>
          <!-- Ubah -->
          <div class="button3_tombol3">
            <button
              v-bind:disabled="
                dataForm.pramenulisLanjutan.length === 0 ? true : false
              "
              class="button3"
              id="show-btn"
              @click="modal2()"
            >
              <b>Ubah</b>
            </button>
          </div>
        </div>
      </div>

      <!-- Cara membuat Kopi -->
      <div class="daftar">
        <b-form-group v-slot="{ ariaDescribedby }">
          <div
            class="dua"
            v-for="(dataSesion, index) in kalimatUtamaDataSesion.resultMenulis"
            :key="index"
          >
            <h5>
              <b-form-radio
                v-model="dataForm.pramenulisLanjutan"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                v-bind:value="index"
                >&nbsp;&nbsp; {{ dataSesion.pramenulis }}</b-form-radio
              >
            </h5>
          </div>
        </b-form-group>
      </div>
    </div>
    <!-- end button -->
  </div>
</template>

<script src="./js/pramenulisLanjutan.js" />

<style lang="scss" scoped>
// all
.all {
  overflow: hidden;
  max-width: 1350px;
  margin: auto;
}
.content-satu {
  margin-top: 130px;
}
// judul
.judul {
  font-size: 50px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  margin-left: 30%;
  h1 {
    font-weight: bolder;
    font-size: 47px;
    margin-left: 10%;
  }
  @media Screen and (max-width: 780px) {
    margin-left: 0%;
    align-items: center;
    text-align: center;
    h1 {
      margin-left: 0%;
    }
  }
  @media Screen and (max-width: 400px) {
    margin-left: 0%;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 30px;
      margin-left: 0%;
    }
  }
}
// End Judul
// Stepper
.steper {
  text-align: center;
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
// End Stepper

// jenis paragrf
.center {
  display: flex;
  width: 100%;
  height: 49px;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  @media Screen and (max-width: 768px) {
    height: auto;
  }
  &_paragraf {
    padding: 11px 0px 0px 110px;
    @media (max-width: 768px) {
      padding: 11px 0px 0px 10px;
    }
  }
  &_topik {
    padding: 11px 0px 0px 70px;
  }
}

// body
.body {
  display: flex;
  padding: 10px 180px 0px 120px;
  @media screen and(max-width: 768px) {
    padding: 5px 10px 0px 10px;
  }
}

// content tengah
.tengah {
  text-align: right;
  margin: 5px;
  width: 100%;
  @media Screen and (max-width: 768px) {
  }
  &_tips {
    background-color: #00a279;
    border: none;
    width: 98px;
    border-radius: 10px;
    margin: 5px;
    color: #fff;
    @media Screen and (max-width: 780px) {
    }
  }

  // text page 2
  &_text2 {
    font-family: Poppins;
    font-size: 20px;
    padding: 10px 0px 0px 5px;
    @media screen and (max-width: 768px) {
    }
    strong {
      font-style: italic;
      font-size: 20px;
    }
  }
}

// gabungan
.gabungan {
  padding: 30px 0px 80px 220px;
  .foot-gabungan {
    display: flex;
  }
  .two-button {
    display: flex;
    @media (max-width: 425px) {
      display: inline-block;
    }
  }
  .catatan {
    width: 238px;
    height: 42px;
    left: 0px;
    color: #fff;
    background: #455a64;
    border-radius: 7px 7px 0px 0px;
    padding: 10px 0px 0px 10px;
  }

  .kata-bawah {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }

  .daftar {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 13px 25px;
    width: 912px;
    font-size: 20px;
    font-weight: 400;
    background: #e0e0e0;
    border-radius: 0px 0px 14px 14px;
    li {
      margin-bottom: -10px;
    }
  }
  @media (max-width: 768px) {
    padding: 50px 20px 80px 20px;
    .daftar {
      width: 100%;
      height: auto;
    }

    .kata-bawah {
    }

    .catatan {
      height: auto;
      text-align: center;
      padding: 10px 0px 0px 0px;
    }
  }
}

// icon checklist
.image-container {
  width: 470px;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  // background: red;
}

.dua {
  padding: 8px 0px 0px 0px;
  text-align: justify;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  h5 {
    font-family: Poppins;
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

// button tambah dan ubah
.button3 {
  background-color: #e0e0e0;
  border: none;
  color: rgb(243, 237, 237);
  border-radius: 30px;
  display: flex;
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  b {
    color: #0a0808;
    font-size: 28px;
    font-size: 16px;
    font-family: Poppins;
  }
  &_tombol3 {
    padding: 0px 5px 0px 5px;
    @media (max-width: 768px) {
      padding: 0px 5px 10px 5px;
    }
  }
}
.button3:hover {
  background-color: #f3e8e8;
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

/* Style Isi Modal */
.image-container {
  text-align: center;
  /* background: red; */
}

.kalimat2 {
  font-family: Poppins;
  font-size: 20px;
  margin-top: 5px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  /* background: red; */
}
.text-area {
  width: 100%;
  padding: 0px 0px 10px 0px;
  .form-textarea {
    // width: 100%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}

.ok {
  .mt-3 {
    // margin-bottom: 10px;
    background: #0a4da3;
    border-radius: 39px;
    width: 108px;
  }
}
.ok2 {
  .mt-3 {
    background: #0a4da3;
    border-radius: 39px;
    width: 108px;
  }
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
  margin-right: 20px;
}

.ok2 {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
  margin-left: 20px;
}

/* end style isi modal */

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
</style>
