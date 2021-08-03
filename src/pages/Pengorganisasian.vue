<template>
  <div class="all">
    <!-- Judul -->
    <div class="content-satu">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <!-- Stepper -->
    <div class="content-dua">
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/6.png" alt="" />
      </div>
    </div>
    <!-- Jenis Paragraf -->
    <div class="content-tiga">
      <div class="jenis">
        <p class="jenis_paragraf">
          <strong>Jenis Paragraf: </strong>{{ jenisTopics.jenisParagraf }}
        </p>
        <p class="jenis_topik">
          <strong>Topik: </strong>{{ jenisTopics.topik }}
        </p>
      </div>
    </div>
    <!-- modal area -->
    <div v-if="showModalErrorEmpety === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <br />
                  <div class="kalimat">
                    <div style="font">
                      <h2></h2>
                    </div>
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      <p
                        class="mb-4"
                        style="text-align:center; font-size: 20px;"
                      >
                        Catatan paragraf tidak boleh kosong
                      </p>
                    </div>
                  </div>
                  <div class="tombol1">
                    <button
                      class="ok1"
                      type="button"
                      @click="showModalErrorEmpety = false"
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
    <div v-if="showModalError === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <br />
                  <div class="kalimat">
                    <div style="font">
                      <h2></h2>
                    </div>
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      <p
                        class="mb-4"
                        style="text-align:center; font-size: 20px;"
                      >
                        Maksimal menambahkan 10 item.
                      </p>
                    </div>
                  </div>

                  <div class="tombol1">
                    <button
                      class="ok1"
                      type="button"
                      @click="showModalError = false"
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
                      <p>
                        <b>
                          Tambahan Catatan Paragraf
                        </b>
                      </p>
                      <div class="text-area">
                        <b-form-textarea
                          class="form-textarea"
                          v-model="dataForm.tambahParagrafPage3"
                          rows="4"
                          no-resize
                          type="text"
                        ></b-form-textarea>
                      </div>
                    </div>
                    <div class="tombol">
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
                      <button
                        class="ok3"
                        block
                        type="button"
                        @click="tambahPramenulis()"
                      >
                        OK
                      </button>
                    </div>
                  </form>
                </div>
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
                      <div>
                        <p>
                          <b>
                            Ubah Catatan Paragraf
                          </b>
                        </p>
                        <div class="text-area">
                          <b-form-textarea
                            class="form-textarea"
                            v-model="dataForm.ubahParagrafPage3"
                            rows="4"
                            no-resize
                            type="text"
                          ></b-form-textarea>
                        </div>
                      </div>
                    </div>
                    <div class="tombol">
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
                      <button class="ok3" block @click="ubahPramenulis()">
                        OK
                      </button>
                    </div>
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
                              @click="showModal2 = false"
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
    <!-- end modal area -->

    <!-- Screen1 -->
    <div class="content_padding_tulis" v-if="pengorganisasianPage1 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tengah">
            <b-btn class="tengah_tips" @click="showModal = true">TIPS</b-btn>
          </div>
        </div>
        <div class="col-md-9.5 tengah_text2">
          <p>
            Anda sekarang siap untuk mengatur kalimat Anda.
          </p>
          <p>
            Kalimat utama Anda telah ditempatkan di
            <b>Catatan Paragraf</b> . Kalimat mana yang secara logis akan muncul
            setelahnya?
          </p>
          <p>
            Pindahkan setidaknya <b>empat kalimat</b>, satu persatu secara
            berurutan, dari <b>Catatan Menulis</b> ke dalam Catatan Paragraf.
            Nanti Anda akan memiliki kesempatan untuk meninjau kembali urutan
            kalimat Anda.
          </p>
          <p>
            Centang kalimat yang Anda ingin pilih <br />Klik <b>v</b> untuk
            memindahkan setiap kalimat ke dalam
            <b>Catatan Paragraf atau sebaliknya</b>
          </p>
        </div>
      </div>

      <div class="content-konsep">
        <div class="gabungan-icon">
          <div class="border">
            <div class="border_konsep">
              <h4><b>Catatan Menulis</b></h4>
            </div>
          </div>
          <a @click="descending()">
            <img class="icon-up-down" src="@/assets/down.png" />
          </a>
        </div>
        <div class="border_list">
          <b-form-group>
            <div>
              <div
                class="dua"
                v-for="(dataSesion,
                index) in pramenulisLanjutanDataSesion.resultMenulis"
                :key="index"
              >
                <b-form-radio
                  v-bind:value="index"
                  v-model="dataForm.resultMenulis"
                ></b-form-radio>
                <p>{{ dataSesion.pramenulis }}</p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>

      <div class="content-konsep">
        <div class="gabungan-icon">
          <div class="border">
            <div class="border_konsep">
              <h4>
                <b>Catatan Paragraf</b>
              </h4>
            </div>
          </div>
          <a @click="ascending()">
            <img class="icon-up-down" src="@/assets/up.png" />
          </a>
        </div>

        <div class="border_list">
          <b-form-group>
            <div>
              <div class="dua">
                <h5
                  v-for="(details,
                  index) in pramenulisLanjutanDataSesion.resultParagraphKalimatUtama"
                  :key="index"
                >
                  <b>
                    <span
                      v-if="index === 1"
                      v-html="details.replace('.', '')"
                    ></span>
                  </b>
                </h5>
              </div>
              <b-form-group>
                <div
                  class="dua"
                  v-for="(dataSesionNext2,
                  index) in pramenulisLanjutanDataSesion.resultParagraph"
                  :key="index"
                >
                  <b-form-radio
                    v-bind:value="index"
                    v-model="dataForm.resultMenulis1"
                  ></b-form-radio>
                  <p>&nbsp;&nbsp;{{ dataSesionNext2 }}</p>
                </div>
              </b-form-group>
            </div>
          </b-form-group>
        </div>
      </div>

      <div class="button_ok">
        <button
          class="button-ok justify-content-center"
          type="button"
          @click="pengorganisasian1Next()"
        >
          <b>OK</b>
        </button>
      </div>
    </div>

    <!-- Screen2 -->
    <div class="content_padding_tulis" v-if="pengorganisasianPage2 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tengah">
            <b-btn class="tengah_tips" @click="showModal2 = true">TIPS</b-btn>
          </div>
        </div>
        <div class="col-md-9.5 tengah_text2">
          <p>
            Bagus! Anda telah memperkenalkan ide utama Anda dalam kalimat topik.
            Anda memberikan beberapa detail dalam kalimat-kalimat berikutnya.
          </p>
          <p>
            Ini adalah saat yang tepat untuk membaca apa yang telah Anda tulis
            sejauh ini.
          </p>
        </div>
      </div>

      <div class="content-konsep">
        <div class="gabungan-icon">
          <div class="border">
            <div class="border_konsep">
              <h4>
                <b>Konsep Paragraf</b>
              </h4>
            </div>
          </div>
        </div>
        <div class="border_list">
          <b-form-group>
            <div>
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
            </div>
          </b-form-group>
        </div>
      </div>

      <div class="button_ok" @click="pengorganisasian2Next()">
        <button class="button-ok justify-content-center" type="button">
          <b>OK</b>
        </button>
      </div>
    </div>

    <!-- screen 3 -->
    <div class="content_padding_tulis" v-if="pengorganisasianPage3 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tengah">
            <b-btn class="tengah_tips" @click="showModal3 = true">TIPS</b-btn>
          </div>
        </div>
        <div class="col-md-9.5 tengah_text2">
          <p>
            Bisakah Anda menghubungkan satu kalimat ke kalimat lain dengan lebih
            lancar? Kata-kata transisi dapat membantu menghubungkan ide-ide
            dalam sebuah paragraf.
          </p>
          <p>
            Untuk melihat bagaimana kata transisi dapat digunakan dalam sebuah
            paragraf, klik Tips.
          </p>
          <p>
            Untuk menyisipkan kata transisi, pilih kalimat, lalu klik Change
            Text.
          </p>
          <p>
            Pada layar berikutnya Anda akan melihat lebih banyak contoh kata
            transisi
          </p>
        </div>
      </div>

      <div class="content-konsep">
        <div class="gabungan-icon">
          <div class="border">
            <div class="border_konsep">
              <h4>
                <b>Catatan Paragraf</b>
              </h4>
            </div>
          </div>
          <div class="response">
            <!-- button tambah -->
            <button
              class="all-button_dua"
              id="show-btn"
              @click="showModalTambahPage3 = true"
            >
              <b>Tambah</b>
            </button>
            <!-- button ubah -->
            <button
              v-bind:disabled="dataForm.pilih.length === 0 ? true : false"
              class="all-button_dua"
              @click="tombolUbah()"
            >
              <b>Ubah</b>
            </button>
          </div>
        </div>

        <div class="border_list">
          <b-form-group>
            <div>
              <div
                class="dua"
                v-for="(dataSesion,
                index) in pramenulisLanjutanDataSesion.konsepParagrafArray"
                :key="index"
              >
                <b-form-radio
                  name="radios-stacked"
                  v-model="dataForm.pilih"
                  v-bind:value="index"
                ></b-form-radio>
                <p>{{ dataSesion }}</p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>

      <!-- batas -->
      <div class="button_ok" @click="pengorganisasian3Next">
        <button class="button-ok justify-content-center" type="submit">
          <b>OK</b>
        </button>
      </div>
    </div>
    <!-- screen4 -->
    <div class="content_padding_tulis" v-if="pengorganisasianPage4 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tengah">
            <b-button class="tengah_tips" @click="showModal = true">
              <b>TIPS</b>
            </b-button>
          </div>
        </div>
        <div class="col-md-9.5 tengah_text2">
          <p>
            Kata transisi dapat membantu menghubungkan ide dengan cara yang
            berbeda.<br />
            Berikut beberapa contohnya: <br /><br />
            LANJUTKAN IDE:<br />
            lagi, sepanjang, juga, lain, serta, di samping.<br /><br />
            WAKTU PERTUNJUKAN:<br />
            tentang, sebelum, nanti, selanjutnya, segera, sampai, kapan.<br /><br />
            TUNJUKKAN PENYEBAB ATAU EFEK:<br />
            akibatnya, karena, karena, oleh karena itu.<br /><br />
            TAMPILKAN KONTRAS:<br />
            meskipun, tetapi, meskipun, namun, masih, namun.<br /><br />
            Untuk melihat kata transisi dalam kalimat, klik Tip.<br />
            Untuk menyisipkan kata transisi, pilih kalimat, lalu klik Ubah
            teks.<br /><br />
            Layar berikutnya akan membantu Anda menulis kesimpulan.
          </p>
        </div>
      </div>

      <div class="content-konsep">
        <div class="gabungan-icon">
          <div class="border">
            <div class="border_konsep">
              <h4>
                <b>Catatan Paragraf</b>
              </h4>
            </div>
          </div>
          <div class="response">
            <button
              class="all-button_dua"
              id="show-btn"
              @click="showModalTambahPage3 = true"
            >
              <b>Tambah</b>
            </button>
            <button
              class="all-button_dua"
              v-bind:disabled="dataForm.pilih.length === 0 ? true : false"
              @click="tombolUbah()"
            >
              <b>Ubah</b>
            </button>
          </div>
        </div>
        <div class="border_list">
          <b-form-group>
            <div>
              <div
                class="dua"
                v-for="(dataSesion,
                index) in pramenulisLanjutanDataSesion.konsepParagrafArray"
                :key="index"
              >
                <b-form-radio
                  name="radios-stacked"
                  v-model="dataForm.pilih"
                  v-bind:value="index"
                  stacked
                ></b-form-radio>
                <p>{{ dataSesion }}</p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>

      <div class="button_ok" @click="pengorganisasian4Next">
        <button class="button-ok justify-content-center" type="submit">
          <b>OK</b>
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./js/pengorganisasian.js" />

