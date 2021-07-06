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
          <div class="content_sumber-belajar_bottom_learning">
            <div v-for="(user, index) in learning" :key="index">
              <img :src="user.logo" alt="logo" />
              <h6>{{ user.title }}</h6>
            </div>
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
      font-family:  Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 75px;
      width: 624px;
      height: 100px;
    }
    p {
      font-family:  Poppins;
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
    padding: 0px 20px 0px 20px;
    &_learning {
      display: flex;
      justify-content: space-between;
      padding: 0px 20px 0px 20px;
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
      h6 {
        margin-left: 50px;
        font-family:  Poppins;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
    }
  }
}
</style>
