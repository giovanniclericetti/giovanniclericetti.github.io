<template>
  <transition name="fadeHeight">
    <div v-if="!currentCategory || category.includes(currentCategory)" class="projectcard">
      <NuxtLink :to="to">
        <div class="card-background">
          <img :src="thumbnail" class="d-none d-md-block"/>
          <img :src="mobileThumbnail" class="d-md-none"/>
        </div>
        <b-row class="bio mx-1 my-2">

          <b-col cols="12" md="10" class=""><h6 style="color: var(--color-secondary);"> {{ bio }} </h6></b-col>

        </b-row>
      </NuxtLink>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    title: String,
    thumbnail: String,
    mobileThumbnail: String,
    bio: String,
    category: String,
    currentCategory: [String, Boolean],
    to: [String],
  },
}
</script>

<style scoped lang="scss">

h6{
  color: white;
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: max-height 0.3s, opacity 0.3s 0.1s;
  max-height: 100%;
  opacity: 1;
}
.fadeHeight-leave-active {
  transition: max-height 0.3s 0.1s, opacity 0.2s ;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0px;
}

.projectcard {
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 32px;

  .card-background {
    overflow: hidden;
    position: absolute;
    inset: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }
  }

  &:hover {

    .card-background img {
      transform: scale(1.04);
    }

  }
}

.bio {
  position: absolute;
  bottom: 0;
}

.bio h6 {

}

.card-small {
  height: 300px;
}

.card-medium {
  height: 400px;
}

.card-large {
  height: 500px;
}

@media (max-width: 768px) {

  .card-small {
    height: 300px;
  }

  .card-medium {
    height: 300px;
  }

  .card-large {
    height: 300px;
  }

  .projectcard {
    margin-bottom: 16px;
  }


}


</style>
