<template>
  <div class="all">
    <img src="@/assets/diagnostis.png" alt="logo" class="image" />
    <!--Slide-->

    <!--artikel -->
    <div class="conten_home">
      <div class="conten_home_top">
        <div class="col-md-12">
          <ValidationObserver ref="observer">
            <b-form
              slot-scope="{ validate }"
              @submit.prevent="validate().then(handleSubmit)"
            >
              <div class="soal">
                <span class="col-xs-12 col-md-8 offset-md-2 "
                  >Pertanyaan {{ show.position.order }} dari
                  {{ show.steps.length }}
                </span>
                <b-progress
                  :value="show.position.order"
                  :max="show.steps.length"
                  class="mb-3 col-xs-12 col-md-8 offset-md-2 "
                ></b-progress>
              </div>
              <div
                v-for="(answerData, indexStepper) in answer"
                :key="indexStepper"
                class="body"
              >
                <div v-if="show.form[indexStepper].active">
                  <p>
                    {{ show.position.order }}.
                    <span v-html="answerData.question"></span>
                  </p>
                  <b-button
                    variant="outline-primary"
                    v-for="answerList in answerData.answers"
                    :key="answerList.id"
                    @click="calc(answerList.id, answerData.id), checkingPilih()"
                    >{{
                      huruf[answerList.position - 1] + ". " + answerList.answer
                    }}</b-button
                  >
                </div>
              </div>
              <br />
              <center>
                <div
                  v-if="show.position.order !== show.steps.length"
                  class="action"
                >
                  <a @click="back()" class="kakak">
                    <img src="@/assets/back.png" alt="logo" class="img" />
                  </a>
                  <a @click="next()" class="btn" v-if="isHaven === true">
                    <img src="@/assets/Group1.png" alt="logo" class="img" />
                  </a>
                  <a @click="next()" class="btn" v-if="isActive === true">
                    <img src="@/assets/next.png" alt="logo" class="img" />
                  </a>
                </div>
                <div
                  v-if="show.position.order === show.steps.length"
                  class="action_submit"
                >
                  <b-button
                    v-on:click="handleSubmit"
                    class="submit"
                    v-bind:disabled="answerId.length === 0 ? true : false"
                    >Submit</b-button
                  >
                </div>
              </center>
            </b-form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/diagnostisQuestion.js" />
<style lang="scss" scoped="scoped">
.all {
  max-width: 1350px;
  margin: auto;
}
.kakak {
  padding: 0px 50px 0px 0px;
}
.image {
  max-width: 100%;
  width: 100%;
  height: 296px;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: auto;
  }
}
.tombol {
  margin: 150px 0px 0px 0px;
  position: absolute;
  top: 200px;
  left: 200px;
}

.conten_home {
  width: 100%;
  &_top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    padding: 0px 250px 0px 250px;
    width: 100%;
    @media screen and (max-width: 768px) {
      display: inline-block;
      padding: 0px 50px 0px 50px;
      text-align: justify;
      .soal {
        padding: 0px 60px 0px 60px;
      }
    }

    .soal {
      padding-bottom: 40px;
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

    .btn-outline-primary {
      color: black;
      width: 100%;
      margin: 5px 0px 5px 0px;
      text-align: left;
      border-radius: 10px;
    }

    .btn-outline-secondary {
      color: black;
      border-radius: 60%;
      margin: 4px 20px;
      text-align: left;
    }

    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      width: 100%;
      font-weight: 500;
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
}
</style>
