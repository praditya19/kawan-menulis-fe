<template>
  <div class="content">
    <br />
    <div class="content_padding">
      <br />
      <div class="content_padding_header">
        <h1><b>Latihan Menulis</b></h1>
      </div>
      <div class="steper">
        <img class="steper_image" src="@/assets/icon_stepper/2.png" />
      </div>
    </div>
    <div
      style="background-color:rgba(139, 181, 236, 0.1); height: 60px; width: 100%px;"
    >
      <div class="row">
        <div class="col-sm-4">
          <div class="content_padding_paragraf">
            <p><b>Jenis Paragraf: </b>&nbsp;{{ jenisTopics.jenisParagraf }}</p>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="content_padding_paragraf_right">
            <p><b>Topik: </b>&nbsp;{{ jenisTopics.topik }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- popup -->
    <div v-if="showModal === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-body">
                  <div class="image-container">
                    <img
                      style="width: 40px;height:38.49px;"
                      src="@/assets/checklist.png"
                    />
                  </div>

                  <div class="kalimat">
                    <div style="padding: 0% 0% 0% 12%; width: 85%;">
                      <p
                        v-for="(details, index) in pramenulisGuides"
                        :key="index"
                      >
                        <span v-if="index === 0" v-html="details.tips"></span>
                      </p>
                    </div>
                  </div>

                  <div class="tombol">
                    <button class="ok" block @click="showModal = false">
                      OK
                    </button>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- Screen1 -->
    <div class="container_bawah">
      <div class="content_padding_tulis" v-if="pramenulisPage1 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
            </div>
          </div>
          <!-- Kalimat Samping Button Tips -->
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 0" v-html="details.guide"></span>
                  </p>
                </div>
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 0" v-html="details.input"></span>
                  </p>
                </div>
              </div>
              <div style="padding: 5px 0px 10px 0px">
                <b-form-input v-model="dataForm.menulisPage1"></b-form-input>
              </div>

              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis1Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
              <div style="margin-left: -23px; margin-top: -40px;">
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div
                              class="dua"
                              v-for="(dataSesion,
                              index) in topicDataSesion.resultMenulis"
                              :key="index"
                            >
                              <h5>
                                <li>
                                  &nbsp; &nbsp; {{ dataSesion.pramenulis }}
                                </li>
                              </h5>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
      <!-- popup -->
      <div v-if="showModal2 === true">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <!-- Modal Body -->
                  <div class="modal-body">
                    <div class="image-container">
                      <img
                        style="width: 40px;height:38.49px;"
                        src="@/assets/checklist.png"
                      />
                    </div>

                    <div class="kalimat">
                      <div style="padding: 0% 0% 0% 12%; width: 85%;">
                        <p
                          v-for="(details, index) in pramenulisGuides"
                          :key="index"
                        >
                          <span v-if="index === 1" v-html="details.tips"></span>
                        </p>
                      </div>
                    </div>

                    <div class="tombol">
                      <button class="ok" block @click="showModal2 = false">
                        OK
                      </button>
                    </div>

                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- Screen2 -->
      <div class="content_padding_tulis" v-if="pramenulisPage2 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal2 = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
            </div>
          </div>
          <!-- Kalimat Samping Button Tips -->
          <div class="col-sm-10">
            <div class="content_padding_tulis_right" style="margin-top:0px">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 1" v-html="details.guide"></span>
                  </p>
                </div>
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 1" v-html="details.input"></span>
                  </p>
                </div>
              </div>
              <div style="padding: 5px 0px 10px 0px">
                <b-form-input
                  v-model="dataForm.menulisPage2"
                  id="feedback-user"
                ></b-form-input>
              </div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis2Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
              <div style="margin-left: -23px; margin-top: -40px;">
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div
                              class="dua"
                              v-for="(dataSesion,
                              index) in topicDataSesion.resultMenulis"
                              :key="index"
                            >
                              <h5>
                                <li>
                                  &nbsp; &nbsp; {{ dataSesion.pramenulis }}
                                </li>
                              </h5>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      <!-- screen 3 -->
      <div class="content_padding_tulis" v-if="pramenulisPage3 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal3 = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
              <!-- popup -->
              <div v-if="showModal3 === true">
                <transition name="model">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <!-- Modal Body -->
                          <div class="modal-body">
                            <div class="image-container">
                              <img
                                style="width: 40px;height:38.49px;"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
                              <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                <p
                                  v-for="(details, index) in pramenulisGuides"
                                  :key="index"
                                >
                                  <span
                                    v-if="index === 2"
                                    v-html="details.tips"
                                  ></span>
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal3 = false"
                              >
                                OK
                              </button>
                            </div>

                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 2" v-html="details.guide"></span>
                  </p>
                </div>
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 2" v-html="details.input"></span>
                  </p>
                </div>
              </div>
              <div style="padding: 5px 0px 10px 0px">
                <b-form-input
                  v-model="dataForm.menulisPage3"
                  id="feedback-user"
                ></b-form-input>
              </div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis3Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
                <div style="margin-left: -23px; margin-top: -40px;">
                  <div class="row">
                    <div class="col-sm-4">
                      <div
                        style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                      >
                        <div class="content_padding_tulis_catatan">
                          <h4><b>Catatan Pra Menulis</b></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                  >
                    <div style="margin-left:30px; ">
                      <b-form-group>
                        <div>
                          <div class="col-sm-12">
                            <ul>
                              <div
                                class="dua"
                                v-for="(dataSesion,
                                index) in topicDataSesion.resultMenulis"
                                :key="index"
                              >
                                <h5>
                                  <li>
                                    &nbsp; &nbsp; {{ dataSesion.pramenulis }}
                                  </li>
                                </h5>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </b-form-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      <!-- screen4 -->
      <div class="content_padding_tulis" v-if="pramenulisPage4 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal4 = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
              <!-- popup -->
              <div v-if="showModal4 === true">
                <transition name="model">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <!-- Modal Body -->
                          <div class="modal-body">
                            <div class="image-container">
                              <img
                                style="width: 40px;height:38.49px;"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
                              <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                <p
                                  v-for="(details, index) in pramenulisGuides"
                                  :key="index"
                                >
                                  <span
                                    v-if="index === 3"
                                    v-html="details.tips"
                                  ></span>
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal4 = false"
                              >
                                OK
                              </button>
                            </div>

                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 3" v-html="details.guide"></span>
                  </p>
                </div>
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 3" v-html="details.input"></span>
                  </p>
                </div>
              </div>
              <div style="padding: 5px 0px 10px 0px">
                <b-form-input
                  v-model="dataForm.menulisPage4"
                  id="feedback-user"
                ></b-form-input>
              </div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis4Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
              <div style="margin-left: -23px; margin-top: -40px;">
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div
                              class="dua"
                              v-for="(dataSesion,
                              index) in topicDataSesion.resultMenulis"
                              :key="index"
                            >
                              <h5>
                                <li>
                                  &nbsp; &nbsp; {{ dataSesion.pramenulis }}
                                </li>
                              </h5>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      <!-- screen 5 -->
      <div class="content_padding_tulis" v-if="pramenulisPage5 === true">
        <div class="row">
          <div class="col-sm-2">
            <div class="button_tombol">
              <b-button class="button" @click="showModal5 = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
              <!-- popup -->
              <div v-if="showModal5 === true">
                <transition name="model">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <!-- Modal Body -->
                          <div class="modal-body">
                            <div class="image-container">
                              <img
                                style="width: 40px;height:38.49px;"
                                src="@/assets/checklist.png"
                              />
                            </div>

                            <div class="kalimat">
                              <div style="padding: 0% 0% 0% 12%; width: 85%;">
                                <p
                                  v-for="(details, index) in pramenulisGuides"
                                  :key="index"
                                >
                                  <span
                                    v-if="index === 4"
                                    v-html="details.tips"
                                  ></span>
                                </p>
                              </div>
                            </div>

                            <div class="tombol">
                              <button
                                class="ok"
                                block
                                @click="showModal5 = false"
                              >
                                OK
                              </button>
                            </div>

                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 4" v-html="details.guide"></span>
                  </p>
                </div>
                <div class="content_padding_tulis_right_paragraf">
                  <p v-for="(details, index) in pramenulisGuides" :key="index">
                    <span v-if="index === 4" v-html="details.input"></span>
                  </p>
                </div>
              </div>
              <div style="padding: 5px 0px 10px 0px">
                <b-form-input
                  v-model="dataForm.menulisPage5"
                  id="feedback-user"
                ></b-form-input>
              </div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis5Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
              <div style="margin-left: -23px; margin-top: -40px;">
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div
                              class="dua"
                              v-for="(dataSesion,
                              index) in topicDataSesion.resultMenulis"
                              :key="index"
                            >
                              <h5>
                                <li>
                                  &nbsp; &nbsp; {{ dataSesion.pramenulis }}
                                </li>
                              </h5>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
      <!-- popup -->
      <div v-if="showModal6 === true">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <!-- Modal Body -->
                  <div class="modal-body">
                    <div class="image-container">
                      <img
                        style="width: 40px;height:38.49px;"
                        src="@/assets/checklist.png"
                      />
                    </div>
                    <div class="kalimat">
                      <div style="padding: 0% 0% 0% 12%; width: 85%;">
                        <p>
                          Catatan yang telah kamu buat dapat membantu kamu
                          berpikir tentang topikmu. Jika kamu memiliki lebih
                          banyak ide, kamu dapat menambahkannya ke daftar
                          catatan setelah Anda menulis kalimat utama pada tahap
                          selanjutnya.
                        </p>
                      </div>
                    </div>
                    <div class="tombol">
                      <button class="ok" block @click="showModal6 = false">
                        OK
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- screen6 -->
      <div class="content_padding_tulis" v-if="pramenulisPage6 === true">
        <div class="row">
          <div class="col-sm-1">
            <div class="button_tombol">
              <b-button class="button" @click="showModal6 = true">
                <div class="button_tombol_margin">
                  <b>TIPS</b>
                </div>
              </b-button>
            </div>
          </div>
          <div class="col-sm-11" style="padding: 0px 0px 0px 50px">
            <div class="content_padding_tulis_right">
              <div class="col-sm-12">
                <div class="content_padding_tulis_right_paragraf">
                  <p>
                    Saat ini kamu memiliki 5 Ide dalam Catatan Pra Menulis.
                  </p>
                </div>
                <div class="content_padding_tulis_right_paragraf">
                  <p style="width: 900px">
                    Jika kamu ingin menambahkan ide yang lain, kamu dapat
                    menambahkannya kemudian
                  </p>
                  <p>
                    pada tahapan selanjutnya.
                  </p>
                </div>
              </div>
              <div style="padding: 10px 0px 10px 0px"></div>
              <div class="col-sm-12">
                <div class="button2_tombol2" @click="pramenulis6Next">
                  <button class="button2" type="submit">
                    <b>OK</b>
                  </button>
                </div>
              </div>
              <div style="margin-left: -23px; margin-top: -40px;">
                <div class="row">
                  <div class="col-sm-4">
                    <div
                      style="background-color:#484c52; height: 48px; width: 240px; border-radius: 20px 20px 0px 0px;"
                    >
                      <div class="content_padding_tulis_catatan">
                        <h4><b>Catatan Pra Menulis</b></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="background-color:#c1c8d3;  width: 730px; padding:13px; border-radius: 0px 0 30px 30px;"
                >
                  <div style="margin-left:30px; ">
                    <b-form-group>
                      <div>
                        <div class="col-sm-12">
                          <ul>
                            <div
                              class="dua"
                              v-for="(dataSesion,
                              index) in topicDataSesion.resultMenulis"
                              :key="index"
                            >
                              <h5>
                                <li>
                                  &nbsp; &nbsp; {{ dataSesion.pramenulis }}
                                </li>
                              </h5>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/praMenulis.js" />

