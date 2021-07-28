<template>
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
            <strong>Jenis Paragraf: </strong>{{ jenisTopics.jenisParagraf }}
          </p>
          <p class="jenis_topik">
            <strong>Topik: </strong>{{ jenisTopics.topik }}
          </p>
        </div>
      </div>
      <!-- End Jenis Paragraf -->
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
      <!-- popup tambah -->
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
                              (modalTambah = false),
                                (dataForm.tambahData = '')
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
                              (modalUbah = false),
                                (dataForm.ubahData = '')
                            "
                          >
                            Batal
                          </button>
                        </div>
                        <div class="col-sm-6">
                          <button class="ok3" block @click="setKonsepParagraf()">
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
                        Lihatlah paragraf Anda sekarang sebagai satu
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

                  <div class="tombol_oke">
                    <button
                      class="ok_oke"
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

                  <div class="tombol_oke">
                    <button
                      class="ok_oke"
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
      <!-- end modal area -->

      <!-- Screen 1 -->
      <div class="content-empat" v-if="revisiPage1 === true">
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
                  Sempurna! Sekarang Anda dapat membaca draf konsep seluruh
                  paragraf Anda.
                </p>
                <p class="kalimat_p">  
                  Untuk Mendapatkan umpan balik sebelum Anda merevisi pekerjaan
                  Anda, Anda dapat menyalin konsep paragraf Anda untuk dibagikan
                  dengan guru atau teman sekelas Anda.
                </p>
                <p class="kalimat_p">
                  Klik OK untuk melanjutkan ke bagian revisi.
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
              </div>
              <div class="border_list">
                <div class="border_data">
                  <p v-for="(data, index) in menulisKesimpulanDataSesion.konsepParagraf" :key="index">
                    {{data}}
                  </p>
                </div>
              </div>
            </div>

        <!-- Button OK -->
        <div class="content-lima" @click="revisi1Next">
          <div class="tombol">
            <button class="ok" type="submit">OK</button>
          </div>
        </div>
        <!-- End Button OK -->
      </div>
      <!-- End Screen 1 -->

      <!-- Screen 2 -->
      <div class="content-empat" v-if="revisiPage2 === true">
          <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal2 = true">
                  Tips
                </b-button>
              </div>
            </div>
            <div class="col-md-9.5">
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
                  <button class="all-button_dua" type="botton" @click="modalTambah = true">Tambah</button>
                  <button class="all-button_dua" type="botton" v-bind:disabled="dataForm.menulis.length === 0 ? true : false" @click="toSetKonsepParagraf()">Ubah</button>
                  <button class="all-button_dua" type="botton" v-bind:disabled="dataForm.menulis.length === 0 ? true : false" @click="toDropKonsepParagraf()">Hapus</button>
                  <a @click="ascending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/up.png"
                  />
                  </a>
                  <a @click="descending()">
                  <img
                    class="icon-up-down"
                    src="@/assets/down.png"
                  
                  />
                  </a>
                </div>
              </div>
              <div class="border_list">
                  <b-form-group>
                    <ul>
                      <div class="dua" v-for="(data, index) in menulisKesimpulanDataSesion.konsepParagrafArray" :key="index">
                          <h5>
                            <b-form-radio v-model="dataForm.menulis"
                                  name="some-radios"
                                  v-bind:value="index"
                              ><b
                                > {{data}}</b
                              ></b-form-radio
                            >
                          </h5>
                        </div>
                    </ul>
                  </b-form-group>
              </div>
          </div>
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
          <div class="body">
            <!-- Button Tips -->
            <div class="col-md-2.5">
              <div class="tips">
                <b-button class="tips_judul" @click="showModal3 = true">
                  Tips
                </b-button>
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
          <!-- end body -->
          <!-- Button Gaya menulis dll -->
            <div class="all-button">
                <button class="all-button_satu" @click="$router.push('/gaya-menulis')">Gaya Menulis</button>
                <button class="all-button_satu" @click="$router.push('/struktur-kalimat')">Struktur Kalimat</button>
                <button class="all-button_satu" @click="$router.push('/tata-bahasa')">Tata Bahasa</button>
                <button class="all-button_satu" @click="$router.push('/proofreading')">Pemeriksaan Akhir</button>
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
                <div style="margin-left: 10px; padding: 10px 30px 0px 0px" v-for="(data, index) in menulisKesimpulanDataSesion.konsepParagraf" :key="index">
                  <p>
                    {{data}}
                  </p>
                </div>
              </div>
            </div>
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
</template>

