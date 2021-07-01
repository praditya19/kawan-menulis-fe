<template>
  <div>
    <br /><br />
    <img src="@/assets/diagnostis.png" alt="logo" class="image" />
    <div class="lebar1">
      <!--Slide-->

      <!--artikel -->
      <b-container fluid="sm">
        <span> {{ show.position.order }}-{{ show.steps.length }} </span>
        <b-progress
          :value="show.position.order"
          :max="show.steps.length"
          class="mb-3"
        ></b-progress>
        <div v-for="(answerData, indexStepper) in answer" :key="indexStepper">
          <div v-if="show.form[indexStepper].active">
            <p>{{ answerData.question }}</p>
            <b-button
              pill
              variant="outline-secondary"
              v-for="answerList in answerData.answers"
              :key="answerList.id"
              >{{ answerList.answer }}</b-button
            >
          </div>
        </div>
        <b-button @click="back()" variant="outline-primary">Back</b-button>
        <b-button @click="next()" variant="outline-primary">Next</b-button>
      </b-container>
    </div>
  </div>
</template>
<script src="./js/diagnostisQuestion.js" />
<style lang="scss" scoped="scoped">
.image {
  width: 1263px;
}
.image1 {
  display: flex;
  width: 550px;
  height: 407px;
  margin-top: 130px;
  margin-left: -48px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    margin-top: 79px;
  }
}
.image2 {
  height: 180px;
  width: 210px;
  margin-left: -170px;
  margin-top: 360px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    margin-top: 79px;
  }
}
.tombol {
  margin: 150px 0px 0px 0px;
  position: absolute;
  top: 200px;
  left: 200px;
}
.lebar {
  width: 1180px;
}
.lebar1 {
  width: 1263px;
  overflow-x: hidden;
}
.padding {
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 110px;
}
.padding1 {
  padding: 40px 0px 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 150px;
  p {
    width: 874px;
  }
}
.button {
  background-color: #00a279;
  border: none;
  color: black;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  width: 150px;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;
  display: flex;
  position: relative;
  margin-left: 170px;
}
.button:hover {
  background-color: #f1f1f1;
}
.button1 {
  background-color: #00a279;
  border: none;
  color: white;
  padding: 10px 10px;
  text-decoration: none;
  width: 300px;
  display: inline-block;
  cursor: pointer;
  border-radius: 30px;
  display: flex;
  position: relative;
  margin-left: 500px;
}
.button1:hover {
  background-color: #f1f1f1;
}
.atas {
  margin-left: -50px;
  h1 {
    padding: 100px 0px 0px 0px;
    width: 655px;
    height: 340px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 75px;
    margin-left: 70px;
  }
  p {
    width: 579px;
    left: 731px;
    top: 423px;
    font-family: Poppins;
    font-style: italic;
    font-weight: normal;
    font-size: 27px;
    line-height: 40px;
    margin-top: -50px;
    margin-left: 70px;
  }
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

    img {
      width: 34px;
      height: 34px;
      @media screen and (max-width: 768px) {
        margin-left: 20px;
      }
    }
    h4 {
      font-family: Poppins;
      font-size: 30px;
      width: 900px;
      font-weight: 700;
      text-align: center;
      font-weight: bold;
    }
    .btn-outline-secondary {
      color: black;
      width: 100%;
      text-align: left;
    }
    h7 {
      font-family: Poppins;
      font-size: 25px;
      font-weight: 700;
      text-align: center;
      font-weight: bold;
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
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      width: 900px;
      font-weight: 500;
    }
  }
  &_foot {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: inline-block;
      padding: 2%;
      margin-left: 2px;
      text-align: justify;
    }
    &_atas {
      width: 1000px;
    }
    h4 {
      font-family: Poppins;
      font-size: 40px;
      font-weight: 700;
      margin-top: 15px;
      text-align: center;
      width: 1058px;
    }
    router-link {
      margin-left: 400px;
    }
  }
  &_how {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: inline-block;
      padding: 2%;
      margin-left: 2px;
      text-align: justify;
    }
    img {
      width: 304px;
      height: 304px;
      @media screen and (max-width: 768px) {
        margin-left: 20px;
      }
    }
    h1 {
      font-family: Poppins;
      font-size: 25px;
      font-weight: 700;
      margin-top: 15px;
      text-align: center;
      font-weight: bold;
    }
    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      width: 800px;
    }
  }
  &_bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: inline-block;
      padding: 10px;
      margin-left: 15px;
    }
    &_quotes {
      h1 {
        background-color: #c5dcff;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
      }
      p {
        background-color: #c5dcff;
        position: absolute;
        width: 432px;
        height: 144px;
        left: 749px;
        top: 990px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
      }
      background-color: #c5dcff;
      flex: 25%;
      max-width: 20%;
      margin-left: 500px;
      padding: 2%;
      @media screen and (max-width: 768px) {
        display: inline-block;
        padding: 2% 30%;
        margin-left: 5px;
      }
    }
    &_apaitu {
      h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 32px;
      }
      p {
        position: absolute;
        width: 432px;
        height: 144px;
        left: 749px;
        top: 900;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
      }
      background-color: #ffffff;
      flex: 25%;
      max-width: 20%;
      margin-left: 5%;
      padding: 2%;
      @media screen and (max-width: 768px) {
        display: inline-block;
        padding: 2% 30%;
        margin-left: 5px;
      }
    }
  }
}
</style>
