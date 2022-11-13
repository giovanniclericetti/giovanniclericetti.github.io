<template>
  <div class="container-fluid header p-0 my-5">


    <b-row class="p-0 m-0" align-v="center">
      <b-col cols="6" class="p-0 previous">
        <NuxtLink :to='toprevious' class="d-flex">

          <b-icon shift-v="2" icon="arrow-left-circle-fill" style="width: 30px; height: 30px;"></b-icon>
        <h4 class="m-0 p-0 ml-2 hover-underline-animation-success" style="  color: var(--color-success);">
        {{ previous }} </h4>

        </NuxtLink>
      </b-col>

      <b-col cols="6" class="p-0 text-right next">
        <NuxtLink :to='tonext' class="d-flex flex-row-reverse">  <b-icon shift-v="2" icon="arrow-right-circle-fill" style="width: 30px; height: 30px;"></b-icon>
        <h4 class="m-0 p-0 mr-2 hover-underline-animation-secondary" style="color: var(--color-secondary)" >
        {{ next }} </h4>   </NuxtLink> </b-col>
    </b-row>


  </div>
</template>

<script>


export default {
  name: "ProjectNextPrevious",
  props: {
    previous: String,
    next: String,
    toprevious: String,
    tonext: String,
  },
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


.hover-underline-animation-success {
  display: inline-block;
  position: relative;
  color: var(--color-success);
}

.hover-underline-animation-success:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: var(--color-success);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation-success:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}


.hover-underline-animation-secondary {
  display: inline-block;
  position: relative;
  color: var(--color-secondary);
}

.hover-underline-animation-secondary:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: var(--color-secondary);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation-secondary:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.next a{
color: var(--color-secondary);
}

.previous a{
  color: var(--color-success);
}

</style>
