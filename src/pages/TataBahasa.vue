<template>
  <div class="all">
    <!-- header -->
    <!-- Judul -->
      <div class="content-satu">
      <div class="judul">
        <h1>Latihan Menulis</h1>
      </div>
      </div>
      <!-- End Judul -->

    <!-- stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/11.png" />
    </div>

    <!-- tengah -->
    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf: </strong>{{ jenisTopics.jenisParagraf }}</p>
      <p class="center_topik">
        <strong>Topik: </strong>{{ jenisTopics.topik }}
      </p>
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
                      style="width: 40px; height: 38.49px"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat2">
                    <div style="padding: 0% 0% 0% 12%; width: 85%">
                      <p>
                        Lihatlah Konsep Paragraf Anda sekarang sebagai satu
                        kesatuan
                      </p>
                    </div>
                  </div>

                  <div class="tombol_oke">
                    <button
                      class="ok_oke"
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
    <!-- Popup Modal -->
    <!-- end modal area -->

    <!-- body -->
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
                Ulasan Tata Bahasa (1 dari 4)
                <br />
                Apakah Anda melihat kesalahan tata bahasa?
                <br />
                <br />
                Kesalahan umum adalah kurangnya kesepakatan antara subjek dan
                kata kerja.
                <br />
                <br />
                Untuk melihat contoh dalam konteks, lihat Tip.
                <br />
                Untuk membuat perubahan gunakan Ubah.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Konsep Paragraf -->
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
              <a @click="ascending()">
                <img
                  class="icon-up-down"
                  src="@/assets/up.png"
                  style="margin-bottom: 5px; margin-left: 5px;"
                />
              </a>
              <a @click="descending()">
                <img
                  class="icon-up-down"
                  src="@/assets/down.png"
                  style="margin-bottom: 5px; margin-left: 5px;"
                />
              </a>
              </div>
            </div>
            <div class="border_list">
                <b-form-group>
                  <div>
                      <ul>
                        <div class="dua" v-for="(data,
                            index) in strukturKalimatDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                <h5>
                                  <b>{{data}}</b>
                                </h5>
                            </b-form-radio>
                        </div>
                      </ul>
                  </div>
                </b-form-group>
            </div>
          </div>

      <!-- Button OK -->
            <div class="button">
          <button class="button1 justify-content-center" @click="strukturkalimat1Next">
            <b>OK</b>
          </button>
      </div>
      <!-- End Button OK -->
    </div>
    <!-- End Screen 1 -->

    <!-- Screen 2 -->
    <div class="content-empat" v-if="strukturkalimatPage2 === true">
        <div class="body">
          <!-- Button Tips -->
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
                (2 dari 4)
                <br />
                Kesalahan umum lainnya adalah pengubah yang salah tempat.
                <br />
                <br />
                Modifikasi kata, frasa, atau klausa harus ditempatkan sedekat
                mungkin dengan kata yang dideskripsikan.
                <br />
                <br />
                Untuk melihat contoh dalam konteks, lihat Tip.
                <br />
                Untuk membuat perubahan gunakan Ubah.
              </p>
            </div>
          </div>
      </div>
      
        <!-- Konsep Paragraf -->
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
              <a @click="ascending()">
                <img
                  class="icon-up-down"
                  src="@/assets/up.png"
                  style="margin-bottom: 5px; margin-left: 5px;"
                />
              </a>
              <a @click="descending()">
                <img
                  class="icon-up-down"
                  src="@/assets/down.png"
                  style="margin-bottom: 5px; margin-left: 5px;"
                />
              </a>
              </div>
            </div>
            <div class="border_list">
                <b-form-group>
                  <div>
                    <div class="col-sm-12">
                      <ul>
                        <div class="dua" v-for="(data,
                            index) in strukturKalimatDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                <h5>
                                  <b>{{data}}</b>
                                </h5>
                            </b-form-radio>
                        </div>
                      </ul>
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
      <!-- End Button OK -->
    </div>
    <!-- End Screen 2 -->

    <!-- Screen 3 -->
    <div class="content-empat" v-if="strukturkalimatPage3 === true">
        <div class="body">
          <!-- Button Tips -->
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
                (3 dari 4)
                <br />
                Periksa pengubah yang menjuntai. Ini adalah kata atau frasa yang
                tidak perlu diubah.
                <br />
                <br />
                Untuk melihat contoh dalam konteks, lihat Tip.
                <br />
                Untuk membuat perubahan gunakan Ubah.
              </p>
            </div>
          </div>
        </div>
        
         <!-- Konsep Paragraf -->
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
              <a @click="ascending()">
                <img
                  class="icon-up-down"
                  src="@/assets/up.png"
                  style="margin-bottom: 5px; margin-left: 5px;"
                />
              </a>
              <a @click="descending()">
                <img
                  class="icon-up-down"
                  src="@/assets/down.png"
                  style="margin-bottom: 5px; margin-left: 5px;"
                />
              </a>
              </div>
            </div>
            <div class="border_list">
                <b-form-group>
                  <div>
                      <ul>
                        <div class="dua" v-for="(data,
                            index) in strukturKalimatDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                <h5>
                                  <b>{{data}}</b>
                                </h5>
                            </b-form-radio>
                        </div>
                      </ul>
                  </div>
                </b-form-group>
            </div>
          </div>

      <!-- Button OK -->
      <div class="button" @click="strukturkalimat3Next">
          <button class="button1 justify-content-center" type="submit"><b>OK</b></button>
      </div>
      <!-- End Button OK -->
    </div>
    <!-- End Screen 3 -->

    <!-- Screen 4 -->
    <div class="content-empat" v-if="strukturkalimatPage4 === true">
        <div class="body">
          <!-- Button Tips -->
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
                (4 dari 4)
                <br />
                Sudahkah Anda menggunakan koma untuk membantu pembaca memahami
                kalimat Anda dengan cepat dan benar?
                <br />
                <br />
                Misalnya: Di tanggal dan alamat, di antara item dalam rangkaian,
                di sekitar ekspresi tanda kurung, untuk mencegah salah membaca.
                <br />
                <br />
                Untuk melihat contoh dalam konteks, lihat Tip.
                <br />
                Untuk membuat perubahan gunakan Ubah.
              </p>
            </div>
          </div>
        </div>
        
          <!-- Konsep Paragraf -->
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
              <a @click="ascending()">
                <img
                  class="icon-up-down"
                  src="@/assets/up.png"
                  style="margin-bottom: 5px; margin-left: 5px;"
                />
              </a>
              <a @click="descending()">
                <img
                  class="icon-up-down"
                  src="@/assets/down.png"
                  style="margin-bottom: 5px; margin-left: 5px;"
                />
              </a>
              </div>
            </div>
            <div class="border_list">
                <b-form-group>
                  <div>
                      <ul>
                        <div class="dua" v-for="(data,
                            index) in strukturKalimatDataSesion.konsepParagrafArray"
                            :key="index">
                            <b-form-radio v-model="dataForm.menulis"
                                name="some-radios"
                                v-bind:value="index">
                                <h5>
                                  <b>{{data}}</b>
                                </h5>
                            </b-form-radio>
                        </div>
                      </ul>
                  </div>
                </b-form-group>
            </div>
          </div>

      <!-- Button OK -->
      <div class="button" @click="strukturkalimat4Next">
          <button class="button1 justify-content-center" type="submit"><b>OK</b></button>
      </div>
      <!-- End Button OK -->
    </div>
    <!-- End Screen 4 -->

    <!-- Screen 5 -->
      <div class="content-empat" v-if="strukturkalimatPage5 === true">
          <div class="body">
            <!-- Button Tips -->
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
                <img style="margin-right:3%;" src="@/assets/check.png">
                Gaya Menulis
                </button>
                <button class="all-button_satu"
                @click="$router.push('/struktur-kalimat')">
                    <img style="margin-right:3%;" src="@/assets/check.png">
                    Struktur Kalimat
                    </button>
                <button class="all-button_satu">
                    <img style="margin-right:3%;" src="@/assets/check.png">
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
                <div style="margin-left: 30px;" v-for="(data,
                            index) in strukturKalimatDataSesion.konsepParagraf"
                            :key="index">
                  <p>
                    {{data}}
                  </p>
                </div>
              </div>
            </div>
        <!-- Button OK -->
        <div class="button" @click="strukturkalimat5Next">
            <button class="button1 justify-content-center" type="submit"><b>OK</b></button>
        </div>
        <!-- End Button OK -->
      </div>
    <!-- End Screen 5 -->
  </div>
