<template>
  <div class="content">
    <br />
    <div class="content_padding">
      <div class="modal-content rounded-100">
        <!-- popup -->
        <b-modal id="bv-modal-example" hide-footer hide-header-close>
          <div class="text-center">
            <p>
              <b>
                Tambahkan Catatan Pra Menulis
              </b>
            </p>
          </div>
          <form ref="form" @submit.prevent="handleSubmit">
            <b-form-textarea
              id="name-input"
              v-model="name"
              :state="nameState"
              rows="3"
              no-resize
            >
            </b-form-textarea>
            <div class="row">
              <div class="col-sm-6">
                <div class="ok2">
                  <b-button
                    class="mt-3"
                    block
                    @click="$bvModal.hide('bv-modal-example')"
                    >Batal</b-button
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="ok">
                  <b-button class="mt-3" block @click="handleOk"
                    >Tambah</b-button
                  >
                </div>
              </div>
            </div>
          </form>
        </b-modal>
      </div>
      <div class="content_padding_header">
        <h1><b>Latihan Menulis</b></h1>
      </div>
      <div class="content_padding_stemper">
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
    <div style="background-color:#C5DCFF; height: 60px; width: 100%px;">
      <div class="row">
        <div class="col-sm-4">
          <div class="content_padding_paragraf">
            <p><b>Jenis Paragraf: </b>Deskripsi</p>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="content_padding_paragraf_right">
            <p>
              <b>Topik: </b>Apakah kamu punya kemahiran dalam membuat sesuatu?
              Coba sebutkan satu.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container_bawah">
      <div class="content_padding_tulis">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <button class="button">
                <div class="button_tombol_margin">
                  <b>Tips</b>
                </div>
              </button>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <p>
                  Sekarang setelah Anda menulis kalimat pembuka, atau kalimat
                  topik, lihat daftar kata Anda di Catatan Pramenulis. Bisakah
                  Anda membuat kata atau frasa tambahan yang berhubungan dengan
                  topik Anda?
                </p>
              </div>
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Gunakan <b>Tambah</b> untuk mencantumkan lebih banyak kata
                    atau frasa. Jangan menulis kalimat sekarang.
                  </p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    ketik OK ketika anda siap untuk melanjutkan
                  </p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <div class="button2_tombol2" @click="toMenulisIsi">
                    <button class="button2" type="submit">
                      <b>OK</b>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div
                  class="content_padding_tulis_right_paragraf_bawah"
                  style="margin-top: -50px; margin-bottom: -40px"
                >
                  <div class="row">
                    <div class="col-sm-4">
                      <div
                        style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                      >
                        <div class="content_padding_tulis_catatan">
                          <h4><b>Catatan Pra Menulis</b></h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="content_padding_tulis_catatan">
                        <div class="button3_tombol3">
                          <button
                            class="button3"
                            id="show-btn"
                            @click="$bvModal.show('bv-modal-example')"
                          >
                            <b>Tambah</b>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="content_padding_tulis_catatan">
                        <div class="button3_tombol3">
                          <button
                            class="button3_button4"
                            @click="$bvModal.show('bv-modal-example')"
                          >
                            <b>Ubah</b>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                  >
                    <div style="margin-left:30px; ">
                      <b-form-group>
                        <div class="col-sm-12">
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked
                                ><b
                                  >&nbsp; &nbsp;Cara Membuat Kopi.</b
                                ></b-form-radio
                              >
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked
                                ><b
                                  >&nbsp; &nbsp;Cara Membuat Kopi.</b
                                ></b-form-radio
                              >
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked
                                ><b
                                  >&nbsp; &nbsp;Cara Membuat Kopi.</b
                                ></b-form-radio
                              >
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked
                                ><b
                                  >&nbsp; &nbsp;Cara Membuat Kopi.</b
                                ></b-form-radio
                              >
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked
                                ><b
                                  >&nbsp; &nbsp;Cara Membuat Kopi.</b
                                ></b-form-radio
                              >
                            </h5>
                          </div>
                          <div v-if="submittedNames.length === 0">
                            <div style=""></div>
                          </div>
                          <div v-else class="dua">
                            <h5 v-for="name in submittedNames" :key="name">
                              <b-form-group v-slot="{ ariaDescribedby }">
                                <b-form-radio
                                  v-model="selected"
                                  :options="options"
                                  :aria-describedby="ariaDescribedby"
                                  name="radios-stacked"
                                  stacked
                                  ><b>&nbsp; &nbsp;{{ name }}</b></b-form-radio
                                >
                              </b-form-group>
                            </h5>
                          </div>
                        </div>
                      </b-form-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/pramenulisLanjutan.js" />

<style lang="scss" scoped>
// popup
.modal-content {
  -webkit-border-radius: 100px !important;
  -moz-border-radius: 100px !important;
  border-radius: 100px !important;
  -webkit-border: 100px !important;
  -moz-border: 100px !important;
  border: 100px !important;
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
  margin-left: 40%;
  .mt-3 {
    // margin-bottom: 10px;
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
    font-family:  Poppins;
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
    font-family:  Poppins;
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
      font-family:  Poppins;
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
.button2 {
  background-color: #0a4da3;
  border: none;
  color: rgb(243, 237, 237);
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: flex-start;
  padding: 17px 10px;
  border-radius: 30px;
  display: flex;
  position: relative;
  max-width: 990px;
  width: 130px;
  height: 55px;
  left: calc(50% - 190px / 2 + 87px);
  top: -10px;
  margin-left: 200px;
  b {
    padding: 0% 3% 0% 3%;
    color: #f1f1f1;
    margin-left: 30px;
    margin-top: -5px;
    font-size: 28px;
  }
  &_tombol2 {
    padding: 30px 0px 20px 0px;
    top: 300px;
    left: 300px;
    width: 190px;
    height: 200px;
    margin-left: -50px;
  }
}
.button2:hover {
  background-color: #3698da;
}
.button {
  background-color: #228f28;
  border: none;
  color: black;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: center;
  padding: 17px 0px;
  border-radius: 19px;
  display: flex;
  max-width: 990px;
  width: 150px;
  height: 50px;
  margin-left: 45px;
  &_catatan {
    height: 45px;
    max-width: 200px;
    color: rgb(5, 4, 4);
  }
  &_tombol {
    position: absolute;
    width: 190px;
    height: 100px;
    margin-left: -80px;
    b {
      color: #f1f1f1;
      margin-left: 35px;
    }
    &_margin {
      b {
        text-align: center;
        align-items: center;
      }
      color: black;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      align-items: center;
      margin-left: 13%;
    }
  }
}
.button:hover {
  background-color: #43d643;
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
          font-family:  Poppins;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          padding: 12px 0px 8px 0px;
        }
      }
      &_right {
        max-width: 750px;
        width: 750px;
        font-family:  Poppins;
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
            margin-bottom: 100px;
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
      font-family:  Poppins;
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
