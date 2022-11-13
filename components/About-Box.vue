<template>

  <div class="mt-5 container">

    <b-row align-v="stretch" class="">

      <b-col cols="5" class="p-0">

        <div class="photobox m-2">  <img src="~static/images/aboutme/aboutme.png" /></div>



      </b-col>

      <b-col cols="7" class="" >



        <b-row class="boxfinal mb-3">

          <b-col cols="7" class=" p-0">
            <div class="boxfinal bovisa m-2 bg-primary"></div>
          </b-col>

          <b-col cols="5" class="p-0">
            <div class="boxfinal bg-warning  m-2">BLOCCODUE</div>
          </b-col>

        </b-row>

        <b-row class="mt-2">

          <b-col cols="2" class=" p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/mail.svg" /> </div>
          </b-col>

          <b-col cols="2" class=" p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/linkedin.svg" /> </div>
          </b-col>

          <b-col cols="2" class=" p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/github.svg" /> </div>
          </b-col>

          <b-col cols="2" class=" p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/telegram.svg" /> </div>
          </b-col>

          <b-col cols="2" class=" p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/instagram.svg" /> </div>
          </b-col>

          <b-col cols="2" class=" p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/spotify.svg" /> </div>
          </b-col>

        </b-row>

      </b-col>




    </b-row>

  </div>

</template>

<script>
export default {
  name: "About-Box"
}
</script>

<style scoped lang="scss">

.photobox img {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
}

.socialbox {
  border-radius: 20px;
  overflow: hidden;
}

.bovisa{
  background-image: url("~static/images/aboutme/bovisa.svg") ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.boxfinal{
height: 278px;
  border-radius: 20px;
}

.socialbox img {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  max-width: 100%;

  &:hover {

    transform: scale(1.07);

  }

}


</style>
