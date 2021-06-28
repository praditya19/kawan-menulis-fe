<template>
  <div class="content_mulai_menulis_size">
    <br />
    <img src="@/assets/mulaimenulis.png" alt="logo" class="image" />
    <div class="content_mulai_menulis">
      <div class="content_mulai_menulis_top">
        <h3>Selamat Datang dalam</h3>
        <br />
      </div>
      <div class="content_mulai_menulis_top_teks">
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <div>
      <div class="" style="background-color:#C5DCFF;">
        <div class="content_mulai_menulis_top_container">
          <b-container fluid="md">
            <b-row>
              <b-col cols="4">
                <img
                  src="@/assets/mulai_menulis.png"
                  alt="logo"
                  class="image1"
                />
              </b-col>
              <b-col cols="8">
                <div class="content_mulai_menulis_padding">
                  <br />
                  <p><b>Bacalah petunjuk di bawah terlebih dahulu:</b></p>
                  <div class=""></div>
                  <ol>
                    <li>
                      Situs ini menyediakan latihan interaktif online yang
                      memandu kamu langkah demi langkah melalui pra-menulis,
                      menulis, mengatur, mengedit, menulis ulang, dan
                      menerbitkan.
                    </li>
                    <li>
                      Latiha ini tidak memiliki batas waktu, silahkan
                      mengerjakan sesuai ketersediaan waktumu.
                    </li>
                    <li>
                      Jika kamu keluar di tengah tes, maka seluruh proses
                      latihan dan jawaban akan hilang.
                    </li>
                    <li>
                      Hasil latihan ini dapat kamu peroleh setelah mengisi semua
                      pertanyaan dengan lengkap dan system akan mengirimkannya
                      via email.
                    </li>
                  </ol>
                  <div class="content_mulai_menulis_tombol">
                    <button class="button" @click="mulaiMenulisPage2">
                      <b>Mulai Menulis</b>
                    </button>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/mulaiMenulis" />
<style lang="scss" scoped>
.text {
  text-align: center;
}
.image1 {
  width: 420px;
  height: 600px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    margin-top: 79px;
  }
}
.button {
  background-color: #0a4da3;
  border: none;
  color: black;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: flex-start;
  padding: 17px 10px;
  border-radius: 30px;
  display: flex;
  position: relative;
  width: 190px;
  height: 60px;
  left: calc(50% - 190px / 2 + 87px);
  top: -10px;
  margin-left: -50px;
}
.button:hover {
  background-color: #4fa6ee;
}
.image {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    margin-top: 20%;
  }
}
.content_mulai_menulis {
  &_size {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }
  &_tombol {
    padding: 200px 0px 20px 0px;
    position: absolute;
    top: 300px;
    left: 300px;
    width: 190px;
    height: 200px;
    b {
      color: #f1f1f1;
      margin-left: 35px;
    }
  }
  &_padding {
    font-family: Poppins;
    p {
      padding: 10px 10px;
    }
    li {
      font-size: 25px;
    }
    ol {
      width: 821px;
      height: 329px;
      left: 396px;
      top: 718px;

      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
    }
  }
  &_top {
    margin-left: 420px;
    @media screen and (max-width: 768px) {
      display: inline-block;
      padding: 2% 2%;
      margin-left: 2px;
      text-align: justify;
    }
    h3 {
      padding: 50px 0px 0px 0px;
      color: gray;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
    }
    p {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
    }
    &_container {
      display: flex;
      font-family: Poppins;
      p {
        width: 821px;
        font-size: 33px;
      }
    }
    &_teks {
      h1 {
        padding: 0px 0px 50px 0px;
        font-weight: bold;
        font-size: 75px;
        margin-top: -40px;
      }
      display: flex;
      margin-left: 420px;
      font-family: Arial, Helvetica, sans-serif;
      color: #073a93;
    }
  }
}
</style>
