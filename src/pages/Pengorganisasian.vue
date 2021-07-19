<template>
  <div class="content">
    <!-- Judul -->
    <div style="margin-top: 120px;">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <br />
    <!-- Stepper -->
    <div class="content-dua">
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/6.png" alt="" />
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
    <!-- modal area -->
    <div v-if="showModal === true">
      <transition name="modal">
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
                                Anda perlu memindahkan setidaknya empat kalimat
                                ke dalam Notepad Paragraf.
                              </p>
                              <p>
                                Nanti Anda akan dapat mengubah urutan kalimat
                                Anda.
                              </p>
                            </div>
                          </div>

                          <div class="ok2">
                            <b-button
                              class="mt-3"
                              block
                              @click="showModal = false"
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
      </transition>
    </div>
    <div v-if="showModalTambahPage3 === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <form action="">
                    <div class="kalimat">
                      <div style="padding: 0% 0% 0% 12%;">
                        <p
                          style="color:black; margin-left: 6%; font-size: 20px;"
                        >
                          <b>
                            Tambahan Catatan Paragraf
                          </b>
                        </p>
                        <table>
                          <tr>
                            <td>
                              <b-form-textarea
                                v-model="dataForm.tambahParagrafPage3"
                                style="width: 350px;"
                                rows="4"
                                no-resize
                                type="text"
                              ></b-form-textarea>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="tombol">
                      <div class="row">
                        <div class="col-sm-6">
                          <button
                            class="ok"
                            block
                            @click="
                              (showModalTambahPage3 = false),
                                (dataForm.tambahParagrafPage3 = '')
                            "
                          >
                            Batal
                          </button>
                        </div>
                        <div class="col-sm-6">
                          <button
                            class="ok3"
                            block
                            type="button"
                            @click="tambahPramenulis()"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- popup ubah -->
    <div v-if="showModalUbahPage3 === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <b-form @submit="showModalUbahPage3 = false">
                    <div class="kalimat">
                      <div style="padding: 0% 0% 0% 12%; width: 85%;">
                        <p
                          style="color:black; margin-left: 15%; font-size: 20px;"
                        >
                          <b>
                            Ubah Catatan Paragraf
                          </b>
                        </p>
                        <table>
                          <tr>
                            <td>
                              <b-form-textarea
                                v-model="dataForm.ubahParagrafPage3"
                                style="width: 350px;"
                                rows="4"
                                no-resize
                                type="text"
                              ></b-form-textarea>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="tombol">
                      <div class="row">
                        <div class="col-sm-6">
                          <button
                            class="ok"
                            block
                            @click="
                              (showModalUbahPage3 = false),
                                (dataForm.ubahParagrafPage3 = '')
                            "
                          >
                            Batal
                          </button>
                        </div>
                        <div class="col-sm-6">
                          <button class="ok3" block @click="ubahPramenulis()">
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                    <br />
                  </b-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- popup -->
    <div v-if="showModal2 === true">
      <transition name="modal" appear>
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
                                Tanyakan pada diri sendiri apakah semua kalimat
                                Anda berhubungan dengan topik anda?
                              </p>
                            </div>
                          </div>

                          <div class="ok2">
                            <b-button
                              class="mt-3"
                              block
                              @click="showModal2 = falses"
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
      </transition>
    </div>
    <!-- popup -->

    <div v-if="showModal3 === true">
      <transition name="modal" appear>
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
                                Perhatikan bagaimana kata-kata transisi
                                bertindak sebagai jembatan antara kalimat dalam
                                sebuah paragraf.
                                <br /><br />
                                <strong>Saya SELALU</strong> suka makan pizza.
                                Jenis pizza favorit saya memiliki sayuran di
                                atasnya. Saya suka banyak saus.
                                <strong> Saya JUGA</strong> menikmati banyak
                                keju.<strong> SEBAGAI TAMBAHAN</strong>
                                , kerak harus renyah.
                                <strong> AKHIRNYA</strong> , saya suka kombinasi
                                kerak, keju, sayuran, dan saus di mulut saya.
                                Pizza adalah makanan yang sempurna bagi saya.
                              </p>
                            </div>
                          </div>

                          <div class="ok2">
                            <b-button
                              class="mt-3"
                              block
                              @click="showModal3 = false"
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
      </transition>
    </div>
    <!-- popup -->
    <div v-if="showModal === true">
      <transition name="modal" appear>
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
                                <strong> SEBAGAI TAMBAHANNYA</strong>, kami
                                membeli makanan ringan. <br /><br />
                                Menunjukkan waktu:
                                <strong>SESUDAHNYA</strong>, kami mempersiapkan
                                jagung bakar.<br /><br />
                                Menunjukkan sebab atau akibat:<br />
                                Kami tidak pergi menonton film
                                <strong>KARENA</strong> hujan badai.
                                <br /><br />Menunjukkan perbedaan: Kami pergi,
                                <strong>NAMUN</strong> kami akan kembali.
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
      </transition>
    </div>
    <!-- end modal area -->
    <!-- Screen1 -->
    <div style="padding: 20px 0px 20px 110px;">
      <div class="content_padding_tulis" v-if="pengorganisasianPage1 === true">
        <div class="tengah">
          <div class="row">
            <div class="col-sm-1">
              <b-btn class="tengah_tips" @click="showModal = true">TIPS</b-btn>
            </div>
            <div class="col-sm-11">
              <p class="tengah_text2">
                Anda sekarang siap untuk mengatur kalimat Anda.
              </p>
              <p class="tengah_text2">
                Kalimat utama Anda telah ditempatkan di
                <b>Catatan Paragraf</b> . Kalimat mana yang secara logis akan
                muncul setelahnya?
              </p>
              <p class="tengah_text2">
                Pindahkan setidaknya <b>empat kalimat</b>, satu persatu secara
                berurutan, dari <b>Catatan Menulis</b> ke dalam Catatan
                Paragraf. Nanti Anda akan memiliki kesempatan untuk meninjau
                kembali urutan kalimat Anda.
              </p>
              <p class="tengah_text2">
                Centang kalimat yang Anda ingin pilih Klik
                <b>v</b> untuk memindahkan setiap kalimat ke dalam
                <b>Catatan Paragraf atau sebaliknya</b>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-11" style="padding: 0px 0px 0px 40px;">
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
                        <h4 style="padding: 11px 0px 0px 0px;">
                          <b>Catatan Menulis</b>
                        </h4>
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
                  <div style="margin-left: 10px">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div class="dua">
                              <h5>
                                <b-form-checkbox-group>
                                  <b-form-checkbox
                                    v-bind:value="dataSesion.pramenulis"
                                    v-for="(dataSesion,
                                    index) in pramenulisLanjutanDataSesion.resultMenulis"
                                    :key="index"
                                    v-model="dataForm.resultMenulis"
                                    >&nbsp;&nbsp;{{
                                      dataSesion.pramenulis
                                    }}</b-form-checkbox
                                  >
                                </b-form-checkbox-group>
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
                        <h4 style="padding: 11px 0px 0px 0px;">
                          <b>Catatan Paragraf</b>
                        </h4>
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
                  <div style="margin-left: 10px">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div class="dua">
                              <h5>
                                <b
                                  >Saya adalah pecandu Kopi
                                  <font color="red"
                                    >(diambil dari Kalimat Utama).</font
                                  ></b
                                >
                              </h5>
                            </div>
                            <b-form-group>
                              <div class="dua">
                                <h5>
                                  <b-form-checkbox-group>
                                    <b-form-checkbox
                                      v-bind:value="dataSesionNext2"
                                      v-for="(dataSesionNext2,
                                      index) in pramenulisLanjutanDataSesion.resultParagraph"
                                      :key="index"
                                      v-model="dataForm.resultMenulis"
                                      >&nbsp;&nbsp;{{
                                        dataSesionNext2
                                      }}</b-form-checkbox
                                    >
                                  </b-form-checkbox-group>
                                </h5>
                              </div>
                            </b-form-group>
                          </ul>
                        </div>
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="button2_tombol2">
                <button
                  class="button2"
                  type="button"
                  @click="pengorganisasian1Next()"
                >
                  <b>OK</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Screen2 -->
      <div class="content_padding_tulis" v-if="pengorganisasianPage2 === true">
        <div class="tengah">
          <div class="row">
            <div class="col-sm-1">
              <b-btn class="tengah_tips" @click="showModal2 = true">TIPS</b-btn>
            </div>
            <div class="col-sm-11">
              <p class="tengah_text2">
                Bagus! Anda telah memperkenalkan ide utama Anda dalam kalimat
                topik. Anda memberikan beberapa detail dalam kalimat-kalimat
                berikutnya.
              </p>
              <p class="tengah_text2">
                Ini adalah saat yang tepat untuk membaca apa yang telah Anda
                tulis sejauh ini.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-11" style="padding: 0px 0px 0px 40px;">
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
                      <h4 style="padding: 14px 0px 0px 0px;">
                        <b>Konsep Paragraf</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="
                    background-color: #c1c8d3;
                    width: 820px;
                    padding: 13px;
                    border-radius: 0px 0 30px 30px;
                  "
              >
                <div style="padding: 0px 15px 0px 5px">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div
                            class="dua"
                            v-for="(dataSesion,
                            index) in pramenulisLanjutanDataSesion.konsepParagraf"
                            :key="index"
                          >
                            <p>
                              {{ dataSesion }}
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
          <div class="col-sm-12">
            <div class="button4_tombol4" @click="pengorganisasian2Next()">
              <button class="button4" type="button">
                <b>OK</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- screen 3 -->
      <div class="content_padding_tulis" v-if="pengorganisasianPage3 === true">
        <div class="tengah">
          <div class="row">
            <div class="col-sm-1">
              <b-btn class="tengah_tips" @click="showModal3 = true">TIPS</b-btn>
            </div>
            <div class="col-sm-11">
              <p class="tengah_text2">
                Bisakah Anda menghubungkan satu kalimat ke kalimat lain dengan
                lebih lancar? Kata-kata transisi dapat membantu menghubungkan
                ide-ide dalam sebuah paragraf.
              </p>
              <p class="tengah_text2">
                Untuk melihat bagaimana kata transisi dapat digunakan dalam
                sebuah paragraf, klik Tips.
              </p>
              <p class="tengah_text2">
                Untuk menyisipkan kata transisi, pilih kalimat, lalu klik Change
                Text.
              </p>
              <p class="tengah_text2">
                Pada layar berikutnya Anda akan melihat lebih banyak contoh kata
                transisi
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-11">
            <div
              class="content_padding_tulis_right_paragraf_bawah"
              style="padding: 80px 0px 0px 30px"
            >
              <div class="row">
                <div class="col-sm-3">
                  <div
                    style="
                        background-color: #484c52;
                        height: 48px;
                        width: 240px;
                        border-radius: 20px 20px 0px 0px;
                      "
                  >
                    <div class="content_padding_tulis_catatan">
                      <h4 style="padding: 10px 0px 0px 0px;">
                        <b>Catatan Paragraf</b>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="content_padding_tulis_catatan">
                    <div class="button3_tombol3">
                      <button
                        class="button3"
                        id="show-btn"
                        @click="showModalTambahPage3 = true"
                      >
                        <b>Tambah</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-1" style="margin-left: -35px">
                  <div class="content_padding_tulis_catatan">
                    <div class="button3_tombol3">
                      <button
                        v-bind:disabled="
                          dataForm.pilih.length === 0 ? true : false
                        "
                        class="button3_button4"
                        @click="tombolUbah()"
                      >
                        <b>Ubah</b>
                      </button>
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
                          <div
                            class="dua"
                            v-for="(dataSesion,
                            index) in pramenulisLanjutanDataSesion.konsepParagrafArray"
                            :key="index"
                          >
                            <h5>
                              <b-form-radio
                                name="radios-stacked"
                                v-model="dataForm.pilih"
                                v-bind:value="index"
                                ><b
                                  >&nbsp; &nbsp;{{ dataSesion }}</b
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
        </div>
        <!-- batas -->
        <div class="col-sm-12"></div>
        <br />
        <div class="col-sm-12">
          <div class="button4_tombol4" @click="pengorganisasian3Next">
            <button class="button4" type="submit">
              <b>OK</b>
            </button>
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
                  <div class="col-sm-3">
                    <div
                      style="
                        background-color: #484c52;
                        height: 48px;
                        width: 240px;
                        border-radius: 20px 20px 0px 0px;
                      "
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4 style="padding: 10px 0px 0px 0px;">
                          <b>Catatan Paragraf</b>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="content_padding_tulis_catatan">
                      <div class="button3_tombol3">
                        <button
                          class="button3"
                          id="show-btn"
                          @click="showModalTambahPage3 = true"
                        >
                          <b>Tambah</b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-1" style="margin-left: -35px">
                    <div class="content_padding_tulis_catatan">
                      <div class="button3_tombol3">
                        <button
                          class="button3_button4"
                          v-bind:disabled="
                            dataForm.pilih.length === 0 ? true : false
                          "
                          @click="tombolUbah()"
                        >
                          <b>Ubah</b>
                        </button>
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
                            <div
                              class="dua"
                              v-for="(dataSesion,
                              index) in pramenulisLanjutanDataSesion.konsepParagrafArray"
                              :key="index"
                            >
                              <h5>
                                <b-form-radio
                                  name="radios-stacked"
                                  v-model="dataForm.pilih"
                                  v-bind:value="index"
                                  stacked
                                  ><b
                                    >&nbsp; &nbsp;{{ dataSesion }}</b
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
  }
}
.button3:hover {
  background-color: #f3e8e8;
}
.dua {
  padding: 10px 0px 0px 0px;
  text-align: justify;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
.button {
  background-color: #00a279;
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
  background-color: #00a279;
}
.button4 {
  background-color: #0a4da3;
  color: rgb(243, 237, 237);
  cursor: pointer;
  border-radius: 30px;
  display: flex;
  position: relative;
  max-width: 990px;
  width: 130px;
  height: 44px;
  b {
    // padding: 0% 3% 0% 3%;
    color: #f1f1f1;
    margin: auto;
    font-size: 20px;
  }
  &_tombol4 {
    padding: 60px 0px 0px 400px;
    width: 190px;
    height: 200px;
    margin-bottom: -30px;
  }
}
.button4:hover {
  background-color: #0a4da3;
}
// Stepper 1 -7
.container {
  width: 100%;
  &_bawah {
    padding: 20px 0px 180px 0px;
    margin-left: 15%;
  }
}
.tengah2 {
  padding: 0px 0px 0px 100px;
  display: flex;
  width: 100%;
  display: flex;
  padding-top: 13px;
}
.tengah {
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  // background: red;
  // button tips
  &_tips {
    padding: 4px 0px 0px 0px;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    background-color: #00a279;
    color: #fff;
    font-size: normal;
    margin-bottom: 70px;
    cursor: pointer;
  }

  // text page 2
  &_text2 {
    margin-left: 30px;
    width: 80%;
    font-family: Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
  }
  &_text3 {
    margin-left: 30px;
    width: 100%;
    font-family: Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
  }
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

.jenis {
  background-color: #c5dcff;
  height: 50px;
  width: 100%px;
}

.ok2 {
  // background: red;
  text-align: center;
  margin-top: -20px;
}

.mt-3 {
  background: #0a4da3;
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
        text-align: center;
        padding: 0px 0px 0px 0px;
        &_catatan2 {
          color: #454b56;
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
}
.judul {
  font-size: 50px;
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
.tombol {
  // background: red;
  padding: 20px 0px 0px 70px;
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

.ok3 {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
}
</style>
