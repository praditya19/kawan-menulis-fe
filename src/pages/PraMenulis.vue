<template>
  <div class="content">
    <br />
    <div class="content_padding">
      <div class="content_padding_header">
        <h1><b>Latihan Menulis</b></h1>
      </div>
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/2.png">
      </div>
    </div>
    <div style="background-color:rgba(139, 181, 236, 0.1); height: 60px; width: 100%px;">
      <div class="row">
        <div class="col-sm-4">
          <div class="content_padding_paragraf">
            <p><b>Jenis Paragraf: </b>Deskripsi</p>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="content_padding_paragraf_right">
            <p>
              <b>Topik: </b>Topik: Apakah kamu punya kemahiran dalam membuat
              sesuatu? Coba sebutkan satu.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Screen1 -->
    <div class="container_bawah">
      <div class="content_padding_tulis" v-if="pramenulisPage1 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
                <!-- popup -->
                <transition name="modal" appear>
                <div v-if="showModal === true">
                  <div class="modal1">
                    <div class="modal2">
                      <div class="modal3">
                        <div class="modal-mask">
                          <div class="modal-wrapper">
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-body">
                                  <div>
                                    <div class="image-container">
                                      <img
                                        src="@/assets/checklist.png"
                                      >
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="padding: 0% 0% 0% 12%; width: 85%;"
                                      >
                                        <p>Contoh:<br>
                                        Minuman/makanan kesukaan<br>
                                        Aktifasi sehari-hari<br>
                                        Bagian dari pekerjaan<br>
                                        Hobi</p>
                                      </div>
                                    </div>

                                    <div class="ok2">
                                      <b-button
                                        class="mt-3"
                                        block
                                        @click="showModal = falses"
                                        >OK</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
