<template>
  <div>
    <br /><br /><br /><br /><br />
    <div>
      
        <!-- Button Tips -->
            <div class="tips1">
            <b-button class="tips1_judul" @click="showModal = true"
              >Tips</b-button
            >
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
                                    Jika ingin mengganti jenis dan topik paragraf, silahkan klik tombol panah kiri.
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
        <h1 class="tips1_kata1">Latihan Menulis</h1>
      </div>
    </div>
    <br />

    <div class="container">
      <div class="steper">
          <img class="steper_image" src="@/assets/icon_stepper/1.png">
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
            <div class="tips1">
            <b-button class="tips1_judul" @click="showModal1 = true"
              >Tips</b-button
            >

            <!-- popup -->
              <div v-if="showModal1 === true">
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
                                Ide lainnya: <br> Cara membuat layang-layang <br> Cara membuat kompos <br> Cara memasak telur dadar <br> Cara membersihkan noda dari pakaian
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal1 = false"
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
            <h6 class="tips_kata">
              Kamu hendak menjelaskan cara melakukan sesuatu yang sangat kamu kuasai.
            </h6>
      </div>      
      
    

    <!-- Cara apa yang ...... -->
    <div class="content-cara">
      <h6>Cara apa yang ingin kamu uraikan itu?</h6>
      <h6>Contoh:</h6>
      <ul>
        <li><h6>Cara membuat kopi hitam yang nikmat</h6></li>
        <li><h6>Cara menanam sayur sawi</h6></li>
        <li><h6>Cara membuat media salindia yang menarik</h6></li>
      </ul>
    </div>
    <br /><br />

    <!-- Gunakan kalimat klausa -->
    <div class="content-form">
      <form>
        <table>
          <tr>
            <label><h6>Gunakan kalimat atau klausa sederhana</h6></label
            ><br />
          </tr>
          <tr>
            <td>
              <input
                style="width:600px"
                type="text"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>

    <br />
    <!-- Button Back OK -->
    <div class="btn-back-ok">
      <a href="/topik">
        <img src="@/assets/back.png" alt="logo" class="img" />
      </a>
      <a href="https://www.google.com/">
        <b-button class="ok">OK</b-button>
      </a>
    </div>
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

// Jenis Paragaf.....
.content-center {
  background: rgba(139, 181, 236, 0.1);
  text-align: center;
  font-size: 16px;
}

.center {
  display: flex;
  max-width: 1440px;
  height: 49px;
  font-size: 16px;
  background-color: rgba(139, 181, 236, 0.1);
  &_paragraf {
    padding: 11px 0px 0px 200px;
  }
  &_topik {
    padding: 11px 0px 0px 70px;
  }
}

// Tombol Tips Content Center
.tips {
  // background: red;
  margin-left: 60px;
  font-size: 16px;
  display: flex;
  &_btn {
    // padding: 11px 0px 0px 200px;
    text-align: center;
    width: 120px;
    border-radius: 10px;
    background: #00a279;
  }
  &_kata {
    padding: 11px 0px 0px 20px;
  }
}
.content-cara {
  // background: red;
  margin-left: 200px;
}

.content-form {
  // background: red;
  margin-left: 200px;
  // width: 100px;
}

.btn-back-ok {
  // background: red;
  margin-bottom: 10px;
  margin-left: 550px;
  .img {
    // margin-left: 10px;
  }
  .ok {
    margin-left: 50px;
    border-radius: 42px;
    width: 120px;
    background: #0a4da3;
  }
}

// popup tips
.ok {
  // background: red;

  .mt-3 {
    // margin-bottom: 10px;
    background: #0a4da3;
    margin: 0px 0px 5px 180px;
    border-radius: 39px;
    width: 108px;
  }
}

// icon checklist
.image-container {
  width: 470px;
  text-align: center;
  // background: red;
}
</style>
