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
        <img class="steper_image" src="@/assets/icon_stepper/9.png" alt="" />
      </div>
    </div>
    <!-- Jenis Paragraf -->
    <div class="content-tiga">
      <div class="jenis">
        <p class="jenis_paragraf">
          <strong>Jenis Paragraf: </strong>{{ jenisTopics.jenisParagraf }}
        </p>
        <p class="jenis_topik">
          <strong>Topik:</strong>{{ jenisTopics.topik }}
        </p>
      </div>
    </div>
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
    <!-- pup up tambah -->
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
                      <p>
                        <b>
                          Tambahan Catatan Paragraf
                        </b>
                      </p>
                      <div class="textarea">
                        <b-form-textarea
                          v-model="dataForm.tambahData"
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
                      <p>
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
                        @click="(modalUbah = false), (dataForm.ubahData = '')"
                      >
                        Batal
                      </button>
                      <button class="ok3" block @click="setKonsepParagraf()">
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
    <!-- Style -->

    <!-- Screen 1 -->
    <div class="content-empat" v-if="stylePage1 === true">
      <div class="body">
        <div class="col-md-2.5">
          <div class="tips">
            <b-button class="tips_judul" @click="showModal = true">
              Tips
            </b-button>
          </div>
        </div>
        <div class="col-sm-9.5">
          <div class="kalimat">
            <p class="kalimat_p">
              Gaya Menulis (1 dari 5)<br />
              Lihatlah pilihan kata-kata Anda. Bisakah Anda menggunakan kata
              kerja yang lebih hidup?
            </p>
            <p class="kalimat_p">
              Sebagai contoh:<br />
              Alih-alih mengatakan: mengumumkan, menyebutkan, mengisyaratkan,
              menjelaskan.<br />
              Alih-alih melihat: menatap, melirik, mengintip, sekilas.
            </p>
            <p class="kalimat_p">
              Untuk melihat contoh dalam konteks, lihat Tip.<br />
              Untuk membuat perubahan, gunakan Ubah.
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
              <div
                class="dua"
                v-for="(data, index) in revisiDataSesion.konsepParagrafArray"
                :key="index"
              >
                <b-form-radio
                  v-model="dataForm.menulis"
                  name="some-radios"
                  v-bind:value="index"
                >
                </b-form-radio>
                <p>
                  {{ data }}
                </p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
      <!-- end catatan -->

      <!-- Button OK -->
      <div class="content-lima" @click="style1Next">
        <div class="tombhol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>

    <!-- Screen 2 -->
    <div class="content-empat" v-if="stylePage2 === true">
      <div class="body">
        <div class="col-md-2.5">
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
                                GANG hampir tidak cukup lebar untuk satu mobil.
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
        <div class="col-md-9.5">
          <div class="kalimat">
            <p class="kalimat_p">
              (2 dari 5)<br />
              Bisakah kata benda Anda membuat gambar yang lebih spesifik?
            </p>
            <p class="kalimat_p">
              Sebagai contoh:<br />
              Alih-alih jalan: jalur, jalan raya, jalan raya, bulevar.<br />
              Alih-alih gambar: snapshot, potret, foto, ilustrasi.
            </p>
            <p class="kalimat_p">
              Untuk melihat contoh dalam konteks, lihat Tip.<br />
              Untuk membuat perubahan, gunakan Ubah.
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
              <div
                class="dua"
                v-for="(data, index) in revisiDataSesion.konsepParagrafArray"
                :key="index"
              >
                <b-form-radio
                  v-model="dataForm.menulis"
                  name="some-radios"
                  v-bind:value="index"
                >
                </b-form-radio>
                <p>
                  {{ data }}
                </p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
      <!-- end catatan -->
      <!-- Button OK -->
      <div class="content-lima" @click="style2Next">
        <div class="tombhol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>

    <!-- screen 3 -->
    <div class="content-empat" v-if="stylePage3 === true">
      <div class="body">
        <div class="col-md-2.5">
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
        <div class="col-md-9.5">
          <div class="kalimat">
            <p class="kalimat_p">
              (3 dari 5)<br />
              Apakah Anda menggunakan suara pasif daripada suara aktif yang
              lebih kuat dan lebih langsung?
            </p>
            <p class="kalimat_p">
              Dalam kalimat pasif, subjek MENERIMA tindakan. Dalam suara aktif,
              subjek MELAKUKAN tindakan.
            </p>
            <p class="kalimat_p">
              Untuk melihat contoh dalam konteks, lihat Tip.<br />
              Untuk membuat perubahan, gunakan Ubah.
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
              <div
                class="dua"
                v-for="(data, index) in revisiDataSesion.konsepParagrafArray"
                :key="index"
              >
                <b-form-radio
                  v-model="dataForm.menulis"
                  name="some-radios"
                  v-bind:value="index"
                >
                </b-form-radio>
                <p>
                  {{ data }}
                </p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
      <!-- end catatan -->
      <!-- Button OK -->
      <div class="content-lima" @click="style3Next">
        <div class="tombhol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>

    <!-- screen 4 -->
    <div class="content-empat" v-if="stylePage4 === true">
      <div class="body">
        <div class="col-md-2.5">
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
        <div class="col-md-9.5">
          <div class="kalimat">
            <p class="kalimat_p">
              (4 dari 5)<br />
              Sudahkah Anda memvariasikan kalimat Anda?
            </p>
            <p class="kalimat_p">
              Sebagai contoh:<br />
              pernyataan, pertanyaan, perintah atau permintaan, perasaan yang
              kuat atau tiba-tiba.
            </p>
            <p class="kalimat_p">
              Untuk melihat contoh dalam konteks, lihat Tip.<br />
              Untuk membuat perubahan, gunakan Ubah.
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
              <div
                class="dua"
                v-for="(data, index) in revisiDataSesion.konsepParagrafArray"
                :key="index"
              >
                <b-form-radio
                  v-model="dataForm.menulis"
                  name="some-radios"
                  v-bind:value="index"
                >
                </b-form-radio>
                <p>
                  {{ data }}
                </p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
      <!-- end catatan -->

      <!-- Button OK -->
      <div class="content-lima" @click="style4Next">
        <div class="tombhol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>

    <!-- screen 5 -->
    <div class="content-empat" v-if="stylePage5 === true">
      <div class="body">
        <div class="col-md-2.5">
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
                                padang rumput berpagar yang dipenuhi domba yang
                                baru dicukur dan domba yang baru lahir. Kami
                                tersesat.
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
        <div class="col-md-9.5">
          <div class="kalimat">
            <p class="kalimat_p">
              (5 dari 5)<br />
              Cara lain untuk memvariasikan kalimat sesekali adalah melalui
              panjangnya.
            </p>
            <p class="kalimat_p">
              Misalnya: Beberapa kalimat pendek dan tajam; yang lain penuh
              dengan kata, frasa, atau klausa.
            </p>
            <p class="kalimat_p">
              Untuk melihat contoh dalam konteks, lihat Tip.<br />
              Untuk membuat perubahan, gunakan Ubah.
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
              <div
                class="dua"
                v-for="(data, index) in revisiDataSesion.konsepParagrafArray"
                :key="index"
              >
                <b-form-radio
                  v-model="dataForm.menulis"
                  name="some-radios"
                  v-bind:value="index"
                >
                </b-form-radio>
                <p>
                  {{ data }}
                </p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
      <!-- end catatan -->
      <!-- Button OK -->
      <div class="content-lima" @click="style5Next">
        <div class="tombhol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>

    <!-- screen finish -->
    <div class="content-empat" v-if="stylePageFinish === true">
      <div class="body">
        <div class="col-md-2.5">
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
        <div class="col-md-9.5">
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
        </div>
      </div>

      <div class="all-button">
        <button class="all-button_satu">
          <img style="margin-right:3%;" src="@/assets/check.png" />
          Gaya Menulis
        </button>
        <b-button
          class="all-button_finish"
          @click="$router.push('/struktur-kalimat')"
        >
          Struktur Kalimat
        </b-button>
        <b-button
          class="all-button_finish"
          @click="$router.push('/tata-bahasa')"
        >
          Tata Bahasa
        </b-button>
        <b-button
          class="all-button_finish"
          @click="$router.push('/proofreading')"
        >
          Pemeriksaan Akhir
        </b-button>
      </div>
      <!-- catatan paragraf -->
      <div class="content-konsep">
        <div class="border">
          <div class="border_catatan">
            <h4><b>Catatan Paragraf</b></h4>
          </div>
        </div>
        <div class="border_list">
          <b-form-group>
            <div>
              <div
                class="dua"
                v-for="(data, index) in revisiDataSesion.konsepParagraf"
                :key="index"
              >
                <p>
                  {{ data }}
                </p>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
      <!-- end catatan paragraf -->
      <!-- Button OK -->
      <div class="content-lima" @click="styleFinishNext">
        <div class="tombhol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/style.js" />