<!-- Kalimat Samping Button Tips -->
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Mengapa kamu dapat mahir melakukan hal tersebut?
                  </p>
                  <p>
                    Gunakan kata atau klausa sederhana
                  </p>
                </div>
              </div>
                  <div style="padding: 10px 0px 10px 0px">
                    <b-form-input
                      v-model="dataForm.menulis"
                      :state="validation"
                      id="feedback-user"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation">
                      Your user ID must be 5-12 characters long.
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validation">
                      Looks Good.
                    </b-form-valid-feedback>
                  </div>

              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis1Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px;"
              >
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
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

      <!-- Screen2 -->
      <div class="content_padding_tulis" v-if="pramenulisPage2 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
                <!-- popup -->
                <transition name="modal" appear>
                <div v-if="showModal === true">
                  <div class="modal1">
                    <div class="modal2">
                      <div class="modal3">
                        <div class="modal-mask">
                          <div class="modal-wrapper">
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-body">
                                  <div>
                                    <div class="image-container">
                                      <img
                                        src="@/assets/checklist.png"
                                      >
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="padding: 0% 0% 0% 12%; width: 85%;"
                                      >
                                        <p>Contoh: <br>
                                        Air dengan suhu 80 derajat <br>
                                        Tanah dan sisa makanan <br>
                                        Wajan <br>
                                        Sekop</p>
                                      </div>
                                    </div>

                                    <div class="ok2">
                                      <b-button
                                        class="mt-3"
                                        block
                                        @click="showModal = falses"
                                        >OK</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <!-- Kalimat Samping Button Tips -->
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Apa saja alat/bahan yang dibutuhkan untuk melakukannya?
                  </p>
                  <p>
                    Tuliskan dengan beberapa kata
                  </p>
                </div>
              </div>                  
                  <div style="padding: 10px 0px 10px 0px">
                    <b-form-input
                      v-model="dataForm.menulis"
                      id="feedback-user"
                    ></b-form-input>
                  </div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis2Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px;"
              >
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
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

      <!-- screen 3 -->
      <div class="content_padding_tulis" v-if="pramenulisPage3 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
                  <!-- popup -->
                  <transition name="modal" appear>
                <div v-if="showModal === true">
                  <div class="modal1">
                    <div class="modal2">
                      <div class="modal3">
                        <div class="modal-mask">
                          <div class="modal-wrapper">
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-body">
                                  <div>
                                    <div class="image-container">
                                      <img
                                        src="@/assets/checklist.png"
                                      >
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="padding: 0% 0% 0% 12%; width: 85%;"
                                      >
                                        <p>Contoh: <br>
                                        Menuangkan <br>
                                        Mengaduk <br>
                                        Mengucek <br>
                                        Menggali</p>
                                      </div>
                                    </div>

                                    <div class="ok2">
                                      <b-button
                                        class="mt-3"
                                        block
                                        @click="showModal = falses"
                                        >OK</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Kata kerja apa saja yang akan dilakukan dalam proses itu?
                  </p>
                  <p>
                    Sebutkan beberapa kata kerja sesuai tahapan
                  </p>
                </div>
              </div>                  
                  <div style="padding: 10px 0px 10px 0px">
                    <b-form-input
                      v-model="dataForm.menulis"
                      id="feedback-user"
                    ></b-form-input>
                  </div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis3Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px;"
              >
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
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

      <!-- screen4 -->
      <div class="content_padding_tulis" v-if="pramenulisPage4 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
                  <!-- popup -->
                  <transition name="modal" appear>
                <div v-if="showModal === true">
                  <div class="modal1">
                    <div class="modal2">
                      <div class="modal3">
                        <div class="modal-mask">
                          <div class="modal-wrapper">
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-body">
                                  <div>
                                    <div class="image-container">
                                      <img
                                        src="@/assets/checklist.png"
                                      >
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="padding: 0% 0% 0% 12%; width: 85%;"
                                      >
                                        <p>Contoh: <br>
                                        Suhu air yang terlalu panas <br>
                                        Takaran bahan yang tidak seimbang <br>
                                        Pilih warna yang terlalu mencolok</p>
                                      </div>
                                    </div>

                                    <div class="ok2">
                                      <b-button
                                        class="mt-3"
                                        block
                                        @click="showModal = falses"
                                        >OK</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Hal apa saja yang perlu dihindari agar tidak gagal?
                  </p>
                  <p>
                    Gunakan kata atau klausa sederhana
                  </p>
                </div>
              </div>                  
                  <div style="padding: 10px 0px 10px 0px">
                    <b-form-input
                      v-model="dataForm.menulis"
                      id="feedback-user"
                    ></b-form-input>
                  </div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis4Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px;"
              >
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
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

      <!-- screen 5 -->
      <div class="content_padding_tulis" v-if="pramenulisPage5 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
                  <!-- popup -->
                  <transition name="modal" appear>
                <div v-if="showModal === true">
                  <div class="modal1">
                    <div class="modal2">
                      <div class="modal3">
                        <div class="modal-mask">
                          <div class="modal-wrapper">
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-body">
                                  <div>
                                    <div class="image-container">
                                      <img
                                        src="@/assets/checklist.png"
                                      >
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="padding: 0% 0% 0% 12%; width: 85%;"
                                      >
                                        <p>Contoh: <br>
                                       Kualitas benih sayur <br>
                                       Keadaan tanah <br>
                                       Cara mengaduk <br>
                                       Tingkat kematangan</p>
                                      </div>
                                    </div>

                                    <div class="ok2">
                                      <b-button
                                        class="mt-3"
                                        block
                                        @click="showModal = falses"
                                        >OK</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Hal apa saja yang perlu diperhatikan agar hasilnya maksimal?
                  </p>
                  <p>
                    Gunakan kata atau klausa sederhana
                  </p>
                </div>
              </div>                  
                  <div style="padding: 10px 0px 10px 0px">
                    <b-form-input
                      v-model="dataForm.menulis"
                      id="feedback-user"
                    ></b-form-input>
                  </div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis5Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px;"
              >
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
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

      <!-- screen6 -->
      <div class="content_padding_tulis" v-if="pramenulisPage6 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
                <!-- popup -->
                <transition name="modal" appear>
                <div v-if="showModal === true">
                  <div class="modal1">
                    <div class="modal2">
                      <div class="modal3">
                        <div class="modal-mask">
                          <div class="modal-wrapper">
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-body">
                                  <div>
                                    <div class="image-container">
                                      <img
                                        src="@/assets/checklist.png"
                                      >
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="padding: 0% 0% 0% 12%; width: 85%;"
                                      >
                                        <p>Catatan yang telah kamu buat dapat membantu kamu berpikir tentang topikmu. Jika kamu memiliki lebih banyak ide, kamu dapat menambahkannya ke daftar catatan setelah Anda menulis kalimat utama pada tahap selanjutnya.</p>
                                      </div>
                                    </div>

                                    <div class="ok2">
                                      <b-button
                                        class="mt-3"
                                        block
                                        @click="showModal = falses"
                                        >OK</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Saat ini kamu memiliki 5 Ide dalam Catatan Pra Menulis.
                  </p>
                  <p>
                    Jika kamu ingin menambahkan ide yang lain, kamu dapat
                    menambahkannya kemudian <br> pada tahapan selanjutnya.
                  </p>
                </div>
              </div>                  
                  <div style="padding: 10px 0px 10px 0px"></div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis6Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 150px 0px 0px 0px;"
              >
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;margin-top:-40px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <li>
                                  &nbsp; &nbsp;Cara membuat Kopi
                                </li>
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
    </div>
  </div>
