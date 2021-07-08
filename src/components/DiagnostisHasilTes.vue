<template>
  <div>
    <br /><br />
    <img src="@/assets/diagnostis.png" alt="logo" class="image" />
    <div class="lebar">
      <!--Slide-->

      <!--artikel -->
      <b-container fluid="sm">
        <div class="conten_home">
          <div class="conten_home_top">
            <div class="col-md-8">
              <h4>
                Selamat!<br />
                Kamu telah berhasil menyelesaikan Tes Diagnostik Kemampuan
                Menulis
              </h4>
              <br />
              <p>
                Hasil Test Kemampuan : {{ studentResultSession.level }} ({{
                  studentResultSession.endScore
                }})
              </p>
              <p>{{ studentResultSession.congratsText }}</p>
              <div v-if="studentResultSession.endScore !== 59" class="result">
                <center>
                  <b-button variant="success"
                    ><center>Download dan Kirim Via Email</center></b-button
                  >
                  <b-button variant="primary" href="/mulai-menulis"
                    ><center>Mulai Latihan Menulis</center></b-button
                  >
                </center>
              </div>
              <div v-if="studentResultSession.endScore === 59" class="result2">
                <b-button variant="success"
                  ><center>Download dan Kirim Via Email</center></b-button
                >
                <b-button variant="primary" href="/mulai-menulis"
                  ><center>Mulai Latihan Menulis</center></b-button
                >
                <b-button variant="secondary" href="/tutor"
                  ><center>Hubungi Tutor</center></b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script src="./js/diagnostisHasilTest.js" />
<style lang="scss" scoped="scoped">
.image {
  width: 1263px;
}
.tombol {
  margin: 150px 0px 0px 0px;
  position: absolute;
  top: 200px;
  left: 200px;
}
.lebar {
  width: 1263px;
  overflow-x: hidden;
}
.conten_home {
  width: 100%;
  &_top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
      display: inline-block;
      padding: 2%;
      margin-left: 2px;
      text-align: justify;
    }

    .wrapper-progressBar {
      width: 100%;
    }

    .progressBar {
      font-size: 0px;
    }

    .progressBar li {
      list-style-type: none;
      float: left;
      width: 6%;
      position: relative;
      text-align: center;
    }

    .progressBar li:before {
      content: " ";
      line-height: 30px;
      border-radius: 50%;
      width: 0px;
      height: 0px;
      border: 1px solid #ddd;
      display: block;
      text-align: center;
      margin: 0 auto 10px;
      background-color: white;
    }
    .progressBar li:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: #ddd;
      top: 15px;
      left: -50%;
      z-index: -1;
    }

    .progressBar li:first-child:after {
      content: none;
    }

    .progressBar li.active {
      color: dodgerblue;
    }

    .progressBar li.active:before {
      border-color: dodgerblue;
      background-color: dodgerblue;
    }

    .progressBar .active:after {
      background-color: dodgerblue;
    }

    h4 {
      font-family: Poppins;
      font-size: 34px;
      line-height: 51px;
      font-weight: 700;
      text-align: center;
      font-weight: bold;
    }

    .btn-success {
      border: none;
      color: white;
      padding: 10px 10px;
      text-decoration: none;
      width: 251px;
      display: inline-block;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
      margin-left: -100px;
    }

    .btn-primary {
      border: none;
      color: white;
      padding: 10px 10px;
      text-decoration: none;
      width: 251px;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
      margin-left: 100px;
    }

    .btn-secondary {
      border: none;
      color: white;
      padding: 10px 10px;
      text-decoration: none;
      width: 251px;
      display: inline-block;
      cursor: pointer;
      border-radius: 30px;
      position: relative;
      margin-left: 600px;
      bottom: 40px;
    }

    h1 {
      font-family: Poppins;
      font-style: normal;
      font-size: 70px;
      text-align: center;
      width: 900px;
      font-weight: bold;
    }

    p {
      font-family: Poppins;
      font-style: normal;
      font-size: 20px;
      line-height: 30px;
      width: 900px;
      font-weight: 700;
    }
  }

  .action {
    margin-bottom: 40px;
  }

  .action_submit {
    margin-bottom: 40px;
  }

  .submit {
    background-color: blue;
  }

  .result {
    margin-left: 150px;
    margin-bottom: 50px;
    margin-top: 50px;
  }

  .result2 {
     margin-left: 50px;
    margin-bottom: 20px;
    margin-top: 50px;
  }
}
</style>
