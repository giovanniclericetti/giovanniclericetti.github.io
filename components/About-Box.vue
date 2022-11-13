<template>

  <div class="mt-5 container">

    <b-row align-v="stretch" class="bg-secondary">

      <b-col cols="5" class="p-0">
        PRIMA BLOCCO
      </b-col>

      <b-col cols="7" class="bg-white">

        <b-row>

          <b-col cols="8" class="bg-primary square">
            BOVISA
          </b-col>

          <b-col cols="4" class="bg-danger square">
            PORTA ROMANA
          </b-col>


        </b-row>

        <b-row>

          <b-col cols="2" class="bg-warning p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/mail.svg" /> </div>
          </b-col>

          <b-col cols="2" class="bg-warning p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/linkedin.svg" /> </div>
          </b-col>

          <b-col cols="2" class="bg-warning p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/github.svg" /> </div>
          </b-col>

          <b-col cols="2" class="bg-warning p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/telegram.svg" /> </div>
          </b-col>

          <b-col cols="2" class="bg-warning p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/instagram.svg" /> </div>
          </b-col>

          <b-col cols="2" class="bg-warning p-0">
            <div class="socialbox m-2 "> <img src="~static/images/aboutme/github.svg" /> </div>
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

.photo {
  border: 1px solid;
}

.socialbox {
  border-radius: 20px;
  overflow: hidden;

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
