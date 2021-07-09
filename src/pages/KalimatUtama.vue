<template>
  <div class="all">
    <div class="judul">
      <p>Latihan Menulis</p>
    </div>

    <!-- Stepper -->
        <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/3.png">
        </div>
        <!-- End Stepper  -->

    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <!-- modal -->
    <!-- page1 -->
    <!-- popup -->
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
                                style="width: 40px;height:38.49px;"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
                              <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                <p class="mb-4">
                                  Kalimat utama mengandung topik yang hendak kamu tulis.
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

    <!-- page2 -->
    <!-- popup -->
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
                                style="width: 40px;height:38.49px;"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
                              <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                <p class="mb-4">
                                  Kalimat utama yang kamu tulis harus menggambarkan ide utama paragrafmu:
                                  <br><strong>Cara membuat kopi</strong><br><code style="color:red;font-size:16px;"><strong>(Ambil dari Topik Input 1)</strong></code>
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

    <!-- page3 -->
    <!-- popup -->
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
                                style="width: 40px;height:38.49px;"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
                              <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                <p class="mb-4">
                                  Lengkapi kalimat di dalam kotak masukan menjadi kalimat utama yang baik.
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

    <!-- page4 -->
    <!-- popup -->
              <div v-if="showModal4 === true">
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
                                <p class="mb-4">
                                  Contoh kalimat utama :
                                  Saya sangat mahir dalam membuat salindia yang menarik.
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal4 = false"
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

    <!-- Modal Ok Screen 4 dan 5-->
    <!-- screen 4 -->
    <!-- popup -->
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
                                style="width: 40px;height:38.49px;"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
                              <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                <p>
                                  Harap gunakan tanda baca penutup kalimat dengan benar, dan pastikan kalimat dimulai dengan huruf kapital.
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="page3Next" 
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

    <!-- Screen 5 -->
    <!-- popup -->
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
                                style="width: 40px;height:38.49px;"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
                              <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                <p>
                                  Harap gunakan tanda baca penutup kalimat dengan benar, dan pastikan kalimat dimulai dengan huruf kapital.
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="page4Next"
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


    <!-- kalimatutama page 1 -->
    <div class="page1" v-if="kalimatUtamaPage1 === true">
      <div class="tengah">
        <p class="tengah_tips" @click="showModal = true">TIPS</p>
        <p class="tengah_text">
          Mari mulai paragrafmu dengan sebuah kalimat utama.<br />
          Kalimat utama adalah kalimat yang mengandung topik/ide tulisanmu.
          Kalimat utama pada umumnya berada di awal paragraf.
        </p>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page1Next">
          OK
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 1 -->

    <!-- kalimat utama page 2 -->
    <div class="page2" v-if="kalimatUtamaPage2 === true">
      <div class="tengah">
        <p class="tengah_tips" @click="showModal2 = true">TIPS</p>
        <p class="tengah_text2">
          Berikut ini sebuah contoh kalimat utama tentang cara melakukan sesuatu
          yang sangat kamu kuasai. <br />
          <strong
            >Saya sangat mahir dalam membuat media salindia yang
            menarik.</strong
          >
        </p>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page2Next">
          OK
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 2 -->

    <!-- kalimat utama page 3 -->
    <div class="page3" v-if="kalimatUtamaPage3 === true">
      <div class="tengah">
        <p class="tengah_tips3" @click="showModal3 = true">TIPS</p>
        <p class="tengah_text">
          Kamu juga dapat memulai paragrafmu dengan melihat kata-kata yang kamu
          miliki di kotak masukan. Silakan latihan dengan mengubah kata atau
          klausa itu menjadi kalimat awal yang baik. Pada halaman selanjutnya,
          kamu akan menulis kalimat utamamu sendiri.
        </p>
      </div>
      <div class="tengah_bawah">
        <p class="tengah_bawah_text-bawah">
          Lengkapi kalimat di bawah ini menjadi kalimat utama yang baik.
        </p>
        <b-form-input class="tengah_bawah_form"></b-form-input>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="showModal5 = false">
          OK
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 3 -->

    <!-- kalimat utama page 4 -->
    <div class="page4" v-if="kalimatUtamaPage4 === true">
      <div class="tengah">
        <p class="tengah_tips" @click="showModal4 = true">TIPS</p>
        <p class="tengah_text">
          Sekarang tulislah kalimat utama untuk memulai paragrafmu. Kalimat itu
          harus berisi topik yang ingin kamu jelaskan dalam paragraf ya....
          <br />
          Klik Tips untuk melihat contoh kalimat utama.
        </p>
      </div>
      <div class="tengah_bawah">
        <b-form-input class="tengah_bawah_form4"></b-form-input>
      </div>

      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="showModal6 = false">
          OK
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 4 -->

    <div class="gabungan">
      <div class="catatan">
        <p>Catatan Pra Menulis</p>
      </div>
      <div class="daftar">
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
        <ul>
          <li>Cara membuat kopi</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="@/pages/js/kalimatUtama.js" />

