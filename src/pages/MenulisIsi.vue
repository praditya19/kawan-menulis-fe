<template>
  <div class="all">
    <!-- Judul -->
    <div class="content-satu">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <br />
    <!-- Modal area -->
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
                      style="width: 40px;height: 38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>
                  <div class="kalimat3">
                    <div style="padding: 0% 0% 0% 12%;width: 85%;">
                      <p>Uraikan dalam sebuah kalimat :</p>
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                        style="margin-top: -10px;"
                      >
                        <strong
                          ><span
                            v-if="index === 0"
                            v-html="details.guide"
                          ></span
                        ></strong>
                      </p>
                      <br />
                      <p>
                        Ingat, sebuah kalimat harus memiliki subjek dan kata
                        kerja dan harus mengekpresikan pemikiran yang lengkap.
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
    <div v-if="showModal2 === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px;height: 38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat3">
                    <div style="padding: 0% 0% 0% 12%;width: 85%;">
                      <p style="font-size: 16px;">
                        Uraikan dalam sebuah kalimat :
                      </p>
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                        style="margin-top: -10px;"
                      >
                        <strong
                          ><span
                            v-if="index === 1"
                            v-html="details.guide"
                          ></span
                        ></strong>
                      </p>
                      <br />
                      <p>
                        Ingat, sebuah kalimat harus memiliki subjek dan kata
                        kerja dan harus mengekpresikan pemikiran yang lengkap.
                      </p>
                    </div>
                  </div>
                  <div class="tombol">
                    <button class="ok" block @click="showModal2 = false">
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
    <div v-if="showModal3 === true">
      <!--showModal2-->
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px; height: 38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat3">
                    <div style="padding: 0% 0% 0% 12%;width: 85%;">
                      <p style="font-size: 16px;">
                        Uraikan dalam sebuah kalimat :
                      </p>
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                        style="margin-top: -10px;"
                      >
                        <strong
                          ><span
                            v-if="index === 2"
                            v-html="details.guide"
                          ></span
                        ></strong>
                      </p>
                      <br />
                      <p>
                        Ingat, sebuah kalimat harus memiliki subjek dan kata
                        kerja dan harus mengekpresikan pemikiran yang lengkap.
                      </p>
                    </div>
                  </div>
                  <div class="tombol">
                    <button class="ok" block @click="showModal3 = false">
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
    <!-- modal 3 -->
    <div v-if="showModal4 === true">
      <!--showModal3-->
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px;height: 38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>
                  <div class="kalimat3">
                    <div style="padding: 0% 0% 0% 12%;width: 85%;">
                      <p>
                        Uraikan dalam sebuah kalimat :
                      </p>
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                        style="margin-top: -10px;"
                      >
                        <strong
                          ><span
                            v-if="index === 3"
                            v-html="details.guide"
                          ></span
                        ></strong>
                      </p>
                      <br />
                      <p>
                        Ingat, sebuah kalimat harus memiliki subjek dan kata
                        kerja dan harus mengekpresikan pemikiran yang lengkap.
                      </p>
                    </div>
                  </div>
                  <div class="tombol">
                    <button class="ok" block @click="showModal4 = false">
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
    <div v-if="showModalErrorEmpety === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <br />
                  <div class="kalimat">
                    <div style="font">
                      <h2></h2>
                    </div>
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      <p
                        class="mb-4"
                        style="text-align:center; font-size: 20px;"
                      >
                        Form haru di isi semua
                      </p>
                    </div>
                  </div>
                  <div class="tombol1">
                    <button
                      class="ok1"
                      type="button"
                      @click="showModalErrorEmpety = false"
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
    <div v-if="showModalValidation === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <br />
                  <div class="kalimat">
                    <div style="font">
                      <h2></h2>
                    </div>
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      <p
                        class="mb-4"
                        style="text-align:center; font-size: 20px;"
                      >
                        Harus di awali dengan huruf kapital dan di akhiri dengan
                        tanda baca titik
                      </p>
                    </div>
                  </div>
                  <div class="tombol1">
                    <button
                      class="ok1"
                      type="button"
                      @click="showModalValidation = false"
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
    <div v-if="showModal5 === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px;height: 38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>
                  <div class="kalimat3">
                    <div style="padding: 0% 0% 0% 12%;width: 85%;">
                      <p>
                        Uraikan dalam sebuah kalimat :
                      </p>
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                        style="margin-top: -10px;"
                      >
                        <strong
                          ><span
                            v-if="index === 4"
                            v-html="details.guide"
                          ></span
                        ></strong>
                      </p>
                      <br />
                      <p>
                        Ingat, sebuah kalimat harus memiliki subjek dan kata
                        kerja dan harus mengekpresikan pemikiran yang lengkap.
                      </p>
                    </div>
                  </div>
                  <div class="tombol">
                    <button class="ok" block @click="showModal5 = false">
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
    <div v-if="showModal === true">
      <!--showModal-->
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px; height: 38.49px"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat2">
                    <div style="padding: 0% 0% 0% 12%; width: 85%">
                      <p>
                        Sekarang Anda akan mengubah kata dan frasa menjadi
                        kalimat lengkap.
                      </p>
                    </div>
                  </div>

                  <div class="tombol">
                    <button class="ok" block @click="showModal = false">
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
    <div v-if="showModal6 === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px; height: 38.49px"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat2">
                    <div style="padding: 0% 0% 0% 12%; width: 85%">
                      <p>
                        Tinjau daftar pramenulis Anda dan pilih ide yang akan
                        Anda kembangkan menjadi kalimat lengkap.
                      </p>
                      <p>
                        Ingat, sebuah kalimat harus memiliki subjek dan kata
                        kerja dan harus mengekpresikan pemikiran yang lengkap.
                      </p>
                    </div>
                  </div>

                  <div class="tombol">
                    <button class="ok" block @click="showModal6 = false">
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
    <!-- End Modal Area -->
    <!-- Stepper -->
    <div class="content-dua">
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/5.png" alt="" />
      </div>
    </div>
    <br />
    <!-- Jenis Paragraf -->
    <div class="content-tiga">
      <div class="jenis">
        <p class="jenis_paragraf">
          <strong>Jenis Paragraf:</strong>&nbsp;{{ jenisTopics.jenisParagraf }}
        </p>
        <p class="jenis_topik">
          <strong>Topik:</strong>&nbsp;{{ jenisTopics.topik }}
        </p>
      </div>
    </div>
    <br />
    <!-- Screen 1 -->
    <div style="padding: 20px 0px 0px 15px;" v-if="menulisIsi === true">
      <div class="tengah">
        <div class="row">
          <div class="col-sm-1">
            <b-btn class="tengah_tips" @click="showModal = true">TIPS</b-btn>
          </div>
          <div class="col-sm-11">
            <p class="tengah_text2">
              Anda sekarang siap untuk menggunakan ide-ide dari daftar
              pre-writing Anda untuk membantu Anda menulis isi paragraf Anda.
            </p>
            <p class="tengah_text2">
              Pada layar berikutnya Anda akan memilih ide satu persatu untuk
              ditulis dalam sebuah kalimat. Anda akan mencentang kotak untuk
              memilih ide.
            </p>
          </div>
        </div>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="menulisIsiNext">
          <b>OK</b>
        </b-btn>
      </div>
      <div style="padding:50px 0px 60px 237px;">
        <div class="border">
          <div class="border_catatan">
            <h4><b>Catatan Pra Menulis</b></h4>
          </div>
        </div>
        <div class="border_list">
          <div style="margin-left: 30px">
            <b-form-group>
              <div>
                <div class="col-sm-12">
                  <ul>
                    <div
                      class="dua"
                      v-for="(dataSesion,
                      index) in pramenulisLanjutanDataSesion.resultMenulis"
                      :key="index"
                    >
                      <h5>
                        <li>&nbsp; &nbsp;{{ dataSesion.pramenulis }}</li>
                      </h5>
                    </div>
                  </ul>
                </div>
              </div>
            </b-form-group>
          </div>
        </div>
      </div>
    </div>

    <!-- Screen 2 -->
    <div style="padding: 20px 0px 0px 15px;" v-if="menulisIsiPage2 === true">
      <div class="tengah2">
        <div class="row">
          <div class="col-sm-1">
            <b-btn class="tengah_tips" @click="showModal6 = true">TIPS</b-btn>
          </div>
          <div class="col-sm-11">
            <p class="tengah_text3">
              Centang kotak untuk memilih ide untuk ditulis dalam sebuah
              kalimat.
            </p>
            <p class="tengah_text3">
              Untuk isi paragraf, pilih dan tulis setidaknya empat ide.
            </p>
            <p class="tengah_text3">
              Catatan: Kalimat topik Anda telah ditempatkan di
              <b>Catatan PraMenulis-Menulis</b>
            </p>
          </div>
        </div>
      </div>
      <div style="padding:30px 0px 0px 210px;">
        <!-- Form Centang -->
        <b-form>
          <div class="col-sm-12">
            <div
              class="content_padding_tulis_right_paragraf_bawah2"
              style="padding: 0px 0px 20px 0px"
            >
              <div class="gabungan">
                <div class="catatan">
                  <h4><b>Catatan Pra Menulis</b></h4>
                </div>
              </div>

              <div
                style="background-color: #c1c8d3;width: 80%;padding: 13px;border-radius: 0px 0 30px 30px;"
              >
                <div style="margin-left: 30px">
                  <div>
                    <div class="col-sm-12">
                      <div style="max-width: 90%">
                        <ul>
                          <div
                            class="dua"
                            v-for="(dataSesion1,
                            index) in pramenulisLanjutanDataSesion.resultMenulis"
                            :key="index"
                          >
                            <div class="row">
                              <div class="col-sm-10">
                                <h5 style="padding: 10px 0px 0px 0px">
                                  <li>
                                    &nbsp; &nbsp;{{ dataSesion1.pramenulis }}
                                  </li>
                                </h5>
                              </div>
                              <div class="col-sm-2" style="text-align: right">
                                <button
                                  class="tips-form"
                                  type="button"
                                  v-on:click="takeModal(index)"
                                >
                                  <b>Tips</b>
                                </button>
                              </div>
                              <b-form-input
                                v-model="dataForm.menulis[index]"
                              ></b-form-input>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-form>
      </div>
      <!-- button -->
      <div style="padding: 0p 0px 20px 0px">
        <div class="Button2">
          <b-btn class="button2 justify-content-center" @click="kirim()">
            <b>OK</b>
          </b-btn>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script src="./js/menulisIsi.js" />