<style lang="scss" scoped>
// Tombol OK
.button_ok {
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  .button-ok {
    background-color: #0a4da3;
    height: 44px;
    width: 110px;
    border-radius: 42px;
    border: none;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border-radius: 30px;
    display: flex;
    padding-top: 7px;
    b {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .button-ok:hover {
    background-color: #0a4da3;
  }
}
// End Tombol OK

.jarak1 {
  padding: 0px 0px 0px 120px;
  @media screen and (max-width: 700px) {
    padding: 0px 0px 0px 30px;
  }
}
.bereb {
  background-color: #c1c8d3;
  width: 80%;
  padding: 13px;
  border-radius: 0px 0 30px 30px;
}
.all {
  overflow-x: hidden;
  max-width: 1350px;
  margin: auto;
}
// Judul
.content-satu {
  margin-top: 120px;
}
.body {
  display: flex;
  padding: 0px 210px 0px 100px;
  @media screen and(max-width: 768px) {
    padding: 10px 10px 0px 0px;
  }
}

// Jenis Paragraf
.jenis {
  display: flex;
  height: 49px;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  @media Screen and (max-width: 768px) {
    height: auto;
  }
  &_paragraf {
    padding: 11px 0px 0px 110px;
    @media (max-width: 768px) {
      padding: 11px 0px 0px 10px;
    }
  }
  &_topik {
    padding: 11px 0px 0px 70px;
  }
}
// End Jenis Paragraf
.button2 {
  background-color: #0a4da3;
  color: rgb(243, 237, 237);
  cursor: pointer;
  // padding: 17px 10px;
  border-radius: 30px;
  display: flex;
  position: relative;
  max-width: 990px;
  width: 130px;
  height: 44px;
  top: -10px;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  b {
    color: #f1f1f1;
    margin: auto;
    font-size: 20px;
  }
  &_tombol2 {
    padding: 40px 0px 0px 0px;
    left: 300px;
    width: 190px;
    height: 200px;
  }
}
.button2:hover {
  background-color: #0a4da3;
}
.response {
  width: 100%;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    padding: 10px 0px 0px 10px;
    width: 100%;
  }
}
// Button Konsep Menulis
.all-button_dua {
  background-color: #e0e0e0;
  border: none;
  border-radius: 20px;
  margin: 0.3%;
  width: 100px;
  height: 37px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-left: 5px;
  }
}
// modal tambah & ubah
.text-area {
  width: 100%;
  padding: 0px 0px 10px 0px;
  .form-textarea {
    // width: 100%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}
.dua {
  font-size: 20px;
  display: flex;
  @media screen and (max-width: 760px) {
    padding: 0px;
  }
  p {
    padding-left: 10px;
  }
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
  border-radius: 30px;
  position: relative;
  width: 130px;
  height: 44px;
  align-items: center;
  justify-content: center;
  b {
    // padding: 0% 3% 0% 3%;
    color: #f1f1f1;
    margin: auto;
    font-size: 20px;
  }
  &_tombol4 {
    padding: 30px 0px;
    margin-left: 500px;
    width: 190px;
    height: 200px;
    margin-bottom: -30px;
    @media screen and (max-width: 1024px) {
      margin-left: 400px;
    }
    @media screen and (max-width: 800px) {
      margin-left: 300px;
    }
    @media screen and (max-width: 600px) {
      margin-left: 200px;
    }
    @media screen and (max-width: 400px) {
      margin-left: 100px;
    }
    @media screen and (max-width: 300px) {
      margin-left: 50px;
    }
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
  text-align: right;
  margin: 5px;
  width: 100%;
  @media Screen and (max-width: 660px) {
  }
  &_tips {
    background-color: #00a279;
    border: none;
    width: 98px;
    border-radius: 10px;
    margin: 5px;
    color: #fff;
    @media Screen and (max-width: 768px) {
      line-height: 22px;
    }
  }

  // text page 2
  &_text2 {
    padding: 10px 0px 0px 15px;
    font-family: Poppins;
    font-weight: 400;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    strong {
      font-style: italic;
      font-size: 20px;
    }
    @media Screen and (max-width: 780px) {
      padding: 10px 0px 0px 10px;
    }
  }

  &_text3 {
    margin-left: 20px;
    width: 100%;
    font-family: Poppins;
    font-size: 20px;
    strong {
      font-style: italic;
      font-size: 20px;
    }
    @media screen and (max-width: 768px) {
      margin-left: 10px;
      width: 100%;
      padding-right: 10px;
    }
  }
}

.gabungan-icon {
  display: flex;
}

.border {
  background-color: #455a64;
  height: 42px;
  width: 238px;
  border-radius: 7px 7px 0px 0px;
  border: none;
  @media Screen and (max-width: 780px) {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    height: auto;
  }
  h4 {
    color: #fff;
    font-size: 16px;
    padding: 10px 0px 0px 10px;
  }
  &_list {
    font-family: Poppins;
    background-color: #e0e0e0;
    width: 100%;
    padding: 15px 10px 8px 30px;
    border-radius: 0px 0px 14px 14px;
    @media Screen and (max-width: 780px) {
      width: 100%;
      padding: 10px 10px 0px 10px;
    }
  }
}

// Stepper
.steper {
  text-align: center;
  padding: 10px 200px 10px 200px;
  &_image {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    padding: 10px 20px 10px 20px;
    &_image {
      width: 100%;
      height: auto;
    }
  }
}
// End Stepper

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
// content konsep
.content-konsep {
  padding: 10px 230px 10px 230px;
  @media screen and (max-width: 768px) {
    padding: 10px 20px 10px 20px;
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
  @media Screen and (max-width: 780px) {
    margin-left: 0%;
    align-items: center;
    text-align: center;
    h1 {
      margin-left: 0%;
    }
  }
  @media Screen and (max-width: 400px) {
    margin-left: 0%;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 30px;
      margin-left: 0%;
    }
  }
}
// End Judul

/* Style Modal */
.modal-dialog {
  // top: -100px;
}

.modal-content {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
}

.modal-body {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
}

/* end style Modal */

/* Style Isi Modal */
.image-container {
  text-align: center;
  /* background: red; */
}
.kalimat {
  font-family: Poppins;
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
  font-weight: 700;
  text-align: center;
  width: 100%;
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
  // transition: opacity 0.3s ease;
}

.modal-wrapper {
  // display: table-cell;
  // vertical-align: middle;

  width: 100%;
  height: auto;
  padding-top: 75px;
  @media (max-width: 768px) {
    padding-top: 95px;
  }
}

/* End Background Belakang Modal */
.tombol {
  /* background: red; */
  text-align: center;
  padding: 5px;
}

.ok {
  // margin-bottom: 10px;
  background: #0a4da3;
  color: #fff;
  border: none;
  border-radius: 39px;
  width: 108px;
  margin-right: 10px;
}
.ok3 {
  background: #0a4da3;
  border-radius: 39px;
  width: 108px;
  border: none;
  color: #fff;
  margin-left: 10px;
}

.tombol1 {
  /* background: red; */
  text-align: center;
  padding: 5px;
}

.ok1 {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
}
.icon-up-down {
  padding: 0px 0px 0px 20px;
  @media screen and (max-width: 1000px) {
  }
}
</style>
