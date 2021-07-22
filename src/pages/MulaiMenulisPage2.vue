<template>
  <div class="mulai_menulis_size">
    <img src="@/assets/mulaimenulis.png" alt="logo" class="image" />
    <div class="mulai_menulis_header">
      <p>Latihan Menulis</p>
    </div>
    <div class="body">
      <div class="col-md-6">
        <div class="mulai_menulis_form">
          <img src="@/assets/Group.png" alt="logo" class="image_slide_2" />
        </div>
      </div>
      <div class="col-md-6">
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
                    <b-form-group slot-scope="{ valid, errors }" label="Prodi">
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
                    <b-form-group slot-scope="{ valid, errors }" label="NIM">
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
      </div>
    </div>
  </div>
</template>

<script src="./js/mulaiMenulisPage2" />

<style lang="scss" scoped>
.body {
  display: flex;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    display: inline-block;
    width: 100%;
  }
}

.padding {
  margin-top: 29px;
}
.form {
  // max-width: 500px;
  // margin: 0 auto;
  text-align: left;
}
.form-group > label {
  font-weight: 600;
}
.button {
  justify-content: center;
  align-items: center;
  background-color: #0a4da3;
  border: none;
  color: black;
  border-radius: 30px;
  width: 190px;
  height: 55px;
  &_tombol {
    width: 100%;
    padding: 30px 0px 30px 0px;
    text-align: center;
    align-items: center;
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
  max-width: 100%;
  width: 100%;
  height: 296px;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: auto;
  }
}

.mulai_menulis {
  &_header {
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 128%;
    padding-top: 30px;
    @media (max-width: 768px) {
      padding: 30px 10px 0px 10px;
      font-size: 40px;
    }
  }

  &_form {
    .image_slide_2 {
      padding-top: 30px;
      margin-left: 150px;
      width: 470px;
      height: 550px;
      @media (max-width: 768px) {
        margin-left: 0px;
        padding: 30px 50px 30px 50px;
        width: 100%;
        height: auto;
      }
      @media (max-width: 1024px) {
        margin-left: 0px;
        padding: 30px 50px 30px 50px;
        width: 100%;
      }
    }
    &_data-diri {
      font-family: Poppins;
      font-style: normal;
      font-size: 15px;
      // padding-top: 30px;
      padding: 30px 200px 0px 50px;
      @media (max-width: 768px) {
        width: 100%;
        padding: 20px 50px 0px 50px;
        &_column {
          width: 100%;
        }
      }
      @media (max-width: 1024px) {
        width: 100%;
        padding: 20px 50px 0px 50px;
        &_column {
          width: 100%;
        }
      }
      p {
        text-align: center;
        align-items: center;
        font-weight: bold;
        font-size: 30px;
      }
      &_column {
        width: 100%;
      }
    }
  }
}
</style>
