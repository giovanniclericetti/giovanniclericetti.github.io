<template>

  <div class="container-fluid footer justify-content-center pt-5 pb-md-5 pb-2">

    <b-row class="text-center flex-column-reverse flex-md-row mx-md-5 mt-md-3">

      <b-col cols="md-auto 12" class="p-md-0 d-md-block mt-4 mt-md-0 pt-2 pt-md-0" > <h5 class="text-center"> @ Giovanni Clericetti Portfolio, 2024 </h5> </b-col>
      <b-col >  </b-col>
      <b-col cols="md-auto 12" class="d-flex px-0 justify-content-center" >

        <a href="mailto:giovanni.clericetti@gmail.com" class="mx-md-3 mx-3"><h5 class=" p-md-0 d-md-block d-none hover-underline-animation">Mail</h5>
          <div class=" p-md-0 d-md-none"> <img src="~static/icons/mail.svg" />  </div></a>

        <a href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank" class="mx-md-3 mx-3"><h5 class=" d-md-block d-none hover-underline-animation">Linkedin</h5>
          <div class=" p-md-0 d-md-none"> <img src="~static/icons/linkedin.svg" />  </div></a>

        <a href="https://t.me/giovanniclericetti" target="_blank" class="mx-md-3 mx-3"><h5 class=" d-md-block d-none hover-underline-animation">Telegram</h5>
          <div class=" p-md-0 d-md-none"> <img src="~static/icons/telegram.svg" />  </div></a>

        <a href="https://www.instagram.com/giovanniclericetti.png/" target="_blank" class="mx-md-3 mx-3"><h5 class=" d-md-block d-none p-md-0 hover-underline-animation">Instagram</h5>
          <div class=" p-md-0 d-md-none"> <img src="~static/icons/instagram.svg" />  </div></a>
      </b-col>
    </b-row>


  </div>

</template>

<script>
export default {
  name: "PortfolioFooter"
}
</script>

<style scoped lang="scss">

.footer{
background-color: #ECE9E9;
  --color-primary: #000;
  border-radius: 60px 60px 0px 0px;

  img{
    width: 40px;
  }

}

h5{}

a {
  text-decoration: none;
  color: #000;
  position: relative;
}

a:hover {
  color: #000;
}


</style>
