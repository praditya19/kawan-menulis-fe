<template>
  <div class="col-md-12">
    <div class="all">
      <p class="head">Latihan Menulis</p>

      <!-- Stepper -->
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/1.png" />
      </div>
      <!-- End Stepper  -->

      <div class="container">
        <div class="tengah">
          <div class="paragraf">
            <p>
              Sebelum menentukan topik harap memilih
              <strong>jenis paragraf</strong> dan
              <strong>topik</strong> terlebih dahulu.
            </p>
          </div>

          <div class="label1">
            <label><strong>Jenis Paragraf</strong></label>
          </div>

          <div class="pilih">
            <select v-model="paragraphSelect">
              <option value="" disabled hidden> Pilih Jenis Paragraph</option>
              <option
                v-for="(paragraphTypesList, index) in paragraphTypes"
                :key="index"
                v-bind:value="paragraphTypesList.id"
                >{{ paragraphTypesList.name }}</option
              >
            </select>
          </div>

          <div class="label2">
            <label for=""><strong>Topik</strong></label>
          </div>
          <div class="pilih2">
            <select
              v-model="topicsSelect"
              v-bind:disabled="paragraphSelect.length === 0 ? true : false"
            >
              <option value="" disabled hidden>Pilih Jenis Topik</option>
              <option
                v-for="(topics, index) in topicsTypes"
                :key="index"
                :value="topics.id"
                >{{ topics.name }}</option
              >
            </select>

            <!-- Button Tips -->
            <div class="button_tombol">
              <b-button
                class="button"
                @click="showModal = true"
                v-bind:disabled="topicsSelect.length === 0 ? true : false"
                >Tips</b-button
              >

              <!-- popup -->
              <div v-if="showModal === true">
                <transition name="model">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <!-- Modal Body -->
                          <!-- <div class="modal-body"> -->
                          <div class="image-container">
                            <img
                              style="width: 40px;height:38.49px;"
                              src="@/assets/checklist.png"
                            />
                          </div>

                          <div class="kalimat">
                            <div
                              style="padding: 10px 0px 0px 0px; width: 100%;"
                            >
                              <p>
                                {{ topicsTips }}
                              </p>
                            </div>
                          </div>

                          <div class="tombol">
                            <button class="ok" block @click="showModal = false">
                              OK
                            </button>
                          </div>
                          <!-- </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mulai">
        <b-button class="button-mulai" @click="handlesubmit()">Mulai</b-button>
      </div>
    </div>
  </div>
</template>

<script src="./js/topik.js"></script>

<style lang="scss" scoped>
.all {
  padding-top: 120px;
}

.head {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 128%;
  text-align: center;
  color: rgba(0, 0, 0, 0.9);
  @media (max-width: 768px) {
    font-size: 40px;
  }
}

// Stepper
.steper {
  text-align: center;
  padding: 10px 200px 0px 200px;
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

// Sebelum Menentukan Topik.....
.paragraf {
  padding: 0px 0px 20px 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  width: 950px;
  font-size: 20px;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 17px;
    width: 100%;
  }
}

.tengah {
  padding: 70px 30px 30px 100px;
  @media (max-width: 768px) {
    padding: 10px 30px 30px 30px;
    width: 100%;
  }
}

// Jenis Paragraf
.label1 {
  label {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    label {
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
    }
  }
}

// Ekposisi
.pilih {
  margin-top: 1px;
  select {
    width: 40%;
    background: #f4f4f4;
    font-size: 18px;
    font-family: Poppins;
    padding: 10px;
    border-radius: 4px;
  }
  @media screen and (max-width: 768px) {
    select {
      font-size: 15px;
      width: 60%;
    }
  }
}

// Topik
.label2 {
  margin-top: 50px;
  label {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    label {
      font-size: 15px;
    }
  }
}

// form ke 2
.pilih2 {
  display: flex;
  margin-top: 1px;
  select {
    width: 100%;
    background: #f4f4f4;
    font-size: 18px;
    font-family: Poppins;
    padding: 10px;
    border-radius: 4px;
  }
  @media screen and (max-width: 768px) {
    select {
      font-size: 15px;
      width: 70% auto;
    }
  }
}

// button tips
.button_tombol {
  padding-left: 20px;
  .button {
    background-color: #00a279;
    height: 50px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    width: 100px;
  }
}

// button mulai
.mulai {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 40px;
  .button-mulai {
    background-color: #0a4da3;
    border: none;
    color: white;
    padding: 10px 23px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 42px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 150px;
  }
}

/* Style Modal */

.modal-content {
  background: #e8f1fd;
  width: 100%;
  border-radius: 34px;
  padding: 10px 0px 10px 0px;
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
</style>
