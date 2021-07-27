<template>
  <div class="slide">
    <img src="@/assets/Image.png" alt="logo" class="image" />
    <div class="content_tutor">
      <div class="header">
        <div class="content_tutor_header row mt-3">
          <div class="col-md-4 left">
            <img src="@/assets/Ilustration.png" />
          </div>
          <div class="col-md-8 right">
            <h1>
              <b>Temukan Tutor</b>
            </h1>
            <p>
              Jika kamu ingin berdiskusi dan membutuhkan bantuan, para tutor
              siap membantumu dan belajar bersama.
            </p>
          </div>
        </div>
      </div>
      <div class="content_tutor_bottom">
        <div
          class="content_tutor_bottom_profile"
          v-for="(user, index) in peoples"
          :key="index"
        >
          <img :src="user.avatar" alt="logo" />
          <h6>{{ user.name }}</h6>
          <p @click="toEmail(user.email1)">
            <b-link class="kaka">{{ user.email1 }}</b-link>
          </p>
          <p @click="toWa(user.phone)">
            <b-link class="kaka">{{ user.phone }}</b-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/tutor.js"></script>

<style lang="scss" scoped>
.slide {
  overflow: hidden;
  max-width: 1350px;
  margin: auto;
}
.image {
  max-width: 100%;
  width: 100%;
  height: 296px;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: 200px auto;
  }
}
.kaka {
  text-decoration: none;
  color: black;
}
.header {
  img {
    margin-left: 230px;
    width: 304px;
    height: 304px;
  }
  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 75px;
    padding-left: 80px;
  }
  p {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    width: 700px;
    padding-left: 80px;
  }
  @media (max-width: 768px) {
    text-align: center;
    padding: 0px 10px 0px 10px;
    img {
      width: 304px;
      height: 304px;
      margin-left: -0px;
    }
    h1 {
      width: 100%;
      font-size: 50px;
      padding-left: 0px;
    }
    p {
      text-align: justify;
      width: 100%;
      padding-left: 0px;
    }
  }
}

.right {
  padding: 60px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }
}

.content_tutor {
  &_bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0px 100px 80px 100px;
    @media screen and (max-width: 768px) {
      padding: 0px 40px 0px 40px;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    &_profile {
      background-color: #ffffff;
      max-width: 250px;
      margin-left: 60px;
      padding: 10px 5px;
      img {
        margin-left: 50px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
      }
      h6 {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 700;
        margin-top: 15px;
        width: 200px;
        text-align: center;
        margin-top: 2px;
      }
      p {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        width: 200px;
        text-align: center;
        margin-bottom: 5px;
      }
      @media screen and (max-width: 768px) {
        margin-left: 0px;
      }
    }
  }
}
</style>
