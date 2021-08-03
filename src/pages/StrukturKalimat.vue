<template>
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
    <!-- pop up tambah-->
    <div v-if="modalTambah === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                    <div class="kalimat5">
                        <p
                        >
                          <b>
                            Tambahan Catatan Paragraf
                          </b>
                        </p>
                        <div class="textarea">
                              <b-form-textarea
                              class="form-textarea"
                                v-model="dataForm.tambahData"
                                rows="4"
                                no-resize
                                type="text"
                              ></b-form-textarea>
                        </div>
                    </div>
                    <div class="tombol2">
                          <button
                            class="ok2"
                            block
                            @click="
                              (modalTambah = false), (dataForm.tambahData = '')
                            "
                          >
                            Batal
                          </button>
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
                    <div class="kalimat5">
                        <p
                        >
                          <b>
                            Ubah Catatan Paragraf
                          </b>
                        </p>
                        <div class="textarea">
                              <b-form-textarea
                              class="form-textarea"
                                v-model="dataForm.ubahData"
                                rows="4"
                                no-resize
                                type="text"
                              ></b-form-textarea>
                    </div>
                    </div>
                    <div class="tombol2">
                          <button
                            class="ok2"
                            block
                            @click="
                              (modalUbah = false), (dataForm.ubahData = '')
                            "
                          >
                            Batal
                          </button>
                          <button
                            class="ok3"
                            block
                            @click="setKonsepParagraf()"
                          >
                            OK
                          </button>
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


      <!-- Jenis Paragraf -->
      <div class="content-tiga">
        <div class="jenis">
          <p class="jenis_paragraf">
            <strong>Jenis Paragraf: </strong>
            {{ jenisTopics.jenisParagraf }}
          </p>
          <p class="jenis_topik">
            <strong>Topik: </strong>
            {{ jenisTopics.topik }}
          </p>
        </div>
      </div>
      <!-- End Jenis Paragraf -->

      <!-- Screen 1 -->
      <div class="content-empat" v-if="strukturkalimatPage1 === true">
          <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal = true">
                  Tips
                </b-button>                
              </div>
            </div>
            <div class="col-md-9.5">
              <div class="kalimat">
                <p class="kalimat_p">
                  Tinjauan Struktur Kalimat (1 dari 4)
                  <br />
                  Apakah setiap kalimat memiliki subjek dan kata kerja? Apakah
                  masing-masing mengungkapkan pemikiran yang lengkap?
                  <br />
                  <br />
                  Jika sebuah kalimat tidak memiliki subjek atau kata kerja atau
                  pemikiran yang lengkap itu adalah fragmen kalimat.
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
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
                  <div class="icon-up-down">
                <a @click="ascending()">
                  <img
                  class="icon-up"
                    src="@/assets/up.png"
                  />
                </a>
                <a @click="descending()">
                  <img
                  class="icon-down"

                    src="@/assets/down.png"
                  />
                </a>
                </div>
                </div>
              </div>
              <div class="border_list">
                <div>
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in styleDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>
                              <p>
                                  {{ data }}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
            </div>
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="strukturkalimat1Next">
            <b>OK</b>
          </button>
        </div>
      </div>
      <!-- End Screen 1 -->

      <!-- Screen 2 -->
      <div class="content-empat" v-if="strukturkalimatPage2 === true" >
          <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
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
            <div class="col-md-9.5">
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
                  <div class="icon-up-down">
                <a @click="ascending()">
                  <img
                  class="icon-up"
                    src="@/assets/up.png"
                   
                  />
                </a>
                <a @click="descending()">
                  <img
                    class="icon-down"
                    src="@/assets/down.png"
                   
                  />
                </a>
                </div>
                </div>
              </div>
              <div class="border_list">
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in styleDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>
                              <p>
                                  {{ data }}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
              </div>
            </div>
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="strukturkalimat2Next">
            <b>OK</b>
          </button>
        </div>
      </div>
      <!-- End Screen 2 -->

      <!-- Screen 3 -->
      <div class="content-empat" v-if="strukturkalimatPage3 === true" >
          <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
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
            <div class="col-md-9.5">
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
                  <div    
                    class="icon-up-down"
                  >
                <a @click="ascending()">
                  <img
                    src="@/assets/up.png"
                    class="icon-up"  
                  />
                </a>
                <a @click="descending()">
                  <img
                    class="icon-down"
                    src="@/assets/down.png"
                   
                  />
                </a>
                  </div>
                </div>
              </div>
              <div class="border_list">
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in styleDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>
                              <p>
                                  {{ data }}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
              </div>
            </div>
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="strukturkalimat3Next">
            <b>OK</b>
          </button>
        </div>
      </div>
      <!-- End Screen 3 -->

      <!-- Screen 4 -->
      <div class="content-empat" v-if="strukturkalimatPage4 === true" >
          <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
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
            <div class="col-md-9.5">
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
                  <div 
                    class="icon-up-down"
                  >
                <a @click="ascending()">
                  <img
                    src="@/assets/up.png"
                    class="icon-up"                   
                  />
                </a>
                <a @click="descending()">
                  <img
                    class="icon-down"
                    src="@/assets/down.png"
                   
                  />
                </a>
                  </div>
                </div>
              </div>
              <div class="border_list">
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in styleDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>

                              <p>
                                 {{ data }}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
              </div>
            </div>
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="strukturkalimat4Next">
            <b>OK</b>
          </button>
        </div>
      </div>
      <!-- End Screen 4 -->

      <!-- Screen 5 -->
      <div class="content-empat" v-if="strukturkalimatPage5 === true" >
          <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
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
            <div class="col-md-9.5">
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
                <button class="all-button_finish" @click="$router.push('/tata-bahasa')">
                    Tata Bahasa
                    </button>
                <button class="all-button_finish" 
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
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="strukturkalimat5Next">
            <b>OK</b>
          </button>
        </div>
      </div>
      <!-- End Screen 5 -->
    </div>
