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
          <div class="row">
            <div class="col-sm-4">
              <img src="@/assets/mulai_menulis.png" alt="logo" class="image1" />
            </div>
            <div class="col-sm-8">
              <div class="content_mulai_menulis_padding">
                <p><b>Bacalah petunjuk di bawah terlebih dahulu:</b></p>
                <div class="content_mulai_menulis_padding_li"></div>
                <ol>
                  <li>
                    Situs ini menyediakan latihan interaktif online yang memandu
                    kamu langkah demi langkah melalui pra-menulis, menulis,
                    mengatur, mengedit, menulis ulang, dan menerbitkan.
                  </li>
                  <li>
                    Latiha ini tidak memiliki batas waktu, silahkan mengerjakan
                    sesuai ketersediaan waktumu.
                  </li>
                  <li>
                    Jika kamu keluar di tengah tes, maka seluruh proses latihan
                    dan jawaban akan hilang.
                  </li>
                  <li>
                    Hasil latihan ini dapat kamu peroleh setelah mengisi semua
                    pertanyaan dengan lengkap dan system akan mengirimkannya via
                    email.
                  </li>
                </ol>
              </div>
              <div class="content_mulai_menulis_tombol">
                <button class="button" @click="mulaiMenulisPage2">
                  <b>Mulai Menulis</b>
                </button>
              </div>
            </div>
          </div>
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
  width: 400px;
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
  margin-left: -20%;
}
.button:hover {
  background-color: #4fa6ee;
}
.image {
  padding: 30px 0px 0px 0px;
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
    padding: 20% 0px 0px 0px;
    margin-left: 30%;
    width: 190px;
    b {
      color: #f1f1f1;
      margin-left: 35px;
    }
  }
  &_padding {
    font-family:  Poppins;
    margin-left: 1%;
    p {
      padding: 30px 10px;
    }
    b {
      font-weight: bold;
      font-size: 30px;
    }
    ol {
      width: 720px;
      height: 200px;
      font-size: 20px;
      font-family:  Poppins;
    }
  }
  &_top {
    margin-left: 32%;
    max-width: 80%;
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
      font-family:  Poppins;
      font-size: 15px;
      font-weight: 400;
    }
    &_container {
      display: flex;
      font-family:  Poppins;
      p {
        width: 821px;
        font-size: 33px;
      }
    }
    &_teks {
      h1 {
        padding: 0px 0px 50px 0px;
        font-weight: bold;
        font-size: 65px;
        margin-top: -40px;
      }
      display: flex;
      margin-left: 32%;
      font-family:  Poppins;
      color: #073a93;
    }
  }
}
</style>
