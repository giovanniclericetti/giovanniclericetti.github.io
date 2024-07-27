<template>
<div>

  <div class="aboutmephoto mt-4">

    <img src="~static/images/aboutme/aboutme.png" />

  </div>



  <div class=" mt-3">
    <b-row class="p-0 m-0 " >

      <b-col cols="3" class=" p-0">
        <div class="socialboxsm mr-3 "> <a href="https://t.me/giovanniclericetti" target="_blank"> <img src="~static/images/aboutme/telegram.svg" /> </a> </div>
      </b-col>

      <b-col cols="3" class=" p-0">
        <div class="socialboxsm mr-3">  <a href="https://www.instagram.com/giovanniclericetti.png/" target="_blank"> <img src="~static/images/aboutme/instagram.svg" /> </a> </div>
      </b-col>



      <b-col cols="" class=" p-0">
        <div class="socialboxsm bg-white justify-content-center d-flex align-items-center" style="height: 100%"> <a style="width: 75%" href="https://t.me/giovanniclericetti" target="_blank"> <img src="~static/images/aboutme/checklinkedin.svg"/> </a> </div>
      </b-col>

    </b-row>
  </div>

  <div class=" mt-3">
    <b-row class="p-0 m-0" >

      <b-col cols="8" class=" p-0">

          <div class="boxcvmobile bggradient" style="height: 130px;" >

            <div class=" text-white d-flex justify-content-center align-items-center pt-3" style="height: 50%">
              <h4 style="font-size: 24px; color: white">My Resume</h4>
            </div>

            <div class=" justify-content-center d-flex" style="height: 200%; width: 100%;">

              <img ref="cvImage" src="~static/images/aboutme/cvbox.png" />

            </div>
          </div>

      </b-col>

      <b-col cols="4" class="p-0" style="height: 130px;">
        <div class="ml-3 d-flex justify-content-center align-items-center bg-white pt-2" style="text-align: center; height: 130px; overflow: hidden; border-radius: 20px;"> <a href="https://t.me/giovanniclericetti" target="_blank" > <img style="width: 85%" src="~static/images/aboutme/letswork.svg" /> </a> </div>
      </b-col>

    </b-row>
  </div>

</div>



</template>

<script>
export default {
  name: "AboutPhoto",
  props: "aboutphoto",
}
</script>

<style scoped>

.aboutmephoto{
  border-radius: 25px;
  overflow: hidden;
  height: 350px;
}

.aboutmephoto img{
  height: 100%;
  object-fit: cover;
}

.bggradient{
  background: linear-gradient(114deg, #FFC793 -8.26%, #FF7B93 106.3%);
}


.socialboxsm {
  border-radius: 25px;
  overflow: hidden;
}

.boxcvmobile{
  object-fit: contain;
  overflow: hidden;
  border-radius: 25px;
}

.socialboxsm img {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  max-width: 100%;

}

</style>