</template>

<script src="./js/strukturKalimat.js" />

<style lang="scss" scoped>
// Tombol OK
.button {
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    .button1 {
      margin-left: 0px;
      position: center;
    }
  }
  .button1 {
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
    padding-top: 8px;
    b {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .button1:hover {
    background-color: #0a4da3;
  }
}
// End Tombol OK

// all
.all {
  overflow-x: hidden;
  max-width: 1350px;
  margin: auto;
}

// Judul
.content-satu {
  margin-top: 120px;
  @media Screen and (max-width: 780px) {
  }
}
.jarak {
  font-size: 20px;
  @media screen and (max-width: 780px) {
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
  padding: 10px 150px 10px 150px;
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
    font-size: 20px;
    display: flex;
    @media screen and (max-width: 760px) {
      padding: 0px;
    }
    p {
      padding-left: 10px;
    }
  }

// Jenis Paragraf
.jenis {
  display: flex;
  width: 100%;
  height: auto;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  padding: 11px 10px 0px 130px;
  &_paragraf {
    padding-right: 90px;
    // background: #00a279;
    @media (max-width: 768px) {
      padding-right: 20px;
    }
  }
  &_topik {
    // background: #0a4da3;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 11px 10px 0px 10px;
  }
}
// End Jenis Paragraf

// Tips dan Kalimat
.body {
  display: flex;
  padding: 10px 200px 0px 120px;
  @media screen and(max-width: 768px) {
    padding: 10px 10px 0px 0px;
  }
}

.tips {
  //   background: skyblue;
  text-align: right;
  margin: 5px;
  width: 100%;
  @media Screen and (max-width: 660px) {
    // padding: 5px 0px 0px 0px;
    // text-align: center;
  }
  &_judul {
    background-color: #00a279;
    border: none;
    // line-height: 32px;
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
    padding: 10px 0px 0px 10px;
    font-family: Poppins;
    font-weight: 400;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    @media Screen and (max-width: 780px) {
      padding: 10px 0px 0px 10px;
      font-size: 16px;
    }
  }
}
// end Tips dan Kalimat

// Button Gaya Menulis dll
.all-button {
  padding: 30px 200px 0px 250px;
  @media screen and (max-width: 768px) {
    padding: 30px 20px 0px 20px;
  }
  &_satu {
    background-color: #00a279;
    border: none;
    border-radius: 20px;
    width: 20%;
    height: 35px;
    margin: 0.3%;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    font-family: Poppins;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  &_finish {
    background-color: #c1c8d3;
    border: none;
    border-radius: 20px;
    width: 20%;
    height: 35px;
    margin: 0.3%;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    font-family: Poppins;
    color: #212529;
    @media screen and (max-width: 768px) {
      width: 100%;
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
  width: 150px;
  font-weight: bold;
  @media screen and (max-width: 780px) {
    // width: 70px;
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
  display: flex;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: inline;
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
  padding: 30px 200px 10px 250px;
  @media screen and (max-width: 768px) {
    padding: 30px 20px 10px 20px;
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
      width: 100%;
      padding: 15px 10px 8px 30px;
      border-radius: 0px 0px 14px 14px;
      @media Screen and (max-width: 780px) {
        width: 100%;
        padding: 10px 10px 0px 10px;
      }
    }
}
// End Konsep Menulis

/* Style Modal */

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
  padding-top: 75px;
  @media (max-width: 768px) {
    padding-top: 95px;
  }
}

/* End Background Belakang Modal */
.tombol2 {
  // background: red;
    text-align: center;
    padding: 10px 0px 0px 0px;
}

.ok2 {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
  margin-right: 10px;
}

.ok3 {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
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

// icon up dan down
.icon-up-down {
  padding: 3px 0px 0px 0px;
  width: 100%;
  @media screen and(max-width:600px) {
    padding: 3px 20px 3px 0px;    
    text-align: center;
  }
 .icon-up {
   width: auto;
   margin-left: 5px;
 }  
 .icon-down{
   width: auto;
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

  // kalimat modal
  .kalimat5 {
    font-family: Poppins;
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    /* background: red; */
  }
</style>
