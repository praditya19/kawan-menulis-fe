<template>
  <div>
    <div class="slide">
      <img src="@/assets/simon-berger.png" alt="logo" class="image" />
      <div class="content_sumber-belajar">
        <!-- <div class="content_sumber-belajar_top">
          <img src="@/assets/Learning-amico 1.png" alt="logo" />
          <div class="content_sumber-belajar_top_center">
            <h6>
              Sumber Belajar
            </h6>
            <p>
              Temukan beragam berbagai panduan menulis dan beragam konten,<br />
              informasi, dan ide untuk menghasilkan karya tulis.
            </p>
          </div>
        </div> -->
        <div class="header">
          <div class="conten_sumber-belajar_header row mt-3">
            <div class="col-md-4">
              <img src="@/assets/Learning-amico 1.png" />
            </div>
            <div class="col-md-8">
              <br />
              <h1>
                <b>Sumber Belajar</b>
              </h1>
              <p>
                Temukan beragam berbagai panduan menulis dan beragam konten,
                informasi, dan ide untuk menghasilkan karya tulis.
              </p>
            </div>
          </div>
        </div>
        <br /><br />
        <div class="content_sumber-belajar_bottom">
          <div
            v-for="(user, index) in learning"
            :key="index"
            class="content_sumber-belajar_bottom_learning"
          >
            <img :src="user.logo" alt="logo" />
            <h6>{{ user.title }}</h6>
          </div>
        </div>
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
  max-width: 100%;
  width: 100%;
  height: 296px;
  margin-top: 100px;
  @media (max-width: 768px) {
    min-height: 100px;
  }
}

.header {
  img {
    margin-left: 230px;
    width: 243px;
    height: 243px;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 75px;
    padding-left: 50px;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 400;
    width: 632px;
    padding-left: 50px;
  }
  @media (max-width: 768px) {
    text-align: center;
    padding: 0px 10px 0px 10px;
    img {
      width: 243px;
      height: 243px;
      margin-left: -0px;
    }
    h1 {
      width: 100%;
      font-size: 60px;
      padding-left: 0px;
    }
    p {
      text-align: justify;
      width: 100%;
      padding-left: 0px;
    }
  }
}

.content_sumber-belajar {
  &_bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0px 200px 88px 200px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    &_learning {
      align-items: center;
      padding: 0px 40px 0px 40px;
      img {
        width: 150px;
        height: 130px;
      }
      h6 {
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
      @media screen and (max-width: 768px) {
        padding: 0px 20px 0px 20px;
      }
    }
  }
}
</style>
