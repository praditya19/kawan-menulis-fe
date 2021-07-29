<template>
  <div class="all">
    <div class="center" v-if="show === true">
      <img class="image_ukuran" src="@/assets/Statistics-amico.png" />
      <div class="tombol">
        <button class="ok" block @click="goToModal()">
          <b>Lihat statistik Lengkap</b>
        </button>
      </div>
    </div>
    <div v-if="show === false">
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
                </div>
                <div class="modal-tengah">
                  <div style="padding: 20px 20px 20px 20px;">
                    <div class="jumbotron">
                      <div style="padding: 15px 0px 10px 20px">
                        <div
                          class="row"
                          
                        >
                          <div class="col-md-6">
                            <p>
                              <b>Name&nbsp;&nbsp;:&nbsp;</b
                              ><font v-for="(studentStatistik, index) in studentStatistik"
                          :key="index"><span
                                v-if="index === 0"
                                v-html="studentStatistik.student.name"
                              ></span
                              ></font><br />
                              <b>NIM&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</b
                              ><font v-for="(studentStatistik, index) in studentStatistik"
                          :key="index"><span
                                v-if="index === 0"
                                v-html="studentStatistik.student.nim"
                              ></span
                              ></font>
                            </p>
                          </div>
                          <div class="col-md-4">
                            <p>
                              <b>Email&nbsp;&nbsp;: </b>
                              <font v-for="(studentStatistik, index) in studentStatistik"
                          :key="index"><span
                                v-if="index === 0"
                                v-html="studentStatistik.student.email"
                              ></span
                              ></font>
                              <br />
                              <b>PRODI :&nbsp;</b
                              ><font v-for="(studentStatistik, index) in studentStatistik"
                          :key="index"><span
                                v-if="index === 0"
                                v-html="studentStatistik.student.prodi"
                              ></span
                              ></font>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style="text-align:right; aling-item:right; padding: 30px 20px 0px 20px"
                    >
                      <label for="paginations">items per page :&nbsp;</label>
                      <b-form-select
                        v-model="selected"
                        class="mb-3"
                        id="paginations"
                        style="height: 32px; width: 50px;"
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
                    <div class="table">
                      <hr />
                      <b-table-simple hover responsive>
                        <b-tr>
                          <b-th>No</b-th>
                          <b-th>Paragraphtype</b-th>
                          <b-th>Perodi</b-th>
                          <b-th>Duration</b-th>
                          <b-th></b-th>
                        </b-tr>

                        <b-tbody>
                          <b-tr>
                            <b-td>56</b-td>
                            <b-td>22</b-td>
                            <b-td>43</b-td>
                            <b-td>413</b-td>
                            <b-td
                              style="text-align: right; align-item: right; justify-content: right;"
                            >
                              <b-button variant="outline-success"
                                >Show</b-button
                              ></b-td
                            >
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                    </div>
                    <br />
                    <div class="kanan">
                      <b-button
                        variant="secondary"
                        @click="(statistik = false), (show = true)"
                        >Cancel</b-button
                      >
                      &nbsp;&nbsp;&nbsp;
                      <b-button
                        style="background-color: #47b139;"
                        @click="(statistik = false), (show = true)"
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
  @media screen and (max-width: 770px) {
    width: 100%;
  }
}
/* end style Modal */

/* Style Isi Modal */
.modal-atas {
  height: auto;
  background: #47b139;
  margin-left: -190px;
  width: 900px;
  border-radius: 10px 10px 0px 0px;
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
.modal-tengah {
  height: auto;
  background: #fff;
  margin-left: -190px;
  width: 900px;
  margin-top: -8px;
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
  text-align: right;
  align-items: right;
}
.jumbotron {
  border-radius: 8px;
  background-color: rgb(209, 204, 204);
}
.table {
  padding: 0px 20px 10px 20px;
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
  @media (max-width: 768px) {
    padding-top: 95px;
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
