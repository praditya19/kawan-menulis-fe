<template>
  <div class="content">
    <div class="head">
      <p>Latihan Menulis</p>
    </div>

    <!-- stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/4.png" />
    </div>

    <!-- tengah -->
    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
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
                    <div class="kalimat">
                      <div style="padding: 0% 0% 0% 12%;">
                        <p
                          style="color:black; margin-left: 6%; font-size: 20px;"
                        >
                          <b>
                            Tambahan Catatan Pra Menulis
                          </b>
                        </p>
                        <table>
                          <tr>
                            <td>
                              <b-form-textarea
                                v-model="dataForm.tambahPramenulis"
                                style="width: 350px;"
                                rows="4"
                                no-resize
                                type="text"
                              ></b-form-textarea>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="tombol">
                      <div class="row">
                        <div class="col-sm-6">
                          <button
                            class="ok"
                            block
                            @click="
                              (showModal = false),
                                (dataForm.tambahPramenulis = '')
                            "
                          >
                            Batal
                          </button>
                        </div>
                        <div class="col-sm-6">
                          <button class="ok2" block @click="handleOk()">
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <br />
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
                    <div class="kalimat">
                      <div style="padding: 0% 0% 0% 12%; width: 85%;">
                        <p
                          style="color:black; margin-left: 15%; font-size: 20px;"
                        >
                          <b>
                            Ubah Catatan Pra Menulis
                          </b>
                        </p>
                        <table>
                          <tr>
                            <td>
                              <b-form-textarea
                                v-model="dataForm.pramenulisLanjutanPembaruan"
                                style="width: 350px;"
                                rows="4"
                                no-resize
                                type="text"
                              ></b-form-textarea>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="tombol">
                      <div class="row">
                        <div class="col-sm-6">
                          <button class="ok" block @click="showModal2 = false">
                            Batal
                          </button>
                        </div>
                        <div class="col-sm-6">
                          <button class="ok2" block type="submit">
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                    <br />
                  </b-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Button Tips dan Kalimat -->
    <div>
      <div class="tengah">
        <div class="col-md-2.5">
          <b-btn class="tengah_tips" @click="showModal2 = true">TIPS</b-btn>
        </div>
        <div class="col-md-9.5">
          <p class="tengah_text2">
            Sekarang setelah Anda menulis kalimat pembuka, atau kalimat topik,
            lihat daftar kata Anda di Catatan Pramenulis. Bisakah Anda membuat
            kata atau frasa tambahan yang berhubungan dengan topik Anda?
          </p>
          <p class="tengah_text2">
            Gunakan <b>Tambah</b> untuk mencantumkan lebih banyak kata atau
            frasa. Jangan menulis kalimat sekarang.
          </p>
          <p class="tengah_text2">
            ketik OK ketika anda siap untuk melanjutkan
          </p>

          <!-- button -->
          <div class="Button">
            <b-btn
              class="button  justify-content-center"
              @click="toMenulisIsi()"
            >
              <b>OK</b>
            </b-btn>
          </div>

          <!-- Konsep Paragraf -->
          <div class="content-konsep">
            <div class="foot">
              <div class="border">
                <p>Catatan Pra Menulis</p>
              </div>
              <div class="tambah">
                <button class="button3" id="show-btn" @click="showModal = true">
                  <b>Tambah</b>
                </button>
              </div>
              <div class="ubah">
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

            <div class="border_list">
              <div>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <div
                    class="dua"
                    v-for="(dataSesion,
                    index) in kalimatUtamaDataSesion.resultMenulis"
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
          </div>
          <!-- end konsep paragraf -->
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/pramenulisLanjutan.js" />

<style lang="scss" scoped>
// Konsep Menulis
.content-konsep {
  margin-top: 42px;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
}

.foot {
  display: flex;
  // @media screen and (max-width: 768px) {
  //   display: inline;
  // }
}

.tambah {
  margin: 0px 10px 0px 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.ubah {
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.border {
  background-color: #455a64;
  height: 42px;
  width: 170px;
  border-radius: 7px 7px 0px 0px;
  border: none;
  display: flex;

  p {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 9px 0px 0px 10px;
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
    text-align: left;
  }
}
// End Konsep Menulis

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
    padding: 120px 5px 0px 5px;
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
  padding: 11px 0px 0px 100px;
  &_paragraf {
    padding-right: 90px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 11px 20px 0px 20px;
  }
}

.tengah {
  display: flex;
  width: 100%;
  display: flex;
  padding: 13px 210px 48px 100px;
  @media screen and (max-width: 768px) {
    padding: 13px 10px 48px 5px;
  }

  // button tips
  &_tips {
    padding: 0px 0px 0px 0px;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    background-color: #00a279;
    color: #fff;
    font-size: normal;
    margin-bottom: 200px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 80px;
    }
  }

  // text page 2
  &_text2 {
    margin-left: 20px;
    width: 100%;
    font-family: Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
    @media screen and (max-width: 768px) {
      margin-left: 10px;
      width: 100%;
      padding-right: 10px;
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

// icon checklist
.image-container {
  width: 470px;
  text-align: center;
  // background: red;
}
.container {
  &_bawah {
    padding: 70px 0px 60px 220px;
  }
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
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.button3 {
  background-color: #e0e0e0;
  border: none;
  color: rgb(243, 237, 237);
  border-radius: 30px;
  display: flex;
  width: 100px;
  height: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  b {
    color: #0a0808;
    font-size: 28px;
    font-size: 16px;
    font-family: Poppins;
  }
}
.button3:hover {
  background: #f1f6cc;
}

.content {
  overflow-x: hidden;
  max-width: 100%;
  height: 100%;
  @media screen and (max-width: 990) {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}

/* Style Isi Modal */
.image-container {
  text-align: center;
  /* background: red; */
}

.kalimat {
  font-family: Poppins;
  font-size: 16px;
  margin-top: 5px;
  /* background: red; */
}

.tombol {
  // background: red;
  padding: 20px 0px 0px 70px;
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

.ok2 {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
}

/* end style isi modal */

/* Style Modal */
.modal-dialog {
  top: -100px;
  left: auto;
}

.modal-content {
  background: #e8f1fd;
  width: 100%;
  border-radius: 34px;
  padding: 0px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

// .modal-body {
//   background: #e8f1fd;
//   width: 500px;
//   border-radius: 34px;
// }

/* end style Modal */
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
  vertical-align: middle;
}

/* End Background Belakang Modal */
</style>
