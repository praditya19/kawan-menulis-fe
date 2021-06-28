<template>
  <div class="header__nav" ref="nav">
    <div class="container">
      <div class="header__nav-block">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="logo" width="80%" height="80%" />
          </router-link>
        </div>
        <div class="header__nav-wrapper">
          <div class="header__nav-wrapper--desktop">
            <template>
              <ul>
                <li>
                  <router-link to="/">Beranda</router-link>
                </li>
                <li>
                  <router-link to="diagnostik">Tes Diagnostik</router-link>
                </li>
                <li>
                  <router-link to="sumber-belajar">Sumber Belajar</router-link>
                </li>
                <li>
                  <router-link to="tutor">Tutor</router-link>
                </li>
                <li>
                  <router-link to="mulai-menulis" type="button" class="button"
                    >Mulai Menulis</router-link
                  >
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header__nav {
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all 0.5s;
  width: 100%;
  left: 0;
  background-color: #0a4da3;
  &-block {
    display: flex;
    flex-direction: row;
  }
  .logo {
    margin-top: 8px;
  }
  &-wrapper {
    text-align: right;
    color: #fff;
    width: 100%;
    padding-left: 20px;
    @media screen and (max-width: 768px) {
      order: 1;
      text-align: left;
      padding-left: 0;
    }
    &--desktop {
      & > ul {
        list-style: none;
        display: inline-block;
        margin: 0;
        padding: 0;

        & > li {
          display: inline-block;
          color: #ffffff;
          padding-left: 10px;
          padding-right: 10px;
          transition: all 0.5s;
          padding-top: 23px;
          vertical-align: top;
          position: relative;
          color: #ffffff;
          .--button {
            padding-top: 50px;
          }
          .checkout-menu {
            font-size: 15px;
            display: block;
          }
          &:last-child {
            padding-right: 0;
          }
          @media screen and (min-width: 768px) {
            & > a,
            .has-submenu {
              color: #ffffff;
              transition: color 0.2s ease;
              position: relative;
              cursor: pointer;
              font-size: 16px;
              padding: 0px 12px;
              text-decoration: none;
              &:hover {
                color: #ffffff;
              }
            }
            &.router-link-exact-active::after {
              position: absolute;
              bottom: -15px;
              left: 0;
              width: 100%;
              height: 5px;
              background: #ffff;
              content: "";
            }
          }
          .button {
            background-color: #00a279;
            border: none;
            color: white;
            padding: 10px 23px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            border-radius: 18px;
            margin-top: -5px;
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .thisDesktop {
    display: none;
  }
}
</style>
