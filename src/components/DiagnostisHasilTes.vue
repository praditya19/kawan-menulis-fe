<template>
  <div class="all">
    <img src="@/assets/diagnostis.png" alt="logo" class="image" />
    <div class="lebar">
      <!--Slide-->
      <div v-if="showModalSendEmailSucces === true">
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
                      <div
                        style="padding: 0% 0% 0% 12%; width: 85%; text-align: center;"
                      >
                        <p></p>
                        <p>
                          Email terkirim! <br />
                          Silahkan periksa email atau folder spam Anda.
                        </p>
                      </div>
                    </div>

                    <div class="tombol1">
                      <button
                        class="ok1"
                        block
                        @click="showModalSendEmailSucces = false"
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
      <div v-if="erorSend === true">
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
                        src="@/assets/Warning.png"
                      />
                    </div>

                    <div class="kalimat">
                      <div
                        style="padding: 0% 0% 0% 12%; width: 85%; text-align: center;"
                      >
                        <p></p>
                        <p>
                          Email belum terkirim! <br />
                          Pastikan email yang anda masukkan benar.
                        </p>
                      </div>
                    </div>
                    <div class="tombol1">
                      <button class="ok1" block @click="erorSend = false">
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
      <!--artikel -->
      <div class="conten_home">
        <div class="conten_home_top">
          <div class="col-md-12">
            <div class="head">
              <p>
                Selamat! <br />
                Kamu telah berhasil menyelesaikan Tes Diagnostik Kemampuan
                Menulis
              </p>
            </div>
            <div class="text">
              <p>
                Hasil Test Kemampuan :
                <b
                  >{{ studentResultSession.level }} ({{
                    studentResultSession.endScore
                  }})
                </b>
              </p>
              <p>{{ studentResultSession.congratsText }}</p>
            </div>
            <div v-if="studentResultSession.endScore !== 59" class="result ">
              <b-button variant="success" v-on:click="handleSubmit"
                >Kirim Via Email</b-button
              >
              <b-button variant="primary" href="/mulaimenulis"
                >Mulai Latihan Menulis</b-button
              >
            </div>
            <div v-if="studentResultSession.endScore === 59" class="result2">
              <b-button variant="success" v-on:click="handleSubmit"
                >Kirim Via Email</b-button
              >
              <b-button variant="primary" href="/mulaimenulis"
                >Mulai Latihan Menulis</b-button
              >
              <b-button variant="secondary" href="/tutor"
                >Hubungi Tutor</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/diagnostisHasilTest.js" />
<style lang="scss" scoped="scoped">
.all {
  max-width: 1350px;
  margin: auto;
}
.image {
  max-width: 100%;
  width: 100%;
  height: 296px;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: auto;
  }
}

.lebar {
  width: 100%;
  overflow-x: hidden;
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

.conten_home {
  width: 100%;
  &_top {
    display: flex;
    justify-content: center;
    padding: 20px 0px 100px 0px;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
      display: inline-block;
      text-align: justify;
    }

    .head {
      padding: 0px 250px 0px 250px;
      @media (max-width: 768px) {
        padding: 0px 30px 0px 30px;
      }
      p {
        font-family: Poppins;
        font-size: 34px;
        line-height: 51px;
        font-weight: 700;
        text-align: center;
        font-weight: bold;
        @media (max-width: 768px) {
          font-size: 25px;
        }
      }
    }

    .text {
      padding: 10px 200px 10px 200px;
      @media (max-width: 768px) {
        padding: 0px 20px 0px 20px;
      }
      p {
        font-family: Poppins;
        font-style: normal;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        width: 100%;
      }
    }

    .btn-success {
      border: none;
      color: white;
      // padding: 10px 10px;
      text-decoration: none;
      width: 354px;
      height: 60px;
      display: inline-block;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
      @media (max-width: 768px) {
        width: 200px;
      }
    }

    .btn-primary {
      border: none;
      color: white;
      padding-top: 17px;
      text-decoration: none;
      width: 354px;
      height: 60px;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
      margin: 0px 50px 0px 50px;
      @media (max-width: 768px) {
        margin: 20px 10px 20px 10px;
        width: 200px;
      }
    }

    .btn-secondary {
      border: none;
      color: white;
      padding-top: 17px;
      text-decoration: none;
      width: 354px;
      height: 60px;
      display: inline-block;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
      @media screen and(max-width:768px) {
        width: 200px;
      }
    }
  }

  .result {
    width: 100%;
    padding-top: 30px;
    text-align: center;
    @media (max-width: 768px) {
      width: 100%;
      padding: 30px 10px 0px 10px;
    }
  }

  .result2 {
    width: 100%;
    text-align: center;
    padding-top: 30px;
    @media (max-width: 768px) {
      width: 100%;
      padding: 30px 10px 0px 10px;
    }
  }
}
</style>
