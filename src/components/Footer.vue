<template>
  <div class="footer">
    <!--    <div class="container" v-if="isMobile">-->
    <div class="container thisMobile">
      <div class="row mobile">
        <div class="mobile__footer__menu">
          <a href="/">Beranda</a>
        </div>
        <div class="mobile__footer__menu">
          <a href="/diagnostik">Tes Diagnostik</a>
        </div>
        <div class="mobile__footer__menu">
          <a href="#">Belajar Menulis</a>
        </div>
        <div class="mobile__footer__menu">
          <a href="/sumber-belajar">Sumber Belajar</a>
        </div>
        <div class="mobile__footer__menu">
          <a href="/tutor">Tutor</a>
        </div>
        <div class="mobile__footer__menu">
          <a href="#">Tentang Kami</a>
        </div>
        <div class="mobile__footer__address">
          <div class="mobile__footer__address--text">
            <div class="mobile__footer__address--address">
              Merupakan website yang didesain untuk membantu mahasiswa tingkat
              perguruan tinggi dalam mendukung keterampilan menulis paragraf
              yang baik dan benar.
            </div>
          </div>
        </div>
        <div class="mobile__footer__icon">
          <i class="icon-message"></i>
          <a href="#" target="_top">
            Copyright © 2021. Tim Pengembang Proyek Menulis UPH Teachers
            College. All rights reserved.</a
          >
        </div>
        <div class="mobile__footer__logo">
          <img src="@/assets/logo.png" alt="logo" width="80%" height="80%" />
        </div>
      </div>
    </div>
    <!--    <div class="container" v-else>-->
    <div class="container thisDesktop">
      <div class="row">
        <div class="footer__logo">
          <img src="@/assets/logo.png" alt="logo" width="80%" height="80%" />
        </div>
        <div class="footer__menu">
          <div class="footer__menu--menu">
            <p>
              Merupakan website yang didesain untuk membantu mahasiswa tingkat
              perguruan tinggi dalam mendukung keterampilan menulis paragraf
              yang baik dan benar.
            </p>
          </div>
        </div>
        <div class="footer__beranda">
          <div class="footer__beranda--beranda">
            <router-link to="#"><strong>Beranda</strong></router-link>
          </div>
          <div class="footer__beranda--tesDiagnostik">
            <router-link to="#"> Tes Diagnostik</router-link>
          </div>
          <div class="footer__beranda--belajarMenulis">
            <router-link to="#"> Belajar Menulis</router-link>
          </div>
        </div>
        <div class="footer__belajar">
          <div class="footer__belajar--sumberBelajar">
            <router-link to="/sumber-belajar">Sumber Belajar</router-link>
          </div>
          <div class="footer__belajar--tutor">
            <router-link to="/tutor"> Tutor</router-link>
          </div>
          <div class="footer__belajar--tentangKami">
            <router-link to="#"> Tentang Kami</router-link>
          </div>
        </div>
      </div>
      <div class="footer__end">
        Copyright © 2021. Tim Pengembang Proyek Menulis UPH Teachers College.
        All rights reserved.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  text-align: center;
  text-decoration: none;

  &__footer {
    &__menu {
      margin-top: 30px;
      font-size: 14px;
      line-height: 19px;
      a {
        color: #ffffff;
      }
    }
    &__menu:first-child {
      margin-top: 0;
    }
    &__address {
      &--text {
        width: 60%;
        margin: 30px auto;
        font-family: Poppins;
        font-size: 12px;
        color: #ffffff;
      }
      &--name {
        font-family: Poppins;
        line-height: 130%;
        margin-bottom: 10px;
      }
      &--address {
        line-height: 120.9%;
      }
    }
    &__icon {
      i {
        font-size: 18px;
      }
      a {
        color: #ffffff;
        padding-left: 10px;
      }
      font-size: 12px;
      font-family: Poppins;
      line-height: 120.9%;
      margin-bottom: 20px;
    }
    &__follow {
      padding-top: 20px;
      &--title {
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 20px;
      }
      &--icon {
        font-size: 30px;
        i {
          color: #ffffff;
          margin: 0 20px;
        }
      }
    }
    &__logo {
      margin-top: 40px;
      &--img {
        height: 25px;
      }
    }
  }
}
.footer {
  background-color: #333333;
  color: #ece7ff;
  padding-top: 35px;
  padding-bottom: 35px;
  font-size: 12px;
  font-family: Poppins;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    padding: 30px 0px 30px;
  }
  &__logo {
    float: left;
    width: 17%;
    padding: 0px 0px 0px 0px;
  }
  &__menu {
    float: left;
    width: 17%;
    &--menu {
      color: #ece7ff;
      p {
        width: 289px;
        height: 125px;
        font-family: Poppins;
        font-weight: 400;
        font-size: 15px;
      }
    }
  }
  &__beranda {
    margin-left: 150px;
    float: left;
    width: 20%;
    padding-right: 10px;
    color: #ffffff;
    &--beranda {
      font-style: bold;
      font-size: 17px;
    }
    &--tesDiagnostik {
      font-family: Poppins;
      font-size: 15px;
      line-height: 130%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    &--tesDiagnostik {
      font-family: Poppins;
    }
    &--belajarMenulis {
      display: inline-block;
      font-size: 15px;
      i {
        margin-right: 0px;
        font-size: 20px;
        display: inline-block;
        vertical-align: middle;
      }
    }
    a {
      color: #ece7ff;
      text-decoration: none;
    }
  }
  &__belajar {
    margin-left: 40px;
    float: left;
    width: 20%;
    padding-right: 10px;
    color: #ffffff;
    &--sumberBelajar {
      font-size: 15px;
    }
    &--tutor {
      font-size: 15px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    &--tentangKami {
      font-size: 15px;
    }
    a {
      color: #ece7ff;
      text-decoration: none;
    }
  }
  &__end {
    text-align: center;
    font-size: 15px;
  }
  &__title {
    font-size: 15px;
    margin-bottom: 15px;
    display: block;
    font-weight: bold;
  }
  .col-lg-4 {
    padding: 0px 40px;
    @media screen and (max-width: 768px) {
      padding: 0px 25px;
    }
  }
  &--desc {
    font-size: 15px;
    margin-bottom: 15px;
  }
  &__bottom {
    text-align: center;
    margin-top: 80px;
    img {
      width: 40px;
    }
  }
  .newsletter {
    @media screen and (max-width: 768px) {
      padding-right: 0px;
      margin-bottom: 40px;
    }
    &__input {
      position: relative;
      input {
        border: none;
        background-color: #fff;
        padding: 10px;
        width: 100%;
        color: #929292;
        outline: none;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
        font-size: 15px;
        &:focus {
          border-color: #ffa801;
        }
      }
    }
    &__submit {
      display: inline-block;
      cursor: pointer;
      position: absolute;
      right: 0px;
      top: 0px;
      background-color: #ffa801;
      height: 100%;
      vertical-align: middle;
      padding: 10px 15px;
      font-size: 15px;
      font-weight: bold;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  .school {
    @media screen and (max-width: 768px) {
      padding-right: 0px;
      margin-bottom: 40px;
    }
    &__social {
      margin-top: 20px;
      &--title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      a {
        display: inline-block;
        margin-right: 10px;
        color: #fff;
        @media screen and (max-width: 768px) {
          width: 24%;
          margin-right: 0px;
          text-align: center;
        }
        i {
          transition: all 0.3s ease-in-out;
          font-size: 30px;
          color: #fff;
        }
        &:hover {
          i {
            transform: scale(1.2, 1.2);
          }
        }
      }
    }
  }
  .insight {
    &--title {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 20px;
    }
    a {
      color: #fff;
      text-decoration: underline;
    }
  }
  .contact {
    &__text {
      &-address {
        margin-bottom: 25px;
        strong {
          display: block;
          margin-bottom: 5px;
        }
      }
      &-phone {
        margin-bottom: 10px;
        i {
          font-size: 24px;
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      .email {
        display: inline-block;
        margin-left: 5px;
        color: #fff;
        text-decoration: underline;
      }
      .phone {
        display: inline-block;
        margin-left: 5px;
        color: #fff;
        vertical-align: middle;
      }
    }
  }
}

a,
a:visited {
  color: #ece7ff;
}

.thisMobile {
  display: none;
}
.thisDesktop {
  display: block;
}

@media (max-width: 1200px) {
  .thisMobile {
    display: block;
  }
  .thisDesktop {
    display: none;
  }
}
</style>
