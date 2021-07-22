<template>
  <div class="all">
    <div class="head">
      <p>Latihan Menulis</p>
    </div>

    <!-- stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/7.png" />
    </div>

    <!-- tengah -->
    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <!-- modal1 -->
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
                        Form tidak boleh kosong
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
    <div v-if="showModal === true">
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
                    <div style="padding: 0% 0% 0% 9%; width: 90%;">
                      <p>Kalimat utama memperkenalkan topik.</p>
                      <p>
                        Kalimat penutup menyatakan kembali dengan kata kata yang
                        berbeda.
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
    <!-- end modal1 -->

    <!-- modal2 -->
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
                      style="width: 40px; height: 38.49px"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat2">
                    <div style="padding: 0% 0% 0% 9%; width: 93%;">
                      <p>
                        Kalimat penutup Anda harus meringkas topik paragraf
                        Anda.
                        <code style="color: red"
                          ><strong
                            >Dufan.(Diambil dari Topik Tahap 2)</strong
                          ></code
                        >
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
    <!-- end modal1 -->

    <!-- modal3 -->
    <div v-if="showModal3 === true">
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
                    <div style="padding: 0% 0% 0% 9%; width: 90%;">
                      <p>
                        Contoh kalimat penutup: <br /><br />
                        <Strong
                          >Kamu kini dapat mengetahui, mengapa Dufan menjadi
                          tempat pertama yang akan kamu tuju bersama teman yang
                          datang pertama kali mengunjungi saya.
                          <code style="color: red"
                            >(Ambil dari Menulis Kesimpulan Tahap 2)</code
                          >
                        </Strong>
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
    <!-- end modal1 -->

    <!-- Screen 1 -->
    <div v-if="menuliskesimpulanPage1 === true">
      <div class="header">
        <div class="col-md-2.5">
          <b-btn class="tips" @click="showModal = true">TIPS</b-btn>
        </div>
        <div class="col-md-9.5">
          <div class="kalimat">
            <p class="kalimat_p">
              Sekarang Anda siap untuk menyimpulkan paragraf Anda. Kalimat
              penutup merangkum apa yang telah Anda tulis.
            </p>
          </div>
        </div>
      </div>

      <!-- Button OK -->
      <div class="content-lima" @click="menuliskesimpulan1Next">
        <div class="tombol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>

    <!-- Screen 2 -->
    <div v-if="menuliskesimpulanPage2 === true">
      <div class="header">
        <div class="col-md-2.5">
          <b-button class="tips" @click="showModal2 = true">
            Tips
          </b-button>
        </div>
        <div class="col-md-9.5">
          <div class="kalimat">
            <p class="kalimat_p">
              Berikut adalah contoh kalimat yang dapat menyimpulkan paragraf
              tentang tempat tertentu di dekat rumah Anda.
            </p>
            <p class="kalimat_p">
              <strong>
                Kamu kini dapat mengetahui, mengapa Dufan menjadi tempat pertama
                yang akan saya tuju bersama teman yang datang pertama kali
                mengunjungi saya.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <!-- Button OK -->
      <div class="content-lima" @click="menuliskesimpulan2Next">
        <div class="tombol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>

    <!-- screen 3 -->
    <div v-if="menuliskesimpulanPage3 === true">
      <div class="header">
        <div class="col-md-2.5">
          <b-button class="tips" @click="showModal3 = true">
            Tips
          </b-button>
        </div>
        <div class="col-md-9.5">
          <div class="kalimat">
            <p class="kalimat_p">
              Sekarang tulis kalimat penutup Anda sendiri. Kalimat penutup harus
              mengingatkan pembaca akan kalimat pembuka Anda.
            </p>
            <p class="kalimat_p">
              Klik Tip untuk melihat contoh kalimat yang dapat menyimpulkan
              paragraf Anda.
            </p>
            <div style="padding: 10px 0px 10px 0px">
              <b-form-input
                v-model="dataForm.menulis"
                id="feedback-user"
              ></b-form-input>
            </div>
          </div>
        </div>
      </div>

      <!-- Button OK -->
      <div class="content-lima" @click="menuliskesimpulan3Next">
        <div class="tombol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>

    <br />

    <!-- Catatan Pra Menulis -->
    <div class="content-enam">
      <div class="border">
        <div class="border_catatan">
          <p>Catatan Paragraf</p>
        </div>
      </div>
      <div class="border_list">
        <div style="margin-left: 10px">
          <b-form-group>
            <div>
              <ul>
                <div
                  class="dua"
                  v-for="(dataSesion, index) in dataSesion.konsepParagrafArray"
                  :key="index"
                >
                  <h5>
                    <li>{{ dataSesion }}</li>
                  </h5>
                </div>
              </ul>
            </div>
          </b-form-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/menulisKesimpulan.js" />

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

// Tips dan Kalimat
.header {
  width: 100%;
  display: flex;
  padding: 13px 210px 48px 100px;
  @media screen and (max-width: 768px) {
    padding: 13px 10px 48px 5px;
  }
}

.tips {
  padding: 0px 0px 0px 0px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  background-color: #00a279;
  color: #fff;
  font-size: normal;
  // margin-bottom: 200px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
}

.kalimat {
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
// end Tips dan Kalimat

// Tombol OK
.tombol {
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
// End Tombol OK

// foot menulis kesimpulan
.content-enam {
  padding: 0px 200px 48px 215px;
  @media screen and (max-width: 768px) {
    padding: 10px 10px 30px 10px;
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

/* style Modal */
.modal-content {
  background: #e8f1fd;
  width: 100%;
  border-radius: 34px;
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
