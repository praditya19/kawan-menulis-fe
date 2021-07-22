<template>
  <div class="content_mulai_menulis_size">
    <img src="@/assets/mulaimenulis.png" alt="logo" class="image" />
    <div class="content_mulai_menulis">
      <div class="content_mulai_menulis_top">
        <h3>Selamat Datang dalam</h3>
        <h1>Latihan Menulis</h1>
      </div>
    </div>
    <div>
      <div
        class="content_mulai_menulis_top_container"
        style="background: rgba(139, 181, 236, 0.1)"
      >
        <div class="col-md-3">
          <img src="@/assets/mulai_menulis.png" alt="logo" class="image1" />
        </div>
        <div class="col-md-9">
          <div class="content_mulai_menulis_padding">
            <p><b>Bacalah petunjuk di bawah terlebih dahulu:</b></p>
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
                Jika kamu keluar di tengah tes, maka seluruh proses latihan dan
                jawaban akan hilang.
              </li>
              <li>
                Hasil latihan ini dapat kamu peroleh setelah mengisi semua
                pertanyaan dengan lengkap dan system akan mengirimkannya via
                email.
              </li>
            </ol>
            <div class="content_mulai_menulis_tombol">
              <button class="button" @click="mulaiMenulisPage2">
                Mulai Menulis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/mulaiMenulis" />
<style lang="scss" scoped>
.image {
  max-width: 100%;
  width: 100%;
  height: 296px;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: auto;
  }
}

.image1 {
  width: 350px;
  height: 600px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
}

.col-md-3 {
}

.button {
  background-color: #0a4da3;
  border: none;
  color: black;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 30px;
  position: relative;
  width: 190px;
  height: 60px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
}

.button:hover {
  background-color: #4fa6ee;
}

.content_mulai_menulis {
  &_size {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }

  &_tombol {
    padding: 91px 0px 0px 0px;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding-top: 50px;
    }
    b {
      color: #f1f1f1;
      margin-left: 35px;
    }
  }

  &_padding {
    padding: 30px 20px 68px 30px;
    width: 100%;
    @media screen and (max-width: 768px) {
      padding: 0px 10px 68px 10px;
    }
    p {
      padding: 0px 0px 0px 10px;
      @media screen and (max-width: 768px) {
        padding: 20px 10px 0px 10px;
      }
    }
    b {
      font-weight: bold;
      font-size: 30px;
    }
    ol {
      width: 100%;
      height: auto;
      font-size: 20px;
      font-family: Poppins;
      padding-right: 150px;
      @media (max-width: 768px) {
        padding-right: 0px;
      }
    }
  }

  &_top {
    max-width: 100%;
    width: 100%;
    padding: 30px 0px 30px 350px;
    @media screen and (max-width: 768px) {
      padding: 30px 10px 30px 10px;
      text-align: center;
    }
    h3 {
      color: gray;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
    }
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 75px;
      color: #073a93;
      @media (max-width: 768px) {
        font-size: 50px;
      }
    }

    &_container {
      display: flex;
      font-family: Poppins;
      width: 100%;
      p {
        width: 100%;
        font-size: 33px;
      }
      @media (max-width: 768px) {
        display: inline-block;
      }
    }
  }
}
</style>
