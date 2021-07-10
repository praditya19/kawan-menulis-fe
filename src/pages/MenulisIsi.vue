<template>
  <div class="all">
    <!-- Judul -->
    <div class="content-satu">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <br />
    <!-- Stepper -->
    <div class="content-dua">
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/5.png" alt="" />
      </div>
    </div>
    <br />
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
    <br />
    <!-- Tips dan Kalimat -->
    <!-- Screen 1 -->
    <div class="content-empat" v-if="menulisIsi === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModal = true">
                Tips
              </b-button>
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
                                style="width: 40px; height: 38.49px"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat2">
                              <div style="padding: 0% 0% 0% 12%; width: 85%">
                                <p>
                                  Sekarang Anda akan mengubah kata dan frasa
                                  menjadi kalimat lengkap.
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
          <div class="col-sm-8">
            <div class="kalimat">
              <p class="kalimat_p">
                Anda sekarang siap untuk menggunakan ide-ide dari daftar
                pre-writing Anda untuk membantu Anda menulis isi paragraf Anda.
              </p>
              <p class="kalimat_p">
                Pada layar berikutnya Anda akan memilih ide satu persatu untuk
                ditulis dalam sebuah kalimat. Anda akan mencentang kotak untuk
                memilih ide.
              </p>
            </div>
          </div>

          <!-- Button OK -->
          <div class="content-lima" @click="menulisIsiNext">
            <div class="tombol">
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- Catatan Pra Menulis -->
    <div class="content-enam" v-if="menulisIsi === true">
      <div class="border">
        <div class="border_catatan">
          <h4><b>Catatan Pra Menulis</b></h4>
        </div>
      </div>
      <div class="border_list">
        <div style="margin-left: 30px">
          <b-form-group>
            <div>
              <div class="col-sm-12">
                <ul>
                  <div class="dua">
                    <h5>
                      <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                    </h5>
                  </div>
                  <div class="dua">
                    <h5>
                      <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                    </h5>
                  </div>
                  <div class="dua">
                    <h5>
                      <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                    </h5>
                  </div>
                  <div class="dua">
                    <h5>
                      <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                    </h5>
                  </div>
                  <div class="dua">
                    <h5>
                      <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                    </h5>
                  </div>
                </ul>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
    </div>

    <!-- Screen 2 -->
    <div class="content-empat" v-if="menulisIsiPage2 === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModal2 = true">
                Tips
              </b-button>
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
                                style="width: 40px; height: 38.49px"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat2">
                              <div style="padding: 0% 0% 0% 12%; width: 85%">
                                <p>
                                  Tinjau daftar pramenulis Anda dan pilih ide
                                  yang akan Anda kembangkan menjadi kalimat
                                  lengkap.
                                </p>
                                <p>
                                  Ingat, sebuah kalimat harus memiliki subjek
                                  dan kata kerja dan harus mengekpresikan
                                  pemikiran yang lengkap.
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal2 = false"
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
          <div class="col-sm-8">
            <div class="kalimat">
              <p class="kalimat_p">
                Centang kotak untuk memilih ide untuk ditulis dalam sebuah
                kalimat.
              </p>
              <br />
              <p class="kalimat_p">
                Untuk isi paragraf, pilih dan tulis setidaknya empat ide.
              </p>
              <br />
              <p class="kalimat_p">
                Catatan: Kalimat topik Anda telah ditempatkan di
                <b>Catatan PraMenulis-Menulis</b>
              </p>
            </div>
          </div>

          <!-- Catatan -->
          <div class="content-tujuh" v-if="menulisIsiPage2 === true">
            <!-- Form Centang -->
            <ValidationObserver ref="observer">
              <b-form @submit.stop.prevent>
                <div class="col-sm-12">
                  <div
                    class="content_padding_tulis_right_paragraf_bawah2"
                    style="padding: 0px 0px 20px 0px"
                  >
                    <div class="border">
                      <div class="border_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>

                    <div
                      style="
                        background-color: #c1c8d3;
                        width: 730px;
                        padding: 13px;
                        border-radius: 0px 0 30px 30px;
                      "
                    >
                      <div style="margin-left: 30px">
                        <div>
                          <div class="col-sm-12">
                            <div style="max-width: 90%">
                              <ul>
                                <div class="dua">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <h5 style="padding: 10px 0px 0px 0px">
                                        <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                                      </h5>
                                    </div>

                                    <!-- Tips 1 -->
                                    <div
                                      class="col-sm-6"
                                      style="text-align: right"
                                    >
                                      <button
                                        class="tips-form"
                                        @click="showModal3 = true"
                                      >
                                        Tips
                                      </button>
                                      <!-- popup -->
                                      <div v-if="showModal3 === true">
                                        <transition name="model">
                                          <div class="modal-mask">
                                            <div class="modal-wrapper">
                                              <div class="modal-dialog">
                                                <div class="modal-content">
                                                  <!-- Modal Body -->
                                                  <div class="modal-body">
                                                    <div
                                                      class="image-container"
                                                    >
                                                      <img
                                                        style="
                                                          width: 40px;
                                                          height: 38.49px;
                                                        "
                                                        src="@/assets/checklist.png"
                                                      />
                                                    </div>

                                                    <div class="kalimat3">
                                                      <div
                                                        style="
                                                          padding: 0% 0% 0% 12%;
                                                          width: 85%;
                                                        "
                                                      >
                                                        <p
                                                          style="
                                                            font-size: 16px;
                                                          "
                                                        >
                                                          Uraikan dalam sebuah 3
                                                          : <br />
                                                          <strong
                                                            >Mengapa kamu dapat
                                                            mahir melakukan hal
                                                            tersebut?</strong
                                                          >
                                                          <code
                                                            style="color: red"
                                                            ><strong
                                                              >(Ambil dari
                                                              Panduan Pramenulis
                                                              1)</strong
                                                            ></code
                                                          >
                                                        </p>
                                                        <p>
                                                          Ingat, sebuah kalimat
                                                          harus memiliki subjek
                                                          dan kata kerja dan
                                                          harus mengekpresikan
                                                          pemikiran yang
                                                          lengkap.
                                                        </p>
                                                      </div>
                                                    </div>

                                                    <div class="tombol">
                                                      <button
                                                        class="ok"
                                                        block
                                                        @click="
                                                          showModal3 = false
                                                        "
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
                                    <b-form-input
                                      v-model="dataForm.menulis"
                                      :state="validation"
                                      id="feedback-user"
                                    ></b-form-input>
                                    <b-form-invalid-feedback
                                      :state="validation"
                                    >
                                      Your user ID must be 5-12 characters long.
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="validation">
                                      Looks Good.
                                    </b-form-valid-feedback>
                                  </div>
                                </div>
                                <div class="dua">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <h5 style="padding: 10px 0px 0px 0px">
                                        <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                                      </h5>
                                    </div>

                                    <!-- Tips 2 -->
                                    <div
                                      class="col-sm-6"
                                      style="text-align: right"
                                    >
                                      <button
                                        class="tips-form"
                                        @click="showModal4 = true"
                                      >
                                        Tips
                                      </button>
                                      <!-- popup -->
                                      <div v-if="showModal4 === true">
                                        <transition name="model">
                                          <div class="modal-mask">
                                            <div class="modal-wrapper">
                                              <div class="modal-dialog">
                                                <div class="modal-content">
                                                  <!-- Modal Body -->
                                                  <div class="modal-body">
                                                    <div
                                                      class="image-container"
                                                    >
                                                      <img
                                                        style="
                                                          width: 40px;
                                                          height: 38.49px;
                                                        "
                                                        src="@/assets/checklist.png"
                                                      />
                                                    </div>

                                                    <div class="kalimat3">
                                                      <div
                                                        style="
                                                          padding: 0% 0% 0% 12%;
                                                          width: 85%;
                                                        "
                                                      >
                                                        <p
                                                          style="
                                                            font-size: 16px;
                                                          "
                                                        >
                                                          Uraikan dalam sebuah
                                                          kalimat : <br />
                                                          <strong
                                                            >Apa saja alat/bahan
                                                            yang dibutuhkan
                                                            untuk
                                                            melakukannya?</strong
                                                          >
                                                          <code
                                                            style="color: red"
                                                            ><strong
                                                              >(Ambil dari
                                                              Panduan Pramenulis
                                                              2)</strong
                                                            ></code
                                                          >
                                                        </p>
                                                        <p>
                                                          Ingat, sebuah kalimat
                                                          harus memiliki subjek
                                                          dan kata kerja dan
                                                          harus mengekpresikan
                                                          pemikiran yang
                                                          lengkap.
                                                        </p>
                                                      </div>
                                                    </div>

                                                    <div class="tombol">
                                                      <button
                                                        class="ok"
                                                        block
                                                        @click="
                                                          showModal4 = false
                                                        "
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

                                    <b-form-input
                                      v-model="dataForm.menulis"
                                      :state="validation"
                                      id="feedback-user"
                                    ></b-form-input>
                                    <b-form-invalid-feedback
                                      :state="validation"
                                    >
                                      Your user ID must be 5-12 characters long.
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="validation">
                                      Looks Good.
                                    </b-form-valid-feedback>
                                  </div>
                                </div>
                                <div class="dua">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <h5 style="padding: 10px 0px 0px 0px">
                                        <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                                      </h5>
                                    </div>

                                    <!-- Tips3 -->
                                    <div
                                      class="col-sm-6"
                                      style="text-align: right"
                                    >
                                      <button
                                        class="tips-form"
                                        @click="showModal5 = true"
                                      >
                                        Tips
                                      </button>

                                      <!-- popup -->
                                      <div v-if="showModal5 === true">
                                        <transition name="model">
                                          <div class="modal-mask">
                                            <div class="modal-wrapper">
                                              <div class="modal-dialog">
                                                <div class="modal-content">
                                                  <!-- Modal Body -->
                                                  <div class="modal-body">
                                                    <div
                                                      class="image-container"
                                                    >
                                                      <img
                                                        style="
                                                          width: 40px;
                                                          height: 38.49px;
                                                        "
                                                        src="@/assets/checklist.png"
                                                      />
                                                    </div>

                                                    <div class="kalimat3">
                                                      <div
                                                        style="
                                                          padding: 0% 0% 0% 12%;
                                                          width: 85%;
                                                        "
                                                      >
                                                        <p
                                                          style="
                                                            font-size: 16px;
                                                          "
                                                        >
                                                          Uraikan dalam sebuah
                                                          kalimat : <br />
                                                          <strong
                                                            >Kata kerja apa saja
                                                            yang akan dilakukan
                                                            dalam proses
                                                            itu?</strong
                                                          >
                                                          <code
                                                            style="color: red"
                                                            ><strong
                                                              >(Ambil dari
                                                              Panduan Pramenulis
                                                              3)</strong
                                                            ></code
                                                          >
                                                        </p>
                                                        <p>
                                                          Ingat, sebuah kalimat
                                                          harus memiliki subjek
                                                          dan kata kerja dan
                                                          harus mengekpresikan
                                                          pemikiran yang
                                                          lengkap.
                                                        </p>
                                                      </div>
                                                    </div>

                                                    <div class="tombol">
                                                      <button
                                                        class="ok"
                                                        block
                                                        @click="
                                                          showModal5 = false
                                                        "
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
                                    <b-form-input
                                      v-model="dataForm.menulis"
                                      :state="validation"
                                      id="feedback-user"
                                    ></b-form-input>
                                    <b-form-invalid-feedback
                                      :state="validation"
                                    >
                                      Your user ID must be 5-12 characters long.
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="validation">
                                      Looks Good.
                                    </b-form-valid-feedback>
                                  </div>
                                </div>

                                <!-- Tips4 -->
                                <div class="dua">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <h5 style="padding: 10px 0px 0px 0px">
                                        <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                                      </h5>
                                    </div>
                                    <div
                                      class="col-sm-6"
                                      style="text-align: right"
                                    >
                                      <button
                                        class="tips-form"
                                        @click="showModal6 = true"
                                      >
                                        Tips
                                      </button>
                                      <!-- popup -->
                                      <div v-if="showModal6 === true">
                                        <transition name="model">
                                          <div class="modal-mask">
                                            <div class="modal-wrapper">
                                              <div class="modal-dialog">
                                                <div class="modal-content">
                                                  <!-- Modal Body -->
                                                  <div class="modal-body">
                                                    <div
                                                      class="image-container"
                                                    >
                                                      <img
                                                        style="
                                                          width: 40px;
                                                          height: 38.49px;
                                                        "
                                                        src="@/assets/checklist.png"
                                                      />
                                                    </div>

                                                    <div class="kalimat3">
                                                      <div
                                                        style="
                                                          padding: 0% 0% 0% 12%;
                                                          width: 85%;
                                                        "
                                                      >
                                                        <p>
                                                          Uraikan dalam sebuah
                                                          kalimat : <br />
                                                          <strong
                                                            >Hal apa saja yang
                                                            perlu dihindari agar
                                                            tidak gagal?</strong
                                                          >
                                                          <code
                                                            style="color: red"
                                                            ><strong
                                                              >(Ambil dari
                                                              Panduan Pramenulis
                                                              4)</strong
                                                            ></code
                                                          >
                                                        </p>
                                                        <p>
                                                          Ingat, sebuah kalimat
                                                          harus memiliki subjek
                                                          dan kata kerja dan
                                                          harus mengekpresikan
                                                          pemikiran yang
                                                          lengkap.
                                                        </p>
                                                      </div>
                                                    </div>

                                                    <div class="tombol">
                                                      <button
                                                        class="ok"
                                                        block
                                                        @click="
                                                          showModal6 = false
                                                        "
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

                                    <b-form-input
                                      v-model="dataForm.menulis"
                                      :state="validation"
                                      id="feedback-user"
                                    ></b-form-input>
                                    <b-form-invalid-feedback
                                      :state="validation"
                                    >
                                      Your user ID must be 5-12 characters long.
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="validation">
                                      Looks Good.
                                    </b-form-valid-feedback>
                                  </div>
                                </div>

                                <!-- Tips5  -->
                                <div class="dua">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <h5 style="padding: 10px 0px 0px 0px">
                                        <li>&nbsp; &nbsp;Cara membuat Kopi</li>
                                      </h5>
                                    </div>
                                    <div
                                      class="col-sm-6"
                                      style="text-align: right"
                                    >
                                      <button
                                        class="tips-form"
                                        @click="showModal7 = true"
                                      >
                                        Tips
                                      </button>
                                      <!-- popup -->
                                      <div v-if="showModal7 === true">
                                        <transition name="model">
                                          <div class="modal-mask">
                                            <div class="modal-wrapper">
                                              <div class="modal-dialog">
                                                <div class="modal-content">
                                                  <!-- Modal Body -->
                                                  <div class="modal-body">
                                                    <div
                                                      class="image-container"
                                                    >
                                                      <img
                                                        style="
                                                          width: 40px;
                                                          height: 38.49px;
                                                        "
                                                        src="@/assets/checklist.png"
                                                      />
                                                    </div>

                                                    <div class="kalimat3">
                                                      <div
                                                        style="
                                                          padding: 0% 0% 0% 12%;
                                                          width: 85%;
                                                        "
                                                      >
                                                        <p>
                                                          Uraikan dalam sebuah
                                                          kalimat : <br />
                                                          <strong
                                                            >Hal apa saja yang
                                                            perlu diperhatikan
                                                            agar hasilnya
                                                            maksimal?</strong
                                                          >
                                                          <code
                                                            style="color: red"
                                                            ><strong
                                                              >(Ambil dari
                                                              Panduan Pramenulis
                                                              5)</strong
                                                            ></code
                                                          >
                                                        </p>
                                                        <p>
                                                          Ingat, sebuah kalimat
                                                          harus memiliki subjek
                                                          dan kata kerja dan
                                                          harus mengekpresikan
                                                          pemikiran yang
                                                          lengkap.
                                                        </p>
                                                      </div>
                                                    </div>

                                                    <div class="tombol">
                                                      <button
                                                        class="ok"
                                                        block
                                                        @click="
                                                          showModal7 = false
                                                        "
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

                                    <b-form-input
                                      v-model="dataForm.menulis"
                                      :state="validation"
                                      id="feedback-user"
                                    ></b-form-input>
                                    <b-form-invalid-feedback
                                      :state="validation"
                                    >
                                      Your user ID must be 5-12 characters long.
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="validation">
                                      Looks Good.
                                    </b-form-valid-feedback>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-form>
            </ValidationObserver>
          </div>
          <!-- Button OK -->
          <div class="content-lima" @click="isPage">
            <div class="tombol">
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
  </div>
