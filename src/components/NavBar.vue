<template>
  <!-- Terbaru -->
  <body>
    <nav>
      <div class="header">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/">
            <img
              src="@/assets/logo.png"
              alt="logo"
              width="147px"
              height="85px"
            />
          </router-link>
        </div>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"
          ><span class="nav-icon"></span
        ></label>

        <!-- Menu -->
        <ul class="menu">
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
      </div>
    </nav>
  </body>
</template>

<style lang="scss" scoped>
body {
  margin: 0;
  font-family: Poppins;
  // background-color: #0a4da3;
}

a {
  color: #fff;
}

nav {
  background-color: #0a4da3;
  position: fixed;
  width: 100%;
  z-index: 99;
}
nav .header {
  position: relative;
  max-width: 1440px;
  padding: 0px 30px;
  height: auto;
  // line-height: 70px;
  margin: auto;
  // display: flex;
  align-items: center;
  justify-content: space-between;
}

.header {
  // background-color: #0a4da3;
  // box-shadow: 1px 1px 4px rgba();
  // position: fixed;
  // width: 100%;
  // z-index: 3;
}

.header ul {
  margin: 2%;
  padding: 0;
  list-style: none;
  overflow: hidden;
  // background-color: #0a4da3;
  // font-size: 20px;
}

.header ul a {
  display: block;
  // outline: 1px solid red;
  padding: 20px;
  // border-right: 1px solid #aaa;
  text-decoration: none;
  height: 20px;
}

.header ul a:hover {
  color: #fff;
}

.header ul li {
  font-size: 16px;
  font-weight: bold;
}

.header .logo {
  float: left;
  display: block;
  padding: 10px 20px;
}

.header .menu {
  clear: both;
  text-align: right;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

.header .menu-icon {
  // border: 1px solid red;
  padding: 50px 20px;
  position: relative;
  float: right;
  cursor: pointer;
  margin: 5px 30px;
}

.header .menu-icon .nav-icon {
  background: #fff;
  display: block;
  height: 2px;
  width: 30px;
  position: relative;
  transition: background 0.2s ease-out;
}

.header .menu-icon .nav-icon:before {
  background: #fff;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  top: 10px;
}

.header .menu-icon .nav-icon:after {
  background: #fff;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  top: -10px;
}

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .nav-icon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .nav-icon:before {
  transform: rotate(-45deg);
  top: 0;
}

.header .menu-btn:checked ~ .menu-icon .nav-icon:after {
  transform: rotate(45deg);
  top: 0;
}

.button {
  background: #00a279;
  border-radius: 42px;
  line-height: 4px;
  margin-top: 10px;
  float: right;
  width: 19%;
}

@media (min-width: 68em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
  .button {
    background: #00a279;
    border-radius: 42px;
    line-height: 4px;
    margin-top: 10px;
    width: 100%;
  }
}
</style>
