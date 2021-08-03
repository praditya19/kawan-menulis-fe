<template>
<!-- terbaru -->
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
                  <form action="">
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
                  </form>
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
                                v-model="dataForm.ubahData"
                                class="form-textarea"
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
                  </b-form>
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
          <img class="steper_image" src="@/assets/icon_stepper/12.png" alt="" />
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
      <div class="content-empat" v-if="proofreadingPage1 === true">
          <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal = true">
                  Tips
                </b-button>
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
                                    Baca kembali tulisan Anda dengan cermat.
                                  </p>
                                </div>
                              </div>

                              <div class="tombol_modal">
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
            <div class="col-sm-9.5">
              <div class="kalimat">
                <p class="kalimat_p">
                  Proofreading (1 dari 5)
                  <br />
                  Baca ulang paragraf Anda sekarang.
                  <br />
                  <br />
                  Ketika Anda siap untuk melanjutkan, Klik OK untuk melihat penggunaan huruf kapital Anda.
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
            </div>
              </div>

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
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
                  <img class="icon-up" src="@/assets/up.png" />
                </a>
                <a @click="descending()">
                  <img class="icon-down" src="@/assets/down.png" />
                </a>
              </div>
                </div>
              </div>
              <div class="border_list">
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in tataBahasaDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>
                              <p>
                                 {{data}}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
              </div>
            </div>
        
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="proofreading1Next">
            <b>OK</b>
          </button>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 1 -->

      <!-- Screen 2 -->
      <div class="content-empat" v-if="proofreadingPage2 === true">
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
                                    Kata yang diawali dengan hurufkapital adalah nama-nama ORANG KHUSUS, TEMPAT, atau HAL seperti: <br><br>
                                    Michael Jackson, Bibi Mary, Idaho, Tulsa, Grand Canyon, Universitas Texas
                                  </p>
                                </div>
                              </div>

                              <div class="tombol_modal">
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
                  (2 dari 5)
                  <br />
                  Apakah Anda ingat untuk menggunakan huruf besar pada kata pertama dari setiap kalimat baru dan semua kata benda yang tepat?
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
            </div>
          </div>

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
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
                <img class="icon-up" src="@/assets/up.png" />
              </a>
              <a @click="descending()">
                <img class="icon-down" src="@/assets/down.png" />
              </a>
            </div>
                </div>
              </div>
              <div class="border_list">
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in tataBahasaDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>
                             <p>
                                {{data}}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
              </div>
            </div>
          
        <div class="button">
          <button class="button1 justify-content-center" @click="proofreading2Next">
            <b>OK</b>
          </button>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 2 -->

      <!-- Screen 3 -->
      <div class="content-empat" v-if="proofreadingPage3 === true"> 
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
                                    POSSESSIVE PRONOUNS: mine, your, yours, his, her, hers, its, our, ours, their, theirs, whose <br><br>
                                    CONTRACTIONS: doesn't (does not), I'm (I am), they're (they are), who's (who is), it's (it is), you're (you are)
                                  </p>
                                </div>
                              </div>

                              <div class="tombol_modal">
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
            <div class="col-sm-9.5">
              <div class="kalimat">
                <p class="kalimat_p">
                  (3 dari 5)
                  <br />
                  Apakah Anda ingat bahwa tidak ada apostrof dalam kata ganti posesif, tetapi ada satu dalam kontraksi?
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
            </div>
          </div>  

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
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
                <img class="icon-up" src="@/assets/up.png" />
              </a>
              <a @click="descending()">
                <img class="icon-down" src="@/assets/down.png" />
              </a>
            </div>
                </div>
              </div>
              <div class="border_list">
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in tataBahasaDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>
                             <p>
                                {{data}}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
              </div>
            </div>
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="proofreading3Next">
            <b>OK</b>
          </button>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 3 -->

      <!-- Screen 4 -->
      <div class="content-empat" v-if="proofreadingPage4 === true">
        <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5 ">
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
                                    Periksa tulisan Anda untuk kesalahan ejaan yang ceroboh.
                                    <br />
                                  </p>
                                </div>
                              </div>

                              <div class="tombol_modal">
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
                  (4 dari 5)
                  <br />
                  Sekarang baca paragraf Anda untuk ejaan dan tanda baca. <br>
                  Anda akan dapat membuat perubahan di layar berikut.
                  <br />
                  <br />
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
              </div>
            </div>
          </div>

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
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
                <img class="icon-up" src="@/assets/up.png" />
              </a>
              <a @click="descending()">
                <img class="icon-down" src="@/assets/down.png" />
              </a>
            </div>
                </div>
              </div>
               <div class="border_list">
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in tataBahasaDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>
                             <p>
                                {{data}}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
              </div>
            </div>
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="proofreading4Next">
            <b>OK</b>
          </button>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 4 -->

      <!-- Screen 5 -->
      <div class="content-empat" v-if="proofreadingPage5 === true">
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
                                    Setelah melakukan pemeriksaan ejaan dan membaca ulang tulisan Anda, gunakan kamus untuk membantu Anda dengan kata-katayang Anda tidak yakin.
                                  </p>
                                </div>
                              </div>

                              <div class="tombol_modal">
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
                  (5 dari 5)
                  <br />
                  Pemeriksaan akhir akan membantu Anda memeriksa ejaan. 
                  <br>
                  <br>
                  Setelah pemeriksaan ejaan, tinjau tulisan Anda untuk memastikan mengalir dengan lancar dan masuk akal.
                  <br />
                  <br />
                  Klik OK untuk melanjutkan.
                  <br>
                  Untuk melihat contoh dalam konteks, liat Tip.
                  <br />
                  untuk membuat perubahan gunakan Ubah.
                </p>
                  <br />
              </div>
            </div>
          </div>
            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
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
                <img class="icon-up" src="@/assets/up.png" />
              </a>
              <a @click="descending()">
                <img class="icon-down" src="@/assets/down.png" />
              </a>
            </div>
                </div>
              </div>
               <div class="border_list">
                  <b-form-group>
                    <div>
                          <div class="dua" v-for="(data,
                            index) in tataBahasaDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                </b-form-radio>
                             <p>
                                 {{data}}
                              </p>
                            </div>
                    </div>
                  </b-form-group>
              </div>
            </div>
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="proofreading5Next">
            <b>OK</b>
          </button>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 5 -->

    <!-- Screen 6 -->
      <div class="content-empat" v-if="proofreadingPage6 === true">
        <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal6 = true">
                  Tips
                </b-button>
                <!-- Popup Modal -->
                <div v-if="showModal6 === true">
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
                                    Silahkan klik tahapan revisi joka masih ada hal yang ingin Anda perbaiki dari paragraf Anda
                                  </p>
                                </div>
                              </div>

                              <div class="tombol_modal">
                                <button
                                  class="ok"
                                  block
                                  @click="showModal6 = false"
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
                  <br />
              </div>
            </div>
            </div>

            <!-- Button Gaya menulis dll -->
            <div class="all-button">
                <button class="all-button_satu">
                <img style="margin-right:3%;" src="@/assets/check.png"
                @click="$router.push('/gaya-menulis')">
                Gaya Menulis
                </button>
                <button class="all-button_satu"
                @click="$router.push('/struktur-kalimat')">
                    <img style="margin-right:3%;" src="@/assets/check.png">
                    Struktur Kalimat
                    </button>
                <button class="all-button_satu" 
                @click="$router.push('/tata-bahasa')">
                    <img style="margin-right:3%;" src="@/assets/check.png">
                    Tata Bahasa
                    </button>
                <button class="all-button_satu">
                    <img style="margin-right:3%;" src="@/assets/check.png">
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
                <div  v-for="(data,
                            index) in tataBahasaDataSesion.konsepParagraf"
                            :key="index">
                  <p>
                    {{data}}
                  </p>
                </div>
              </div>
            </div>
          
        <!-- Button OK -->
        <div class="button">
          <button class="button1 justify-content-center" @click="proofreading6Next">
            <b>OK</b>
          </button>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 6 -->
    </div>

