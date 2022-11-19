<template>
<div>

  <div class="aboutmephoto mt-4">

    <img src="~static/images/aboutme/aboutme.png" />

  </div>



  <div class="mx-2 mt-2">
    <b-row class="">

      <b-col cols="3" class=" p-0">
        <div class="socialboxsm m-2 "> <img src="~static/images/aboutme/mail.svg" /> </div>
      </b-col>

      <b-col cols="3" class=" p-0">
        <div class="socialboxsm m-2 "> <a href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank"> <img src="~static/images/aboutme/linkedin.svg" />  </a> </div>
      </b-col>

      <b-col cols="3" class=" p-0">
        <div class="socialboxsm m-2 "> <a href="https://t.me/giovanniclericetti" target="_blank"> <img src="~static/images/aboutme/telegram.svg" /> </a> </div>
      </b-col>

      <b-col cols="3" class=" p-0">
        <div class="socialboxsm m-2 "> <a href="https://www.instagram.com/giovanniclericetti.png/" target="_blank"> <img src="~static/images/aboutme/instagram.svg" /> </a> </div>
      </b-col>

    </b-row>
  </div></div>

</template>

<script>
export default {
  name: "AboutPhoto",
  props: "aboutphoto",
}
</script>

<style scoped>

.aboutmephoto{
  border-radius: 30px;
  overflow: hidden;
  height: 350px;
}

.aboutmephoto img{
  height: 100%;
  object-fit: cover;
}


.socialboxsm {
  border-radius: 30px;
  overflow: hidden;
}

.socialboxsm img {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  max-width: 100%;

}

</style>
