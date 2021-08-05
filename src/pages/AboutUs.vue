<template>
  <div class="all">
    <div class="head">
      <div class="col-md-6">
        <img src="../assets/AboutUs.png" alt="" class="image" />
      </div>
      <div class="col-md-6 judul">
        <p class="">Tentang kami</p>
      </div>
    </div>
    <div class="body">
      <h3>Mengapa website ini hadir?</h3>
      <p>
        Kemampuan menulis bukanlah keterampilan yang diperoleh secara alami.
        Oleh karena itu, Kawan Menulis hadir khususnya bagi para mahasiswa yang
        memiliki kesulitan dalam kemampuan menulis akademik di Perguruan Tinggi.
        Kawan Menulis menjembatani usaha mahasiswa secara intensional dalam
        mempersiapkan diri untuk menulis paragraf yang baik dan benar melalui
        dua pilihan, yaitu belajar mandiri dan belajar bersama tutor mahasiswa
        yang telah melewati tahapan proses menulis yang baik dan benar.
        Penggunaan teknologi berbasis web seperti ini mampu memfasilitasi
        mahasiswa yang tersebar di seluruh penjuru negeri. Dengan demikian,
        Kawan Menulis memberikan sumbangsih dalam tumbuhkembangnya keterampilan
        menulis mahasiswa sebagai calon pendidik bagi negeri.
      </p>
    </div>
    <div class="profile">
      <div class="profile_body">
        <div v-for="(data, index) in profile" :key="index" class="profile_data">
          <img :src="data.image" alt="logo" class="image_logo" />
          <h6>{{ data.nama }}</h6>
          <ul>
            <li>{{ data.status1 }}</li>
            <li>{{ data.status2 }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="foot_body">
        <h3>Kami berharap, melalui website ini....</h3>
        <p>
          Pengguna website kaman menulis diharapkan dapat meningkatkan kemampuan
          menulis mahasiswa sebagai modal awal untuk membangun keterampilan
          menulis di perguruan tinggi.
        </p>
      </div>
    </div>
  </div>
</template>

<script src="./js/aboutUs.js" />

<style lang="scss" scoped>
.all {
  overflow: hidden;
  max-width: 1350px;
  margin: auto;
  padding-top: 130px;
}

.head {
  display: flex;
  @media screen and (max-width: 768px) {
    display: inline;
  }
}

// image paling atas
.image {
  max-width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  // image profile
  &_logo {
    border-radius: 70px;
    width: 100px;
    height: 100px;
  }
}

.judul {
  font-family: poppins;
  font-weight: 700;
  font-size: 75px;
  line-height: 96px;
  padding: 130px 0px 0px 50px;
  @media screen and (max-width: 768px) {
    padding: 0px 0px 0px 0px;
    font-size: 50px;
    text-align: center;
    line-height: 70px;
  }
}

.body {
  font-family: poppins;
  width: 60%;
  margin: auto;
  padding: 20px 0px 20px 0px;
  @media screen and(max-width:768px) {
    padding: 20px 20px 20px 20px;
    width: auto;
  }
  h3 {
    text-align: center;
    line-height: 37px;
    font-size: 25px;
    font-weight: bold;
  }
  p {
    text-align: justify;
    font-size: 20px;
  }
}

.profile {
  background: #e5e5e5;
  padding: 50px 0px 36px 0px;
  @media screen and(max-width:768px) {
    padding: 20px 20px 20px 20px;
    display: inline-block;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  &_body {
    width: 60%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    @media screen and(max-width:768px) {
      width: 80%;
    }
  }
  &_data {
    text-align: center;
    width: 50%;
    height: 50%;
    padding: 20px 0px 0px 0px;
    @media screen and(max-width:768px) {
      width: 100%;
      height: 100%;
    }
    h6 {
      font-weight: 700;
      size: 18;
      width: 100%;
    }
    ul {
      text-align: center;
      list-style-position: inside;
      width: 100%;
    }
    li {
      font-size: 14px;
    }
  }
}

.foot {
  background: rgba(147, 190, 255, 0.54);
  padding: 20px 0px 20px 0px;
  @media screen and(max-width:768px) {
    padding: 20px 20px 20px 20px;
  }
  &_body {
    width: 60%;
    margin: auto;
    @media screen and(max-width:768px) {
      width: auto;
    }
  }
  h3 {
    font-size: 28px;
    font-weight: bold;
  }
  p {
    font-size: 20px;
  }
}
</style>
