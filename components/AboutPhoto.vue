<template>

  <div class="aboutmephoto my-4">

    <img src="~static/images/aboutme/aboutme.png" />

  </div>

</template>

<script>
export default {
  name: "AboutPhoto",
  props: "aboutphoto",
}
</script>

<style scoped>

.aboutmephoto{
  border-radius: 30px;
  overflow: hidden;
  height: 350px;
}

.aboutmephoto img{
  width: 100%;
  object-fit: cover;
}

</style>
