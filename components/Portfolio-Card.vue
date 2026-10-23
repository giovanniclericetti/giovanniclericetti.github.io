<template>

    <div class=" projectcard" >

      <NuxtLink :to="to" class="projectcard-link">

        <div class="card-background">

        <img v-if="!mobileLayout" class="imgproject" alt="" aria-hidden="true"
             :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
             v-prlx.background="{ speed: 0.04, mobileMaxWidth: 992, disabled: parallaxDisabled }"/>

          <img v-else class="imgproject imgmobile" alt="" aria-hidden="true"
               :style="{ '--card-mobile-cover': 'url(' + mobileThumbnail + ')', '--card-desktop-cover': 'url(' + thumbnail + ')' }"
               />

        </div>

        <WorkInProgress v-if="workInProgress"/>

        <b-row class="bio mx-1 my-2">

          <b-col cols="12" md="10" class=""><h4 class="titlemob" style="color: var(--color-secondary);">  {{ projectname }} </h4></b-col>
          <b-col cols="9" md="10" class="">
            <p2 style="color: var(--color-secondary)"> {{ bio }} </p2>
          </b-col>

          <b-col cols="12" md="10" class="card-tags">
            <b-badge pill class="pillshome mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill1 }}</b-badge>
            <b-badge pill class="pillshome mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill2 }}</b-badge>
            <b-badge pill class="pillshome terzapill mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill3 }}</b-badge>
          </b-col>

        </b-row>
      </NuxtLink>
    </div>

</template>

<script>
export default {
  name: "PortfolioCard",
  data() {
    return { parallaxDisabled: true }
  },
  mounted() {
    if (this.mobileLayout) return
    this.parallaxQuery = window.matchMedia('(min-width: 992px) and (prefers-reduced-motion: no-preference)')
    this.updateParallax()
    this.parallaxQuery.addEventListener('change', this.updateParallax)
  },
  beforeDestroy() {
    if (this.parallaxQuery) this.parallaxQuery.removeEventListener('change', this.updateParallax)
  },
  methods: {
    updateParallax() {
      this.parallaxDisabled = !this.parallaxQuery.matches
    },
  },
  props: {
    mobileLayout: Boolean,
    workInProgress: Boolean,
    title: String,
    thumbnail: String,
    mobileThumbnail: String,
    bio: String,
    to: [String],
    pill1: String,
    pill2: String,
    pill3: String,
    projectname: String,
  },
}
</script>

<style scoped lang="scss">

h6{
  color: white;
}

.pillshome {
  border-radius: 20px;
  background-color: white;
  opacity: 0.8;
  border: none;
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 14px;
  color:var(--color-primary)}

.projectcard {
  border-radius: 30px;
  position: relative;
  margin-bottom: 32px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out; /* Applicato qui */

  .card-background {
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    inset: 0;
    height: 100%;
    transform-origin: center;
    transform: scale(1.01);
    transition: transform 0.5s ease-in-out;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  @media (hover: hover) and (pointer: fine) {
  &:hover .card-background {
    transform: scale(1.05); /* Aggiunto qui */
  }
  }
}




.bio {
  position: absolute;
  bottom: 0;
  line-height: 18px;
}

.bio h6 {

}

.card-extrasmall {
  height: 250px;
}

.card-small {
  height: 350px;
}

.card-medium {
  height: 450px;
}

.card-large {
  height: 500px;
}

.card-extralarge {
  height: 550px;
}

.card-extraextralarge {
  height: 620px;
}

.terzapill{
  visibility: visible;
}

.imgmobile{
  background-image: var(--card-mobile-cover);

  background-position: center;
  background-repeat: no-repeat;


}

@media (min-width: 768px) and (max-width: 991.98px) {
  .imgmobile {
    background-image: var(--card-desktop-cover);
    background-position: center top;
  }
}

@media (max-width: 767.98px) {
  .projectcard {
    height: 300px;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    min-width: 0;
    /* One badge line: 14px text + .5rem padding + 1rem margins. */
    max-height: calc(14px + 1.5rem);
    overflow: hidden;
  }

  .card-tags .pillshome {
    flex: 0 0 auto;
    line-height: 1;
    white-space: nowrap;
  }
}

@media (max-width: 991.98px) {
  .projectcard {
    margin-bottom: 16px;
    border-radius: 30px;
  }

  .titlemob{
    line-height: 1.2;
  }

  @media (max-width: 767.98px) {
    .md-biowhite{
      --color-secondary: white;
    }
  }

}



.projectcard-link {
  display: block;
  width: 100%;
  height: 100%;
}
.projectcard-link:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: -4px;
}
@media (prefers-reduced-motion: reduce) {
  .projectcard, .projectcard .card-background { transition: none; }
  .projectcard:hover .card-background { transform: scale(1.01); }
}
</style>
