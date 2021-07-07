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
              <ValidationObserver ref="observer">
                <b-form
                  slot-scope="{ validate }"
                  @submit.prevent="validate().then(handleSubmit)"
                >
                  <span class="col-xs-12 col-md-8 offset-md-2"
                    >Pertanyaan {{ show.position.order }} dari
                    {{ show.steps.length }}
                  </span>
                  <b-progress
                    :value="show.position.order"
                    :max="show.steps.length"
                    class="mb-3 col-xs-12 col-md-8 offset-md-2 "
                  ></b-progress>
                  <div
                    v-for="(answerData, indexStepper) in answer"
                    :key="indexStepper"
                  >
                    <div v-if="show.form[indexStepper].active">
                      <p>
                        {{ show.position.order }}. {{ answerData.question }}
                      </p>

                      <b-button
                        variant="outline-primary"
                        v-for="answerList in answerData.answers"
                        :key="answerList.id"
                        @click="calc(answerList.id, answerData.id)"
                        >{{
                          huruf[answerList.position - 1] +
                            ". " +
                            answerList.answer
                        }}</b-button
                      >
                    </div>
                  </div>
                  <br />
                  <center>
                    <div v-if="show.position.order !== show.steps.length" class="action">
                      <b-button @click="back()" variant="outline-secondary">
                        <b-icon icon="chevron-left" aria-hidden="true"></b-icon>
                      </b-button>
                      <b-button @click="next()" variant="outline-secondary">
                        <b-icon
                          icon="chevron-right"
                          aria-hidden="true"
                        ></b-icon>
                      </b-button>
                    </div>
                    <div v-if="show.position.order === show.steps.length" class="action_submit">
                      <b-button
                        v-on:click="handleSubmit"
                        class="submit"
                        >Submit</b-button
                      >
                    </div>
                  </center>
                </b-form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script src="./js/diagnostisQuestion.js" />
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
      font-family:  Poppins;
      font-size: 30px;
      width: 900px;
      font-weight: 700;
      text-align: center;
      font-weight: bold;
    }

    .btn-outline-primary {
      color: black;
      width: 100%;
      margin: 4px 20px;
      text-align: left;
      border-radius: 10px;
    }

     .btn-outline-secondary {
      color: black;
      border-radius: 60%;
      margin: 4px 20px;
      text-align: left;
    }

    h1 {
      font-family:  Poppins;
      font-style: normal;
      font-size: 70px;
      text-align: center;
      width: 900px;
      font-weight: bold;
    }

    p {
      font-family:  Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      width: 900px;
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
