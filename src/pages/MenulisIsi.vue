<template>
  <div class="content">
    <br />
    <div class="content_padding">
      <div class="content_padding_header">
        <h1><b>Latihan Menulis</b></h1>
      </div>

      <!-- Stepper -->
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/1.png" />
      </div>
      <!-- End Stepper  -->
    </div>
    <div
      style="
        background-color: rgba(139, 181, 236, 0.1);
        height: 60px;
        width: 100%px;
      "
    >
      <div class="row">
        <div class="col-sm-4">
          <div class="content_padding_paragraf">
            <p><b>Jenis Paragraf: </b>Deskripsi</p>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="content_padding_paragraf_right">
            <p>
              <b>Topik: </b>Apakah kamu punya kemahiran dalam membuat sesuatu?
              Coba sebutkan satu.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Screen1  -->
    <div class="container_bawah">
      <div class="content_padding_tulis" v-if="menulisIsi === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <button class="button" @click="showModal = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </button>
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
                                style="width: 40px; height: 38.49px"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
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
          <!-- Kalimat Samping Button Tips -->
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Anda sekarang siap untuk menggunakan ide-ide dari daftar
                    pre-writing Anda untuk membantu Anda menulis isi paragraf
                    Anda.
                  </p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Pada layar berikutnya Anda akan memilih ide satu persatu
                    untuk ditulis dalam sebuah kalimat. Anda akan mencentang
                    kotak untuk memilih ide.
                  </p>
                </div>
              </div>

              <!-- Button OK -->
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="menulisIsiNext">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
            </div>
            <br />

            <!-- Catatan  -->
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 120px 0px 0px 0px"
              >
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="
                        background-color: #484c52;
                        height: 48px;
                        width: 240px;
                        border-radius: 20px 20px 0px 0px;
                      "
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </div>

      <!-- Screen 2 -->
      <div class="content_padding_tulis" v-if="menulisIsiPage2 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <button class="button" @click="showModal2 = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </button>
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
                                style="width: 40px; height: 38.49px"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
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

          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Centang kotak untuk memilih ide untuk ditulis dalam sebuah
                    kalimat.
                  </p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Untuk isi paragraf, pilih dan tulis setidaknya empat ide.
                  </p>
                </div>
              </div>
              <div class="content_padding_tulis_right_paragraf">
                <p>
                  Catatan: Kalimat topik Anda telah ditempatkan di
                  <b>Catatan PraMenulis-Menulis</b>
                </p>
              </div>
            </div>
            <br />

            <!-- Form Centang -->
            <ValidationObserver ref="observer">
              <b-form @submit.stop.prevent>
                <div class="col-sm-12">
                  <div
                    class="content_padding_tulis_right_paragraf_bawah2"
                    style="padding: 0px 0px 20px 0px"
                  >
                    <div class="row">
                      <div class="col-sm-4">
                        <div
                          style="
                            background-color: #484c52;
                            height: 48px;
                            width: 350px;
                            border-radius: 20px 20px 0px 0px;
                          "
                        >
                          <div class="content_padding_tulis_catatan">
                            <h4><b>Catatan Pra Menulis - menulis</b></h4>
                          </div>
                        </div>
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

                                                    <div class="kalimat">
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

                                                    <div class="kalimat">
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

                                                    <div class="kalimat">
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

                                                    <div class="kalimat">
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

                                                    <div class="kalimat">
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

                <!-- Button OK -->
                <div class="col-sm-12">
                  <div class="button3_tombol3" @click="isPage">
                    <button class="button3" type="submit">
                      <b>OK</b>
                    </button>
                  </div>
                </div>
              </b-form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/menulisIsi.js" />

<style lang="scss" scoped>
//popup
.modal-override {
  background: #0008 !important;
  border-radius: 50px 50px 50px 50px !important;
  padding: 10px;
}
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

