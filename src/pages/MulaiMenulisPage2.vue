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
              <div class="mulai_menulis_form_data-diri_column">
                <ValidationObserver ref="observer">
                  <b-form
                    slot-scope="{ validate }"
                    @submit.prevent="validate().then(handleSubmit)"
                  >
                    <div class="padding">
                      <ValidationProvider rules="required" name="Nama-Lengkap">
                        <b-form-group
                          slot-scope="{ valid, errors }"
                          label="Nama Lengkap"
                          style="padding: 30px, 0px, 30px, 0px"
                        >
                          <b-form-input
                            type="text"
                            v-model="user.namaLengkap"
                            :state="errors[0] ? false : valid ? null : null"
                          >
                          </b-form-input>
                          <b-form-invalid-feedback>
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>
                    </div>
                    <div class="padding">
                      <ValidationProvider rules="required" name="Email">
                        <b-form-group
                          slot-scope="{ valid, errors }"
                          label="Email"
                          style="padding: 30px, 0px, 30px, 0px"
                        >
                          <b-form-input
                            type="email"
                            v-model="user.email"
                            :state="errors[0] ? false : valid ? null : null"
                          >
                          </b-form-input>
                          <b-form-invalid-feedback>
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>
                    </div>
                    <div class="padding">
                      <ValidationProvider rules="required" name="Prodi">
                        <b-form-group
                          slot-scope="{ valid, errors }"
                          label="Prodi"
                        >
                          <b-form-input
                            type="text"
                            v-model="user.prodi"
                            :state="errors[0] ? false : valid ? null : null"
                          >
                          </b-form-input>
                          <b-form-invalid-feedback>
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>
                    </div>
                    <div class="padding">
                      <ValidationProvider rules="required" name="NIM">
                        <b-form-group
                          slot-scope="{ valid, errors }"
                          label="NIM"
                        >
                          <b-form-input
                            type="text"
                            v-model="user.nim"
                            :state="errors[0] ? false : valid ? null : null"
                          >
                          </b-form-input>
                          <b-form-invalid-feedback>
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>
                    </div>
                    <div class="button_tombol">
                      <button class="button" v-on:click="handleSubmit">
                        <b>Selanjutnya</b>
                      </button>
                    </div>
                  </b-form>
                </ValidationObserver>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script src="./js/mulaiMenulisPage2" />

<style lang="scss" scoped>
.padding {
  margin-top: 13px;
}
.form {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}
.form-group > label {
  font-weight: 600;
}
.button {
  background-color: #0a4da3;
  border: none;
  color: black;
  border-radius: 30px;
  width: 190px;
  height: 55px;
  &_tombol {
    padding: 30px 0px 20px 100px;
    width: 190px;
    height: 200px;
    b {
      color: #f1f1f1;
      text-align: center;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
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
    @media screen and (max-width: 990) {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
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
      font-size: 20px;
      p {
        text-align: center;
        align-items: center;
        font-weight: bold;
        font-size: 30px;
      }
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
