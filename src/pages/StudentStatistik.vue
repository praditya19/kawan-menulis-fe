<template>
  <div class="all">
    <div class="center" v-if="tesla === true">
      <img class="image_ukuran" src="@/assets/Statistics-amico.png" />
      <div class="tombol">
        <button class="ok" block @click="goToModal()">
          <b>Lihat statistik Lengkap</b>
        </button>
      </div>
    </div>
    <div v-if="tesla === false">
      <img class="image-empety" src="@/assets/empety.png" />
    </div>
    <!-- modal -->
    <div v-if="statistik === true">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Body -->
                <div class="modal-atas">
                  <h3>Student actions</h3>
                  <a @click="cancle()" class="close-popup">&times;</a>
                </div>
                <div class="modal-tengah">
                  <div style="padding: 20px 20px 20px 20px">
                    <div class="jumbotron">
                      <div style="padding: 15px 0px 10px 20px">
                        <div class="row">
                          <div class="col-md-6">
                            <table class="tabel-kiri">
                              <tr>
                                <td>
                                  <b>Name&nbsp;</b>
                                </td>
                                <td><b>:</b></td>
                                <td>
                                  &nbsp;
                                  <font
                                    v-for="(studentStatistik,
                                    index) in studentStatistik"
                                    :key="index"
                                    ><span
                                      v-if="index === 0"
                                      v-html="studentStatistik.student.name"
                                    ></span
                                  ></font>
                                </td>
                              </tr>
                              <br />
                              <tr>
                                <td>
                                  <b>NIM&nbsp;&nbsp;&nbsp;&nbsp;</b>
                                </td>
                                <td><b>:</b></td>
                                <td>
                                  &nbsp;
                                  <font
                                    v-for="(studentStatistik,
                                    index) in studentStatistik"
                                    :key="index"
                                    ><span
                                      v-if="index === 0"
                                      v-html="studentStatistik.student.nim"
                                    ></span
                                  ></font>
                                </td>
                              </tr>
                            </table>
                          </div>
                          <div class="col-md-4">
                            <table class="tabel-kanan">
                              <tr>
                                <td>
                                  <b>Email&nbsp;&nbsp; </b>
                                </td>
                                <td><b>:</b></td>
                                <td>
                                  <font
                                    v-for="(studentStatistik,
                                    index) in studentStatistik"
                                    :key="index"
                                    ><span
                                      style="margin-left: 10px"
                                      v-if="index === 0"
                                      v-html="studentStatistik.student.email"
                                    ></span
                                  ></font>
                                </td>
                              </tr>
                              <br />
                              <tr>
                                <td>
                                  <b>PRODI</b>
                                </td>
                                <td><b>:</b></td>
                                <td>
                                  &nbsp;
                                  <font
                                    v-for="(studentStatistik,
                                    index) in studentStatistik"
                                    :key="index"
                                    ><span
                                      v-if="index === 0"
                                      v-html="studentStatistik.student.prodi"
                                    ></span
                                  ></font>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style="
                        text-align: right;
                        aling-item: right;
                        padding: 30px 20px 0px 20px;
                      "
                    >
                      <label class="label" for="paginations"
                        >Items per page :&nbsp;</label
                      >
                      <b-form-select
                        v-model="selected"
                        class="mb-3"
                        id="paginations"
                        style="height: 32px; width: 50px"
                      >
                        <!-- These options will appear after the ones from 'options' prop -->
                        <b-form-select-option :value="null" disabled hidden
                          >5</b-form-select-option
                        >
                        <b-form-select-option value="5">5</b-form-select-option>
                        <b-form-select-option value="10"
                          >10</b-form-select-option
                        >
                      </b-form-select>
                    </div>
                    <!-- Table Bawah -->
                    <div class="table">
                      <hr />
                      <b-table-simple sticky-header hover responsive>
                        <b-tr>
                          <b-th class="th" style="width: 80px">No</b-th>
                          <b-th class="th" style="width: 150px"
                            >Paragraphtype</b-th
                          >
                          <b-th class="th" style="width: 250px">Period</b-th>
                          <b-th class="th">Duration</b-th>
                          <!-- <b-th class="th"></b-th> -->
                        </b-tr>
                        <b-tbody>
                          <b-tr
                            v-for="(studentStatistik, index) in duration"
                            :key="index"
                          >
                            <b-td>{{ studentStatistik.no }}</b-td>
                            <b-td>{{ studentStatistik.paragraphType }}</b-td>
                            <b-td
                              ><b>Start : </b
                              >{{
                                new Date(studentStatistik.startDate).getDate()
                              }}/{{
                                new Date(
                                  studentStatistik.startDate
                                ).getMonth() + 1
                              }}/
                              {{
                                new Date(
                                  studentStatistik.startDate
                                ).getFullYear()
                              }}&nbsp;&nbsp;{{
                                new Date(studentStatistik.startDate).getHours()
                              }}:{{
                                new Date(
                                  studentStatistik.startDate
                                ).getMinutes()
                              }}:{{
                                new Date(
                                  studentStatistik.startDate
                                ).getSeconds()
                              }}
                              <br />
                              <b>End : </b>
                              {{
                                new Date(studentStatistik.endDate).getDate()
                              }}/{{
                                new Date(studentStatistik.endDate).getMonth() +
                                  1
                              }}/
                              {{
                                new Date(
                                  studentStatistik.endDate
                                ).getFullYear()
                              }}&nbsp;&nbsp;{{
                                new Date(studentStatistik.endDate).getHours()
                              }}:{{
                                new Date(studentStatistik.endDate).getMinutes()
                              }}:{{
                                new Date(studentStatistik.endDate).getSeconds()
                              }}
                            </b-td>
                            <b-td>
                              {{ studentStatistik.durations.days }} Days,

                              {{ studentStatistik.durations.hours }} Hours,

                              {{ studentStatistik.durations.minutes }} Minutes

                              {{ studentStatistik.durations.seconds }} Seconds
                            </b-td>
                            <b-td
                              style="
                                text-align: right;
                                align-item: right;
                                justify-content: right;
                              "
                            >
                              <div v-if="show === true && index === mark">
                                <b-button
                                  variant="outline-success"
                                  @click="handleOpen()"
                                  >Hide</b-button
                                >
                              </div>
                              <div v-if="show === true && index !== mark">
                                <b-button
                                  variant="outline-success"
                                  @click="handleOpen(index)"
                                  >Show</b-button
                                >
                              </div>
                              <div v-if="show === false && index === mark">
                                <b-button
                                  variant="outline-success"
                                  @click="handleOpen(index)"
                                  >Show</b-button
                                >
                              </div>
                              <div v-if="show === false">
                                <b-button
                                  variant="outline-success"
                                  @click="handleOpen(index)"
                                  >Show</b-button
                                >
                              </div>
                            </b-td>
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                    </div>
                    <br />
                    <div v-if="show === true">
                      <table cellspacing="0" cellpadding="3">
                        <tr>
                          <td style="width: 200px"><b>Topic</b></td>
                          <td>:</td>
                          <td>{{ topic }}</td>
                        </tr>
                        <tr>
                          <td style="width: 200px"><b>Final Result</b></td>
                          <td>:</td>
                          <td><br />{{ message }}</td>
                        </tr>
                      </table>
                    </div>
                    <br />
                    <div class="kanan">
                      <b-button style="" variant="secondary" @click="cancle()"
                        >Cancel</b-button
                      >
                      &nbsp;
                      <b-button
                        style="background-color: #47b139; width: 50px"
                        @click="ok()"
                        >OK</b-button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- End -->
  </div>
