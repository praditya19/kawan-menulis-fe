<template>
  <div class="all">
    <div class="head">
      <p>Latihan Menulis</p>
    </div>

    <!-- stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/5.png" />
    </div>

    <!-- tengah -->
    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <!-- Modal area -->
    <div v-if="showModal1 === true">
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
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      <p style="font-size: 16px;">
                        Uraikan dalam sebuah 3 : <br />
                        <strong
                          >Mengapa kamu dapat mahir melakukan hal
                          tersebut?</strong
                        >
                        <code style="color: red"
                          ><strong
                            >(Ambil dari Panduan Pramenulis 1)</strong
                          ></code
                        >
                      </p>
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
      <!--showModal4-->
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
                        Uraikan dalam sebuah kalimat : <br />
                        <strong
                          >Apa saja alat/bahan yang dibutuhkan untuk
                          melakukannya?</strong
                        >
                        <code style="color: red"
                          ><strong
                            >(Ambil dari Panduan Pramenulis 2)</strong
                          ></code
                        >
                      </p>
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
                        Uraikan dalam sebuah kalimat : <br />
                        <strong
                          >Kata kerja apa saja yang akan dilakukan dalam proses
                          itu?</strong
                        >
                        <code style="color: red"
                          ><strong
                            >(Ambil dari Panduan Pramenulis 3)</strong
                          ></code
                        >
                      </p>
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
                        Uraikan dalam sebuah kalimat : <br />
                        <strong
                          >Hal apa saja yang perlu dihindari agar tidak
                          gagal?</strong
                        >
                        <code style="color: red"
                          ><strong
                            >(Ambil dari Panduan Pramenulis 4)</strong
                          ></code
                        >
                      </p>
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
    <!-- modal 4 -->
    <div v-if="showModal5 === true">
      <!--showModal4-->
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
                        Uraikan dalam sebuah kalimat : <br />
                        <strong
                          >Hal apa saja yang perlu diperhatikan agar hasilnya
                          maksimal?</strong
                        >
                        <code style="color: red"
                          ><strong
                            >(Ambil dari Panduan Pramenulis 5)</strong
                          ></code
                        >
                      </p>
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

    <!-- Screen 1 -->
    <div v-if="menulisIsi === true">
      <div class="tengah">
        <div class="col-md-2.5">
          <b-btn class="tengah_tips" @click="showModal = true">TIPS</b-btn>
        </div>
        <div class="col-md-9.5">
          <p class="tengah_text2">
            Anda sekarang siap untuk menggunakan ide-ide dari daftar pre-writing
            Anda untuk membantu Anda menulis isi paragraf Anda.
          </p>
          <p class="tengah_text2">
            Pada layar berikutnya Anda akan memilih ide satu persatu untuk
            ditulis dalam sebuah kalimat. Anda akan mencentang kotak untuk
            memilih ide.
          </p>

          <!-- button -->
          <div class="Button">
            <b-btn
              class="button  justify-content-center"
              @click="menulisIsiNext"
            >
              <b>OK</b>
            </b-btn>
          </div>

          <div class="border1">
            <div class="border">
              <div class="border_catatan">
                <h4><b>Catatan Pra Menulis</b></h4>
              </div>
            </div>
            <div class="border_list">
              <div style="margin-left: 20px">
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
      </div>
    </div>

    <!-- Screen 2 -->
    <div v-if="menulisIsiPage2 === true">
      <div class="tengah2">
        <div class="col-md-2.5">
          <b-btn class="tengah_tips" @click="showModal6 = true">TIPS</b-btn>
        </div>
        <div class="col-md-9.5">
          <p class="tengah_text3">
            Centang kotak untuk memilih ide untuk ditulis dalam sebuah kalimat.
          </p>
          <p class="tengah_text3" style="padding: 20px 0px 20px 0px">
            Untuk isi paragraf, pilih dan tulis setidaknya empat ide.
          </p>
          <p class="tengah_text3">
            Catatan: Kalimat topik Anda telah ditempatkan di
            <b>Catatan PraMenulis-Menulis</b>
          </p>
        </div>
      </div>

      <div>
        <!-- Form Centang -->
        <b-form>
          <div class="foot">
            <div class="border">
              <div class="border_catatan">
                <h4><b>Catatan Pra Menulis- Menulis</b></h4>
              </div>
            </div>

            <div class="foot_body">
              <div style="margin-left: 10px">
                <div>
                  <div style="max-width: 98%">
                    <ul>
                      <div
                        class="dua"
                        v-for="(dataSesion1,
                        index) in pramenulisLanjutanDataSesion.resultMenulis"
                        :key="index"
                      >
                        <div class="row">
                          <div class="col-md-10">
                            <h5 style="padding: 10px 0px 0px 0px">
                              <li>{{ dataSesion1.pramenulis }}</li>
                            </h5>
                          </div>
                          <div class="col-md-2" style="text-align: right">
                            <button
                              class="tips-form"
                              type="button"
                              v-on:click="takeModal(index)"
                            >
                              Tips
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
    padding: 120px 5px 0px 5px;
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
  padding: 11px 0px 0px 100px;
  &_paragraf {
    padding-right: 90px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 11px 20px 0px 20px;
  }
}

.foot {
  padding: 0px 0px 20px 215px;
  @media screen and (max-width: 768px) {
    padding: 0px 10px 20px 10px;
  }
  &_body {
    background-color: #c1c8d3;
    width: 80%;
    padding: 13px;
    border-radius: 0px 0 14px 14px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
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

.Button2 {
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.tengah2 {
  display: flex;
  width: 100%;
  display: flex;
  padding: 20px 210px 0px 100px;
  @media screen and (max-width: 768px) {
    padding: 13px 10px 48px 5px;
  }
}

.tengah {
  display: flex;
  width: 100%;
  display: flex;
  padding: 20px 210px 20px 100px;
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
  &_text3 {
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

// Tips dan Kalimat
// .content-empat {
//   //   background: red;
//   // margin-left: -100px;
// }

.tips {
  //   background: skyblue;
  text-align: right;
  margin: 5px;
  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 5px;
    width: 115px;
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

.border1 {
  padding: 20px 0px 0px 20px;
  @media screen and (max-width: 768px) {
    padding: 20px 0px 0px 0px;
  }
}
.border {
  background-color: #484c52;
  height: 42px;
  width: 238px;
  border-radius: 7px 7px 0px 0px;
  border: none;
  @media screen and (max-width: 768px) {
    width: 170px;
    height: auto;
  }
  h4 {
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
    padding-left: 10px;
  }
  &_list {
    display: flex;
    font-family: Poppins;
    background-color: #e0e0e0;
    width: 100%;
    padding: 13px 0px 0px 0px;
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
// End Catatan Pramenulis

/* style Modal */
.modal-content {
  background: #e8f1fd;
  width: 100%;
  border-radius: 34px;
  text-align: center;
  // padding: 10px 0px 10px 0px;
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

.kalimat2 {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
}

.tombol {
  /* background: red; */
  text-align: center;
  // padding: 5px;
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
</style>
