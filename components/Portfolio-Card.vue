<template>

  <div class="column ux-ui branding projectcard">
    DIV NUOVO
    <h2> ciao</h2>
  </div>


</template>

<script>
export default {
  name: "Portfolio-Card",
  props: ['cover'],
}
</script>

<style scoped>


.projectcard{
  border: solid 5px pink;
  border-radius: 20px;
  background-image: url('https://m.media-amazon.com/images/I/71+mhWHnBdL._SL1500_.jpg');
  overflow: hidden;
  background-size: 100%;
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s ease-in-out;
}

.projectcard:hover{
  background-size: 105%;
  transition: 0.3s ease-in-out;
}


</style>
