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

      <!-- Stepper -->
      <div class="content-dua">
        <div class="steper">
          <img class="steper_image" src="@/assets/icon_stepper/12.png" alt="" />
        </div>
      </div>
      <!-- End Stepper -->

      <br />

      <!-- Jenis Paragraf -->
      <div class="content-tiga">
        <div class="jenis">
          <p class="jenis_paragraf">
            <strong>Jenis Paragraf:</strong>
            Deskripsi
          </p>
          <p class="jenis_topik">
            <strong>Topik:</strong>
            Apakah kamu punya kemahiran dalam membuat sesuatu? Coba sebutkan
            satu.
          </p>
        </div>
      </div>
      <!-- End Jenis Paragraf -->

      <!-- Screen 1 -->
      <div class="content-empat" v-if="proofreadingPage1 === true" 
      style="margin-left:2.5%;">
        <div class="col-sm-12">
          <div class="row">
            <!-- Button Tips -->
            <div class="col-sm-2">
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
            <div class="col-sm-8">
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

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua">Tambah</button>
                <button class="all-button_dua">Ubah</button>
                <button class="all-button_dua">Hapus</button>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua">
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya adalah pecandu Kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya senang membuat kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi
                                  
                                </b-form-radio>
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
        </div>
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="proofreading1Next">
          <div class="tombol_ok">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 1 -->

      <!-- Screen 2 -->
      <div class="content-empat" v-if="proofreadingPage2 === true" style="margin-left:2.5%;">
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
            <div class="col-sm-8">
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

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua">Tambah</button>
                <button class="all-button_dua">Ubah</button>
                <button class="all-button_dua">Hapus</button>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua">
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya adalah pecandu Kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya senang membuat kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi
                                  
                                </b-form-radio>
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
        </div>
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="proofreading2Next">
          <div class="tombol_ok">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 2 -->

      <!-- Screen 3 -->
      <div class="content-empat" v-if="proofreadingPage3 === true" style="margin-left:2.5%;">
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
            <div class="col-sm-8">
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

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua">Tambah</button>
                <button class="all-button_dua">Ubah</button>
                <button class="all-button_dua">Hapus</button>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua">
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya adalah pecandu Kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya senang membuat kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi
                                  
                                </b-form-radio>
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
        </div>
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="proofreading3Next">
          <div class="tombol_ok">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 3 -->

      <!-- Screen 4 -->
      <div class="content-empat" v-if="proofreadingPage4 === true" style="margin-left:2.5%;">
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
            <div class="col-sm-8">
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

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua">Tambah</button>
                <button class="all-button_dua">Ubah</button>
                <button class="all-button_dua">Hapus</button>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua">
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya adalah pecandu Kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya senang membuat kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi
                                  
                                </b-form-radio>
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
        </div>
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="proofreading4Next">
          <div class="tombol_ok">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 4 -->

      <!-- Screen 5 -->
      <div class="content-empat" v-if="proofreadingPage5 === true" style="margin-left:2.5%;">
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
            <div class="col-sm-8">
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

            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua">Tambah</button>
                <button class="all-button_dua">Ubah</button>
                <button class="all-button_dua">Hapus</button>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
                <a href="">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                    style="margin-bottom: 5px; margin-left: 20px;"
                  />
                </a>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua">
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya adalah pecandu Kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  &nbsp; &nbsp;Saya senang membuat kopi.
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.
                                  
                                </b-form-radio>
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked>
                                  
                                    &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi
                                  
                                </b-form-radio>
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
        </div>
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="proofreading5Next">
          <div class="tombol_ok">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 5 -->
      <br>
    </div>

    <!-- Screen 6 -->
      <div class="content-empat" v-if="proofreadingPage6 === true" style="margin-left:2.5%;">
        <div class="col-sm-12">
          <div class="row">
            <!-- Button Tips -->
            <div class="col-sm-2">
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
                  <br />
              </div>
            </div>

            <!-- Button Gaya menulis dll -->
            <div class="all-button">
                <button class="all-button_satu">
                <img style="margin-right:3%;" src="@/assets/check.png">
                Gaya Menulis
                </button>
                <button class="all-button_satu">
                    <img style="margin-right:3%;" src="@/assets/check.png">
                    Struktur Kalimat
                    </button>
                <button class="all-button_satu">
                    <img style="margin-right:3%;" src="@/assets/check.png">
                    Tata Bahasa
                    </button>
                <button class="all-button_satu" style="width: 16%;">
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
                <div style="margin-left: 30px;">
                  <p>
                    Saya adalah pecandu Kopi. Saya senang membuat kopi. Kopi
                    membuat saya lebih bersemangat dalam bekerja. Saya menyukai
                    kopi pahit namun tidak terlalu kental. Itulah sebabnya saya
                    menyukai kopi. Saya tidak akan pernah mampu bekerja tanpa
                    kopi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <!-- Button OK -->
        <div class="content-lima" @click="proofreading6Next">
          <div class="tombol_ok">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 6 -->
      <br>
    </div>
</template>

<script src="./js/proofreading.js" />

<style lang="scss" scoped>
// all
.all {
  overflow-x: hidden;
}

// Judul
.content-satu {
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
  // max-width: 1440px;
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
.tips {
  //   background: skyblue;
  text-align: right;
  margin: 5px;
  &_judul {
    background-color: #00a279;
    border: none;
    line-height: 32px;
    width: 98px;
    border-radius: 10px;
    margin: 5px;
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
.all-button {
  margin-left: 17%;
  line-height: 40px;

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
  }
}

// Button Konsep Menulis
.all-button_dua {
  background-color: #e0e0e0;
  border: none;
  border-radius: 20px;
  margin: 0.3%;
  line-height: 30px;
  width: 7%;
  font-weight: bold;
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
  margin-left: 44%;
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

// Konsep Menulis
.content-konsep {
  margin-left: 17%;
  margin-top: 30px;
  // background: red;
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
    font-family: Poppins;
    font-size: 20px;
  }
  &konsep {
  }
}
// End Konsep Menulis

/* Style Modal */
.modal-dialog {
  top: 0px;
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