</template>

<script src="./js/proofreading.js" />

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
.dua {
  font-size: 20px;
  display: flex;
  @media screen and (max-width: 760px) {
    padding: 0px;
  }
  p{
  padding-left: 10px;
}
}
// Judul
.content-satu {
  margin-top: 120px;
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
    color: #fff;
    @media Screen and (max-width: 780px) {
      line-height: 22px;
    }
  }
}

.kalimat {
  &_p {
    // font-size: 20px;
    // margin: 5px;
    // padding-top: 13px;
    // border: 1px solid red;
    padding: 10px 0px 0px 15px;
    font-family: Poppins;
    font-weight: 400;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    @media Screen and (max-width: 780px) {
      padding: 10px 0px 0px 10px;
    }
  }
}
// end Tips dan Kalimat

// Button Gaya Menulis dll
.all-button {
  padding: 20px 200px 0px 250px;
  @media screen and (max-width: 768px) {
    padding: 20px 20px 0px 20px;
  }
  &_satu {
    background-color: #00a279;
    border: none;
    border-radius: 20px;
    width: 170px;
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

// Tombol OK
.tombol_modal {
  text-align: center;
  padding: 5px;
}

.tombol_ok {
  align-items: center;
  text-align: center;
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

/* Style Modal */
.modal-dialog {
  top: 0px;
  left: auto;
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
  padding-top: 75px;
  @media (max-width: 768px) {
    padding-top: 95px;
  }
}

/* End Background Belakang Modal */
.tombol2 {
  // background: red;
  text-align: center;
  margin: 5px;
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

// content konsep
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
  @media screen and (max-width: 600px) {
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
    font-size: 20px;
    @media Screen and (max-width: 780px) {
      width: 100%;
      padding: 10px 10px 0px 10px;
    }
  }
}
// End Konsep Menulis
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
      margin-left: -7px;
      padding: 0px 6px 0px 6px;
    }
  }
}
// .jarak {
//   margin-left: 10px;
//   padding: 10px 30px 0px 0px;
//   @media screen and (max-width: 780px) {
//     margin-left: 0px;
//     padding: 0px;
//     width: 100%;
//   }
// }
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
    .icon-down {
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

