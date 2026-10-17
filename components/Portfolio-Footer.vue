<template>

  <div class="container-fluid footer justify-content-center pt-5 pb-lg-5 ">

    <b-row class="text-center flex-column-reverse flex-lg-row mx-lg-5 mt-lg-3">

      <b-col cols="12" lg="auto" class="p-lg-0 d-lg-block mt-4 mt-lg-0 pt-2 pt-lg-0" > <h5 class="text-center copyright"> Designed &amp; Coded by Giovanni Clericetti, 2026 </h5> </b-col>
      <b-col >  </b-col>
      <b-col cols="12" lg="auto" class="d-flex flex-wrap px-0 justify-content-center" >

        <a href="mailto:giovanni.clericetti@gmail.com" class="mx-lg-3 mx-3"><h5 class=" p-lg-0 d-lg-block social hover-underline-animation">Mail</h5>
         </a>

        <a href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank" class="mx-lg-3 mx-3"><h5 class="social d-lg-block  hover-underline-animation">Linkedin</h5>
          </a>

        <a href="https://www.instagram.com/giovanniclericetti.png/" target="_blank" class="mx-lg-3 mx-3"><h5 class="social  p-lg-0 hover-underline-animation">Instagram</h5>
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

@media (max-width: 991.98px) {
.footer a { min-height: 44px; display: inline-flex; align-items: center; }

.copyright{
  opacity: 0.5;
  font-size: 16px;
  padding-bottom: 10px;
}

.social {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-decoration-color: #C0C0C0;
  text-underline-offset: 1px;
  color: black;

  }

}


</style>
