<template>
  <div class="content">
    <br /><br /><br /><br />
    <div class="content_padding">
      <div class="content_padding_header">
        <h1><b>Latihan Menulis</b></h1>
      </div>
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/6.png" />
      </div>
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
              <b>Topik: </b>Topik: Apakah kamu punya kemahiran dalam membuat
              sesuatu? Coba sebutkan satu.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Screen1 -->
    <div class="container_bawah">
      <div class="content_padding_tulis" v-if="pengorganisasianPage1 === true">
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
                                      <img src="@/assets/checklist.png" />
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="
                                          padding: 0% 0% 0% 12%;
                                          width: 85%;
                                        "
                                      >
                                        <p>
                                          Anda perlu memindahkan setidaknya
                                          empat kalimat ke dalam Notepad
                                          Paragraf.
                                        </p>
                                        <p>
                                          Nanti Anda akan dapat mengubah urutan
                                          kalimat Anda.
                                        </p>
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
                    Anda sekarang siap untuk mengatur kalimat Anda. <br /><br />
                    Kalimat utama Anda telah ditempatkan di
                    <strong>Catatan Paragraf</strong> . Kalimat mana yang secara
                    logis akan muncul setelahnya?<br /><br />
                    Pindahkan setidaknya <strong>empat kalimat</strong>, satu
                    persatu secara berurutan, dari
                    <strong>Catatan Menulis</strong> ke dalam Catatan Paragraf.
                    Nanti Anda akan memiliki kesempatan untuk meninjau kembali
                    urutan kalimat Anda.<br /><br />
                    Centang kalimat yang Anda ingin pilih Klik
                    <strong>v</strong> untuk memindahkan setiap kalimat ke dalam
                    <strong>Catatan Paragraf atau sebaliknya</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px"
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
                        <h4><b>Catatan Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div
                      style="
                        background-color: #e0e0e0;
                        height: 48px;
                        width: 37px;
                        border-radius: 20px 20px 20px 20px;
                        margin-left: -125px;
                      "
                    >
                      <div class="content_padding_tulis_catatan">
                        <h5><b>&or;</b></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    background-color: #e0e0e0;
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
                              <div class="dua">
                                <h5>
                                  <b-form-radio name="radios-stacked" stacked
                                    ><b
                                      >&nbsp; &nbsp;Saya senang membuat kopi.</b
                                    ></b-form-radio
                                  >
                                </h5>
                              </div>
                              <div class="dua">
                                <h5>
                                  <b-form-radio name="radios-stacked" stacked
                                    ><b
                                      >&nbsp; &nbsp;Kopi adalah kesukaan
                                      saya.</b
                                    ></b-form-radio
                                  >
                                </h5>
                              </div>
                              <div class="dua">
                                <h5>
                                  <b-form-radio name="radios-stacked" stacked
                                    ><b
                                      >&nbsp; &nbsp;Kopi membuat saya lebih
                                      bersemangat dalam bekerja.</b
                                    ></b-form-radio
                                  >
                                </h5>
                              </div>
                              <div class="dua">
                                <h5>
                                  <b-form-radio name="radios-stacked" stacked
                                    ><b
                                      >&nbsp; &nbsp;Saya menyukai kopi pahit
                                      namun tidak terlalu kental.</b
                                    ></b-form-radio
                                  >
                                </h5>
                              </div>
                              <div class="dua">
                                <h5>
                                  <b-form-radio name="radios-stacked" stacked
                                    ><b
                                      >&nbsp; &nbsp;Itulah sebabnya saya
                                      menyukai kopi</b
                                    ></b-form-radio
                                  >
                                </h5>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px"
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
                        <h4><b>Catatan Paragraf</b></h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div
                      style="
                        background-color: #e0e0e0;
                        height: 48px;
                        width: 37px;
                        border-radius: 20px 20px 20px 20px;
                      margin-left: -125px;
                      "
                    >
                      <div class="content_padding_tulis_catatan">
                        <h5><b>&and;</b></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    background-color: #e0e0e0;
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
                                <b
                                  >&nbsp; &nbsp;Saya adalah pecandu Kopi
                                  <span style="color: red"
                                    >(diambil dari Kalimat Utama).</span
                                  ></b
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya senang membuat kopi.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Cara Membuat Kopi.</b
                                  ></b-form-radio
                                >
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
            <div class="col-sm-12">
              <div class="button2_tombol2" @click="pengorganisasian1Next">
                <button class="button2" type="submit">
                  <b>OK</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Screen2 -->
      <div class="content_padding_tulis" v-if="pengorganisasianPage2 === true">
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
                                      <img src="@/assets/checklist.png" />
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="
                                          padding: 0% 0% 0% 12%;
                                          width: 85%;
                                        "
                                      >
                                        <p>
                                          Tanyakan pada diri sendiri apakah
                                          semua kalimat Anda berhubungan dengan
                                          topik anda?
                                        </p>
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
                    Bagus! Anda telah memperkenalkan ide utama Anda dalam
                    kalimat topik. Anda memberikan beberapa detail dalam
                    kalimat-kalimat berikutnya.
                  </p>
                  <p>
                    Ini adalah saat yang tepat untuk membaca apa yang telah Anda
                    tulis sejauh ini.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px"
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
                        <h4><b>Konsep Paragraf</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    background-color: #e0e0e0;
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
                              <p>
                                Saya adalah pecandu Kopi. Saya senang membuat
                                kopi. Kopi membuat saya lebih bersemangat dalam
                                bekerja. Saya menyukai kopi pahit namun tidak
                                terlalu kental. Itulah sebabnya saya menyukai
                                kopi.
                              </p>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <div class="button2_tombol2" @click="pengorganisasian2Next">
                <button class="button2" type="submit">
                  <b>OK</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- screen 3 -->
      <div class="content_padding_tulis" v-if="pengorganisasianPage3 === true">
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
                                      <img src="@/assets/checklist.png" />
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="
                                          padding: 0% 0% 0% 12%;
                                          width: 85%;
                                        "
                                      >
                                        <p>
                                          Perhatikan bagaimana kata-kata
                                          transisi bertindak sebagai jembatan
                                          antara kalimat dalam sebuah paragraf.
                                          <br /><br />
                                          <strong>Saya SELALU</strong> suka
                                          makan pizza. Jenis pizza favorit saya
                                          memiliki sayuran di atasnya. Saya suka
                                          banyak saus.
                                          <strong> Saya JUGA</strong> menikmati
                                          banyak keju.<strong>
                                            SEBAGAI TAMBAHAN</strong
                                          >
                                          , kerak harus renyah.
                                          <strong> AKHIRNYA</strong> , saya suka
                                          kombinasi kerak, keju, sayuran, dan
                                          saus di mulut saya. Pizza adalah
                                          makanan yang sempurna bagi saya.
                                        </p>
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
                    Bisakah Anda menghubungkan satu kalimat ke kalimat lain
                    dengan lebih lancar? Kata-kata transisi dapat membantu
                    menghubungkan ide-ide dalam sebuah paragraf.
                  </p>
                  <p>
                    Untuk melihat bagaimana kata transisi dapat digunakan dalam
                    sebuah paragraf, klik Tips.
                  </p>
                  <p>
                    Untuk menyisipkan kata transisi, pilih kalimat, lalu klik
                    Change Text.
                  </p>
                  <p>
                    Pada layar berikutnya Anda akan melihat lebih banyak contoh
                    kata transisi
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px"
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
                        <h4><b>Catatan Paragraf</b></h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="content_padding_tulis_catatan">
                      <div class="button3_tombol3">
                        <button
                          class="button3"
                          id="show-btn"
                          @click="$bvModal.show('bv-modal-example')"
                        >
                          <b>Tambah</b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="content_padding_tulis_catatan">
                      <div class="button3_tombol4">
                        <button
                          class="button3_button4"
                          @click="$bvModal.show('bv-modal-example')"
                        >
                          <b>Ubah</b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    background-color: #e0e0e0;
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
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya adalah pecandu Kopi</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya senang membuat kopi.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.
                                  </b></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.
                                  </b></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi.</b
                                  ></b-form-radio
                                >
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
            <br />
            <div class="col-sm-12">
              <div class="button2_tombol2" @click="pengorganisasian3Next">
                <button class="button2" type="submit">
                  <b>OK</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- screen4 -->
      <div class="content_padding_tulis" v-if="pengorganisasianPage4 === true">
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
                                      <img src="@/assets/checklist.png" />
                                    </div>
                                    <div class="d-block text-center">
                                      <div
                                        style="
                                          padding: 0% 0% 0% 12%;
                                          width: 85%;
                                        "
                                      >
                                        <p>
                                          Melanjutkan sebuah ide:<br />
                                          <strong> SEBAGAI TAMBAHANNYA</strong>,
                                          kami membeli makanan ringan.
                                          <br /><br />
                                          Menunjukkan waktu:
                                          <strong>SESUDAHNYA</strong>, kami
                                          mempersiapkan jagung bakar.<br /><br />
                                          Menunjukkan sebab atau akibat:<br />
                                          Kami tidak pergi menonton film
                                          <strong>KARENA</strong> hujan badai.
                                          <br /><br />Menunjukkan perbedaan:
                                          Kami pergi,
                                          <strong>NAMUN</strong> kami akan
                                          kembali.
                                        </p>
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
                    Kata transisi dapat membantu menghubungkan ide dengan cara
                    yang berbeda. Berikut beberapa contohnya: <br /><br />
                    LANJUTKAN IDE:<br />
                    lagi, sepanjang, juga, lain, serta, di samping.<br /><br />
                    WAKTU PERTUNJUKAN:<br />
                    tentang, sebelum, nanti, selanjutnya, segera, sampai,
                    kapan.<br /><br />
                    TUNJUKKAN PENYEBAB ATAU EFEK:<br />
                    akibatnya, karena, karena, oleh karena itu.<br /><br />
                    TAMPILKAN KONTRAS:<br />
                    meskipun, tetapi, meskipun, namun, masih, namun.<br /><br />
                    Untuk melihat kata transisi dalam kalimat, klik Tip.<br />
                    Untuk menyisipkan kata transisi, pilih kalimat, lalu klik
                    Ubah teks.<br /><br />
                    Layar berikutnya akan membantu Anda menulis kesimpulan.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div
                class="content_padding_tulis_right_paragraf_bawah"
                style="padding: 80px 0px 0px 0px"
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
                        <h4><b>Catatan Paragraf</b></h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="content_padding_tulis_catatan">
                      <div class="button3_tombol3">
                        <button
                          class="button3"
                          id="show-btn"
                          @click="$bvModal.show('bv-modal-example')"
                        >
                          <b>Tambah</b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="content_padding_tulis_catatan">
                      <div class="button3_tombol4">
                        <button
                          class="button3_button4"
                          @click="$bvModal.show('bv-modal-example')"
                        >
                          <b>Ubah</b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    background-color: #e0e0e0;
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
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya adalah pecandu Kopi</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya senang membuat kopi.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.
                                  </b></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.
                                  </b></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi.</b
                                  ></b-form-radio
                                >
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
            <div class="col-sm-12">
              <div class="button2_tombol2" @click="pengorganisasian4Next">
                <button class="button2" type="submit">
                  <b>OK</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/pengorganisasian.js" />