<style lang="scss" scoped>
// .all {
// }

.judul {
  padding: 100px 0px 20px 0px;
  p {
    width: 100%;
    font-size: 50px;
    font-weight: 700;
    font-family: Poppins;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
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

.center {
  display: flex;
  width: 100%;
  height: 50px;
  // position: absolute;
  font-size: 16px;
  padding-top: 12px;
  background-color: rgba(139, 181, 236, 0.1);
  &_paragraf {
    margin-left: 200px;
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

// page 1 & 3
.tengah {
  // padding: 70px 0px 0px 210px;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  // button tips
  &_tips {
    width: 98px;
    height: 32px;
    border-radius: 10px;
    text-align: center;
    background-color: #00a279;
    color: #fff;
    font-size: 20px;
    margin-bottom: 60px;
    cursor: pointer;
  }

  &_tips3 {
    width: 98px;
    height: 32px;
    border-radius: 10px;
    text-align: center;
    background-color: #00a279;
    color: #fff;
    font-size: 20px;
    margin-bottom: 90px;
    cursor: pointer;
  }

  // text page 1
  &_text {
    margin-left: 30px;
    width: 48%;
    font-family: Poppins;
    font-size: 20px;
  }

  // text page 2
  &_text2 {
    margin-left: 30px;
    width: 48%;
    font-family: Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
  }
}

// page 3 & 4
.tengah_bawah {
  padding: 0px 0px 25px 415px;
  font-weight: 400;
  &_text-bawah {
    width: 69.3%;
    height: 90px;
    font-family: Poppins;
    font-size: 20px;
    letter-spacing: 0em;
    text-align: left;
    font-weight: 400;
  }

  &_form {
    margin-top: -70px;
    height: 59px;
    width: 69.3%;
    background: #fafafa;
    border: 2px solid #0a4da3;
    box-sizing: border-box;
    border-radius: 4px;
  }

  &_form4 {
    margin-top: 0px;
    height: 59px;
    width: 69.3%;
    background: #fafafa;
    border: 2px solid #0a4da3;
    box-sizing: border-box;
    border-radius: 4px;
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
.gabungan {
  padding: 69px 0px 80px 259px;
  .catatan {
    width: 238px;
    height: 42px;
    left: 0px;
    color: #fff;
    background: #455a64;
    border-radius: 7px 7px 0px 0px;
    padding: 8px 0px 0px 10px;
    font-weight: 700;
  }

  .daftar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 13px 25px;
    width: 800px;
    height: 191px;
    left: 0px;
    top: 230px;
    font-size: 20px;
    font-weight: 400;
    background: #e0e0e0;
    border-radius: 0px 0px 14px 14px;
    li {
      margin-bottom: -10px;
    }
  }
  @media (max-width: 768px) {
    padding: 50px 35px 80px 35px;
    .daftar {
      width: 100%;
      height: auto;
    }

    .catatan {
      width: 60%;
    }
  }
}

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

.kalimat {
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
  vertical-align: middle;
}

/* End Background Belakang Modal */

// penutup style css modal

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

</style>
