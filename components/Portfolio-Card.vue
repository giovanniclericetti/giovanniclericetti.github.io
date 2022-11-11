<template>

  <div class="column projectcard ">

    <b-row class="bio m-3 bg-secondary">

      <b-col cols="2" class="bg-primary"><b-icon icon="arrow-up-right-circle-fill" style="width: 40px; height: 40px; color:white;"></b-icon></b-col>
      <b-col cols="10"> <h6>   {{ bio }}  </h6> </b-col>

     </b-row>
  </div>


</template>

<script>
export default {
  name: "Portfolio-Card",
  props: ['bio'],
}
</script>

<style scoped>


.projectcard{
  border: solid 5px pink;
  border-radius: 20px;
  overflow: hidden;
  background-size: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s ease-in-out;
  position: relative;

}

.bio{
  position: absolute;
  bottom: 0;
}

.bio h6{
  color: white;
}


.projectcard:hover{
  background-size: 105%;
  transition: 0.3s ease-in-out;
}


</style>
