<template>
  <div>
    <img src="@/assets/diagnostis.png" alt="logo" class="image" />
    <div class="lebar">
      <!--Slide-->

      <!--artikel -->
      <div class="conten_home">
        <div class="conten_home_top">
          <div class="col-md-12">
            <div class="head">
              <p>
                Selamat! <br />
                Kamu telah berhasil menyelesaikan Tes Diagnostik Kemampuan
                Menulis
              </p>
            </div>
            <div class="text">
              <p>
                Hasil Test Kemampuan :
                <b
                  >{{ studentResultSession.level }} ({{
                    studentResultSession.endScore
                  }})
                </b>
              </p>
              <p>{{ studentResultSession.congratsText }}</p>
            </div>
            <div v-if="studentResultSession.endScore !== 59" class="result ">
              <b-button variant="success" v-on:click="handleSubmit"
                >Download dan Kirim Via Email</b-button
              >
              <b-button variant="primary" href="/mulai-menulis"
                >Mulai Latihan Menulis</b-button
              >
            </div>
            <div v-if="studentResultSession.endScore === 59" class="result2">
              <b-button variant="success" v-on:click="handleSubmit"
                >Kirim Via Email</b-button
              >
              <b-button variant="primary" href="/mulai-menulis"
                >Mulai Latihan Menulis</b-button
              >
              <b-button variant="secondary" href="/tutor"
                >Hubungi Tutor</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/diagnostisHasilTest.js" />
<style lang="scss" scoped="scoped">
.image {
  max-width: 100%;
  width: 100%;
  height: 296px;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: auto;
  }
}

.lebar {
  width: 100%;
  overflow-x: hidden;
}

.conten_home {
  width: 100%;
  &_top {
    display: flex;
    justify-content: center;
    padding: 20px 0px 100px 0px;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
      display: inline-block;
      text-align: justify;
    }

    .head {
      padding: 0px 250px 0px 250px;
      @media (max-width: 768px) {
        padding: 0px 30px 0px 30px;
      }
      p {
        font-family: Poppins;
        font-size: 34px;
        line-height: 51px;
        font-weight: 700;
        text-align: center;
        font-weight: bold;
        @media (max-width: 768px) {
          font-size: 25px;
        }
      }
    }

    .text {
      padding: 10px 200px 10px 200px;
      @media (max-width: 768px) {
        padding: 0px 20px 0px 20px;
      }
      p {
        font-family: Poppins;
        font-style: normal;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        width: 100%;
      }
    }

    .btn-success {
      border: none;
      color: white;
      // padding: 10px 10px;
      text-decoration: none;
      width: 354px;
      height: 60px;
      display: inline-block;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
    }

    .btn-primary {
      border: none;
      color: white;
      padding-top: 17px;
      text-decoration: none;
      width: 354px;
      height: 60px;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
      margin: 0px 50px 0px 50px;
      @media (max-width: 768px) {
        margin: 20px 0px 20px 0px;
      }
    }

    .btn-secondary {
      border: none;
      color: white;
      padding-top: 17px;
      text-decoration: none;
      width: 354px;
      height: 60px;
      display: inline-block;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
    }
  }

  .result {
    width: 100%;
    padding-top: 30px;
    text-align: center;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .result2 {
    width: 100%;
    text-align: center;
    padding-top: 30px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
