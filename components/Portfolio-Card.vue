<template>

    <div class=" projectcard" >

      <span class="card-category-pill d-none d-md-block">{{ projectType }}</span>

      <NuxtLink :to="to" class="projectcard-link">

        <div class="card-background">

        <img v-if="!mobileLayout" class="imgproject" alt="" aria-hidden="true"
             v-responsive-background="{ src: thumbnail, fullResolution }" :data-image-src="thumbnail"
             v-prlx.background="{ speed: 0.04, mobileMaxWidth: 992, disabled: parallaxDisabled }"/>

          <img v-else class="imgproject imgmobile" alt="" aria-hidden="true"
               v-responsive-background="{ src: thumbnail, mobile: mobileThumbnail, fullResolution }" :data-image-src="thumbnail" :data-mobile-image-src="mobileThumbnail"
               />

        </div>

        <WorkInProgress v-if="workInProgress"/>

        <b-row class="bio mx-1 my-2">

          <b-col cols="12" class=""><h4 aria-level="2" class="titlemob" style="color: var(--color-secondary);">  {{ projectname }} </h4></b-col>
          <b-col cols="12" class="card-description">
            <p2 style="color: var(--color-secondary)"> {{ bio }} </p2>
          </b-col>

          <b-col cols="12" class="card-tags">
            <b-badge pill class="pillshome mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill1 }}</b-badge>
            <b-badge pill class="pillshome mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill2 }}</b-badge>
            <b-badge v-if="pill3" pill class="pillshome terzapill mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill3 }}</b-badge>
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
    fullResolution: Boolean,
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
    projectType: { type: String, default: 'University Project' },
  },
}
</script>

<style scoped lang="scss">

h6{
  color: white;
}

.pillshome {
  border-radius: 20px;
  background-color: var(--color-primary);
  opacity: 1;
  border: none;
  font-family: 'Bricolage Grotesque';
  font-weight: 400;
  font-size: 14px;
  color: #fff}

.projectcard.avi .pillshome,
.projectcard.acmilan .pillshome,
.projectcard.previewpretest .pillshome,
.projectcard.bottleneck .pillshome {
  background-color: #fff;
  color: var(--color-primary);
}

.projectcard {
  border-radius: 35px;
  position: relative;
  margin-bottom: 32px;
  overflow: visible;
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
  width: calc(100% - 8px);
  max-width: calc(100% - 8px);
  position: absolute;
  bottom: 0;
  line-height: 18px;
}

.bio h6 {

}

.projectcard.avi .titlemob,
.projectcard.avi .card-description {
  text-shadow: 0 1px 6px rgba(8, 20, 58, 0.45);
}

.projectcard.carachioggia .titlemob,
.projectcard.carachioggia .card-description {
  text-shadow: 0 1px 6px rgba(40, 40, 40, 0.45);
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

.acmilan2 .card-description {
  flex: 0 0 100%;
  max-width: 100%;
}

.card-description p2 {
  display: block;
  text-wrap: balance;
}

.card-tags {
  display: flex;
  flex-wrap: nowrap;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
}

.card-tags .pillshome {
  flex: 0 0 auto;
  white-space: nowrap;
}

.terzapill{
  visibility: visible;
}

.imgmobile{


  background-position: center;
  background-repeat: no-repeat;


}

@media (min-width: 768px) and (max-width: 991.98px) {
  .imgmobile {

    background-position: center top;
  }
}

@media (max-width: 767.98px) {
  .card-tags .pillshome { font-size: 13px; }
  .projectcard {
    height: 300px;
  }

  .card-tags {
    display: flex;
    flex-wrap: nowrap;
    min-width: 0;
    /* Keep category labels together on one horizontally scrollable line. */
    max-height: none;
    overflow-x: auto;
    overflow-y: hidden;
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
    border-radius: 35px;
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



.card-category-pill {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  padding: 4px 14px;
  border: 1.5px solid #f6f2f2;
  border-radius: 999px;
  background: var(--category-pill-color, var(--color-primary));
  color: #fff;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  white-space: nowrap;
  pointer-events: none;
}

.acmilan2 .card-category-pill {
  --category-pill-color: #000;
}
.acmilan3 .card-category-pill {
  --category-pill-color: #8B0015;
}
.sourdata .card-category-pill {
  --category-pill-color: #3741DC;
}

.projectcard-link {
  position: relative;
  overflow: hidden;
  border-radius: inherit;
  display: block;
  width: 100%;
  height: 100%;
}
.projectcard-link:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: -4px;
}
.acmilan .card-tags,
.acmilan2 .card-tags {
  display: flex;
  flex-wrap: nowrap;
  flex-basis: 100%;
  max-width: 100%;
}
.acmilan .card-tags .pillshome,
.acmilan2 .card-tags .pillshome {
  flex: 0 0 auto;
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .projectcard, .projectcard .card-background { transition: none; }
  .projectcard:hover .card-background { transform: scale(1.01); }
}

/* A shared fitted size keeps all visible card titles and pills consistent. */
.projectcard .titlemob {
  font-size: var(--card-title-size, 18px);
  white-space: nowrap;
}
.projectcard .card-tags .pillshome {
  font-size: var(--card-pill-size, 13px);
}
.projectcard .card-tags {
  overflow: visible;
}

@media (min-width: 992px) {
  /* Match the left inset: 4px row margin + 15px column padding. */
  .projectcard .bio { margin-bottom: 19px !important; }
  .projectcard .card-tags .pillshome { margin-bottom: 0 !important; }
}

@media (max-width: 991.98px) {
  .projectcard { height: auto; min-height: 340px; margin-bottom: 24px; }
  .projectcard-link { min-height: inherit; display: flex; align-items: flex-end; }
  .projectcard .bio {
    position: relative; width: 100%; max-width: none; margin: 0 !important;
    padding: 64px 4px 12px; line-height: 1.45;
    background: linear-gradient(transparent, rgba(0, 0, 0, .78));
    --color-secondary: white;
  }
  .projectcard .titlemob { font-size: 18px; line-height: 1.3; white-space: normal; overflow-wrap: anywhere; margin-bottom: 8px; }
  .projectcard p2 { font-size: 14px; line-height: 1.45; }
  .projectcard .card-tags { flex-wrap: nowrap; gap: 4px; padding-top: 12px; }
  .projectcard .card-tags .pillshome { font-size: var(--card-pill-size, 12px); line-height: 1.2; padding: 4px 6px !important; margin: 0 !important; opacity: 1; }
  .projectcard .card-background { transform: none; }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .projectcard { min-height: 400px; }
}

/* These portrait artworks place the subject at the top, above reserved copy space. */
@media (max-width: 991.98px) {
  .projectcard.carachioggia .imgmobile,
  .projectcard.acmilan .imgmobile { background-position: center top; }
}
</style>
