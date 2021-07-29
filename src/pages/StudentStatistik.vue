<template>
  <div class="all">
    <div class="center">
      <img class="image_ukuran" src="@/assets/Statistics-amico.png" />
      <div class="tombol">
        <button class="ok" block @click="statistik = true">
          <b>Lihat statistik Lengkap</b>
        </button>
      </div>
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
                        <div class="row">
                          <div class="col-md-6">
                            <p>
                              <b>Name&nbsp;&nbsp;:</b>Jack <br />
                              <b>NIM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> 900920
                            </p>
                          </div>
                          <div class="col-md-4">
                            <p>
                              <b>Email&nbsp;&nbsp;&nbsp;:</b>
                              j.jackbrown@gmail.com
                              <br />
                              <b>PRODI :</b> SAM
                            </p>
                          </div>
                        </div>
                      </div>
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
                              class="text-align: right; align-item: right; justify-content: right;"
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
                      <b-button variant="secondary">Cancel</b-button>
                      &nbsp;&nbsp;&nbsp;
                      <b-button variant="success">OK</b-button>
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
  top: 50px;
  left: auto;
  @media (max-width: 768px) {
    top: -80px;
  }
}
.modal-content {
  width: 100px;
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
  padding: 20px 20px 10px 20px;
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
