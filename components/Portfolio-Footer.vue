<template>

  <div class="container-fluid footer justify-content-center pt-5 pb-md-5 ">

    <b-row class="text-center flex-column-reverse flex-md-row mx-md-5 mt-md-3">

      <b-col cols="md-auto 12" class="p-md-0 d-md-block mt-4 mt-md-0 pt-2 pt-md-0" > <h5 class="text-center copyright"> @ Giovanni Clericetti Portfolio, 2024 </h5> </b-col>
      <b-col >  </b-col>
      <b-col cols="md-auto 12" class="d-flex px-0 justify-content-center" >

        <a href="mailto:giovanni.clericetti@gmail.com" class="mx-md-3 mx-3"><h5 class=" p-md-0 d-md-block social hover-underline-animation">Mail</h5>
         </a>

        <a href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank" class="mx-md-3 mx-3"><h5 class="social d-md-block  hover-underline-animation">Linkedin</h5>
          </a>

        <a href="https://t.me/giovanniclericetti" target="_blank" class="mx-md-3 mx-3"><h5 class=" d-md-block social hover-underline-animation">Telegram</h5>
          </a>

        <a href="https://www.instagram.com/giovanniclericetti.png/" target="_blank" class="mx-md-3 mx-3 d-md-block d-none"><h5 class="social  p-md-0 hover-underline-animation">Instagram</h5>
          </a>

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

@media (max-width: 768px) {
.copyright{
  opacity: 0.5;
  font-size: 16px;
  padding-bottom: 10px;
}

.social {
    text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: gray;
  }

}


</style>
