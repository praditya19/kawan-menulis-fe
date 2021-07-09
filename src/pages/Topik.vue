<template>
  <div class="container">
    <div class="row">
      <div>
        <br /><br /><br /><br /><br />

        <h1>Latihan Menulis</h1>

        <br />

        <!-- Stepper -->
        <div class="steper">
          <img class="steper_image" src="@/assets/icon_stepper/1.png" />
        </div>
        <!-- End Stepper  -->

        <!-- <br /><br /><br /><br /><br /> -->
        <div class="paragraf">
          <p>
            Sebelum menentukan topik harap memilih
            <strong>jenis paragraf</strong> dan <strong>topik</strong> terlebih
            dahulu.
          </p>
        </div>
        <!-- <br /> -->

        <div class="label1">
          <label><strong>Jenis Paragraf</strong></label>
        </div>

        <div class="pilih">
          <select v-model="paragraphSelect">
          <option value="" disabled hidden>Pilih Jenis Paragraph</option>
            <option
              v-for="(paragraphTypesList, index) in paragraphTypes"
              :key="index"
              v-bind:value="paragraphTypesList.id"
              >{{ paragraphTypesList.name }}</option
            >
          </select>
        </div>
        <br />

        <div class="label2">
          <label for=""><strong>Topik</strong></label>
        </div>
        <!-- <br> -->
        <div class="tengah">
          <div class="pilih2">
            <select v-model="topicsSelect">
            <option value="" disabled hidden>Pilih Jenis Topik</option>
              <option
                v-for="(topics, index) in topicsTypes"
                :key="index"
                :value="topicsTypes.id"
                >{{ topics.name }}</option
              >
            </select>

            <!-- Button Tips -->
            <div class="button_tombol">
              <b-button class="button" @click="showModal = true">Tips</b-button>

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
                                <p>
                                  Topik ini akan memberimu kesempatan menulis
                                  cara melakukan sesuatu yang kamu kuasai.
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
        </div>

        <div class="mulai">
          <router-link to="topik2" type="button" class="button-mulai"
            >Mulai</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/topik.js"></script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-family: Poppins;
  font-weight: 700;
  // background: red;
}
.p {
  margin-top: 1px;
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

// Sebelum Menentukan Topik.....
.paragraf {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  // margin-top: -150px;
  // background: red;
}

// Jenis Paragraf
.label1 {
  // background: red;
  label {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-left: 185px;
  }
}

// Ekposisi
.pilih {
  // background: red;
  margin-top: 1px;
}
select {
  width: 300px;
  border: 1 px;
  background: #f4f4f4;
  font-size: 18px;
  font-family: Poppins;
  padding: 5px;
  // margin-right: 300px;
  margin-left: 185px;
  // margin-right: 1%;
  border-radius: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
}

// Topik
.label2 {
  // background: red;
  label {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-left: 185px;
  }
}

.pilih2 {
  // background: red;
  margin-top: 1px;

  select {
    width: 800px;
    border: 1 px;
    background: #f4f4f4;
    font-size: 18px;
    font-family: Poppins;
    padding: 5px;
    margin-left: 185px;
    border-radius: 4px;
  }
}

.button_tombol {
  // background: red;
  position: absolute;
  height: 50px;
  width: 140px;
  left: 1075px;
  top: 553px;
}

.button {
  background-color: #00a279;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 18px;
  margin-top: 5px;
  width: 115px;
  margin-left: 10px;
  margin-bottom: 5px;
}
.mulai {
  // background: red;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
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
</style>