</template>

<script src="./js/studentStatistik.js" />

<style lang="scss" scoped>
.image {
  &_ukuran {
    width: 410px;
    padding: 0px 0px 20px 0px;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
    @media screen and (max-width: 320px) {
      padding: 100px 0px 0px 0px;
      width: 100%;
    }
  }
}
.image-empety {
  width: 200px;
  height: 500px;
}
// all
.all {
  overflow-x: hidden;
  max-width: 1350px;
  margin: auto;
  padding: 120px 0px 0px 0px;
}
// End Konsep Menulis
.center {
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0px 40px;
  @media screen and (max-width: 500px) {
    padding: 0px 10px 0px 10px;
  }
}

// modal
.modal-dialog {
  background-color: transparent;
  top: 15px;
  left: auto;
  @media (max-width: 770px) {
    top: -160px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
}
.modal-content {
  width: 902px;
  margin-left: -190px;
  height: 50%;
  @media screen and (max-width: 770px) {
    margin-left: 0px;
    width: 100%;
  }
}
/* end style Modal */

/* Style Isi Modal */
.modal-atas {
  height: auto;
  background: #47b139;
  // margin-left: -190px;
  width: 900px;
  border-radius: 10px 10px 0px 0px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    width: auto;
    height: 50px;
  }
  h3 {
    font-size: 27px;
    padding: 20px 0px 20px 20px;
    color: #fff;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  .close-popup {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: #eeee;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      top: 10px;
    }
  }
}
.modal-tengah {
  height: 500px;
  overflow-y: scroll;
  background: #fff;
  // margin-left: -190px;
  // width: 900px;
  // margin-top: -8px;
  border-radius: 0px 0px 10px 10px;
  h3 {
    font-size: 27px;
    padding: 20px 0px 20px 20px;
    color: #fff;
    font-weight: bold;
  }
  @media screen and (max-width: 800px) {
    margin-left: 0px;
    width: 100%;
  }
}
.kanan {
  // border: 1px solid red;
  text-align: right;
  align-items: right;
}
.jumbotron {
  border-radius: 8px;
  background-color: rgb(209, 204, 204);
}
.table {
  // padding: 0px 20px 10px 20px;
  // border: 1px solid red;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
  .th {
    padding: 0px 0px 15px 0px;
  }
}

.tabel-kiri {
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
}

.tabel-kanan {
  @media screen and (max-width: 800px) {
    margin-top: 15px;
    font-size: 12px;
  }
}

.label {
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
}
.mb-3 {
  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding-left: 10px;
    width: 100%;
  }
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
  @media (max-width: 768px) {
    padding-top: 170px;
  }
}
/* End Background Belakang Modal */
.tombol {
  /* background: red; */
  text-align: center;
  padding: 15px 0px 100px 0px;
  @media screen and (max-width: 500px) {
    padding: 15px 40px 100px 40px;
  }
}
.ok {
  padding: 5px 0px 10px 0px;
  background: #0a4da3;
  border-radius: 39px;
  border: none;
  width: 350px;
  height: 45px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: #fff;
  font-family: Poppins;
  @media screen and (max-width: 500px) {
    padding: 8px 0px 5px 0px;
    width: 100%;
    height: auto;
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
  @media screen and (max-width: 200px) {
    font-size: 10px;
  }
}
</style>
