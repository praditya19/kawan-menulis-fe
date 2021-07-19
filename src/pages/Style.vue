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
        <img class="steper_image" src="@/assets/icon_stepper/9.png" alt="" />
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
    <!-- modal area -->
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
                        Alih-alih KATAKAN:<br />
                        Pak Tua Hayes MENUNJUKAN bahwa dia mungkin akan menikah
                        lagi
                      </p>
                      <p>
                        Alih-alih LIHAT:<br />
                        Tom MENGINTIP di kaca spion dan tahu dia sedang diikuti
                      </p>
                    </div>
                  </div>

                  <div class="tombhol">
                    <button class="ok" block @click="showModal = false">
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
    <!-- end modal area -->
    <!-- Style -->

    <!-- Screen 1 -->
    <div class="content-empat" v-if="stylePage1 === true">
      <div class="col-sm-12">
        <div class="row">
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
                Gaya Menulis (1 dari 5)<br />
                Lihatlah pilihan kata-kata Anda. Bisakah Anda menggunakan kata
                kerja yang lebih hidup?
              </p>
              <br />
              <p class="kalimat_p">
                Sebagai contoh:<br />
                Alih-alih mengatakan: mengumumkan, menyebutkan, mengisyaratkan,
                menjelaskan.<br />
                Alih-alih melihat: menatap, melirik, mengintip, sekilas.
              </p>
              <br />
              <p class="kalimat_p">
                Untuk melihat contoh dalam konteks, lihat Tip.<br />
                Untuk membuat perubahan, gunakan Ubah.
              </p>
              <br />
            </div>
            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua" @click="modalTambah = true">
                  Tambah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()"
                >
                  Ubah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()"
                >
                  Hapus
                </button>
                <button class="all-button_dua_icon" @click="ascending()">
                  <b-icon icon="chevron-up" aria-hidden="true"></b-icon>
                </button>
                <button class="all-button_dua_icon" @click="descending()">
                  <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                </button>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div
                            class="dua"
                            v-for="(data,
                            index) in revisiDataSesion.konsepParagrafArray"
                            :key="index"
                          >
                            <h5>
                              <b-form-radio
                                v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index"
                              >
                                &nbsp; &nbsp; {{ data }}
                              </b-form-radio>
                            </h5>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
            </div>
            <!-- end catatan -->
          </div>

          <!-- Button OK -->
          <div class="content-lima" @click="style1Next">
            <div class="tombhol">
              <br />
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Screen 2 -->
    <div class="content-empat" v-if="stylePage2 === true">
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
                                  Alih-alih JALAN:<br />
                                  GANG hampir tidak cukup lebar untuk satu
                                  mobil.
                                </p>
                                <p>
                                  Alih-alih GAMBAR:<br />
                                  FOTO-FOTO Keluarga digantung di dinding dekat
                                  perapian
                                </p>
                              </div>
                            </div>

                            <div class="tombhol">
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
                (2 dari 5)<br />
                Bisakah kata benda Anda membuat gambar yang lebih spesifik?
              </p>
              <br />
              <p class="kalimat_p">
                Sebagai contoh:<br />
                Alih-alih jalan: jalur, jalan raya, jalan raya, bulevar.<br />
                Alih-alih gambar: snapshot, potret, foto, ilustrasi.
              </p>
              <br />
              <p class="kalimat_p">
                Untuk melihat contoh dalam konteks, lihat Tip.<br />
                Untuk membuat perubahan, gunakan Ubah.
              </p>
              <br />
            </div>
            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua" @click="modalTambah = true">
                  Tambah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()"
                >
                  Ubah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()"
                >
                  Hapus
                </button>
                <button class="all-button_dua_icon" @click="ascending()">
                  <b-icon icon="chevron-up" aria-hidden="true"></b-icon>
                </button>
                <button class="all-button_dua_icon" @click="descending()">
                  <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                </button>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div
                            class="dua"
                            v-for="(data,
                            index) in revisiDataSesion.konsepParagrafArray"
                            :key="index"
                          >
                            <h5>
                              <b-form-radio
                                v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index"
                              >
                                &nbsp; &nbsp; {{ data }}
                              </b-form-radio>
                            </h5>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
            </div>
            <!-- end catatan -->
          </div>
          <!-- Button OK -->
          <div class="content-lima" @click="style2Next">
            <div class="tombhol">
              <br />
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- screen 3 -->
    <div class="content-empat" v-if="stylePage3 === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModal3 = true">
                Tips
              </b-button>
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
                                style="width: 40px; height: 38.49px"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat2">
                              <div style="padding: 0% 0% 0% 12%; width: 85%">
                                <p>
                                  Kalimat pasif<br />
                                  Pohon itu TERsambar Petir.
                                </p>
                                <p>
                                  Kalimat aktif<br />
                                  Petir menyambar pohon
                                </p>
                              </div>
                            </div>

                            <div class="tombhol">
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
                (3 dari 5)<br />
                Apakah Anda menggunakan suara pasif daripada suara aktif yang
                lebih kuat dan lebih langsung?
              </p>
              <br />
              <p class="kalimat_p">
                Dalam kalimat pasif, subjek MENERIMA tindakan. Dalam suara
                aktif, subjek MELAKUKAN tindakan.
              </p>
              <br />
              <p class="kalimat_p">
                Untuk melihat contoh dalam konteks, lihat Tip.<br />
                Untuk membuat perubahan, gunakan Ubah.
              </p>
              <br />
            </div>
            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua" @click="modalTambah = true">
                  Tambah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()"
                >
                  Ubah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()"
                >
                  Hapus
                </button>
                <button class="all-button_dua_icon" @click="ascending()">
                  <b-icon icon="chevron-up" aria-hidden="true"></b-icon>
                </button>
                <button class="all-button_dua_icon" @click="descending()">
                  <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                </button>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div
                            class="dua"
                            v-for="(data,
                            index) in revisiDataSesion.konsepParagrafArray"
                            :key="index"
                          >
                            <h5>
                              <b-form-radio
                                v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index"
                              >
                                &nbsp; &nbsp; {{ data }}
                              </b-form-radio>
                            </h5>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
            </div>
            <!-- end catatan -->
          </div>
          <!-- Button OK -->
          <div class="content-lima" @click="style3Next">
            <div class="tombhol">
              <br />
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- screen 4 -->
    <div class="content-empat" v-if="stylePage4 === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModal4 = true">
                Tips
              </b-button>
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
                                style="width: 40px; height: 38.49px"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat2">
                              <div style="padding: 0% 0% 0% 12%; width: 85%">
                                <p>
                                  Empat gaya kalimat:<br />
                                  PERNYATAAN (deklaratif): <br />
                                  Pakaian Anda berserakan di lantai.
                                </p>
                                <p>
                                  PERTANYAAN (interogatif): <br />
                                  Mengapa pakaian Anda di lantai?<br />
                                </p>
                                <p>
                                  PERASAAN KUAT atau MENDADA (seruan):<br />
                                  Betapa berantakannya pakaian Anda!<br />
                                </p>
                                <p>
                                  PERINTAH atau PERMINTAAN (imperatif):<br />
                                  Gantung pakaian Anda.<br />
                                </p>
                              </div>
                            </div>

                            <div class="tombhol">
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
                (4 dari 5)<br />
                Sudahkah Anda memvariasikan kalimat Anda?
              </p>
              <br />
              <p class="kalimat_p">
                Sebagai contoh:<br />
                pernyataan, pertanyaan, perintah atau permintaan, perasaan yang
                kuat atau tiba-tiba.
              </p>
              <br />
              <p class="kalimat_p">
                Untuk melihat contoh dalam konteks, lihat Tip.<br />
                Untuk membuat perubahan, gunakan Ubah.
              </p>
              <br />
            </div>
            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua" @click="modalTambah = true">
                  Tambah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()"
                >
                  Ubah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()"
                >
                  Hapus
                </button>
                <button class="all-button_dua_icon" @click="ascending()">
                  <b-icon icon="chevron-up" aria-hidden="true"></b-icon>
                </button>
                <button class="all-button_dua_icon" @click="descending()">
                  <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                </button>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div
                            class="dua"
                            v-for="(data,
                            index) in revisiDataSesion.konsepParagrafArray"
                            :key="index"
                          >
                            <h5>
                              <b-form-radio
                                v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index"
                              >
                                &nbsp; &nbsp; {{ data }}
                              </b-form-radio>
                            </h5>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
            </div>
            <!-- end catatan -->
          </div>
          <!-- Button OK -->
          <div class="content-lima" @click="style4Next">
            <div class="tombhol">
              <br />
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- screen 5 -->
    <div class="content-empat" v-if="stylePage5 === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModal5 = true">
                Tips
              </b-button>
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
                                style="width: 40px; height: 38.49px"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat2">
                              <div style="padding: 0% 0% 0% 12%; width: 85%">
                                <p>
                                  Panjang kontras:
                                </p>
                                <p>
                                  Jalan yang kami lalui tiba-tiba berakhir di
                                  padang rumput berpagar yang dipenuhi domba
                                  yang baru dicukur dan domba yang baru lahir.
                                  Kami tersesat.
                                </p>
                              </div>
                            </div>

                            <div class="tombhol">
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
                (5 dari 5)<br />
                Cara lain untuk memvariasikan kalimat sesekali adalah melalui
                panjangnya.
              </p>
              <br />
              <p class="kalimat_p">
                Misalnya: Beberapa kalimat pendek dan tajam; yang lain penuh
                dengan kata, frasa, atau klausa.
              </p>
              <br />
              <p class="kalimat_p">
                Untuk melihat contoh dalam konteks, lihat Tip.<br />
                Untuk membuat perubahan, gunakan Ubah.
              </p>
              <br />
            </div>
            <!-- Catatan Paragraf -->
            <div class="content-konsep">
              <div class="up-down">
                <div class="border">
                  <div class="border_konsep">
                    <h4><b>Catatan Paragraf</b></h4>
                  </div>
                </div>
                <button class="all-button_dua" @click="modalTambah = true">
                  Tambah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toSetKonsepParagraf()"
                >
                  Ubah
                </button>
                <button
                  class="all-button_dua"
                  v-bind:disabled="dataForm.menulis.length === 0 ? true : false"
                  @click="toDropKonsepParagraf()"
                >
                  Hapus
                </button>
                <button class="all-button_dua_icon" @click="ascending()">
                  <b-icon icon="chevron-up" aria-hidden="true"></b-icon>
                </button>
                <button class="all-button_dua_icon" @click="descending()">
                  <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                </button>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px;">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div
                            class="dua"
                            v-for="(data,
                            index) in revisiDataSesion.konsepParagrafArray"
                            :key="index"
                          >
                            <h5>
                              <b-form-radio
                                v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index"
                              >
                                &nbsp; &nbsp; {{ data }}
                              </b-form-radio>
                            </h5>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
            </div>
            <!-- end catatan -->
          </div>
          <!-- Button OK -->
          <div class="content-lima" @click="style5Next">
            <div class="tombhol">
              <br />
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- screen finish -->
    <div class="content-empat" v-if="stylePageFinish === true">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul" @click="showModalFinish = true">
                Tips
              </b-button>
              <div v-if="showModalFinish === true">
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
                                  lebih baik untuk memilih Pemeruiksaan Akhir di
                                  bagian terakhir
                                </p>
                              </div>
                            </div>

                            <div class="tombhol">
                              <button
                                class="ok"
                                block
                                @click="showModalFinish = false"
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
                Selamat!<br />
                Apa yang ingin Anda lakukan selanjutnya?
              </p>
              <ul>
                <li class="kalimat_p">
                  Untuk melanjutkan ke bagian penerbitan, klik Cetak
                </li>
              </ul>
              <p class="kalimat_p">
                Untuk lebih banyak cara untuk meningkatkan tulisan Anda:
              </p>
              <ul>
                <li class="kalimat_p">
                  Klik Pemeriksaan Akhir untuk membantu memperbaiki kesalahan.
                </li>
                <li class="kalimat_p">
                  Klik Gaya Menulis, Struktur Kalimat, dan/atau Tata Bahasa agar
                  membuat tulisan Anda lebih baik dan lebih menarik.
                </li>
              </ul>
              <p class="kalimat_p">
                Anda dapat melakukan perbaikan sebanyak yang Anda inginkan.
              </p>
            </div>
            <div class="all-button">
              <button class="all-button_satu">
                <img style="margin-right:3%;" src="@/assets/check.png" />
                Gaya Menulis
              </button>
              <b-button class="all-button_finish">
                Struktur Kalimat
              </b-button>
              <b-button class="all-button_finish">
                Tata Bahasa
              </b-button>
              <b-button class="all-button_finish">
                Pemeriksaan Akhir
              </b-button>
            </div>
            <br />
            <br />
            <!-- catatan paragraf -->
            <div class="content-enam">
              <div class="border">
                <div class="border_catatan">
                  <h4><b>Catatan Paragraf</b></h4>
                </div>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div
                            class="dua"
                            v-for="(data,
                            index) in revisiDataSesion.konsepParagraf"
                            :key="index"
                          >
                            <h5>
                              {{ data }}
                            </h5>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
            </div>
            <!-- end catatan paragraf -->
          </div>
          <!-- Button OK -->
          <div class="content-lima" @click="styleFinishNext">
            <div class="tombhol">
              <br />
              <button class="ok" type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script src="./js/style.js" />

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
// End Judul

