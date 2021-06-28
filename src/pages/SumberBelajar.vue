<template>
  <div>
    <br />
    <div class="slide">
      <img src="@/assets/simon-berger.png" alt="logo" class="image" />
      <div class="content_sumber-belajar">
        <br />
        <div class="content_sumber-belajar_top">
          <img src="@/assets/Learning-amico 1.png" alt="logo" />
          <div class="content_sumber-belajar_center">
            <h6>
              Sumber Belajar
            </h6>
            <p>
              Temukan beragam berbagai panduan menulis dan beragam konten,<br />
              informasi, dan ide untuk menghasilkan karya tulis.
            </p>
          </div>
        </div>
        <br /><br />
        <div class="content_sumber-belajar_bottom">
          <div class="content_sumber-belajar_bottom_kbbi">
            <img src="@/assets/KBBI.png" />
            <p>KBBI Online</p>
          </div>
          <div class="content_sumber-belajar_bottom_sinonim">
            <img src="@/assets/image 3.png" />
            <p>Sinonim Kata</p>
          </div>
          <div class="content_sumber-belajar_bottom_tesaurus">
            <img src="@/assets/tesaurus.png" />
            <p>Tesaurus</p>
          </div>
          <div class="content_sumber-belajar_bottom_puebi">
            <img src="@/assets/PUEBI.png" />
            <p>PUEBI Elektronik</p>
          </div>
          <div class="content_sumber-belajar_bottom_artikel">
            <img src="@/assets/Tips dan Trik Menulis.png" />
            <p>Artikel</p>
          </div>
          <div class="content_sumber-belajar_bottom_lektur">
            <img src="@/assets/Lektur-ID.png" class="image" />
            <p>Mesin Pencari</p>
          </div>
        </div>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script src="./js/sumberBelajar.js" />

<style lang="scss" scoped>
.slide {
  overflow-x: hidden;
}
.image {
  max-width: 1440px;
  width: 1350px;
  height: 296px;
  margin-top: 27px;
}
.content_sumber-belajar {
  &_top {
    display: flex;
    width: 1000px;
    justify-content: center;
    align-items: center;
    img {
      width: 243px;
      height: 243px;
      margin-left: 400px;
      top: 449px;
    }
    h6 {
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 75px;
      width: 624px;
      height: 100px;
    }
    p {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
      width: 632px;
      height: 66px;
    }
  }
  &_center {
    margin-left: 50px;
  }
  &_bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: 180px;
    max-width: 1000px;
    padding: 0px 20px 0px 20px;
    &_kbbi {
      flex: 200px;
      max-width: 230px;
      padding: 0px 0px 0px 0px;
      @media screen and (max-width: 768px) {
        display: inline-block;
        padding: 20px 250px;
        margin-left: 5px;
      }
      img {
        width: 150px;
        height: 130px;
        margin-left: 38px;
      }
      p {
        margin-left: 10px;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
    }
    &_sinonim {
      flex: 200px;
      max-width: 230px;
      padding: 20px 0px 0px 20px;
      img {
        width: 200px;
        height: 91px;
      }
      p {
        margin-left: 10px;
        margin-top: 15px;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
    }
    &_tesaurus {
      flex: 220px;
      max-width: 230px;
      padding: 20px 0px 0px 20px;
      img {
        border-radius: 14px;
        width: 154px;
        height: 92px;
        margin-left: 38px;
      }
      p {
        margin-left: 40px;
        margin-top: 15px;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
    }
    &_puebi {
      flex: 220px;
      max-width: 230px;
      padding: 20px 0px 0px 20px;
      img {
        width: 170px;
        height: 92px;
        margin-left: 20px;
      }
      p {
        margin-left: 26px;
        margin-top: 15px;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 700;
      }
    }
    &_artikel {
      flex: 200px;
      max-width: 230px;
      margin-left: 230px;
      padding: 20px 0px 0px 15px;
      img {
        width: 170px;
        height: 92px;
        margin-left: 15px;
      }
      p {
        margin-top: 10px;
        margin-right: 15px;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
    }
    &_lektur {
      flex: 200px;
      max-width: 230px;
      margin-left: 20px;
      img {
        margin-top: 27px;
        width: 200px;
        height: 52px;
      }
      p {
        margin-top: 35px;
        margin-right: 15px;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
    }
  }
}
</style>