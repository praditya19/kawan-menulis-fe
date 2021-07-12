<template>
  <div>
    <br /><br /><br /><br /><br />
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
                    <div class="modal-body">
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

                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <h1 class="tips1_kata1">Latihan Menulis</h1>
      </div>
    </div>
    <br />

    <div class="container">
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/1.png" />
      </div>
    </div>

    <!-- Jenis Paragraf -->

    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <br />
    <!-- Button Tips -->
    <div class="tips2">
      <b-button class="tips2_judul" @click="showModal2 = true">Tips</b-button>

      <!-- popup -->
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

                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <h6 class="tips2_kata">
        Kamu hendak menjelaskan cara melakukan sesuatu yang sangat kamu kuasai.
      </h6>
    </div>

    <!-- Cara apa yang ...... -->
    <div class="content-cara">
      <h5>Cara apa yang ingin kamu uraikan itu?</h5>
      <h5>Contoh:</h5>
      <ul>
        <li><h5>Cara membuat kopi hitam yang nikmat</h5></li>
        <li><h5>Cara menanam sayur sawi</h5></li>
        <li><h5>Cara membuat media salindia yang menarik</h5></li>
      </ul>
    </div>
    <br /><br />

    <!-- Gunakan kalimat klausa -->
    <form>
      <div class="content-form">
        <table>
          <tr>
            <label><h6>Gunakan kalimat atau klausa sederhana</h6></label
            ><br />
          </tr>
          <tr>
            <td>
              <input
                v-model="form.kalimatSederhana"
                style="width:900px"
                type="text"
                placeholder="Cara Membuat Kopi"
              />
            </td>
          </tr>
        </table>
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
    </form>
  </div>
</template>

<script src="./js/topik2.js"></script>

<style lang="scss" scoped>
// Tombol judul
.tips1 {
  // background: red;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 5px;
    width: 115px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
  &_kata1 {
    padding: 11px 0px 0px 20px;
    // text-align: center;
    font-family: Poppins;
    font-weight: 700;
  }
}

// Kalimat samping tips center
.tips2 {
  // background: red;
  font-size: 16px;
  display: flex;
  align-items: center;
  // justify-content: center;

  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 5px;
    width: 115px;
    margin-left: 100px;
    margin-bottom: 5px;
  }
  &_kata {
    padding: 11px 0px 0px 20px;
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
    // margin-left: 30px;
  }
}

.ok-judul {
  // background: red;

  .mt-judul {
    // margin-bottom: 10px;
    background: #0a4da3;
    margin: 0px 0px 5px 180px;
    border-radius: 39px;
    width: 108px;
  }
}

// icon checklist
.image-container1 {
  width: 470px;
  text-align: center;
  // background: red;
}

// Stepper
.steper {
  text-align: center;
  padding: 10px;
  &_image {
    width: 1000px;
    height: auto;
  }
}

// Stepper 1 -7

.container-progress {
  margin: 100px auto;
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins;
  color: white;
  margin-top: 50px;
  padding: 0;
}

// Jenis Paragaf.....

.center {
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

// Tombol Tips Content Center

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

.kalimat {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
}

.tombol {
  // background: red;
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
  vertical-align: middle;
}

/* End Background Belakang Modal */

// Kalimat bawah tombol Tips kedua
.content-cara {
  font-family: Poppins;
  font-size: 20px;
  // background: red;
  margin-left: 235px;
}

// Gunakan klausa .......
.content-form {
  font-family: Poppins;
  // background: red;
  margin-left: 235px;
  font-size: 20px;
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

<template>
  <div>
    <br /><br /><br /><br /><br />
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
                    <div class="modal-body">
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

                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <h1 class="tips1_kata1">Latihan Menulis</h1>
      </div>
    </div>
    <br />

    <div class="container">
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/1.png" />
      </div>
    </div>

    <!-- Jenis Paragraf -->

    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <br />
    <!-- Button Tips -->
    <div class="tips2">
      <b-button class="tips2_judul" @click="showModal2 = true">Tips</b-button>

      <!-- popup -->
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

                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <h6 class="tips2_kata">
        Kamu hendak menjelaskan cara melakukan sesuatu yang sangat kamu kuasai.
      </h6>
    </div>

    <!-- Cara apa yang ...... -->
    <div class="content-cara">
      <h5>Cara apa yang ingin kamu uraikan itu?</h5>
      <h5>Contoh:</h5>
      <ul>
        <li><h5>Cara membuat kopi hitam yang nikmat</h5></li>
        <li><h5>Cara menanam sayur sawi</h5></li>
        <li><h5>Cara membuat media salindia yang menarik</h5></li>
      </ul>
    </div>
    <br /><br />

    <!-- Gunakan kalimat klausa -->
    <form>
      <div class="content-form">
        <table>
          <tr>
            <label><h6>Gunakan kalimat atau klausa sederhana</h6></label
            ><br />
          </tr>
          <tr>
            <td>
              <input
                v-model="form.kalimatSederhana"
                style="width:900px"
                type="text"
                placeholder="Cara Membuat Kopi"
              />
            </td>
          </tr>
        </table>
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
    </form>
  </div>
</template>

<script src="./js/topik2.js"></script>

<style lang="scss" scoped>
// Tombol judul
.tips1 {
  // background: red;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 5px;
    width: 115px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
  &_kata1 {
    padding: 11px 0px 0px 20px;
    // text-align: center;
    font-family: Poppins;
    font-weight: 700;
  }
}

// Kalimat samping tips center
.tips2 {
  // background: red;
  font-size: 16px;
  display: flex;
  align-items: center;
  // justify-content: center;

  &_judul {
    background-color: #00a279;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 5px;
    width: 115px;
    margin-left: 100px;
    margin-bottom: 5px;
  }
  &_kata {
    padding: 11px 0px 0px 20px;
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
    // margin-left: 30px;
  }
}

.ok-judul {
  // background: red;

  .mt-judul {
    // margin-bottom: 10px;
    background: #0a4da3;
    margin: 0px 0px 5px 180px;
    border-radius: 39px;
    width: 108px;
  }
}

// icon checklist
.image-container1 {
  width: 470px;
  text-align: center;
  // background: red;
}

// Stepper
.steper {
  text-align: center;
  padding: 10px;
  &_image {
    width: 1000px;
    height: auto;
  }
}

// Stepper 1 -7

.container-progress {
  margin: 100px auto;
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins;
  color: white;
  margin-top: 50px;
  padding: 0;
}

// Jenis Paragaf.....

.center {
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

// Tombol Tips Content Center

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

.kalimat {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
}

.tombol {
  // background: red;
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
  vertical-align: middle;
}

/* End Background Belakang Modal */

// Kalimat bawah tombol Tips kedua
.content-cara {
  font-family: Poppins;
  font-size: 20px;
  // background: red;
  margin-left: 235px;
}

// Gunakan klausa .......
.content-form {
  font-family: Poppins;
  // background: red;
  margin-left: 235px;
  font-size: 20px;
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
