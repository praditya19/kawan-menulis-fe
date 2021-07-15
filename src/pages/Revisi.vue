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
          <img class="steper_image" src="@/assets/icon_stepper/8.png" alt="" />
        </div>
      </div>
      <!-- End Stepper -->

      <br />

      <!-- Jenis Paragraf -->
      <div class="content-tiga">
        <div class="jenis">
          <p class="jenis_paragraf">
            <strong>Jenis Paragraf:</strong> Deskripsi
          </p>
          <p class="jenis_topik">
            <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
            sesuatu? Coba sebutkan satu.
          </p>
        </div>
      </div>
      <!-- End Jenis Paragraf -->

      <!-- Screen 1 -->
      <div class="content-empat" v-if="revisiPage1 === true">
      <div style="margin-left: 3%;">
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
                                  style="width: 40px; height: 38.49px"
                                  src="@/assets/checklist.png"
                                />
                              </div>

                              <div class="kalimat2">
                                <div style="padding: 0% 0% 0% 12%; width: 85%">
                                  <p>
                                    Lihatlah paragraf Anda sekarang sebagai satu
                                    kesatuan
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
              </div>
            </div>
            <div class="col-sm-8">
              <div class="kalimat">
                <p class="kalimat_p">
                  Sempurna! Sekarang Anda dapat membaca draf konsep seluruh
                  paragraf Anda. <br /><br />
                  Untuk Mendapatkan umpan balik sebelum Anda merevisi pekerjaan
                  Anda, Anda dapat menyalin konsep paragraf Anda untuk dibagikan
                  dengan guru atau teman sekelas Anda.
                  <br /><br />
                  Klik OK untuk melanjutkan ke bagian revisi.
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
              </div>
              <div class="border_list">
                <div style="margin-left: 30px">
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
        </div>
        <br>
        <!-- Button OK -->
        <div class="content-lima" @click="revisi1Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
        <br>
      <!-- End Screen 1 -->

      <!-- Screen 2 -->
      <div class="content-empat" v-if="revisiPage2 === true">
       <div style="margin-left: 3%;">
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
                                  style="width: 40px; height: 38.49px"
                                  src="@/assets/checklist.png"
                                />
                              </div>

                              <div class="kalimat2">
                                <div style="padding: 0% 0% 0% 12%; width: 85%">
                                  <p>
                                    Mulai dari bagian ini, sistem akan
                                    menyarankan tempat yang tepat untuk
                                    menggunakan Tambah, Ubah, Hapus, dan Pindah
                                    Atas/Pindah Bawah.
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
                  Sekarang saatnya untuk merevisi paragraf Anda. Anda dapat
                  melakukan:<br />
                  <strong>Tambah</strong> (dimasukan ke dalam kalimat lain),<br />
                  <strong>Ubah</strong> (mengubah atau mengoreksi kalimat),<br />
                  <strong>Hapus</strong> (mengambil kalimat),<br />
                  <strong>Pindah Atas/Pindah Bawah</strong> (mengubah urutan
                  kalimat),<br /><br />
                  Klik Ok jika Anda telah yakin dengan setiap perubahan dan
                  susunannya.
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
                  style="margin-bottom: 5px; margin-left: 20px"
                />
                </a>
                <a href="">
                <img
                  class="icon-up-down"
                  src="@/assets/down.png"
                  style="margin-bottom: 5px; margin-left: 20px"
                />
                </a>
              </div>
              <div class="border_list">
                <div style="margin-left: 30px">
                  <b-form-group>
                    <div>
                      <div class="col-sm-12">
                        <ul>
                          <div class="dua">
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya adalah pecandu Kopi.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya senang membuat kopi.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Kopi membuat saya lebih
                                    bersemangat dalam bekerja.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Saya menyukai kopi pahit namun
                                    tidak terlalu kental.</b
                                  ></b-form-radio
                                >
                              </h5>
                            </div>
                            <div class="dua">
                              <h5>
                                <b-form-radio name="radios-stacked" stacked
                                  ><b
                                    >&nbsp; &nbsp;Itulah sebabnya saya menyukai
                                    kopi</b
                                  ></b-form-radio
                                >
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
        </div>
        <br>
        <!-- Button OK -->
        <div class="content-lima" @click="revisi2Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 2 -->

      <!-- Screen 3 -->
      <div class="content-empat" v-if="revisiPage3 === true">
       <div style="margin-left: 3%;">
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
                                  style="width: 40px; height: 38.49px"
                                  src="@/assets/checklist.png"
                                />
                              </div>

                              <div class="kalimat2">
                                <div style="padding: 0% 0% 0% 12%; width: 85%">
                                  <p>
                                    Lebih baik untuk memilih
                                    <strong>Pemeriksaan Akhir</strong> dibagian
                                    terakhir.
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
                <button class="all-button_satu">Gaya Menulis</button>
                <button class="all-button_satu">Struktur Kalimat</button>
                <button class="all-button_satu">Tata Bahasa</button>
                <button class="all-button_satu">Pemeriksaan Akhir</button>
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
                <div style="margin-left: 30px">
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
        </div>
        <br>
        <!-- Button OK -->
        <div class="content-lima" @click="revisi3Next">
          <div class="tombol">
            <b-button class="ok" type="submit">OK</b-button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
        <br>
      <!-- End Screen 3 -->
    </div>
  </div>
</template>

<script src="./js/revisi.js" />

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
  line-height: 30px;

  &_satu {
    background-color: #e0e0e0;
    border: none;
    border-radius: 20px;
    width: 12%;
    margin: 0.3%;
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
</style>