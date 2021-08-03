<template>
  <div class="all">
    <div class="content-satu">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/2.png" />
    </div>
    <div class="jenis">
      <p class="jenis_paragraf">
        <strong>Jenis Paragraf: </strong>{{ jenisTopics.jenisParagraf }}
      </p>
      <p class="jenis_topik"><strong>Topik: </strong>{{ jenisTopics.topik }}</p>
    </div>

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
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                      >
                        <span v-if="index === 0" v-html="details.tips"></span>
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
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                      >
                        <span v-if="index === 1" v-html="details.tips"></span>
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
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                      >
                        <span v-if="index === 2" v-html="details.tips"></span>
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
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                      >
                        <span v-if="index === 3" v-html="details.tips"></span>
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
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                      >
                        <span v-if="index === 4" v-html="details.tips"></span>
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
                        Catatan yang telah kamu buat dapat membantu kamu
                        berpikir tentang topikmu. Jika kamu memiliki lebih
                        banyak ide, kamu dapat menambahkannya ke daftar catatan
                        setelah Anda menulis kalimat utama pada tahap
                        selanjutnya.
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

    <!-- Screen1 -->
    <div v-if="pramenulisPage1 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <b-button class="tips_judul" @click="showModal = true">
              TIPS
            </b-button>
          </div>
        </div>
        <!-- Kalimat Samping Button Tips -->
        <div class="col-md-9.5 tips_kata">
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 0" v-html="details.guide"></span>
            </p>
          </div>
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 0" v-html="details.input"></span>
            </p>
          </div>
          <div class="form">
            <b-form-input v-model="dataForm.menulisPage1"></b-form-input>
          </div>
        </div>
      </div>

      <div class="Button" @click="pramenulis1Next">
        <b-btn class="button justify-content-center" type="submit">
          <b>OK</b>
        </b-btn>
      </div>

      <div class="bawah">
        <div class="catatan">
          <p class="kata-bawah">Catatan Pra Menulis</p>
        </div>
        <div class="daftar">
          <b-form-group>
            <ul>
              <div
                v-for="(dataSesion, index) in topicDataSesion.resultMenulis"
                :key="index"
              >
                <h5>
                  <li>&nbsp; {{ dataSesion.pramenulis }}</li>
                </h5>
              </div>
            </ul>
          </b-form-group>
        </div>
      </div>
    </div>

    <!-- Screen2 -->
    <div v-if="pramenulisPage2 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <b-button class="tips_judul" @click="showModal2 = true">
              TIPS
            </b-button>
          </div>
        </div>
        <!-- Kalimat Samping Button Tips -->
        <div class="col-md-9.5 tips_kata2">
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 1" v-html="details.guide"></span>
            </p>
          </div>
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 1" v-html="details.input"></span>
            </p>
          </div>
          <div class="form">
            <b-form-input v-model="dataForm.menulisPage2"></b-form-input>
          </div>
        </div>
      </div>

      <div class="Button" @click="pramenulis2Next">
        <b-btn class="button justify-content-center" type="submit">
          <b>OK</b>
        </b-btn>
      </div>

      <div class="bawah">
        <div class="catatan">
          <p class="kata-bawah">Catatan Pra Menulis</p>
        </div>
        <div class="daftar">
          <b-form-group>
            <ul>
              <div
                v-for="(dataSesion, index) in topicDataSesion.resultMenulis"
                :key="index"
              >
                <h5>
                  <li>&nbsp; {{ dataSesion.pramenulis }}</li>
                </h5>
              </div>
            </ul>
          </b-form-group>
        </div>
      </div>
    </div>

    <!-- screen 3 -->
    <div v-if="pramenulisPage3 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <b-button class="tips_judul" @click="showModal3 = true">
              <b>TIPS</b>
            </b-button>
          </div>
        </div>
        <div class="col-md-9.5 tips_kata2">
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 2" v-html="details.guide"></span>
            </p>
          </div>
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 2" v-html="details.input"></span>
            </p>
          </div>
          <div class="form">
            <b-form-input
              v-model="dataForm.menulisPage3"
              id="feedback-user"
            ></b-form-input>
          </div>
        </div>
      </div>

      <div class="Button" @click="pramenulis3Next">
        <b-btn class="button justify-content-center" type="submit">
          <b>OK</b>
        </b-btn>
      </div>

      <div class="bawah">
        <div class="catatan">
          <p class="kata-bawah">Catatan Pra Menulis</p>
        </div>
        <div class="daftar">
          <b-form-group>
            <ul>
              <div
                v-for="(dataSesion, index) in topicDataSesion.resultMenulis"
                :key="index"
              >
                <h5>
                  <li>&nbsp; {{ dataSesion.pramenulis }}</li>
                </h5>
              </div>
            </ul>
          </b-form-group>
        </div>
      </div>
    </div>

    <!-- screen4 -->
    <div v-if="pramenulisPage4 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <b-button class="tips_judul" @click="showModal4 = true">
              <b>TIPS</b>
            </b-button>
          </div>
        </div>
        <div class="col-md-9.5 tips_kata2">
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 3" v-html="details.guide"></span>
            </p>
          </div>
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 3" v-html="details.input"></span>
            </p>
          </div>
          <div class="form">
            <b-form-input
              v-model="dataForm.menulisPage4"
              id="feedback-user"
            ></b-form-input>
          </div>
        </div>
      </div>

      <div class="Button" @click="pramenulis4Next">
        <b-btn class="button justify-content-center" type="submit">
          <b>OK</b>
        </b-btn>
      </div>

      <div class="bawah">
        <div class="catatan">
          <p class="kata-bawah">Catatan Pra Menulis</p>
        </div>
        <div class="daftar">
          <b-form-group>
            <ul>
              <div
                v-for="(dataSesion, index) in topicDataSesion.resultMenulis"
                :key="index"
              >
                <h5>
                  <li>&nbsp; {{ dataSesion.pramenulis }}</li>
                </h5>
              </div>
            </ul>
          </b-form-group>
        </div>
      </div>
    </div>

    <!-- screen 5 -->
    <div v-if="pramenulisPage5 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <b-button class="tips_judul" @click="showModal5 = true">
              <b>TIPS</b>
            </b-button>
          </div>
        </div>
        <div class="col-md-9.5 tips_kata2">
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 4" v-html="details.guide"></span>
            </p>
          </div>
          <div>
            <p v-for="(details, index) in pramenulisGuides" :key="index">
              <span v-if="index === 4" v-html="details.input"></span>
            </p>
          </div>
          <div class="form">
            <b-form-input
              v-model="dataForm.menulisPage5"
              id="feedback-user"
            ></b-form-input>
          </div>
        </div>
      </div>

      <div class="Button" @click="pramenulis5Next">
        <b-btn class="button justify-content-center" type="submit">
          <b>OK</b>
        </b-btn>
      </div>

      <div class="bawah">
        <div class="catatan">
          <p class="kata-bawah">Catatan Pra Menulis</p>
        </div>
        <div class="daftar">
          <b-form-group>
            <ul>
              <div
                class="dua"
                v-for="(dataSesion, index) in topicDataSesion.resultMenulis"
                :key="index"
              >
                <h5>
                  <li>&nbsp; &nbsp; {{ dataSesion.pramenulis }}</li>
                </h5>
              </div>
            </ul>
          </b-form-group>
        </div>
      </div>
    </div>

    <!-- screen6 -->
    <div v-if="pramenulisPage6 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <b-btn class="tips_judul" @click="showModal6 = true">
              <b>TIPS</b>
            </b-btn>
          </div>
        </div>
        <div class="col-md-9.5 tips_kata">
          <p>
            Saat ini kamu memiliki {{ pramenulisGuides.length + 1 }} Ide dalam
            Catatan Pra Menulis. <br />
            Jika kamu ingin menambahkan ide yang lain, kamu dapat menambahkannya
            kemudian pada tahapan selanjutnya.
          </p>
        </div>
      </div>

      <div class="Button" @click="pramenulis6Next">
        <b-btn class="button justify-content-center" type="submit">
          <b>OK</b>
        </b-btn>
      </div>

      <div class="bawah">
        <div class="catatan">
          <p class="kata-bawah">Catatan Pra Menulis</p>
        </div>
        <div class="daftar">
          <b-form-group>
            <ul>
              <div
                v-for="(dataSesion, index) in topicDataSesion.resultMenulis"
                :key="index"
              >
                <h5>
                  <li>&nbsp; &nbsp; {{ dataSesion.pramenulis }}</li>
                </h5>
              </div>
            </ul>
          </b-form-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/praMenulis.js" />

<style lang="scss" scoped>
.all {
  overflow: hidden;
  max-width: 1350px;
  margin: auto;
}

.content-satu {
  padding-top: 130px;
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

.body {
  display: flex;
  padding: 10px 0px 0px 90px;
  @media screen and(max-width: 768px) {
    padding: 10px 20px 0px 0px;
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
    width: 98px;
    border-radius: 10px;
    margin: 5px;
    color: #fff;
    @media Screen and (max-width: 780px) {
    }
  }
  &_kata {
    padding: 15px 100px 0px 15px;
    font-family: Poppins;
    font-weight: 400;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    width: 100%;
    @media Screen and (max-width: 780px) {
      padding: 15px 0px 0px 10px;
    }
  }
  &_kata2 {
    padding: 0px 220px 0px 15px;
    font-family: Poppins;
    font-weight: 400;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    width: 100%;
    @media Screen and (max-width: 780px) {
      padding: 0px 0px 0px 10px;
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

.bawah {
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
  padding-top: 75px;
  @media (max-width: 768px) {
    padding-top: 95px;
  }
}

/* End Background Belakang Modal */
</style>
