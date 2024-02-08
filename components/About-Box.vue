<template>

  <div class="mt-5 container">

    <b-row class="">

      <b-col cols="5" style="padding-left: 0px; padding-right: 0px">
        <div class="bg-primary photobox">

          <img src="~static/images/aboutme/aboutme.png"/>

        </div>
      </b-col>


      <b-col cols="7" style="padding-left: 0px; padding-right: 0px">

        <div class=" blocchisx">

          <div class="" style="padding-left: 0px; padding-bottom: 20px">

            <b-row class=" d-flex no-gutters" style="height:210px">

              <b-col cols="8" style="padding-left: 20px; padding-right: 20px;">
                <div class="bg-danger boxround" style="height: 210px;">
                  <h1 class="text-white">resumes</h1>
                </div>
              </b-col>

              <b-col cols="" style="">
                <div class="bg-white boxround" style="height: 210px;">

                  <div class=" zoombvs" style="height: 100%">

                  <a :href="randomOption.href" target="_blank">
                    <div class="mx-4 pt-4">
                      <img src="~static/images/aboutme/spotify.svg"/>
                    </div>
                    <b-row class="mx-4 pb-1 mb-4 d-block" style="bottom:0px; position: absolute">
                      <p2 style="color: #3CCC76; font-size: 15px"> Always listening...</p2>
                      <h4 style="font-size: 25px" id="song">{{ randomOption.song }}</h4>
                      <p style="font-size: 18px; line-height: 5px" id="singer">{{ randomOption.singer }}</p>
                    </b-row>
                  </a>

                  </div>

                </div>

              </b-col>


            </b-row>
          </div>


              <b-row class=" d-flex no-gutters">

                <b-row class="p-0 m-0" style="width: 100%">


                  <b-col class=" p-0" cols="">
                    <div class="socialbox"><a href="https://www.instagram.com/giovanniclericetti.png/" target="_blank">
                      <img src="~static/images/aboutme/instagram.svg"/> </a></div>
                  </b-col>



                  <b-col class=" p-0" cols="">
                    <div class="socialbox "><a href="https://t.me/giovanniclericetti" target="_blank"> <img
                      src="~static/images/aboutme/telegram.svg"/> </a></div>
                  </b-col>

                  <b-col class="d-flex m-0 p-0 " cols="5" style=" margin-left: 20px">

                    <div class="bg-white socialbox-large justify-content-center d-flex align-items-center" >


                      <a href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank" class="d-flex pr-2">
                        <img src="~static/images/aboutme/checklinkedin.svg"/> </a> </div>

                  </b-col>

                  <b-col class=" p-0" cols="">
                    <div class="socialbox "><a href="mailto:giovanni.clericetti@gmail.com"><img
                      src="~static/images/aboutme/mail.svg"/> </a></div>
                  </b-col>




                </b-row>

              </b-row>




        </div>
      </b-col>



    </b-row>


  </div>

</template>

<script>
export default {
  name: "About-Box",
  data() {
    return {
      options: [
        { song: "Dove si balla", singer: "Dargen D'Amico", href: "https://open.spotify.com/intl-it/track/654Jxp6rUFgPckixlIusRJ?si=cbc47ddaecec473b" },
        { song: "Rockstar", singer: "Sfera Ebbasta", href: "https://open.spotify.com/intl-it/track/2O7jON0xYyTaSkWj9wZXCJ?si=7db632e0c36c44b5" },
        { song: "Mi Sento Vivo", singer: "Gianni Bismark", href: "link3" },
        { song: "Viceversa", singer: "Francesco Gabbani", href: "https://open.spotify.com/intl-it/track/2O7jON0xYyTaSkWj9wZXCJ?si=7db632e0c36c44b5" }
      ]
    };
  },
  computed: {
    randomOption() {
      const randomIndex = Math.floor(Math.random() * this.options.length);
      return this.options[randomIndex];
    }
  }
}

</script>

<style lang="scss" scoped>

.photobox {
  height: 210+105+20px;
  overflow: hidden;
  border-radius: 30px;
}

.photobox img {
  width: 100%;
}

.socialbox {
  border-radius: 30px;
  overflow: hidden;
  margin-left: 20px;
  height: 105px;
}

.socialbox-large {
  border-radius: 30px;
  overflow: hidden;
  margin-left: 20px;
  width: 170%;
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

.socialbox-large img {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  height: 60px;

  &:hover {

    transform: scale(1.03);

  }

}

.zoombvs{
  transition: transform 0.3s ease-in-out;
}

.boxround{
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  border-radius: 30px;}

.zoombvs:hover{

  transform: scale(1.03);
}

</style>