<style lang="scss" scoped>
// all
.all {
  overflow-x: hidden;
  max-width: 1440px;
  margin: auto;
}
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

// body
.body {
  display: flex;
  padding: 10px 300px 0px 130px;
  @media screen and(max-width: 768px) {
    padding: 5px 10px 0px 10px;
  }
}
// Tips Style
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
    width: 98px;
    border-radius: 10px;
    margin: 5px;
    @media Screen and (max-width: 780px) {
      line-height: 22px;
    }
  }
}

.kalimat {
  padding: 15px 0px 0px 5px;
  @media screen and (max-width: 768px) {
  }
  &_p {
    font-size: 20px;
    padding-bottom: 10px;
  }
  &_li {
    font-size: 20px;
    margin: 5px;
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

// Tombol OK
.tombhol {
  text-align: center;
  padding: 30px 0px 30px 0px;
}

.ok {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 40px;
  font-size: 20px;
  color: #fff;
  font-family: Poppins;
}
// End Tombol OK

// Konsep Menulis
.content-konsep {
  padding: 30px 200px 0px 250px;
  @media screen and (max-width: 768px) {
    padding: 30px 20px 0px 20px;
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
  @media screen and (max-width: 780px) {
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
    p {
      font-size: 20px;
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

.dua2 {
  padding: 8px 0px 0px 0px;
  text-align: justify;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  h5 {
    font-family: Poppins;
    padding: 0px 0px 0px 20px;
  }
  @media screen and (max-width: 760px) {
    padding: 0px;
    margin-left: -30px;
    width: 100%;
    h5 {
      font-family: Arial, Helvetica, sans-serif;
      padding: 10px 0px 0px 20px;
      text-align: left;
    }
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
  width: 150px;
  margin-left: 5px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 600px) {
    border: 0;
    border-radius: 20px;
    margin: 0%;
    line-height: 20px;
    width: 90%;
  }
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
