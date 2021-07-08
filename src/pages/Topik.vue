[15:54, 7/7/2021] +62 895-0473-1540:
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
          <select>
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
            <select>
              <option
                v-for="(paragraphTypesList, index) in paragraphTypes"
                :key="index"
                v-bind:value="paragraphTypesList.topics.id"
                >{{ paragraphTypesList.topics.name }}</option
              >
            </select>
            <!-- <b-button v-b-modal.modal-lg  class="button">Tips</b-button> -->
            <b-button
              id="show-btn"
              class="button"
              @click="$bvModal.show('bv-modal-example')"
              >Tips</b-button
            >

            <!-- popup -->
            <div class="b-modal">
              <b-modal id="bv-modal-example" hide-footer hide-header-close>
                <template #modal-title>
                  <div class="image-container">
                    <img
                      src="@/assets/checklist.png"
                      style="text-align:center"
                    />
                  </div>
                </template>
                <div class="d-block text-center">
                  <p>
                    Topik ini akan memberimu kesempatan menulis cara melakukan
                    sesuatu yang kamu kuasai.
                  </p>
                </div>
                <div class="ok">
                  <b-button
                    class="mt-3"
                    block
                    @click="$bvModal.hide('bv-modal-example')"
                    >OK</b-button
                  >
                </div>
              </b-modal>
            </div>
          </div>
        </div>
        <br />

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
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  // background: red;
}
.p {
  margin-top: 1px;
}

// Stepper 1 -7

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
  font-family: Arial, Poppins;
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
    font-family: Arial, Poppins;
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
  font-family: Poppins, Arial;
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
    font-family: Arial, Poppins;
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
    font-family: Poppins, Arial;
    padding: 5px;
    margin-left: 185px;
    border-radius: 4px;
  }
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
    margin-bottom: 20px;
    width: 150px;
    // margin-left: 50%;
  }
}

// popup tips
.ok {
  // background: red;

  .mt-3 {
    // margin-bottom: 10px;
    background: #0a4da3;
    margin: 0px 0px 5px 180px;
    border-radius: 39px;
    width: 108px;
  }
}

// icon checklist
.image-container {
  width: 470px;
  text-align: center;
  // background: red;
}
</style>
