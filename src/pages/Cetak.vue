<template>
  <div class="all">
    <div class="head">
      <p>Latihan Menulis</p>
    </div>

    <!-- stepper -->
    <div class="steper">
      <img class="steper_image" src="@/assets/icon_stepper/14.png" />
    </div>

    <!-- tengah -->
    <div class="center">
      <p class="center_paragraf"><strong>Jenis Paragraf:</strong> Deskripsi</p>
      <p class="center_topik">
        <strong>Topik:</strong> Apakah kamu punya kemahiran dalam membuat
        sesuatu? Coba sebutkan satu.
      </p>
    </div>

    <div class="body">
      <div class="col-md-2">
        <img src="@/assets/cetak2.png" alt="logo" class="image2" />
      </div>

      <div class="col-md-10">
        <div class="isi">
          <div>
            <img src="@/assets/cetak.png" alt="logo" class="image" />
          </div>
          <div class="text">
            <p>
              Selamat <strong>Anton</strong>! <br />
              Anda telah menyelesaikan paragraf Anda dan sekarang Anda dapat
              memilih dari opsi ini.
            </p>
          </div>
          <div class="all-button">
            <button class="all-button_satu">Salin</button>
            <button class="all-button_satu">kirim Email</button>
            <button class="all-button_satu" @click="toTopik()">
              Mulai topik lain
            </button>
          </div>

          <!-- Konsep Paragraf -->
          <div class="content-konsep">
            <div class="border">
              <div class="border_konsep">
                <h4>Paragraf</h4>
              </div>
            </div>

            <div class="border_list">
              <div
                v-for="(data, index) in proFeridingDataSesion.konsepParagraf"
                :key="index"
              >
                <p>
                  {{ data }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/cetak.js" />

<style lang="scss" scoped>
// all
.all {
  overflow: hidden;
}

// head
.head {
  padding: 110px 0px 0px 0px;
  font-family: Poppins;
  font-weight: 700;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 110px 5px 0px 5px;
    font-size: 40px;
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
  padding: 11px 0px 0px 200px;
  &_paragraf {
    padding-right: 90px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 11px 20px 0px 20px;
  }
}

.body {
  display: flex;
}

.image2 {
  margin-top: 220px;
  width: 400px;
  height: 410px;
  @media (max-width: 768px) {
    display: none;
    overflow: hidden;
  }
}

.isi {
  padding: 10px 210px 69px 40px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 10px 10px 69px 10px;
  }
}

.image {
  @media (max-width: 768px) {
    margin-left: 0px;
    padding: 0px 50px 30px 50px;
    width: 100%;
    height: auto;
  }
}

.text {
  text-align: left;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  padding-top: 20px;
  margin-left: 10px;
}
// Button Gaya Menulis dll
.all-button {
  padding: 22px 0px 0px 0px;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
  &_satu {
    border: none;
    background: #e0e0e0;
    border-radius: 20px;
    width: 181px;
    height: 37px;
    margin: 0.7%;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
}

.all-button_satu:hover {
  background-color: #f1f6cc;
}
// End Button Gaya Menulis dll

// Tombol OK
.button {
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
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
    padding-top: 8px;
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
// End Tombol OK

// Konsep Menulis
.content-konsep {
  margin-top: 42px;
}

.border {
  background-color: #455a64;
  height: 42px;
  width: 101px;
  border-radius: 7px 7px 0px 0px;
  border: none;
  h4 {
    color: #fff;
    font-size: 16px;
    text-align: center;
    padding-top: 10px;
  }
  &_list {
    display: flex;
    font-family: Poppins;
    background-color: #e0e0e0;
    width: 100%;
    padding: 13px;
    border-radius: 0px 0px 14px 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #030303;
    text-align: left;
  }
}
// End Konsep Menulis
</style>