.button2 {
  background-color: #0a4da3;
  border: none;
  color: rgb(243, 237, 237);
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: flex-start;
  padding: 17px 10px;
  border-radius: 30px;
  display: flex;
  position: relative;
  max-width: 990px;
  width: 130px;
  height: 55px;
  left: calc(50% - 190px / 2 + 87px);
  top: -10px;
  margin-left: 200px;
  b {
    padding: 0% 3% 0% 3%;
    color: #f1f1f1;
    margin-top: -6px;
    margin-left: 25%;
    font-size: 28px;
    font-family: Poppins;
  }
  &_tombol2 {
    padding: 40px 0px 0px 0px;
    left: 300px;
    width: 190px;
    height: 200px;
    margin-left: 0px;
  }
}
.button2:hover {
  background-color: #4e65e7;
}
.button3 {
  background-color: #0a4da3;
  border: none;
  color: rgb(243, 237, 237);
  text-decoration: none;
  align-items: center;
  border-radius: 30px;
  max-width: 990px;
  width: 130px;
  height: 55px;
  left: calc(50% - 190px / 2 + 87px);
  margin-left: 200px;
  b {
    align-items: center;
    color: #f1f1f1;
    font-size: 28px;
    font-family: Poppins;
  }
  &_tombol3 {
    padding: 60px 0px 0px 0px;
    margin-left: 13%;
    margin-bottom: -70px;
  }
}
.button3:hover {
  background-color: #4e65e7;
}
.dua {
  padding: 10px 0px 0px 0px;
  text-align: justify;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
.button {
  background-color: #228f28;
  border: none;
  color: black;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: center;
  padding: 17px 0px;
  border-radius: 19px;
  display: flex;
  max-width: 990px;
  width: 150px;
  height: 50px;
  margin-left: 45px;
  &_catatan {
    height: 45px;
    max-width: 300px;
    color: rgb(5, 4, 4);
  }
  &_tombol {
    padding: 25px 0px 0px 0px;
    position: absolute;
    width: 190px;
    height: 100px;
    margin-left: -80px;
    b {
      color: #f1f1f1;
      margin-left: 100%;
    }
    &_margin {
      b {
        text-align: center;
        align-items: center;
      }
      color: black;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      align-items: center;
      margin-left: 13%;
    }
  }
}
.button:hover {
  background-color: #43d643;
}
// Stepper 1 -7
.container {
  width: 100%;
  &_bawah {
    padding: 20px 0px 180px 0px;
    margin-left: 17%;
  }
}

// Stepper 8-14
.container2 {
  width: 100%;
}

.content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  @media screen and (max-width: 990) {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  &_padding {
    padding: 5px 0px;
    &_tulis {
      padding: 15px 0px 10px 0px;
      &_catatan {
        color: #f1f1f1;
        h4 {
          font-family: Poppins;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          padding: 12px 0px 8px 0px;
        }
      }
      &_right {
        max-width: 750px;
        width: 750px;
        height: 240px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 23px;
        line-height: 30px;
        margin-left: -30px;
        &_paragraf {
          padding: 20px 0px 0px 0px;
          label {
            font: 1rem "Fira Sans", sans-serif;
          }
          input {
            margin: 0.4rem;
          }
          &_bawah {
            margin-bottom: -90px;
          }
        }
      }
    }
    &_paragraf {
      padding: 15px 0px 10px 0px;
      margin-left: 40%;
      p {
        font-size: 17px;
      }
      &_right {
        padding: 15px 0px 10px 0px;
        margin-left: 10%;
        p {
          font-size: 17px;
        }
      }
    }
    &_header {
      margin-top: 70px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      margin-left: 30%;
      h1 {
        font-weight: bolder;
        font-size: 47px;
        margin-left: 10%;
      }
    }
    &_stemper {
      padding: 20px;
      align-items: center;
      margin-left: 20px;
    }
  }
}
// Stepper 1 -7

.container-progress {
  margin: 100px auto;
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins;
  color: white;
  margin-top: 50px;
  padding: 0;
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
  font-family: Arial, Helvetica, sans-serif;
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
  font-family: Arial, Helvetica, sans-serif;
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

// Tips Form
.tips-form {
  color: blue;
  font-size: 20px;
  border: none;
  background: none;
  font-family: Arial;
  margin-top: 5px;
}
</style>