<script src="./js/revisi.js" />

<style lang="scss" scoped>
// all
.all {
  overflow-x: hidden;
  max-width: 1350px;
  margin: auto;
}
.dua {
  b {
    padding: 10px 0px 0px 10px;
  }
  @media screen and (max-width: 760px) {
    b {
      padding: 10px 0px 0px 10px;
    }
  }
}
// .jarak {
//   @media screen and (max-width: 780px) {
//   }
// }
.response {
  width: 100%;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    padding: 5px 0px 0px 20px;
    width: 100%;
    a {
      padding: 0px 15px 0px 15px;
    }
  }
}
.icon-up-down {
  margin-bottom: 5px; 
  margin-left: 10px;
  @media screen and (max-width: 600px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 760px) {
    font-weight: 30px;
  }
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

// Tips dan Kalimat
.tips {
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
  padding: 8px 0px 0px 5px;
  line-height: 40px;
  @media screen and (max-width:768px) {
    line-height: 30px;    
    padding: 14px 0px 0px 5px;
  }
  &_p {
    font-size: 20px;
  }
}
// end Tips dan Kalimat

// Button Gaya Menulis dll
.all-button {
  line-height: 30px;
  padding: 20px 0px 20px 250px;
  @media  (max-width:768px) {
  padding: 20px 20px 20px 20px;        
  }
  &_satu {
    background-color: #e0e0e0;
    border: none;
    border-radius: 20px;
    width: 15%;
    margin: 0.3%;
    @media screen and (max-width: 768px) {
      padding: 10px 0px 10px 0px;
      width: 100%;
      margin: 0px 0px 10px 0px;
    }
  }
}

.all-button_satu:hover {
  background-color: #f1f6cc;
}

// .all-button {
//   margin-left: 17%;
//   line-height: 30px;
//   &_satu2 {
//     background-color: #f1f6cc;
//     border: none;
//     border-radius: 20px;
//     width: 12%;
//     margin: 0.3%;
//     @media screen and (max-width: 600px) {
//       padding: 10px 0px;
//       width: 90%;
//     }
//   }
//   @media screen and (max-width: 600px) {
//     margin-left: 0%;
//     line-height: 10px;
//   }
// }

// Button Konsep Menulis
.all-button_dua {
  background-color: #e0e0e0;
  border: none;
  border-radius: 20px;
  margin: 0.3%;
  line-height: 30px;
  width: 100px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
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
.tombol {
  margin-left: 45%;
  padding: 5px;
  @media Screen and (max-width: 768px) {
  margin-left: 0px;

    align-items: center;  
    text-align: center;
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

// Konsep Menulis
.content-konsep {
  padding: 30px 200px 30px 250px;
  @media screen and (max-width: 768px) {
    padding: 30px 20px 30px 20px;
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
    height: auto;
    padding: 10px 0px 10px 10px;
    border-radius: 0px 0px 14px 14px;
    @media Screen and (max-width: 780px) {
      width: 100%;
    }
  }
  &_data {
    margin-left: 10px; 
    padding: 10px 30px 0px 0px;
    @media screen and (max-width: 600px) {
      padding: 10px 30px 0px 0px;
    }
  }
}
// End Konsep Menulis

/* Style Modal */
.modal-dialog {
  top: -100px;
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
  @media screen and (max-width: 780px) {
    vertical-align: 0;
    padding: 100px 0px 0px 0px;
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
