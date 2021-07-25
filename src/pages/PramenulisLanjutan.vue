<template>
  <div class="content">
    <br />
    <div class="content_padding">
      <br />
      <div class="content_padding_header">
        <h1><b>Latihan Menulis</b></h1>
      </div>

      <!-- Stepper -->
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/4.png" />
      </div>
      <!-- End Stepper  -->
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
                          <button
                            class="ok2"
                            type="button"
                            block
                            @click="handleOk()"
                          >
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
    <!-- Jenis Paragraf -->
    <div class="center">
      <p class="center_paragraf">
        <strong>Jenis Paragraf:</strong>&nbsp;{{ jenisTopics.jenisParagraf }}
      </p>
      <p class="center_topik">
        <strong>Topik:</strong>&nbsp;{{ jenisTopics.topik }}
      </p>
    </div>
    <!-- Button Tips dan Kalimat -->
    <div style="padding: 20px 0px 0px 0px">
      <div class="tengah">
        <div class="row">
          <div class="col-sm-1">
            <b-btn class="tengah_tips">TIPS</b-btn>
          </div>
          <div class="col-sm-11">
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
          </div>
        </div>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="toMenulisIsi()">
          <b>OK</b>
        </b-btn>
      </div>
      <!-- Catatan PRa Menulis -->
      <div class="content_padding_tulis_right_paragraf_bawah">
        <div class="row">
          <div class="col-sm-3">
            <div
              style="background-color: #484c52;height: 48px;width: 240px;border-radius: 20px 20px 0px 0px;"
            >
              <div class="content_padding_tulis_catatan">
                <h4><b>Catatan Pra Menulis</b></h4>
              </div>
            </div>
          </div>
          <!-- Tambah -->
          <div class="col-sm-2">
            <div class="content_padding_tulis_catatan">
              <div class="button3_tombol3">
                <button class="button3" id="show-btn" @click="showModal = true">
                  <b>Tambah</b>
                </button>
              </div>
            </div>
          </div>
          <!-- Ubah -->
          <div class="col-sm-6" style="margin-left: -50px;">
            <div class="content_padding_tulis_catatan">
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
        </div>

        <!-- Cara membuat Kopi -->
        <div
          style="background-color: #c1c8d3;width: 730px;padding: 13px;border-radius: 0px 0 30px 30px;"
        >
          <div style="margin-left: 30px">
            <b-form-group v-slot="{ ariaDescribedby }">
              <div class="col-sm-12">
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
              </div>
            </b-form-group>
          </div>
        </div>
      </div>
      <!-- end button -->
    </div>
  </div>
</template>

<script src="./js/pramenulisLanjutan.js" />

<style lang="scss" scoped>
.tengah {
  margin-left: 100px;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  // background: red;
  // button tips
  &_tips {
    padding: 4px 0px 0px 0px;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    background-color: #00a279;
    color: #fff;
    font-size: normal;
    margin-bottom: 70px;
    cursor: pointer;
  }

  // text page 2
  &_text2 {
    margin-left: 30px;
    width: 65%;
    font-family: Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
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
    margin-left: 100px;
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
    margin-top: 10%;
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
  b {
    padding: 0% 0% 0% 17%;
    color: #0a0808;
    font-size: 28px;
    align-items: center;
    font-size: 16px;
    font-family: Poppins;
  }
  &_button4 {
    background-color: #f1f7cc;
    border: none;
    color: rgb(243, 237, 237);
    border-radius: 30px;
    display: flex;
    width: 100px;
    height: 40px;
    align-items: center;
    margin-left: -5%;
    b {
      padding: 0% 0% 0% 27%;
      color: #0a0808;
      align-items: center;
      font-family: Poppins;
      font-size: 16px;
    }
  }
  &_button4:hover {
    background-color: #f3e8e8;
  }
  &_tombol3 {
    padding: 0px 0px 0px 0px;
  }
}
.button3:hover {
  background-color: #f3e8e8;
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
.content {
  overflow-x: hidden;
  max-width: 100%;
  height: 100%;
  @media screen and (max-width: 990) {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  &_padding {
    padding: 5px 0px;
    &_tulis {
      padding: 15px 0px 10px 0px;
      &_catatan {
        color: #f1f1f1;
        h4 {
          font-family: Poppins;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          padding: 12px 0px 8px 0px;
        }
      }
      &_right {
        max-width: 750px;
        width: 750px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 23px;
        line-height: 30px;
        margin-left: -30px;
        &_paragraf {
          padding: 20px 0px 0px 0px;
          label {
            font: 1rem "Fira Sans", sans-serif;
          }
          input {
            margin: 0.4rem;
          }
          &_bawah {
            padding: 50px 0px 100px 235px;
          }
        }
      }
    }
    &_paragraf {
      padding: 15px 0px 10px 0px;
      margin-left: 40%;
      p {
        font-size: 17px;
      }
      &_right {
        padding: 15px 0px 10px 0px;
        margin-left: 10%;
        p {
          font-size: 17px;
        }
      }
    }
    &_header {
      margin-top: 70px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      margin-left: 30%;
      h1 {
        font-weight: bolder;
        font-size: 47px;
        margin-left: 10%;
      }
    }
    &_stemper {
      padding: 20px;
      align-items: center;
      margin-left: 20px;
    }
  }
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

// Stepper
.steper {
  text-align: center;
  padding: 10px;
  &_image {
    width: 1000px;
    height: auto;
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
  width: 500px;
  border-radius: 34px;
}

.modal-body {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
}

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
