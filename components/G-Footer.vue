<template>

  <div class="container-fluid footer justify-content-center p-5">


    <b-row class="text-cente mx-4">
      <b-col cols="auto" class="p-md-0 d-none d-md-block" > <h5> Giovanni Clericetti, 2022 </h5> </b-col>
      <b-col >  </b-col>
      <b-col cols="md-auto 12" class="d-md-flex px-md-0">
        <a href=""><h5 class="pr-md-3 p-md-0">Mail</h5></a>
        <a href=""><h5 class="px-md-3">Linkedin</h5></a>
        <a href=""><h5 class="px-md-3">Github</h5></a>
        <a href=""><h5 class="px-md-3">Telegram</h5></a>
        <a href=""><h5 class="pl-md-3 p-md-0">Instagram</h5></a>
      </b-col>
    </b-row>


  </div>

</template>

<script>
export default {
  name: "G-Footer"
}
</script>

<style scoped>

.footer{
background-color: #ECE9E9;
}

a {
  text-decoration: none;
  color: #000;
  position: relative;
}

a:hover {
  color: #000;
}


</style>
