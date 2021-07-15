<template>
  <div class="all">
    <!-- header -->
    <br/><br/>
    <div class="head">
      <p>Latihan Menulis</p>
    </div>

    <!-- stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/11.png" />
    </div>

    <!-- tengah -->
    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <!-- body -->
    <!-- Screen 1 -->
    <div
      class="content-empat"
      v-if="strukturkalimatPage1 === true"
      style="margin-left:5%;"
    >
      <div class="col-sm-12">
        <div class="row">
          <!-- Button Tips -->
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul">
                Tips
              </b-button>
            </div>
          </div>
          <div class="col-sm-8">
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

          <!-- Konsep Paragraf -->
          <div class="content-konsep">
            <div class="up-down">
              <div class="border">
                <div class="border_konsep">
                  <h4><b>Konsep Paragraf</b></h4>
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
                                <b>&nbsp; &nbsp;Saya adalah pecandu Kopi.</b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>&nbsp; &nbsp;Saya senang membuat kopi.</b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Kopi membuat saya lebih
                                  bersemangat dalam bekerja.
                                </b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                  tidak terlalu kental.
                                </b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                  kopi
                                </b>
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
      <div class="content-lima" @click="strukturkalimat1Next">
        <div class="tombol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
      <!-- End Button OK -->
    </div>
    <!-- End Screen 1 -->

    <!-- Screen 2 -->
    <div
      class="content-empat"
      v-if="strukturkalimatPage2 === true"
      style="margin-left:5%;"
    >
      <div class="col-sm-12">
        <div class="row">
          <!-- Button Tips -->
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul">
                Tips
              </b-button>
            </div>
          </div>
          <div class="col-sm-8">
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

          <!-- Konsep Paragraf -->
          <div class="content-konsep">
            <div class="up-down">
              <div class="border">
                <div class="border_konsep">
                  <h4><b>Konsep Paragraf</b></h4>
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
                                <b>&nbsp; &nbsp;Saya adalah pecandu Kopi.</b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>&nbsp; &nbsp;Saya senang membuat kopi.</b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Kopi membuat saya lebih
                                  bersemangat dalam bekerja.
                                </b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                  tidak terlalu kental.
                                </b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                  kopi
                                </b>
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
      <div class="content-lima" @click="strukturkalimat2Next">
        <div class="tombol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
      <!-- End Button OK -->
    </div>
    <!-- End Screen 2 -->

    <!-- Screen 3 -->
    <div
      class="content-empat"
      v-if="strukturkalimatPage3 === true"
      style="margin-left:5%;"
    >
      <div class="col-sm-12">
        <div class="row">
          <!-- Button Tips -->
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul">
                Tips
              </b-button>
            </div>
          </div>
          <div class="col-sm-8">
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

          <!-- Konsep Paragraf -->
          <div class="content-konsep">
            <div class="up-down">
              <div class="border">
                <div class="border_konsep">
                  <h4><b>Konsep Paragraf</b></h4>
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
                                <b>&nbsp; &nbsp;Saya adalah pecandu Kopi.</b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>&nbsp; &nbsp;Saya senang membuat kopi.</b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Kopi membuat saya lebih
                                  bersemangat dalam bekerja.
                                </b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                  tidak terlalu kental.
                                </b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                  kopi
                                </b>
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
      <div class="content-lima" @click="strukturkalimat3Next">
        <div class="tombol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
      <!-- End Button OK -->
    </div>
    <!-- End Screen 3 -->

    <!-- Screen 4 -->
    <div
      class="content-empat"
      v-if="strukturkalimatPage4 === true"
      style="margin-left:5%;"
    >
      <div class="col-sm-12">
        <div class="row">
          <!-- Button Tips -->
          <div class="col-sm-2">
            <div class="tips">
              <b-button class="tips_judul">
                Tips
              </b-button>
            </div>
          </div>
          <div class="col-sm-8">
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

          <!-- Konsep Paragraf -->
          <div class="content-konsep">
            <div class="up-down">
              <div class="border">
                <div class="border_konsep">
                  <h4><b>Konsep Paragraf</b></h4>
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
                                <b>&nbsp; &nbsp;Saya adalah pecandu Kopi.</b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>&nbsp; &nbsp;Saya senang membuat kopi.</b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Kopi membuat saya lebih
                                  bersemangat dalam bekerja.
                                </b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Saya menyukai kopi pahit namun
                                  tidak terlalu kental.
                                </b>
                              </b-form-radio>
                            </h5>
                          </div>
                          <div class="dua">
                            <h5>
                              <b-form-radio name="radios-stacked" stacked>
                                <b>
                                  &nbsp; &nbsp;Itulah sebabnya saya menyukai
                                  kopi
                                </b>
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
      <div class="content-lima" @click="strukturkalimat4Next">
        <div class="tombol">
          <button class="ok" type="submit">OK</button>
        </div>
      </div>
      <!-- End Button OK -->
    </div>
    <!-- End Screen 4 -->

          <!-- Screen 5 -->
      <div class="content-empat" v-if="strukturkalimatPage5 === true" style="margin-left:5%;">
        <div class="col-sm-12">
          <div class="row">
            <!-- Button Tips -->
            <div class="col-sm-2">
              <div class="tips">
                <b-button class="tips_judul" >
                  Tips
                </b-button>
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
                <button class="all-button_exp" style="width: 16%;">
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
        <div class="content-lima" @click="strukturkalimat5Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
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
  }

  // head
.head {
  font-size: 50px;
  margin-top: 70px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  margin-left: 35%;
  h1 {
    font-weight: bolder;
    font-size: 47px;
    margin-left: 10%;
  }
}

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
    padding: 11px 0px 0px 140px;
    &_topik {
      padding-left: 80px;
    }
    @media (max-width: 768px) {
      width: 100%;
      padding: 11px 20px 0px 20px;
    }
  }

  // body

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
  }

  .all-button_dua:hover {
    background-color: #f1f6cc;
  }

  // End Button Gaya Menulis dll

  // Tombol OK
  .tombol {
    margin-left: 45%;
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
    }
    &konsep {
    }
  }
  // End Konsep Menulis
</style>