<style lang="scss" scoped>
// popup
// .modal-content {
//   -webkit-border-radius: 100px !important;
//   -moz-border-radius: 100px !important;
//   border-radius: 100px !important;
//   -webkit-border: 100px !important;
//   -moz-border: 100px !important;
//   border: 100px !important;
// }
.ok {
  .mt-3 {
    // margin-bottom: 10px;
    background: #0a4da3;
    border-radius: 39px;
    width: 108px;
  }
}
.ok2 {
  margin-left: 40%;
  .mt-3 {
    // margin-bottom: 10px;
    background: #0a4da3;
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
.container {
  &_bawah {
    padding: 70px 0px 60px 220px;
  }
}
.dua {
  padding: 8px 0px 0px 0px;
  text-align: justify;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  h5 {
    font-family: Poppins;
  }
}
.button3 {
  background-color: #e0e0e0;
  border: none;
  color: rgb(243, 237, 237);
  border-radius: 30px;
  display: flex;
  width: 100px;
  height: 40px;
  align-items: center;
  b {
    padding: 0% 0% 0% 17%;
    color: #0a0808;
    font-size: 28px;
    align-items: center;
    font-size: 16px;
    font-family: Poppins;
  }
  &_button4 {
    background-color: #f1f7cc;
    border: none;
    color: rgb(243, 237, 237);
    border-radius: 30px;
    display: flex;
    width: 100px;
    height: 40px;
    align-items: center;
    margin-left: -5%;
    b {
      padding: 0% 0% 0% 27%;
      color: #0a0808;
      align-items: center;
      font-family: Poppins;
      font-size: 16px;
    }
  }
  &_button4:hover {
    background-color: #f3e8e8;
  }
  &_tombol3 {
    padding: 0px 0px 0px 0px;
    margin-left: -125px;
  }
  &_tombol4 {
    padding: 0px 0px 0px 0px;
    margin-left: -170px;
  }
}
.button3:hover {
  background-color: #f3e8e8;
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
    margin-left: 30px;
    margin-top: -5px;
    font-size: 28px;
  }
  &_tombol2 {
    padding: 30px 0px 20px 0px;
    top: 300px;
    left: 300px;
    width: 190px;
    height: 200px;
    margin-left: -50px;
  }
}
.button2:hover {
  background-color: #0a4da3;
}
.button {
  background-color: #00a279;
  border: none;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: center;
  // padding: 17px 0px;
  border-radius: 19px;
  // display: flex;
  max-width: 990px;
  width: 150px;
  height: 50px;
  margin-left: 45px;
  &_tombol {
    position: absolute;
    width: 190px;
    height: 100px;
    margin-left: -80px;
  }
}
.button:hover {
  background-color: #00a279;
}
.content {
  overflow-x: hidden;
  max-width: 100%;
  height: 100%;
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
        h5 {
          font-family: Poppins;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          padding: 12px 0px 8px 0px;
          color: #1a1a1a;
        }
      }
      &_right {
        max-width: 750px;
        width: 750px;
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
            margin-bottom: 100px;
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
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
}

.tombol {
  // background: red;
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

.ok2 {
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
