<template>
  <span class="linkedin-tile-label">
    <img v-if="$locale.state.language === 'en'" src="~/static/images/aboutme/checklinkedin.svg" alt="LinkedIn">
    <template v-else>
      <span class="label">Seguimi su</span>
      <span class="logo"><img src="~/static/images/aboutme/checklinkedin.svg" alt="LinkedIn"></span>
    </template>
  </span>
</template>

<style scoped>
.linkedin-tile-label { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; }
.linkedin-tile-label > img { display: block; width: 100%; height: auto; }
.label { color: #007EBB; font-size: clamp(14px, 2.4vw, 24px); font-weight: 800; line-height: 1.1; }
.logo { position: relative; display: block; flex: 0 0 36px; width: 36px; height: 36px; overflow: hidden; }
.logo img { position: absolute; right: 0; width: 123px; max-width: none; height: 36px; }
</style>
