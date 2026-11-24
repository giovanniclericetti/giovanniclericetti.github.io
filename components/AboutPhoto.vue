<template>
<div>

  <div class="aboutmephoto">

    <PortfolioImage alt="Giovanni Clericetti" loading="eager" fetchpriority="high" src="/images/mobile/portrait.webp" :width="1280" :height="1133"  sizes="(min-width: 576px) 510px, calc(100vw - 30px)" />

  </div>



  <div class=" mt-3">
    <b-row class="p-0 m-0 " >

      <b-col cols="3" class=" p-0">
        <div class="socialboxsm mr-3 "> <a href="https://t.me/giovanniclericetti" target="_blank"> <img alt="Telegram" src="~static/images/aboutme/telegram.svg" /> </a> </div>
      </b-col>

      <b-col cols="3" class=" p-0">
        <div class="socialboxsm mr-3">  <a href="https://www.instagram.com/giovanniclericetti.png/" target="_blank"> <img alt="Instagram" src="~static/images/aboutme/instagram.svg" /> </a> </div>
      </b-col>



      <b-col cols="" class=" p-0">
        <div class="socialboxsm bg-white justify-content-center d-flex align-items-center" style="height: 100%"> <a style="width: 75%" href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank"> <LinkedInTileLabel /> </a> </div>
      </b-col>

    </b-row>
  </div>

  <div class=" mt-3">
    <b-row class="p-0 m-0" >

      <b-col cols="8" class=" p-0">

          <a href="/documents/giovanniclericetti.pdf" target="_blank" rel="noopener" class="boxcvmobile bggradient resume-gradient d-block" style="height: 130px; text-decoration: none;" >

            <div class=" text-white d-flex justify-content-center align-items-center pt-3" style="height: 50%">
              <h4 class="mobile-resume-label" :class="{ 'italian-label': $locale.state.language === 'it' }">{{ $t("My Resume") }}</h4>
            </div>

            <div class=" justify-content-center d-flex" style="height: 200%; width: 100%;">

              <PortfolioImage alt="" ref="cvImage" style="height: 100%; width: auto;" src="/images/aboutme/cvbox.png"  sizes="203px" />

            </div>
          </a>

      </b-col>

      <b-col cols="4" class="p-0" style="height: 130px;">
        <div class="ml-3 d-flex justify-content-center align-items-center bg-white pt-2" style="text-align: center; height: 130px; overflow: hidden; border-radius: var(--radius-large, 35px);"> <a href="mailto:giovanni.clericetti@gmail.com" > <img v-if="$locale.state.language === 'en'" style="width: 85%" alt="Mail me" src="~static/images/aboutme/letswork.svg" /><span v-else class="work-together-label">{{ $t("Mail me") }}<img src="~static/images/aboutme/mail-icon.svg" alt="" /></span> </a> </div>
      </b-col>

    </b-row>
  </div>

</div>



</template>

<script>
export default {
  name: "AboutPhoto",
  props: ["aboutphoto"],
}
</script>

<style scoped>
.mobile-resume-label { font-size: 24px; color: white; }
.mobile-resume-label.italian-label { font-size: clamp(18px, 4.8vw, 24px); text-align: center; padding-inline: 8px; }
.work-together-label { display: block; padding: 8px; color: #DB4B3E; font-size: clamp(14px, 3.6vw, 20px); font-weight: 800; line-height: 1.15; }
.work-together-label img { display: block; width: 40px; height: 30px; margin: 8px auto 0; }


.aboutmephoto{
  border-radius: var(--radius-large, 35px);
  overflow: hidden;
  height: 280px;
}

.aboutmephoto img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}

.bggradient{
  background: linear-gradient(114deg, #FFC793 -8.26%, #FF7B93 106.3%);
}


.socialboxsm {
  border-radius: var(--radius-large, 35px);
  overflow: hidden;
}

.boxcvmobile{
  object-fit: contain;
  overflow: hidden;
  border-radius: var(--radius-large, 35px);
}

.socialboxsm img {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  max-width: 100%;

}


@media (max-width: 767.98px) {
  .aboutmephoto { height: auto; aspect-ratio: 1 / 1; }
  .socialboxsm a { display: flex; align-items: center; justify-content: center; min-height: 48px; }
}

</style>