<style lang="scss" scoped>
.button2 {
  background-color: #0a4da3;
  border: none;
  color: rgb(243, 237, 237);
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: flex-start;
  // padding: 17px 10px;
  border-radius: 30px;
  display: flex;
  position: relative;
  max-width: 990px;
  width: 130px;
  height: 44px;
  // left: calc(50% - 190px / 2 + 87px);
  top: -10px;
  align-items: center;
  margin-left: 200px;
  b {
    // padding: 0% 3% 0% 3%;
    color: #f1f1f1;
    margin: auto;
    font-size: 20px;
  }
  &_tombol2 {
    padding: 40px 0px 0px 0px;
    left: 300px;
    width: 190px;
    height: 200px;
    margin-left: 0px;
  }
}
.button2:hover {
  background-color: #0a4da3;
}
.button3 {
  background-color: #0a4da3;
  border: none;
  color: rgb(243, 237, 237);
  text-decoration: none;
  align-items: center;
  border-radius: 30px;
  max-width: 990px;
  width: 130px;
  height: 55px;
  left: calc(50% - 190px / 2 + 87px);
  margin-left: 200px;
  b {
    align-items: center;
    color: #f1f1f1;
    font-size: 28px;
    font-family: Poppins;
  }
  &_tombol3 {
    padding: 60px 0px 0px 0px;
    margin-left: 25%;
    margin-bottom: -70px;
  }
}
.button3:hover {
  background-color: #4e65e7;
}
.dua {
  padding: 10px 0px 0px 0px;
  text-align: justify;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.button {
  background-color: #00a279;
  border: none;
  color: black;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  align-items: center;
  padding: 0px 27px 0px 0px;
  border-radius: 10px;
  display: flex;
  max-width: 990px;
  width: 120px;
  height: 40px;
  // margin-left: 45px;
  margin-top: -25px;
  &_catatan {
    height: 45px;
    max-width: 300px;
    color: rgb(5, 4, 4);
  }
  &_tombol {
    padding: 40px 0px 0px 0px;
    position: absolute;
    width: 190px;
    height: 100px;
    margin-left: -50px;
    b {
      color: #f1f1f1;
      margin-left: 100%;
    }
    &_margin {
      b {
        text-align: center;
        align-items: center;
      }
      color: black;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      align-items: center;
      margin-left: 13%;
    }
  }
}
.button:hover {
  background-color: #00a279;
}

.content_padding_tulis_right_paragraf p {
  font-size: 20px;
  // background: red;
  margin-top: -10px;
}

// Stepper 1 -7
.container {
  width: 100%;
  &_bawah {
    padding: 20px 0px 180px 0px;
    margin-left: 17%;
  }
}

// Stepper
.steper {
  text-align: center;
  // background:red;
  padding: 10px;
  &_image {
    width: 1000px;
    height: auto;
  }
}

// Jenis Paragraf .....
.jenis {
  background-color: #c5dcff;
  height: 50px;
  width: 100%px;
}

/* Style Modal */
.modal-dialog {
  top: -100px;
  left: auto;
}

.modal-content {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
}

.modal-body {
  background: #e8f1fd;
  width: 500px;
  border-radius: 34px;
}

/* end style Modal */

/* Style Isi Modal */
.image-container {
  text-align: center;
  /* background: red; */
}

.kalimat {
  font-family: Poppins;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  /* background: red; */
}

.tombol {
  /* background: red; */
  text-align: center;
  padding: 5px;
}

.ok {
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 108px;
  height: 32.71px;
  color: #fff;
  font-family: Poppins;
}

/* end style isi modal */

/* Background belakang modal */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

/* End Background Belakang Modal */

.content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  @media screen and (max-width: 990) {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  &_padding {
    padding: 5px 0px;
    &_tulis {
      padding: 15px 0px 10px 0px;
      &_catatan {
        color: #f1f1f1;
        h4 {
          font-family: Poppins;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          padding: 12px 0px 8px 0px;
        }
      }
      &_right {
        max-width: 750px;
        width: auto;
        height: auto;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 23px;
        line-height: 30px;
        margin-left: -90px;
        margin-top: 10px;
        @media screen and (max-width: 768px) {
          margin-left: -30px;
        }
        &_paragraf {
          padding: 20px 0px 0px 0px;
          label {
            font: 1rem "Fira Sans", sans-serif;
          }
          input {
            margin: 0.4rem;
          }
          &_bawah {
            margin-bottom: -90px;
          }
        }
      }
    }
    &_paragraf {
      padding: 15px 0px 10px 0px;
      margin-left: 40%;
      p {
        font-size: 17px;
      }
      &_right {
        padding: 15px 0px 10px 0px;
        margin-left: 10%;
        p {
          font-size: 17px;
        }
      }
    }
    &_header {
      margin-top: 70px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      margin-left: 30%;
      h1 {
        font-weight: bolder;
        font-size: 47px;
        margin-left: 10%;
      }
    }
    &_stemper {
      padding: 20px;
      align-items: center;
      margin-left: 20px;
    }
  }
}
// Stepper 1 -7

.container-progress {
  margin: 100px auto;
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins;
  color: white;
  margin-top: 50px;
  padding: 0;
}
</style>