<style lang="scss" scoped>
// all
.all {
  overflow-x: hidden;
  max-width: 1440px;
  margin: auto;
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
}
.Button2 {
  display: flex;
  margin-left: 300px;
  @media screen and (max-width: 990px) {
    margin-left: 30%;
  }
  .button2 {
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

  .button2:hover {
    background-color: #0a4da3;
    color: #fff;
  }
}
.tengah2 {
  padding: 0px 0px 0px 100px;
  display: flex;
  width: 100%;
  display: flex;
  padding-top: 13px;
}
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
    height: 35px;
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
    width: 80%;
    font-family: Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
  }
  &_text3 {
    margin-left: 30px;
    width: 100%;
    font-family: Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
  }
}
// Judul
.content-satu {
  //   background: red;
  margin-top: 120px;
}

.judul {
  padding: 10px 0px 0px 0px;
  font-family: Poppins;
  font-weight: 70;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  h1 {
    font-weight: bolder;
    font-size: 47px;
    margin-left: 10px;
    @media (max-width: 768px) {
      padding: 100px 5px 0px 5px;
      font-size: 40px;
    }
  }
}
// End Judul

// Stepper
// .content-dua {
//   //   background: red;
// }

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
// End Stepper

// Jenis Paragraf
.jenis {
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
// End Jenis Paragraf

// Tips dan Kalimat
// .content-empat {
//   //   background: red;
//   // margin-left: -100px;
// }

.tips {
  //   background: skyblue;
  text-align: right;
  margin: 5px;
  width: 100%;
  @media Screen and (max-width: 768px) {
  }
  &_judul {
    background-color: #00a279;
    height: 40px;
    line-height: 32px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 5px;
    width: 115px;
    color: #fff;
    @media Screen and (max-width: 780px) {
    }
  }
}

.kalimat {
  padding: 0px 0px 0px 30px;
  //   background: greenyellow;
  &_p {
    font-size: 20px;
    margin: 5px;
  }
}
// end Tips dan Kalimat

// Tombol OK
.content-lima {
  margin-left: -400px;
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

.ok2 {
  font-size: 25px;
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 120px;
  height: 50px;
  color: #fff;
  font-family: Poppins;
}
// End Tombol OK

.gabungan {
  padding: 30px 0px 80px 220px;
  .catatan {
    width: 238px;
    height: 42px;
    left: 0px;
    color: #fff;
    background: #455a64;
    border-radius: 7px 7px 0px 0px;
    padding: 10px 0px 0px 10px;
  }
}

.border {
  background-color: #484c52;
  height: 42px;
  width: 238px;
  border-radius: 20px 20px 0px 0px;
  border: none;
  h4 {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    line-height: 24px;
  }
  &_list {
    display: flex;
    font-family: Poppins;
    background-color: #e0e0e0;
    width: 730px;
    padding: 13px;
    border-radius: 0px 0px 13px 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #030303;
    text-align: left;
  }
}
// End Catatan Pramenulis

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

/* Style Isi Modal */
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

.kalimat3 {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
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
  vertical-align: middle;
}

/* End Background Belakang Modal */

//
// Tips Form
.tips-form {
  color: blue;
  font-size: 20px;
  border: none;
  background: none;
  font-family: Poppins;
  margin-top: 5px;
}

// content tujuh
.content-tujuh {
  margin-left: 230px;
  margin-top: 20px;
}
// end content tujuh
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
