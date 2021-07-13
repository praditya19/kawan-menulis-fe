<template>
  <div class="all">
    <div>
      <!-- Button Tips -->
      <div class="tips1">
        <b-button class="tips1_judul" @click="showModal = true">Tips</b-button>
        <!-- popup -->
        <div v-if="showModal === true">
          <transition name="model">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!-- Modal Body -->
                    <!-- <div class="modal-body"> -->
                    <div class="image-container">
                      <img
                        style="width: 40px;height:38.49px;"
                        src="@/assets/checklist.png"
                      />
                    </div>

                    <div class="kalimat">
                      <div style="padding: 0% 0% 0% 12%; width: 85%;">
                        <p>
                          Jika ingin mengganti jenis dan topik paragraf,
                          silahkan klik tombol panah kiri.
                        </p>
                      </div>
                    </div>

                    <div class="tombol">
                      <button class="ok" @click="showModal = false">
                        OK
                      </button>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </transition>
        </div>
        <p class="tips1_kata1">Latihan Menulis</p>
      </div>
    </div>

    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/1.png" />
    </div>

    <!-- Jenis Paragraf -->

    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <!-- Button Tips -->

    <div class="body">
      <div class="col-md-3">
        <div class="tips2">
          <b-button class="tips2_judul" @click="showModal2 = true"
            >Tips</b-button
          >
        </div>
      </div>
      <!-- popup -->
      <div v-if="showModal2 === true">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <!-- Modal Body -->
                  <!-- <div class="modal-body"> -->
                  <div class="image-container">
                    <img
                      style="width: 40px;height:38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat">
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      Ide lainnya: <br />
                      Cara membuat layang-layang <br />
                      Cara membuat kompos <br />
                      Cara memasak telur dadar <br />
                      Cara membersihkan noda dari pakaian
                    </div>
                  </div>

                  <div class="tombol">
                    <button class="ok" block @click="showModal2 = false">
                      OK
                    </button>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Cara apa yang ...... -->
      <div class="col-md-9">
        <div class="content-cara">
          <p class="kata">
            Kamu hendak menjelaskan cara melakukan sesuatu yang sangat kamu
            kuasai.
          </p>
          <h5>Cara apa yang ingin kamu uraikan itu?</h5>
          <h5>Contoh:</h5>
          <ul>
            <li><h5>Cara membuat kopi hitam yang nikmat</h5></li>
            <li><h5>Cara menanam sayur sawi</h5></li>
            <li><h5>Cara membuat media salindia yang menarik</h5></li>
          </ul>

          <!-- Gunakan kalimat klausa -->
          <form>
            <div class="content-form">
              <table>
                <tr>
                  <label><p>Gunakan kalimat atau klausa sederhana</p></label>
                </tr>
                <tr>
                  <td>
                    <input
                      v-model="form.kalimatSederhana"
                      class="form"
                      type="text"
                      placeholder="Cara Membuat Kopi"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
    <br />
    <!-- Button Back OK -->
    <div class="btn-back-ok">
      <a href="/topik">
        <img src="@/assets/back.png" alt="logo" class="img" />
      </a>
      <b-button @click="onSubmit" class="submit_ok" href="/pra-menulis"
        >OK</b-button
      >
    </div>
  </div>
</template>

<script src="./js/topik2.js"></script>

<style lang="scss" scoped>
.all {
  padding-top: 100px;
}

// Tombol judul
.tips1 {
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    // padding: 0px 20px 0px 20px;
    text-align: center;
    padding-left: 50px;
  }
  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    width: 115px;
    @media (max-width: 768px) {
      width: 90px;
      cursor: pointer;
    }
  }

  &_kata1 {
    padding: 20px 20px 0px 20px;
    font-family: Poppins;
    font-weight: 700;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 128%;
    @media (max-width: 768px) {
      padding: 20px 50px 0px 10px;
    }
  }
}

// Kalimat samping tips center
.tips2 {
  padding: 0px 0px 0px 200px;
  font-size: 16px;
  @media (max-width: 768px) {
    padding: 0px 10px 0px 20px;
  }
  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    width: 115px;
    @media (max-width: 768px) {
      width: 70px;
    }
  }
}

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

.body {
  display: flex;
  padding-top: 30px;
  @media screen and (max-width: 768px) {
    padding: 30px 10px 0px 10px;
  }
}

// Jenis Paragaf.....

.center {
  display: flex;
  width: 100%;
  height: auto;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  padding: 11px 0px 0px 0px;
  justify-content: center;
  align-items: center;
  &_topik {
    padding-left: 80px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 11px 20px 0px 20px;
  }
}

// Tombol Tips Content Center

/* Style Modal */

.modal-content {
  background: #e8f1fd;
  width: 100%;
  border-radius: 34px;
  padding: 10px 0px 10px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
/* end style Modal */

/* Style Isi Modal */
.image-container {
  text-align: center;
  /* background: red; */
}

.kalimat {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
}

.tombol {
  /* background: red; */
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

// Kalimat bawah tombol Tips kedua
.content-cara {
  font-family: Poppins;
  width: 100%;
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 0px 10px 0px 0px;
  }
  .kata {
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
  }

  .form {
    width: 800px;
    height: 50px;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
}

// Button OK dan previus
.btn-back-ok {
  // background: red;
  text-align: center;
  margin-bottom: 20px;
}

.submit_ok {
  background-color: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
  margin-left: 80px;
}

.submit_ok:hover {
  background-color: #0a4da3;
}
</style>
