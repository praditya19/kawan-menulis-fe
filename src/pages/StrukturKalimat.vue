<template>
  <div class="col-md-12">
    <div class="all">
      <!-- Judul -->
      <div class="content-satu">
        <div class="judul">
          <h1>Latihan Menulis</h1>
        </div>
      </div>
      <!-- End Judul -->
    <!-- modal area -->
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
    <div v-if="modalTambah === true">
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
                                v-model="dataForm.tambahData"
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
                    <div class="tombol2">
                      <div class="row">
                        <div class="col-sm-6">
                          <button
                            class="ok2"
                            block
                            @click="
                              (modalTambah = false), (dataForm.tambahData = '')
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
                            @click="handelTambah()"
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
    <div v-if="modalUbah === true">
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
                                v-model="dataForm.ubahData"
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
                    <div class="tombol2">
                      <div class="row">
                        <div class="col-sm-6">
                          <button
                            class="ok2"
                            block
                            @click="
                              (modalUbah = false), (dataForm.ubahData = '')
                            "
                          >
                            Batal
                          </button>
                        </div>
                        <div class="col-sm-6">
                          <button
                            class="ok3"
                            block
                            @click="setKonsepParagraf()"
                          >
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
    <!-- Popup Modal -->
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
                      style="width: 40px; height: 38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat2">
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      <p>
                        Jenis fragmen yang umum:
                        <br />
                        Frasa KATA DEPAN: Setelah ujian akhir saya.
                        <br />
                        <br />
                        PARTISIPIAL FRASE: Menjadi anak laki-laki
                        tertinggi.
                        <br />
                        <br />
                        BAGIAN DARI KALIMAT KOMPAK: Dan membuat
                        tempat tidur.
                        <br />
                        <br />
                        DEPENDENT CLAUSE: Karena kita akan pergi ke
                        tempat yang sama.
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
    <!-- end modal area -->
      <!-- Stepper -->
      <div class="content-dua">
        <div class="steper">
          <img class="steper_image" src="@/assets/icon_stepper/10.png" alt="" />
        </div>
      </div>
      <!-- End Stepper -->

      <br />

      <!-- Jenis Paragraf -->
      <div class="content-tiga">
        <div class="jenis">
          <p class="jenis_paragraf">
            <strong>Jenis Paragraf:</strong>
            &nbsp;{{ jenisTopics.jenisParagraf }}
          </p>
          <p class="jenis_topik">
            <strong>Topik:</strong>
            &nbsp;{{ jenisTopics.topik }}
          </p>
        </div>
      </div>
      <!-- End Jenis Paragraf -->

      <!-- Screen 1 -->
      <div class="content-empat" v-if="strukturkalimatPage1 === true" style="margin-left:3%;">
        <div class="col-sm-12">
          <div class="row">
            <!-- Button Tips -->
            <div class="col-sm-2">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal = true">
                  Tips
                </b-button>
                
              </div>
            </div>
            <div class="col-sm-8">
              <div class="kalimat">
                <p class="kalimat_p">
                  Tinjauan Struktur Kalimat (1 dari 4)
                  <br />
                  Apakah setiap kalimat memiliki subjek dan kata kerja? Apakah
                  masing-masing mengungkapkan pemikiran yang lengkap?
                  <br />
                  <br />
                  Jikasebuah kalimat tidak memiliki subjek atau kata kerja atau
                  pemikiran yang lengkap itu adalah fragmen kalimat.
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
            </div>

            <!-- Konsep Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Konsep Paragraf</b></h4>
                  </div>
                </div>
                <div class="response">
                <button class="all-button_dua" @click="modalTambah = true">Tambah</button>
                <button class="all-button_dua" v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()">Ubah</button>
                <button class="all-button_dua" v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()">Hapus</button>
                <a @click="ascending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a @click="descending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                </div>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua" v-for="(data,
                            index) in styleDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                              <h5>
                                  <b>{{ data }}</b>
                              </h5>
                                </b-form-radio>

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
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="strukturkalimat1Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 1 -->

      <!-- Screen 2 -->
      <div class="content-empat" v-if="strukturkalimatPage2 === true" style="margin-left:3%;">
        <div class="col-sm-12">
          <div class="row">
            <!-- Button Tips -->
            <div class="col-sm-2">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal2 = true">
                  Tips
                </b-button>
                <!-- Popup Modal -->
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
                                  style="width: 40px; height: 38.49px;"
                                  src="@/assets/checklist.png"
                                />
                              </div>

                              <div class="kalimat2">
                                <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                  <p>
                                    Awal yang variasi:
                                    <br />
                                    ADJECTIVE: Gembira, anak-anak bersorak dan
                                    memeluk penyelamat mereka.
                                    <br />
                                    <br />
                                    ADVERB: Dengan gembira anak-anak bersorak
                                    dan memeluk penyelamat mereka.
                                    <br />
                                    <br />
                                    FRASA KATA DEPAN: Dengan sangat gembira,
                                    anak-anak bersorak dan memeluk penyelamat
                                    mereka.
                                    <br />
                                    <br />
                                    PARTISIPIAL FRASE: Mengekpresikan
                                    kegembiraan mereka, anak-anak bersorak dan
                                    memeluk penyelamat mereka.
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
                  (2 dari 4)
                  <br />
                  Apakah Anda memulai setiap kalimat dengan subjek dan kata
                  kerja? Jika demikian cobalah untuk memvariasi cara kalimat
                  Anda dimulai.
                  <br />
                  <br />
                  Misalnya, Anda dapat memulai dengan:
                  <br />
                  kata sifat, kata keterangan, frase preposisional, frase
                  partisipatif.
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
            </div>

            <!-- Konsep Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Konsep Paragraf</b></h4>
                  </div>
                </div>
                <div class="response">
                <button class="all-button_dua" @click="modalTambah = true">Tambah</button>
                <button class="all-button_dua" v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()">Ubah</button>
                <button class="all-button_dua" v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()">Hapus</button>
                <a @click="ascending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a @click="descending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                </div>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua" v-for="(data,
                            index) in styleDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                              <h5>
                                  <b>{{ data }}</b>
                              </h5>
                                </b-form-radio>

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
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="strukturkalimat2Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 2 -->

      <!-- Screen 3 -->
      <div class="content-empat" v-if="strukturkalimatPage3 === true" style="margin-left:3%;">
        <div class="col-sm-12">
          <div class="row">
            <!-- Button Tips -->
            <div class="col-sm-2">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal3 = true">
                  Tips
                </b-button>
                <!-- Popup Modal -->
                <div v-if="showModal3 === true">
                  <transition name="model">
                    <div class="modal-mask">
                      <div class="modal-wrapper">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <!-- Modal Body -->
                            <div class="modal-body">
                              <div class="image-container">
                                <img
                                  style="width: 40px; height: 38.49px;"
                                  src="@/assets/checklist.png"
                                />
                              </div>

                              <div class="kalimat2">
                                <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                  <p>
                                    Contoh kesalahan koma:
                                    <br />
                                    Tony Hillerman menulis misteri yang berlatar
                                    Barat Daya, detektif polisinya adalah orang
                                    Indian Navajo.
                                    <br />
                                    <br />
                                    Koreksi: Tony Hillerman menulis misteri yang
                                    berlatar Barat Daya. Detektif polisinya
                                    adalah orang Indian Navajo.
                                    <br />
                                    <br />
                                    Cara paling sederhana untuk memperbaiki
                                    kesalahan koma adalah dengan mengganti koma
                                    yang salah dengan titik dan memulai kalimat
                                    kedua dengan huruf kapital. Anda juga dapat
                                    menggunakan titik koma jika ide-ide dalam
                                    dua kalimat terkait erat.
                                    <br />
                                  </p>
                                </div>
                              </div>

                              <div class="tombol">
                                <button
                                  class="ok"
                                  block
                                  @click="showModal3 = false"
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
                  (3 dari 4)
                  <br />
                  Jika Anda menggunakan koma di antara dua kalimat lengkap, Anda
                  telah membuat 'kesalahan koma.' Hasilnya adalah kalimat
                  run-on.
                  <br />
                  <br />
                  Kesalahan koma juga sering terjadi ketika kata-kata seperti
                  bagaimanapun, bagaimanapun, oleh karena itu, selanjutnya
                  digunakan untuk menggabungkan dua kalimat lengkap, dengan koma
                  di akhir kalimat pertama.
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
            </div>

            <!-- Konsep Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Konsep Paragraf</b></h4>
                  </div>
                </div>
                <div class="response">
                <button class="all-button_dua" @click="modalTambah = true">Tambah</button>
                <button class="all-button_dua" v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()">Ubah</button>
                <button class="all-button_dua" v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()">Hapus</button>
                <a @click="ascending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a @click="descending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                </div>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua" v-for="(data,
                            index) in styleDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                              <h5>
                                  <b>{{ data }}</b>
                              </h5>
                                </b-form-radio>

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
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="strukturkalimat3Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 3 -->

      <!-- Screen 4 -->
      <div class="content-empat" v-if="strukturkalimatPage4 === true" style="margin-left:3%;">
        <div class="col-sm-12">
          <div class="row">
            <!-- Button Tips -->
            <div class="col-sm-2">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal4 = true">
                  Tips
                </b-button>
                <!-- Popup Modal -->
                <div v-if="showModal4 === true">
                  <transition name="model">
                    <div class="modal-mask">
                      <div class="modal-wrapper">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <!-- Modal Body -->
                            <div class="modal-body">
                              <div class="image-container">
                                <img
                                  style="width: 40px; height: 38.49px;"
                                  src="@/assets/checklist.png"
                                />
                              </div>

                              <div class="kalimat2">
                                <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                  <p>
                                    Kesalahan dalam struktur paralel:
                                    <br />
                                    Mery mengerjakan pekerjaannya dengan
                                    HATI-HATI dan dengan kerapian.
                                    <br />
                                    <br />
                                    Kalimat ini membutuhkan dua ADVERB, bukan
                                    satu adverb dan satu prepositional phrase.
                                    <br />
                                    <br />
                                    Koreksi: Mary melakukan perkerjaannya dengan
                                    hati-hati dan rapi
                                    <br />
                                  </p>
                                </div>
                              </div>

                              <div class="tombol">
                                <button
                                  class="ok"
                                  block
                                  @click="showModal4 = false"
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
                  (4 dari 4)
                  <br />
                  Sudahkah Anda memastikan bahwa ide-ide serupa dalam sebuah
                  kalimat diungkapkan dalam bentuk tata bahasa yang sama?
                  <br />
                  <br />
                  Periksa apakah ide-ide Anda semua sebagian dari pidato yang
                  sama, semua frase atau semua klausa.
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
            </div>

            <!-- Konsep Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Konsep Paragraf</b></h4>
                  </div>
                </div>
                <div class="response">
                <button class="all-button_dua" @click="modalTambah = true">Tambah</button>
                <button class="all-button_dua" v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()">Ubah</button>
                <button class="all-button_dua" v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()">Hapus</button>
                <a @click="ascending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a @click="descending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                </div>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua" v-for="(data,
                            index) in styleDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                              <h5>
                                  <b>{{ data }}</b>
                              </h5>
                                </b-form-radio>

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
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="strukturkalimat4Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 4 -->

      <!-- Screen 5 -->
      <div class="content-empat" v-if="strukturkalimatPage5 === true" style="margin-left:3%;">
        <div class="col-sm-12">
          <div class="row">
            <!-- Button Tips -->
            <div class="col-sm-2">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal5 = true">
                  Tips
                </b-button>
                <!-- Popup Modal -->
                <div v-if="showModal5 === true">
                  <transition name="model">
                    <div class="modal-mask">
                      <div class="modal-wrapper">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <!-- Modal Body -->
                            <div class="modal-body">
                              <div class="image-container">
                                <img
                                  style="width: 40px; height: 38.49px;"
                                  src="@/assets/checklist.png"
                                />
                              </div>

                              <div class="kalimat2">
                                <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                  <p>
                                    Lebih baik untuk memilih <strong>Pemeriksaan Akhir</strong> dibagian terakhir.
                                  </p>
                                </div>
                              </div>

                              <div class="tombol">
                                <button
                                  class="ok"
                                  block
                                  @click="showModal5 = false"
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
                  Selamat! <br />
                  Apa yang ingin Anda lakukan selanjutnya?
                  <ul>
                      <li>Untuk melanjutkan ke bagian penerbitan, klik <strong>Cetak.</strong></li>
                  </ul>
                </p>
                  <br />
                  <p class="kalimat_p">
                  Untuk lebih banyak cara untuk meningkatkan tulisan Anda:
                  <ul>
                      <li>Klik <strong>Pemeriksaan Akhir</strong> untuk membantu memperbaiki kesalahan.</li>
                      <li>Klik <strong>Gaya Menulis, Struktur Kalimat</strong>, dan/atau <strong>Tata Bahasa</strong> agar membuat tulisan Anda lebih baik dan lebih menarik.</li>
                  </ul>
                  <br />
                  Anda dapat melakukan perbaikan sebanyak yang Anda inginkan.
                </p>
              </div>
            </div>

             <!-- Button Gaya menulis dll -->
            <div class="all-button">
                <button class="all-button_satu" 
                @click="$router.push('/gaya-menulis')">
                <img style="margin-right:3%;" src="@/assets/check.png" >
                Gaya Menulis
                </button>
                <button class="all-button_satu">
                    <img style="margin-right:3%;" src="@/assets/check.png">
                    Struktur Kalimat
                    </button>
                <button class="all-button_exp" @click="$router.push('/tata-bahasa')">
                    Tata Bahasa
                    </button>
                <button class="all-button_exp" 
                @click="$router.push('/proofreading')">
                    Pemeriksaan Akhir
                    </button>
            </div>

            <!-- Konsep Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Konsep Paragraf</b></h4>
                  </div>
                </div>
              </div>
              <div class="border_list">
                <div class="jarak" v-for="(data, index) in styleDataSesion.konsepParagraf" :key="index" >
                  <p>
                    {{data}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="strukturkalimat5Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 5 -->
      <br>
    </div>
  </div>
</template>

<script src="./js/strukturKalimat.js" />

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
.jarak {
  margin-left: 10px;
  padding: 10px 30px 0px 0px;
  @media screen and (max-width: 780px) {
    margin-left: 0px;
    padding: 0px;
    width: 100%;
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
.dua {
  padding: 8px 0px 0px 0px;
  text-align: justify;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  h5 {
    font-family: Poppins;
    padding: 0px 0px 0px 20px;
  }
  @media screen and (max-width: 760px) {
    margin-left: -40px;
    padding: 0px;
    h5 {
      font-family: Arial, Helvetica, sans-serif;
      padding: 10px 0px 0px 20px;
      text-align: left;
    }
  }
}


// Jenis Paragraf
.jenis {
  display: flex;
  width: 100%;
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

// Tips dan Kalimat
.tips {
  //   background: skyblue;
  text-align: right;
  margin: 5px;
  @media Screen and (max-width: 660px) {
    padding: 5px 0px 0px 0px;
    text-align: center;
  }
  &_judul {
    background-color: #00a279;
    border: none;
    line-height: 32px;
    width: 98px;
    border-radius: 10px;
    margin: 5px;
    @media Screen and (max-width: 780px) {
      line-height: 22px;
    }
  }
}

.kalimat {
  &_p {
    font-size: 20px;
    margin: 5px;
    padding-top: 13px;
  }
}
// end Tips dan Kalimat

// Button Gaya Menulis dll
// Button Gaya Menulis dll
.all-button {
  margin-left: 17%;
  line-height: 40px;
  @media screen and (max-width: 500px) {
    margin-left: 0px;
  }
  &_satu {
    background-color: #00a279;
    border: none;
    border-radius: 20px;
    width: 14%;
    margin: 0.3%;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    font-family: Poppins;
    @media screen and (max-width: 500px) {
      width: 97%;
    }
  }
  &_exp {
    background-color: #e0e0e0;
    border: none;
    border-radius: 20px;
    width: 14%;
    margin: 0.3%;
    color: #454B56;
    font-weight: bold;
    font-size: 14px;
    font-family: Poppins;
    @media screen and (max-width: 500px) {
      width: 145px;
    }
  }
}

.all-button_satu:hover {
  background-color: #f1f6cc;
}

// Button Konsep Menulis
.all-button_dua {
  background-color: #e0e0e0;
  border: none;
  border-radius: 20px;
  margin: 0.3%;
  line-height: 30px;
  width: 7%;
  @media screen and (max-width: 780px) {
    width: 70px;
  }
  @media screen and (max-width: 600px) {
    border: 0;
    border-radius: 20px;
    margin: 0%;
    line-height: 20px;
    width: 90%;
  }
}

.all-button_dua:hover {
  background-color: #f1f6cc;
}

// End Button Gaya Menulis dll

.response {
  width: 100%;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    padding: 5px 0px 0px 10px;
    width: 100%;
    a {
      padding: 0px 5px 0px 5px;
    }
  }
}
// Tombol OK
.tombol {
  align-items: center;
  text-align: center;
  padding: 5px;
  @media screen and (max-width: 780px) {
    margin-left: 0%;
    text-align: center;
    align-items: center;
  }
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

// Konsep Menulis
.content-konsep {
  margin-left: 17%;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-left: 0%;
  }
  @media screen and (max-width: 600px) {
    padding: 0px 20px;
    margin-left: 0%;
  }
}

.up-down {
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
  @media screen and (max-width: 590px) {
    height: auto;
  }
  h4 {
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
  }
  &_list {
    font-family: Poppins;
    background-color: #e0e0e0;
    width: 65%;
    padding: 13px;
    border-radius: 0px 0px 14px 14px;
    @media Screen and (max-width: 780px) {
      width: 95%;
    }
  }
}
// End Konsep Menulis

/* Style Modal */
.modal-dialog {
  top: 0px;
  left: auto;
  @media (max-width: 768px) {
    top: 0px;
  }
}

.modal-content {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
}

.modal-body {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
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
.tombol2 {
  // background: red;
  padding: 20px 0px 0px 70px;
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

.ok3 {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
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
</style>


