<template>
  <div class="all">
    <!-- Judul -->
    <div class="content-satu">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <br />
    <!-- Stepper -->
    <div class="content-dua">
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/7.png" alt="" />
      </div>
    </div>
    <br />
    <!-- Jenis Paragraf -->
    <div class="content-tiga">
      <div class="jenis">
        <p class="jenis_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
        <p class="jenis_topik">
          <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
          sesuatu? Coba sebutkan satu.
        </p>
      </div>
    </div>
    <br />
    <!-- Tips dan Kalimat -->
    <!-- Screen 1 -->
    <div class="content-empat" v-if="menuliskesimpulanPage1 === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModal = true">
                Tips
              </b-button>
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
                              <div style="padding: 0% 0% 0% 12%; width: 85%">
                                <p>Kalimat utama memperkenalkan topik.</p>
                                <p>
                                  Kalimat penutup menyatakan kembali dengan kata
                                  kata yang berbeda.
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal = false"
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
            </div>
          </div>
          <div class="col-sm-8">
            <div class="kalimat">
              <p class="kalimat_p">
                Sekarang Anda siap untuk menyimpulkan paragraf Anda. Kalimat
                penutup merangkum apa yang telah Anda tulis.
              </p>
            </div>
          </div>

          <!-- Button OK -->
          <div class="content-lima" @click="menuliskesimpulan1Next">
            <div class="tombol">
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Screen 2 -->
    <div class="content-empat" v-if="menuliskesimpulanPage2 === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModal2 = true">
                Tips
              </b-button>
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
                              <div style="padding: 0% 0% 0% 12%; width: 85%">
                                <p>
                                  Kalimat penutup Anda harus meringkas topik
                                  paragraf Anda.
                                  <code style="color: red"
                                    ><strong
                                      >Dufan.(Diambil dari Topik Tahap
                                      2)</strong
                                    ></code
                                  >
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal2 = false"
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
            </div>
          </div>
          <div class="col-sm-8">
            <div class="kalimat">
              <p class="kalimat_p">
                Berikut adalah contoh kalimat yang dapat menyimpulkan paragraf
                tentang tempat tertentu di dekat rumah Anda.
              </p>
              <p class="kalimat_p">
                <strong>
                  Kamu kini dapat mengetahui, mengapa Dufan menjadi tempat
                  pertama yang akan saya tuju bersama teman yang datang pertama
                  kali mengunjungi saya.
                </strong>
              </p>
            </div>
          </div>
          <!-- Button OK -->
          <div class="content-lima" @click="menuliskesimpulan2Next">
            <div class="tombol">
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- screen 3 -->
    <div class="content-empat" v-if="menuliskesimpulanPage3 === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModal3 = true">
                Tips
              </b-button>
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
                              <div style="padding: 0% 0% 0% 12%; width: 85%">
                                <p>
                                  Contoh kalimat penutup: <br /><br />
                                  <Strong
                                    >Kamu kini dapat mengetahui, mengapa Dufan
                                    menjadi tempat pertama yang akan kamu tuju
                                    bersama teman yang datang pertama kali
                                    mengunjungi saya.
                                    <code style="color: red"
                                      >(Ambil dari Menulis Kesimpulan Tahap
                                      2)</code
                                    >
                                  </Strong>
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal3 = false"
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
            </div>
          </div>
          <div class="col-sm-8">
            <div class="kalimat">
              <p class="kalimat_p">
                Sekarang tulis kalimat penutup Anda sendiri. Kalimat penutup
                harus mengingatkan pembaca akan kalimat pembuka Anda.
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
          <!-- Button OK -->
          <div class="content-lima" @click="menuliskesimpulan3Next">
            <div class="tombol">
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />

    <!-- Catatan Pra Menulis -->
    <div class="content-enam">
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
                    index) in dataSesion.konsepParagrafArray"
                    :key="index"
                  >
                    <h5>
                      <li>&nbsp; &nbsp;{{ dataSesion }}</li>
                    </h5>
                  </div>
                </ul>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script src="./js/menulisKesimpulan.js" />

<style lang="scss" scoped>
// all
.all {
  overflow-x: hidden;
}

// Judul
.content-satu {
  //   background: red;
  margin-top: 120px;
}

.judul {
  font-size: 50px;
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
// End Judul

// Stepper

.steper {
  text-align: center;
  &_image {
    width: 1000px;
    text-align: center;
  }
}
// End Stepper

// Jenis Paragraf
.jenis {
  display: flex;
  max-width: 1440px;
  height: 49px;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  &_paragraf {
    padding: 11px 0px 0px 110px;
  }
  &_topik {
    padding: 11px 0px 0px 70px;
  }
}
// End Jenis Paragraf

// Tips dan Kalimat
.tips {
  //   background: skyblue;
  margin-left: 105px;
  &_judul {
    background-color: #00a279;
    border: none;
    width: 98px;
    line-height: 32px;
    border-radius: 10px;
    margin: 5px;
  }
}

.kalimat {
  &_p {
    font-size: 20px;
    margin: 5px;
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

// Catatan Pra Menulis
.content-enam {
  margin-left: 230px;
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
    text-align: center;
    margin-top: 10px;
  }
  &_list {
    background-color: #c1c8d3;
    width: 730px;
    padding: 13px;
    border-radius: 0px 0 30px 30px;
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
</style>