</template>

<script src="./js/praMenulis.js" />

<style lang="scss" scoped>
.button2 {
  background-color: #0a4da3;
  border: none;
  color: rgb(243, 237, 237);
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: flex-start;
  // padding: 17px 10px;
  border-radius: 30px;
  display: flex;
  position: relative;
  max-width: 990px;
  width: 130px;
  height: 44px;
  // left: calc(50% - 190px / 2 + 87px);
  top: -10px;
  align-items: center;
  margin-left: 200px;
  b {
    // padding: 0% 3% 0% 3%;
    color: #f1f1f1;
    margin: auto;
    font-size: 20px;
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
  background-color: #0a4da3;
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
    font-family: Arial, Helvetica, sans-serif;
  }
  &_tombol3 {
    padding: 60px 0px 0px 0px;
    margin-left: 25%;
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
  background-color: #00A279;
  border: none;
  color: black;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: center;
  padding: 10px 0px;
  border-radius: 19px;
  display: flex;
  max-width: 990px;
  width: 150px;
  height: 40px;
  margin-left: 45px;
  margin-top: -10px;
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
  background-color: #00A279;
}
// Stepper 1 -7
.container {
  width: 100%;
  &_bawah {
    padding: 20px 0px 180px 0px;
    margin-left: 17%;
  }
}

.progressbar1 {
  counter-reset: step;
  padding: 0px 0px 100px 0px;
}
.progressbar1 li {
  list-style-type: none;
  float: left;
  width: 12.5%;
  position: relative;
  text-align: center;
}
.progressbar1 li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: #d4d4d4;
  color: white;
}
.progressbar1 li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar1 li:first-child:after {
  content: none;
}
.progressbar1 li {
  color: #d4d4d4;
}
.progressbar1 li.active {
  color: black;
}
.progressbar1 li.active:before {
  // border-color: #738DED;
  background-color: #738ded;
}
.progressbar1 li.active + li:after {
  background-color: #738ded;
}