</template>

<script src="./js/tataBahasa.js" />

<style lang="scss" scoped>
  // all
  .all {
    overflow: hidden;
    max-width: 1350px;
    margin: auto;
  }
// Judul
.content-satu {
  margin-top: 120px;
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
}
// End Judul

  // Stepper
  .steper {
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

  // tengah
  .center {
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

  // body
  .body {
  display: flex;
  padding: 10px 200px 0px 120px;
  @media screen and(max-width: 768px) {
    padding: 10px 10px 0px 0px;
  }
}

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
    padding-top: 7px;
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
// End Tombol O

 
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
    padding: 15px 0px 0px 10px;
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
  padding: 20px 200px 0px 240px;
  @media screen and (max-width: 768px) {
    padding: 20px 20px 0px 20px;
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

  // Button Konsep Menulis
  // Button Konsep Menulis
.all-button_dua {
  background-color: #e0e0e0;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  margin: 0.3%;
  line-height: 30px;
  width: 98px;
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

  // Tombol OK
  .tombol_oke {
  /* background: red; */
  text-align: center;
  padding: 5px;
}
.ok_oke {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
}
  .tombol {
    text-align: center;
    align-items: center;
    padding: 5px 0px 30px 0px;
  }

  .ok {
    background: #0a4da3;
    border-radius: 39px;
    border: none;
    width: 108px;
    height: 44px;
    color: #fff;
    font-family: Poppins;
    font-weight:bold;
  }
  // End Tombol OK

// Konsep Menulis
.content-konsep {
  padding: 30px 200px 10px 240px;
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
    padding: 13px;
    border-radius: 0px 0px 14px 14px;
    @media Screen and (max-width: 780px) {
      width: 100%;
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

// End Stepper

.dua {
  padding: 8px 0px 0px 0px;
  h5 {
    font-family: Poppins;
    padding: 0px 0px 0px 20px;
  }
  @media screen and (max-width: 760px) {
    padding: 0px;
    h5 {
      font-family: Arial, Helvetica, sans-serif;
      padding: 10px 0px 0px 10px;
      text-align: left;
    }
  }
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