// Stepper

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

// Tips Style
.tips {
  //   background: skyblue;
  margin: 5px;
  margin-left: 105px;
  &_judul {
    position: absolute;
    background-color: #00a279;
    border: none;
    width: 98px;
    height: 40px;
    border-radius: 10px;
    margin: 5px;
  }
}

.kalimat {
  &_p {
    font-size: 20px;
    margin: 5px;
  }
  &_li {
    font-size: 20px;
    margin: 5px;
  }
}
// end Tips dan Kalimat

// Button Gaya Menulis dll
.all-button {
  margin-left: 0%;
  line-height: 30px;
  &_satu {
    background-color: #00a279;
    border: none;
    border-radius: 20px;
    width: 18%;
    margin: 0.3%;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    font-family: Poppins;
  }
  &_finish {
    background-color: #c1c8d3;
    border: none;
    border-radius: 20px;
    width: 20%;
    margin: 0.3%;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    font-family: Poppins;
    color: #212529;
  }
}

// Tombol OK
.tombhol {
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

// Konsep Menulis
.content-konsep {
  margin-left: 0%;
  margin-top: 30px;
  // background: red;
}

.up-down {
  display: flex;
}

.border {
  background-color: #484c52;
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
    padding: 13px;
    font-family: Poppins;
    font-size: 20px;
    background-color: #c1c8d3;
    width: 800px;
    padding: 13px;
    border-radius: 0px 0 30px 30px;
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

// End Konsep Menulis

// Tombol catatan
.tombol {
  //   background: skyblue;
  text-align: right;
  margin: 5px;
  &_catatan {
    color: #454b56;
    background-color: #c1c8d3;
    border: none;
    height: 32.71px;
    width: 80px;
    border-radius: 39px;
    margin: 5px;
  }
}
// end Tombol catatan

// Button Konsep Menulis
.all-button_dua {
  background-color: #e0e0e0;
  border: none;
  border-radius: 20px;
  margin: 0.3%;
  line-height: 30px;
  width: 10%;
  font-weight: bold;
  &_icon {
    background-color: #e0e0e0;
    border: none;
    border-radius: 20px;
    margin: 0.3%;
    line-height: 30px;
    width: 5%;
    font-weight: bold;
  }
}

.all-button_dua:hover {
  background-color: #f1f6cc;
}

.all-button_dua_icon:hover {
  background-color: #f1f6cc;
}

// End Button Gaya Menulis dll

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
</style>

