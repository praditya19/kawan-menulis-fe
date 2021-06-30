<template>
  <div>
    <br /><br />
    <img src="@/assets/Image.png" alt="logo" class="image" />
    <b-container fluid="xl">
      <div class="content_tutor">
        <div class="content_tutor_top">
          <div>
            <img src="@/assets/Ilustration.png" alt="logo" />
          </div>
          <div>
            <h6>
              Temukan Tutor
            </h6>
            <p>
              Jika kamu ingin berdiskusi dan membutuhkan bantuan, para <br />
              tutor siap membantumu dan belajar bersama.
            </p>
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
            <p>{{ user.email1 }}</p>
            <p>{{ user.email2 }}</p>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script src="./js/tutor.js"></script>

<style lang="scss" scoped>
.tengah {
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
}
.image {
  max-width: 1263px;
  width: 1351px;
  margin-top: 27px;
  height: 296px;
}
.content_tutor {
  &_bawah {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px 0px 180px;
  }
  &_tengah {
    flex: 200px;
    max-width: 200px;
    margin-left: 170px;
    padding: 2% 2%;
    h6 {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 700;
      margin-top: 15px;
      width: 200px;
      text-align: center;
      margin-top: 2px;
    }
    img {
      margin-left: 60px;
      width: 100px;
      height: 100px;
    }
    p {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      width: 200px;
      text-align: center;
    }
  }
  &_tengah1 {
    flex: 200px;
    max-width: 200px;
    margin-left: 130px;
    padding: 2% 2%;
    h6 {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 700;
      margin-top: 15px;
      width: 200px;
      text-align: center;
      margin-top: 2px;
    }
    img {
      margin-left: 50px;
      width: 100px;
      height: 100px;
    }
    p {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      width: 200px;
      text-align: center;
    }
  }
  &_top {
    display: flex;
    width: 990px;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    img {
      width: 304px;
      height: 304px;
    }
    h6 {
      font-family: Poppins;
      font-size: 75px;
      font-weight: 700;
    }
    p {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
    }
  }
  &_bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    &_profile {
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
      }
      background-color: #ffffff;
      flex: 225px;
      max-width: 250px;
      margin-left: 60px;
      padding: 10px 5px;
    }
  }
}
</style>
