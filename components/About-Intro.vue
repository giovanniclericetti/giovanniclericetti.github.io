
<template>

  <div>

    <h1 v-if="title" class="gradient d-md-block d-none mt-4 " style="font-size: 64px"> {{ $t(title) }} </h1>
    <h1 v-if="titlesm" class="gradient d-md-none d-block mt-4"> {{ $t(titlesm) }} </h1>

    <div v-if="subtitle" class="mt-4">
    <h3 class="subabout">  {{ $t(subtitle) }} </h3> </div>

    <h4 class="gradient"> {{ $t(subdescription) }} </h4>
    <p class="description mt-3 mb-0"> {{ $t(description && description.trim()) }}</p>

  </div>
</template>

<script>
export default {
  name: 'About-Intro',
  props: [ 'title', 'titlesm', 'description', 'subtitle', 'subdescription']


}
</script>

<style>

.description{
  max-width: 80%;
  line-height: 140%;
}

.subabout{
white-space: pre-line;
}


@media (max-width: 768px) {

  .description{
    max-width: 100vw;
    line-height: 120%;
  }

  .subabout {
    white-space: normal;
    max-width: 90%
  }

}


</style>

