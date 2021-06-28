<template>
  <div class="mulai_menulis_size">
    <br />
    <img src="@/assets/mulaimenulis.png" alt="logo" class="image" />
    <div class="container">
      <div class="mulai_menulis_header">
        <h1><b>Latihan Menulis</b></h1>
      </div>
      <b-container fluid="xl">
        <b-row style="margin-top: -20px;">
          <b-col cols="6">
            <div class="mulai_menulis_form">
              <img src="@/assets/Group.png" alt="logo" class="image_slide_2" />
            </div>
          </b-col>
          <b-col cols="6">
            <div class="mulai_menulis_form_data-diri">
              <p><b>Data Diri</b></p>
            </div>
            <div class="mulai_menulis_form_data-diri_column">
              <div
                role="group"
                class="mulai_menulis_form_data-diri_column_padding"
              >
                <label for="input-live">Nama Lengkap</label>
                <b-form-input
                  id="input-live"
                  v-model="nama_lengkap"
                  trim
                ></b-form-input>
              </div>
              <div
                role="group"
                class="mulai_menulis_form_data-diri_column_padding"
              >
                <label for="input-live">Email</label>
                <b-form-input
                  id="input-live"
                  v-model="email"
                  aria-describedby="input-live-help input-live-feedback"
                  trim
                ></b-form-input>
              </div>
              <div
                role="group"
                class="mulai_menulis_form_data-diri_column_padding"
              >
                <label for="input-live">Prodi</label>
                <b-form-input
                  id="input-live"
                  v-model="prodi"
                  aria-describedby="input-live-help input-live-feedback"
                  trim
                ></b-form-input>
              </div>
              <div
                role="group"
                class="mulai_menulis_form_data-diri_column_padding"
              >
                <label for="input-live">NIM</label>
                <b-form-input
                  id="input-live"
                  v-model="nim"
                  aria-describedby="input-live-help input-live-feedback"
                  trim
                ></b-form-input>
              </div>
            </div>
            <div class="button_tombol">
              <button class="button">
                <b>Selanjutnya</b>
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script src="./js/mulaiMenulisPage2" />

<style lang="scss" scoped>
.button {
  background-color: #0a4da3;
  border: none;
  color: black;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: flex-start;
  padding: 17px 10px;
  border-radius: 30px;
  display: flex;
  position: relative;
  max-width: 990px;
  width: 190px;
  height: 60px;
  left: calc(50% - 190px / 2 + 87px);
  top: -10px;
  margin-left: -200px;
  b {
    padding: 1% 3%;
  }
  &_tombol {
    padding: 200px 0px 20px 0px;
    position: absolute;
    top: 300px;
    left: 300px;
    width: 190px;
    height: 200px;
    margin-left: -50px;
    b {
      color: #f1f1f1;
      margin-left: 35px;
    }
  }
}
.button:hover {
  background-color: #47a7e7;
}
.image {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 30px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    margin-top: 20%;
  }
  &_slide {
    &_2 {
      margin-left: 50px;
      padding: 40px 40px 40px 40px;
      width: 470px;
      height: 550px;
    }
  }
}
.mulai_menulis {
  &_size {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }
  &_header {
    padding: 50px 0px 0px 0px;
    margin-left: 440px;
    font-family: Poppins;
    font-style: normal;
    font-size: 60px;
    top: 449px;
  }
  &_form {
    padding: 10px 40px 60px 40px;
    &_data-diri {
      padding: 40px 0px 0px 0px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      align-items: center;
      &_column {
        width: 100%;
        height: 5%;
        padding: 0px 20px 10px 20px;
        &_padding {
          padding: 8px 0px 8px 0px;
        }
      }
    }
  }
}
</style>