</template>

<script src="./js/menulisIsi.js" />

<style lang="scss" scoped>
// all
.all {
  overflow-x: hidden;
}

// Judul
.content-satu {
  //   background: red;
  margin-top: 120px;
}

.judul {
  font-family: Poppins;
  font-size: 50px;
  line-height: 65px;
  font-weight: 700;
  text-align: center;
}
// End Judul

// Stepper
// .content-dua {
//   //   background: red;
// }

.steper {
  text-align: center;
  &_image {
    width: 1000px;
    text-align: center;
  }
}
// End Stepper

// Jenis Paragraf
.jenis {
  display: flex;
  max-width: 1440px;
  height: 49px;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  &_paragraf {
    padding: 11px 0px 0px 110px;
  }
  &_topik {
    padding: 11px 0px 0px 70px;
  }
}
// End Jenis Paragraf

// Tips dan Kalimat
// .content-empat {
//   //   background: red;
//   // margin-left: -100px;
// }

.tips {
  //   background: skyblue;
  text-align: right;
  margin: 5px;
  &_judul {
    background-color: #00a279;
    border: none;
    width: 98px;
    height: 32px;
    border-radius: 10px;
    margin: 5px;
  }
}

.kalimat {
  //   background: greenyellow;
  &_p {
    font-size: 20px;
    margin: 5px;
  }
}
// end Tips dan Kalimat

// Tombol OK
// .content-lima {
//   //   background: red;
// }

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
// End Tombol OK

// Catatan Pra Menulis
.content-enam {
  //   background: red;
  margin-left: 230px;
}

.border {
  background-color: #484c52;
  height: 42px;
  width: 238px;
  border-radius: 20px 20px 0px 0px;
  border: none;
  h4 {
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
  }
  &_list {
    background-color: #c1c8d3;
    width: 730px;
    padding: 13px;
    border-radius: 0px 0 30px 30px;
  }
}
// End Catatan Pramenulis

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

.kalimat2 {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
}

.kalimat3 {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
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

//
// Tips Form
.tips-form {
  color: blue;
  font-size: 20px;
  border: none;
  background: none;
  font-family: Poppins;
  margin-top: 5px;
}

// content tujuh
.content-tujuh {
  margin-left: 230px;
  margin-top: 20px;
}
// end content tujuh
</style>
