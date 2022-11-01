<template>
  <div class="container-fluid header p-0 my-5">


    <b-row class="p-0 m-0" align-v="center">
      <b-col cols="6" class="p-0 previous">  <a href="index" class="d-flex"> <b-icon shift-v="2" icon="arrow-left-circle-fill" style="width: 30px; height: 30px;"></b-icon> <h4 class="m-0 p-0 ml-2" style="  color: var(--color-success);">
        {{ previous }} </h4> </a> </b-col>
      <b-col cols="6" class="p-0 text-right next"> <a href="index" class="d-flex flex-row-reverse">  <b-icon shift-v="2" icon="arrow-right-circle-fill" style="width: 30px; height: 30px;"></b-icon> <h4 class="m-0 p-0 mr-2" style="color: var(--color-secondary)" >
        {{ next }} </h4> </a> </b-col>
    </b-row>


  </div>
</template>

<script>
export default {
  name: "Project-Next-Previous",
  props: ['previous', 'next' ]
}
</script>

<style scoped>

.header{
  color: var(--color-primary);
}

a{
  text-decoration: none;
  color: var(--color-primary);
}

.next a{
color: var(--color-secondary);
}

.previous a{
  color: var(--color-success);
}

</style>
