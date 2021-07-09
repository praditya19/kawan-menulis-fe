<template>
  <div>
    <img src="@/assets/diagnostis.png" alt="logo" class="image" />
    <div class="lebar1">
      <!--Slide-->

      <!--artikel -->
      <div class="conten_home">
        <div class="top">
          <h4>
            Selamat Datang dalam
          </h4>
          <p>
            Tes Diagnostik
          </p>
          <h4>
            Kemampuan Menulis
          </h4>
        </div>
        <div class="text">
          <p>
            <b>Bacalah panduan di bawah ini terlebih dahulu:</b>
          </p>
          <ol>
            <li>
              Hasil dari tes ini akan memberikan gambaran tentang pemahaman anda
              akan kalimat dan paragraf yang efektif. Untuk itu, ada diharapkan
              untuk menjawab semua pertanyaan ini dengan jujur tanpa melihat
              sumber-sumber lain.
            </li>
            <li>
              Tes ini tidak memiliki batas waktu, silahkan mengerjakan sesuai
              ketersediaan waktumu.
            </li>
            <li>
              Carilah tempat yang nyaman dan kondusif supaya kamu lebih fokus.
            </li>
            <li>
              Jika kamu keluar di tengah tes, maka seluruh proses tes dan
              jawaban akan hilang.
            </li>
            <li>
              Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan
              dengan lengkap.
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="button">
      <router-link
        class="button1 justify-content-center"
        to="/diagnostik-data-diri"
      >
        <b>Mulai Tes</b>
      </router-link>
    </div>
  </div>
</template>
<script>
export default { name: "Home" };
</script>
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

.lebar1 {
  overflow-x: hidden;
}

.button {
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    .button1 {
      margin-left: 0px;
      position: center;
    }
  }
  .button1 {
    background-color: #0a4da3;
    width: 190px;
    height: 60px;
    border: none;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border-radius: 30px;
    display: flex;
    padding-top: 15px;
    b {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .button1:hover {
    background-color: #0a4da3;
  }
}

.text {
  width: 100%;
  background: rgba(139, 181, 236, 0.1);
  text-align: left;
  padding: 10px 250px 10px 250px;
  @media (max-width: 768px) {
    padding: 10px 10px 7px 10px;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    color: #000000;
    margin-bottom: 5px;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 15px;
    }
  }
  li {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 15px;
    }
  }
}

.top {
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0px 20px 0px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  h4 {
    font-family: Poppins;
    font-size: 30px;
    width: 100%;
    font-weight: 700;
    text-align: center;
    @media (max-width: 768px) {
      padding: 0px 10px 0px 10px;
      font-size: 20px;
    }
  }
  p {
    width: 100%;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 75px;
    text-align: center;
    color: rgba(0, 0, 0, 0.9);
    @media (max-width: 768px) {
      padding: 0px 10px 0px 10px;
      width: 100%;
      font-size: 50px;
    }
  }
}
</style>
