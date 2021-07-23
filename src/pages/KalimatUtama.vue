<template>
  <div class="all">
    <!-- Judul -->
    <div class="content-satu">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <!-- Stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/3.png" />
    </div>
    <!-- End Stepper  -->

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
                        Kalimat utama yang kamu tulis harus menggambarkan ide
                        utama paragrafmu:
                        <br /><strong>Cara membuat kopi</strong><br /><code
                          style="color:red;font-size:16px;"
                          ><strong>(Ambil dari Topik Input 1)</strong></code
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
                        Lengkapi kalimat di dalam kotak masukan menjadi kalimat
                        utama yang baik.
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
                        Contoh kalimat utama : Saya sangat mahir dalam membuat
                        salindia yang menarik.
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
                        Harap gunakan tanda baca penutup kalimat dengan benar,
                        dan pastikan kalimat dimulai dengan huruf kapital.
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
                        Harap gunakan tanda baca penutup kalimat dengan benar,
                        dan pastikan kalimat dimulai dengan huruf kapital.
                      </p>
                    </div>
                  </div>

                  <div class="tombol">
                    <button class="ok" block @click="page4Next">
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
    <div v-if="kalimatUtamaPage1 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <button class="tips_judul" @click="showModal = true">TIPS</button>
          </div>
        </div>
        <div class="col-md-9.5 tips_kata">
          <p>
            Mari mulai paragrafmu dengan sebuah kalimat utama.
          </p>
          <p>
            Kalimat utama adalah kalimat yang mengandung topik/ide tulisanmu.
            Kalimat utama pada umumnya berada di awal paragraf.
          </p>
        </div>
      </div>
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page1Next">
          <b>OK</b>
        </b-btn>
      </div>
    </div>
    <!-- end button -->
    <!-- penutup page 1 -->

    <!-- kalimat utama page 2 -->
    <div v-if="kalimatUtamaPage2 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <button class="tips_judul" @click="showModal2 = true">TIPS</button>
          </div>
        </div>
        <div class="col-md-9.5 tips_kata">
          <p>
            Berikut ini sebuah contoh kalimat utama tentang cara melakukan
            sesuatu yang sangat kamu kuasai.
          </p>
          <p>
            <strong
              >Saya sangat mahir dalam membuat media salindia yang
              menarik.</strong
            >
          </p>
        </div>
      </div>
      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page2Next">
          <b>OK</b>
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 2 -->

    <!-- kalimat utama page 3 -->
    <div v-if="kalimatUtamaPage3 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <button class="tips_judul" @click="showModal3 = true">TIPS</button>
          </div>
        </div>
        <div class="col-md-9.5 tips_kata">
          <p>
            Kamu juga dapat memulai paragrafmu dengan melihat kata-kata yang
            kamu miliki di kotak masukan. Silakan latihan dengan mengubah kata
            atau klausa itu menjadi kalimat awal yang baik. Pada halaman
            selanjutnya, kamu akan menulis kalimat utamamu sendiri.
          </p>
          <div class="tengah_bawah">
            <p>
              Lengkapi kalimat di bawah ini menjadi kalimat utama yang baik.
            </p>
            <div>
              <b-form-input
                class="tinggi"
                v-model="form.kalimatUtama1"
              ></b-form-input>
            </div>
          </div>
        </div>
      </div>

      <!-- button -->
      <div class="Button">
        <b-btn class="button  justify-content-center" @click="page3Next()">
          <b>OK</b>
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 3 -->

    <!-- kalimat utama page 4 -->
    <div v-if="kalimatUtamaPage4 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <button class="tips_judul" @click="showModal4 = true">TIPS</button>
          </div>
        </div>
        <div class="col-md-9.5 tips_kata">
          <p>
            Sekarang tulislah kalimat utama untuk memulai paragrafmu. Kalimat
            itu harus berisi topik yang ingin kamu jelaskan dalam paragraf
            ya....
          </p>
          <p>Klik Tips untuk melihat contoh kalimat utama.</p>
          <div>
            <b-form-input
              class="tinggi"
              v-model="form.kalimatUtama2"
            ></b-form-input>
          </div>
        </div>
      </div>

      <!-- button -->
      <div class="Button">
        <b-btn class="button justify-content-center" @click="page4Next()">
          <b> OK</b>
        </b-btn>
      </div>
      <!-- end button -->
    </div>
    <!-- penutup page 4 -->

    <div class="gabungan">
      <div class="catatan">
        <p class="kata-bawah">Catatan Pra Menulis</p>
      </div>
      <div class="daftar">
        <ul
          v-for="(dataSesion, index) in pramenulisDataSesion.resultMenulis"
          :key="index"
        >
          <li>{{ dataSesion.pramenulis }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="@/pages/js/kalimatUtama.js" />

<style lang="scss" scoped>
.all {
  overflow-x: hidden;
}

.content-satu {
  margin-top: 130px;
}

.tinggi {
  height: 50px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
}

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
// End Stepper

// Jenis Paragraf
.jenis {
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
// End Jenis Paragraf

// body
.body {
  display: flex;
  padding: 10px 0px 0px 90px;
  @media screen and(max-width: 768px) {
    padding: 10px 10px 0px 10px;
  }
}

// button tips
.tips {
  text-align: right;
  margin: 5px;
  width: 100%;
  @media Screen and (max-width: 768px) {
  }
  &_judul {
    background-color: #00a279;
    border: none;
    line-height: 32px;
    width: 98px;
    border-radius: 10px;
    margin: 5px;
    color: #fff;
    @media Screen and (max-width: 780px) {
    }
  }
  &_kata {
    padding: 10px 220px 0px 15px;
    font-family: Poppins;
    font-weight: 400;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    @media Screen and (max-width: 780px) {
      padding: 10px 0px 0px 10px;
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
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
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

// .container-progress {
//   margin: 100px auto;
//   font-size: 16px;
//   font-weight: bold;
//   font-family: Poppins;
//   color: white;
//   margin-top: 50px;
//   padding: 0;
// }
</style>