// Stepper 8-14
.container2 {
  width: 100%;
}
.progressbar2 {
  counter-reset: step2 7;
  margin-right: 150px;
  margin-left: -110px;
  padding: 0px 0px 80px 0px;
}
.progressbar2 li {
  list-style-type: none;
  float: right;
  width: 12.5%;
  position: relative;
  text-align: center;
}
.progressbar2 li:before {
  content: counter(step2);
  counter-increment: step2 1;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: #d4d4d4;
  color: white;
}
.progressbar2 li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar2 li:last-child:after {
  content: none;
}
.progressbar2 li.active {
  color: #738ded;
}
.progressbar2 li {
  color: #d4d4d4;
}
.progressbar2 li.active:before {
  border-color: #738ded;
}
.progressbar2 li.active + li:after {
  background-color: #738ded;
}

.steper {
  text-align: center;
  // background:red;
  padding: 10px;
  &_image {
    width: 1000px;
    height: auto;
  }
}

.jenis  {
  background-color:#C5DCFF; 
  height: 50px; 
  width: 100%px;
}

.modal-content  {
  background: #E8F1FD;
  width: 500px;
  border-radius: 34px;
  position: relative;
  top: -350px;
  left: 275px;
}

.modal-body {
  width: 500px;
}

.image-container  {
  // background: red;
  text-align: center;
  padding: 0px;
}

.ok2  {
  // background: red;
  text-align: center;
  margin-top: -20px;
}

.mt-3 {
  background: #0A4DA3;
  border-radius: 39px;
  width: 108px;
  padding-top: 5px;
  
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
          font-family: Arial, Helvetica, sans-serif;
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

.progressbar {
  margin: 0 50px;
  padding: 0;
  counter-reset: step;
  position: relative;
  border: 2px solid #738ded;
  border-left: none;
  min-height: 110px;
}

.progressbar li {
  list-style-type: none;
  width: 16%;
  /*float: left;*/
  font-size: 16px;
  position: absolute;
  text-align: center;
  text-transform: capitalize;
}

/*First 4*/
.progressbar li:nth-child(-n + 7) {
  top: -46px;
}

/*Last 4*/
.progressbar li:nth-last-child(-n + 7) {
  bottom: -55px;
}

/*Left*/
.progressbar li:nth-child(1),
.progressbar li:nth-child(14) {
  left: -45px;
}

/*Middle*/
.progressbar li:nth-child(2),
.progressbar li:nth-child(13) {
  left: calc(15% - 45px);
}

/*Middle*/
.progressbar li:nth-child(3),
.progressbar li:nth-child(12) {
  left: calc(30% - 45px);
}

/*Right*/
.progressbar li:nth-child(4),
.progressbar li:nth-child(11) {
  left: calc(45% - 45px);
}

/*Right*/
.progressbar li:nth-child(5),
.progressbar li:nth-child(10) {
  left: calc(60% - 45px);
}

/*Right*/
.progressbar li:nth-child(6),
.progressbar li:nth-child(9) {
  left: calc(75% - 45px);
}

/*Right*/
.progressbar li:nth-child(7),
.progressbar li:nth-child(8) {
  left: calc(90% - 45px);
}
.progressbar li:nth-last-child(-n + 7):before,
.progressbar li:nth-child(-n + 7):after {
  width: 32px;
  height: 32px;
  content: counter(step);
  counter-increment: step;
  line-height: 30px;
  border: 2px solid #d4d4d4;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  padding: 0;
  border-radius: 50%;
  background-color: #d4d4d4;
  font-size: 16px;
  font-weight: bold;
}

/*.progressbar li:first-child:after {
  content: none;
}*/

.progressbar li.active {
  color: white;
}

.progressbar li.active:before,
.progressbar li.active:after {
  border-color: #d4d4d4;
  background: #738ded;
}

.progressbar li.active + li:after {
  background-color: dodgerblue;
}

.progressbar label {
  color: black;
}

.content_padding_tulis_right_paragraf p {
  font-size: 20px;
}

// popup tips
.ok{
  // background: red;
  
.mt-3 {
  // margin-bottom: 10px;
  background:#0A4DA3;
  margin: 0px 0px 5px 180px;
  border-radius: 39px;
  width: 108px;
}
}

</style>
