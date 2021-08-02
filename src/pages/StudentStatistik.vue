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
                <div class="modal-atas">
                  <h3>Student actions</h3>
                  <a @click="cancle()" class="close-popup">&times;</a>
                </div>
                <div class="profil">
                  <div class="profil_atas">
                    <!-- table kiri profil -->
                    <div class="col-md-6">
                      <table class="tabel-kiri">
                        <tr>
                          <td>
                            <b>Name&nbsp;</b>
                          </td>
                          <td><b>:</b></td>
                          <td>
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
                        <tr>
                          <td>
                            <b>NIM&nbsp;&nbsp;&nbsp;&nbsp;</b>
                          </td>
                          <td><b>:</b></td>
                          <td>
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
                    <!-- table kanan profil -->
                    <div class="col-md-6">
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
                                v-if="index === 0"
                                v-html="studentStatistik.student.email"
                              ></span
                            ></font>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>PRODI</b>
                          </td>
                          <td><b>:</b></td>
                          <td>
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
                  <!-- <div>
                    <b-button
                      @click="prevPage()"
                      variant="secondary"
                      v-if="currentPage !== 1"
                      >Back</b-button
                    >
                    &nbsp;
                    <b-button
                      @click="nextPage()"
                      variant="success"
                      v-if="yesOrNo === true"
                      >Next</b-button
                    >
                  </div> -->
                  <div class="item-page">
                    <label class="label" for="paginations"
                      >Items per page :&nbsp;</label
                    >
                    <b-form-select
                      v-model="recordsPerPage"
                      class="mb-3"
                      id="paginations"
                      style="height: 32px; width: 50px"
                    >
                      <!-- These options will appear after the ones from 'options' prop -->
                      <b-form-select-option value="null" disabled hidden
                        >5</b-form-select-option
                      >
                      <b-form-select-option value="5">5</b-form-select-option>
                      <b-form-select-option value="10">10</b-form-select-option>
                    </b-form-select>
                  </div>
                  <!-- Table Bawah -->
                  <div class="table">
                    <table class="table" style="border-top:1px solid black;">
                      <thead class="thead">
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Paragraphtype</th>
                          <th scope="col">Period</th>
                          <th scope="col">Duration</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody class="tbody">
                        <tr
                          v-for="(studentStatistik, index) in rounded"
                          :key="index"
                        >
                          <td>{{ studentStatistik.no }}</td>
                          <td>{{ studentStatistik.paragraphType }}</td>
                          <td>
                            <b>Start : </b
                            >{{
                              new Date(studentStatistik.startDate).getDate()
                            }}/{{
                              new Date(studentStatistik.startDate).getMonth() +
                                1
                            }}/
                            {{
                              new Date(
                                studentStatistik.startDate
                              ).getFullYear()
                            }}&nbsp;&nbsp;{{
                              new Date(studentStatistik.startDate).getHours()
                            }}:{{
                              new Date(studentStatistik.startDate).getMinutes()
                            }}:{{
                              new Date(studentStatistik.startDate).getSeconds()
                            }}
                            <br />
                            <b>End : </b>
                            {{
                              new Date(studentStatistik.endDate).getDate()
                            }}/{{
                              new Date(studentStatistik.endDate).getMonth() + 1
                            }}/
                            {{
                              new Date(studentStatistik.endDate).getFullYear()
                            }}&nbsp;&nbsp;{{
                              new Date(studentStatistik.endDate).getHours()
                            }}:{{
                              new Date(studentStatistik.endDate).getMinutes()
                            }}:{{
                              new Date(studentStatistik.endDate).getSeconds()
                            }}
                          </td>
                          <td>
                            {{ studentStatistik.durations.days }} Days,

                            {{ studentStatistik.durations.hours }} Hours,

                            {{ studentStatistik.durations.minutes }} Minutes

                            {{ studentStatistik.durations.seconds }} Seconds
                          </td>
                          <td>
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div v-if="show === true" style="padding:0px 10px 0px 10px">
                      <table>
                        <tr style="border:none;">
                          <td style="width:200px"><b>Topik</b></td>
                          <td>: {{ topik }}</td>
                        </tr>
                        <tr style="border:none;" valign="top">
                          <td><b>FInal result</b></td>
                          <td>: {{ message }}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
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
      padding: 0px 0px 0px 0px;
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

/* Background belakang modal */
.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  @media (max-width: 768px) {
    padding-top: 20px;
  }
}

.modal-dialog {
}

.modal-content {
  background: #fff;
  height: 700px;
  width: 974px;
  margin-left: -240px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    height: 500px;
  }
}

/* End Background Belakang Modal */
/* end style Modal */

/* Style Isi Modal */
.modal-atas {
  height: auto;
  background: #47b139;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
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
      padding: 15px 0px 0px 10px;
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
.profil {
  padding: 15px 15px 15px 15px;
  @media screen and (max-width: 768px) {
    overflow-y: scroll;
  }
  &_atas {
    display: flex;
    padding: 10px 0px 10px 0px;
    width: 100%;
    height: auto;
    border-radius: 5px;
    background-color: rgb(209, 204, 204);
    @media screen and (max-width: 768px) {
      display: inline-block;
    }
  }
}
.item-page {
  padding: 15px 0px 0px 0px;
  text-align: right;
  .duo {
    background: silver;
    display: flex;
  }
}
.tabel-kiri {
  margin-left: 10px;
  width: 70%;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
}
.tabel-kanan {
  width: 100%;
  @media screen and (max-width: 800px) {
    margin-left: 10px;
    font-size: 12px;
  }
}
.table {
  padding: 0px 0px 0px 0px;
  overflow-y: scroll;
  height: 400px;
  @media screen and (ma-width: 768px) {
  }
  .thead {
  }
  .tbody {
    overflow-y: scroll;
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

.kanan {
  text-align: right;
  width: 100%;
  align-items: right;
}
/* end style isi modal */

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
