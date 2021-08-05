<template>
  <div>
    <div class="all">
      <!-- popup2 -->
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
                      <div
                        style="padding: 0% 0% 0% 12%; width: 85%;"
                        v-for="(topicGuidesList, index) in topicGuides"
                        :key="index"
                      >
                        <span v-html="topicGuidesList.tips"></span>
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
      <!-- popup2 -->
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
                          v-for="(topicGuidesList, index) in topicGuides"
                          :key="index"
                        >
                          <span
                            v-html="topicGuidesList.writingStep.tips"
                          ></span>
                        </p>
                      </div>
                    </div>

                    <div class="tombol">
                      <button class="ok" @click="showModal = false">
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
      <!-- Button Tips -->
      <div class="tips1">
        <b-button class="tips1_judul" @click="showModal = true"
          ><b>Tips</b></b-button
        >
        <p class="tips1_kata1"><b>Latihan Menulis</b></p>
      </div>
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/1.png" />
      </div>
      <!-- Jenis Paragraf -->
      <div class="center">
        <p class="center_paragraf">
          <strong>Jenis Paragraf: </strong>{{ jenisTopics.jenisParagraf }}
        </p>
        <p class="center_topik">
          <strong>Topik: </strong>{{ jenisTopics.topik }}
        </p>
      </div>

      <!-- Button Tips -->
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips2">
            <b-button class="tips2_judul" @click="showModal2 = true"
              >Tips</b-button
            >
          </div>
        </div>
        <div class="col-md-9.5 tips2_kata">
          <p v-for="(topicGuidesList, index) in topicGuides" :key="index">
            <span v-html="topicGuidesList.guide"></span>
          </p>
        </div>
      </div>

      <div class="bawah">
        <div class="content-form">
          <table>
            <tr>
              <label
                ><p
                  v-for="(topicGuidesList, index) in topicGuides"
                  :key="index"
                >
                  {{ topicGuidesList.input }}
                </p></label
              ><br />
            </tr>
          </table>
        </div>
        <div class="form">
          <b-form-input
            v-model="form.kalimatSederhana"
            type="text"
            style="width:100%; "
          ></b-form-input>
        </div>
      </div>
      <!-- Button Back OK -->
      <div class="btn-back-ok">
        <a href="/topik">
          <img src="@/assets/back.png" alt="logo" class="img" />
        </a>
        <b-button @click="onSubmit()" class="submit_ok">OK</b-button>
      </div>
    </div>
  </div>
</template>

<script src="./js/topik2.js"></script>

<style lang="scss" scoped>
.all {
  max-width: 1440px;
  margin: auto;
}

.body {
  display: flex;
  padding: 10px 270px 0px 130px;
  // background: red;
  @media screen and(max-width: 768px) {
    padding: 10px 10px 0px 10px;
  }
}
// Tombol judul
.tips1 {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 110px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    padding: 110px 0px 0px 20px;
  }
  &_judul {
    padding: 0px 0px 0px 0px;
    background-color: #00a279;
    height: 30px;
    border-radius: 10px;
    width: 100px;
    margin-bottom: 5px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
    }
  }
  &_kata1 {
    padding: 11px 0px 0px 20px;
    font-family: Poppins;
    font-weight: 700;
    font-size: 50px;
  }
}

// Kalimat samping tips center
.tips2 {
  // background: red;
  text-align: right;
  margin: 5px;
  @media Screen and (max-width: 768px) {
  }
  &_judul {
    background-color: #00a279;
    border: none;
    width: 98px;
    border-radius: 10px;
    margin: 5px;
    @media Screen and (max-width: 780px) {
      line-height: 22px;
    }
  }
  &_kata {
    padding: 12px 0px 0px 0px;
    font-family: Poppins;
    font-weight: 400;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    @media Screen and (max-width: 780px) {
      padding: 15px 0px 0px 0px;
    }
  }
}

.ok-judul {
  // background: red;

  .mt-judul {
    // margin-bottom: 10px;
    background: #0a4da3;
    margin: 0px 0px 5px 180px;
    border-radius: 39px;
    width: 108px;
  }
}

// icon checklist
.image-container1 {
  width: 470px;
  text-align: center;
  // background: red;
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

// Jenis Paragaf.....
// tengah
.center {
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
      padding-right: 30px;
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

.bawah {
  padding: 0px 230px 30px 235px;
  @media screen and (max-width: 768px) {
    padding: 0px 20px 30px 20px;
  }
}

// Tombol Tips Content Center
/* Style Modal */

.modal-content {
  background: #e8f1fd;
  width: 100%;
  border-radius: 34px;
  padding: 10px 0px 0px 0px;
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

// Kalimat bawah tombol Tips kedua
// .content-cara {
//   font-family: Poppins;
//   font-size: 20px;
//   // background: red;
//   margin-left: 243px;
//   @media (max-width: 768px) {
//     margin-left: 10%;
//   }
// }

// Gunakan klausa .......
.content-form {
  padding: 20px 0px 0px 10px;
  font-family: Poppins;
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 20px 0px 0px 0px;
  }
}

.form {
  padding: 0px 0px 0px 10px;
  @media (max-width: 768px) {
    padding: 0px 0px 0px 0px;
  }
}

// Button OK dan previus
.btn-back-ok {
  // background: red;
  text-align: center;
  margin-bottom: 20px;
}

.submit_ok {
  background-color: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
  margin-left: 80px;
}

.submit_ok:hover {
  background-color: #0a4da3;
}
</style>
