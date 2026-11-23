<template>
  <div class="acmilan events-matchday">
    <div class="container pt-4">
      <ProjectHeader />
      <ProjectIntro title="ACM Events &amp; Matchday"
        :subtitle="project.bio" :project-type="project.projectType" :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />
      <div class="pt-md-3 d-none d-md-block">
        <div v-responsive-background="{ src: '/images/acm-events-matchday/GCR24765_0PQcufMC_20261102113848 2.png', fullResolution: true }" data-image-src="/images/acm-events-matchday/GCR24765_0PQcufMC_20261102113848 2.png" class="cover-parallax" :aria-label="$t(&quot;Hall of Fame ceremony at San Siro&quot;)" data-parallax-image v-parallax role="img"></div>
      </div>
      <div class="cover-mobile d-block d-md-none">
        <PortfolioImage src="/images/mobile/events-cover.webp" :width="1280" :height="853" :alt="$t(&quot;Hall of Fame ceremony at San Siro&quot;)" loading="eager" fetchpriority="high" />
      </div>
      <section class="project-section" aria-labelledby="project-overview">
        <div class="section-copy">
          <h4 aria-level="2" id="project-overview">{{ $t("Project Overview", "acmilan3.overviewTitle") }}</h4>
          <p>{{ $t(project.overview) }}</p>
        </div>
        <div class="gallery-row" style="--columns: 49fr 22fr 25fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/GCR33836_K5K03rLd_20261102114032 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/GCR33836_K5K03rLd_20261102114032 3.png" class="gallery-image" role="img" :aria-label="$t(&quot;Kaká during the Emirates content production&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/GCR33756_N5DDzeUa_20261102114055 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/GCR33756_N5DDzeUa_20261102114055 3.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Emirates branded editorial content&quot;)" style="--image-ratio: 0.673469387755102"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/DSC00778 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/DSC00778 2.png" class="gallery-image" role="img" :aria-label="$t(&quot;AC Milan and Bud branded beer dispenser&quot;)" style="--image-ratio: 0.7653061224489796"></div>
        </div>
      </section>
      <section class="project-section" aria-labelledby="section-0">
        <div class="section-copy">
          <h4 aria-level="2" id="section-0">{{ $t("Brand Activations", "acmilan3.sections.0.title") }}</h4>
          <p>{{ $t(project.sections[0].description) }}</p>
        </div>
        <div class="gallery-row" style="--columns: 59fr 39fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/ANLA9173_ee359df5-348b-4611-98aa-78fd4e3a7c79_20260525121411 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/ANLA9173_ee359df5-348b-4611-98aa-78fd4e3a7c79_20260525121411 3.png" class="gallery-image" role="img" :aria-label="$t(&quot;Matchday fan village for the new kit launch&quot;)" style="--image-ratio: 1.85"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/ANLA9131_de0c2bb8-f572-4bbc-94ea-a80ca99e705f_20260525121404 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/ANLA9131_de0c2bb8-f572-4bbc-94ea-a80ca99e705f_20260525121404 3.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Player cutouts and prize wheel at the fan village&quot;)" style="--image-ratio: 1.2228813559322036"></div>
        </div>
        <div class="gallery-row" style="--columns: 1fr 1fr 1fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/ANLA8907_d5a56d55-e9df-48f2-9f05-cf74fb75cd8f_20260525120430 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/ANLA8907_d5a56d55-e9df-48f2-9f05-cf74fb75cd8f_20260525120430 3.png" class="gallery-image" role="img" :aria-label="$t(&quot;PUMA and AC Milan fan village barriers&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/SA1_0756_P8o4lNmh_20260525092006 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/SA1_0756_P8o4lNmh_20260525092006 3.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;New kit launch billboard outside San Siro&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/0T3A1455_QutsUzwU 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/0T3A1455_QutsUzwU 3.png" class="gallery-image" role="img" :aria-label="$t(&quot;Christmas Village entrance billboard&quot;)" style="--image-ratio: 1.5"></div>
        </div>
        <div class="gallery-row" style="--columns: 1fr 1fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/SRC_3770_XsFjWIcN_20251214112707 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/SRC_3770_XsFjWIcN_20251214112707 3.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Branded arch at the Christmas Village&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/SRC_3968_wts7OfYI_20251214112648 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/SRC_3968_wts7OfYI_20251214112648 3.png" class="gallery-image" role="img" :aria-label="$t(&quot;Christmas Village activation desk&quot;)" style="--image-ratio: 1.5"></div>
        </div>
        <p class="image-credits">{{ $t("Selected photographs are sourced from Getty Images and are used solely to provide visual context for the design work presented. All image rights remain with their respective copyright holders.") }}</p>
      </section>
      <section class="project-section" aria-labelledby="section-1">
        <div class="section-copy">
          <h4 aria-level="2" id="section-1">{{ $t("Corporate & Partner Events", "acmilan3.sections.1.title") }}</h4>
          <p>{{ $t(project.sections[1].description) }}</p>
        </div>
        <div class="gallery-row" style="--columns: 1fr 1fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/SA1_8305_1iBhF4js_20260714110000 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/SA1_8305_1iBhF4js_20260714110000 3.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Summer of Bud event at Milanello&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/SA2_0013_ZP3h6MqK_20260714105640 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/SA2_0013_ZP3h6MqK_20260714105640 2.png" class="gallery-image" role="img" :aria-label="$t(&quot;Summer of Bud branded installation&quot;)" style="--image-ratio: 1.5"></div>
        </div>
        <div class="gallery-row" style="--columns: 35fr 41fr 22fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/image 634.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/image 634.png" class="gallery-image" role="img" :aria-label="$t(&quot;Game Changers corporate event materials&quot;)" style="--image-ratio: 1.05"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/VL_L8956_rFaGwTjP 1.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/VL_L8956_rFaGwTjP 1.png" class="gallery-image" role="img" :aria-label="$t(&quot;The Art of Collaboration event at Terrazza Martini&quot;)" style="--image-ratio: 1.2300000000000002"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/FS3_4829_F0QJd8l6.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/FS3_4829_F0QJd8l6.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Upgrade Your Business event screens&quot;)" style="--image-ratio: 0.66"></div>
        </div>
        <div class="gallery-row" style="--columns: 1fr 1fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/FR3_3197_JEHvr5s2 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/FR3_3197_JEHvr5s2 3.png" class="gallery-image" role="img" :aria-label="$t(&quot;Partner event backdrop at Casa Milan&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/MM4_2041_Wbw6dYom_20260522100547 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/MM4_2041_Wbw6dYom_20260522100547 2.png" class="gallery-image" role="img" :aria-label="$t(&quot;Partner dinner menu and table setting&quot;)" style="--image-ratio: 1.5"></div>
        </div>
        <div class="gallery-row" style="--columns: 40fr 60fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/FS8_5480_Bf7DMWoV 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/FS8_5480_Bf7DMWoV 2.png" class="gallery-image" role="img" :aria-label="$t(&quot;AC Milan and MSC event backdrop&quot;)" style="--image-ratio: 1.35"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/MM4_2032_BA0C394l_20260522100607 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/MM4_2032_BA0C394l_20260522100607 2.png" class="gallery-image" role="img" :aria-label="$t(&quot;Partner dinner setup at Casa Milan&quot;)" style="--image-ratio: 2.025"></div>
        </div>
        <p class="image-credits">{{ $t("Selected photographs are sourced from Getty Images and are used solely to provide visual context for the design work presented. All image rights remain with their respective copyright holders.") }}</p>
      </section>
      <section class="project-section" aria-labelledby="section-2">
        <div class="section-copy">
          <h4 aria-level="2" id="section-2">{{ $t("Matchday & Sport Production", "acmilan3.sections.2.title") }}</h4>
          <p>{{ $t(project.sections[2].description) }}</p>
        </div>
        <div class="gallery-row" style="--columns: 1fr 1fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/MM3_1888_6ASwckrp_20260829052529 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/MM3_1888_6ASwckrp_20260829052529 3.png" class="gallery-image" role="img" :aria-label="$t(&quot;Giant shirt tribute to Franco Baresi&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/SA2_9674_MReuHTb9_20260427101930 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/SA2_9674_MReuHTb9_20260427101930 2.png" class="gallery-image" role="img" :aria-label="$t(&quot;Emirates activation on the San Siro big screen&quot;)" style="--image-ratio: 1.5"></div>
        </div>
        <div class="gallery-row mobile-hidden" style="--columns: 40fr 58fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/GCR34093_gKctbQWP_20261102113919 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/GCR34093_gKctbQWP_20261102113919 3.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Hall of Fame ceremony award presentation&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/GCR24765_0PQcufMC_20261102113848 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/GCR24765_0PQcufMC_20261102113848 2.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Hall of Fame on-pitch ceremony setup&quot;)" style="--image-ratio: 2.175"></div>
        </div>
        <div class="gallery-row" style="--columns: 62fr 37fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/SA1_4663_VxJtEMSd_20261019095155 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/SA1_4663_VxJtEMSd_20261019095155 2.png" class="gallery-image" role="img" :aria-label="$t(&quot;Bud Corner hospitality branding&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/MM3_1320_IDAj5sQn_20261101095721 3.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/MM3_1320_IDAj5sQn_20261101095721 3.png" class="gallery-image" role="img" :aria-label="$t(&quot;Generali Lounge entrance branding&quot;)" style="--image-ratio: 0.8951612903225806"></div>
        </div>
        <div class="gallery-row" style="--columns: 1fr 1fr">
          <div v-responsive-background="{ src: '/images/acm-events-matchday/MM3_5117_0a36dvTx_20261019071035 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/MM3_5117_0a36dvTx_20261019071035 2.png" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Live match programming on the stadium screen&quot;)" style="--image-ratio: 1.5"></div>
          <div v-responsive-background="{ src: '/images/acm-events-matchday/MM1_1219_iHKGKyhq_20251215105709 2.png', fullResolution: true }" v-parallax data-parallax-image data-image-src="/images/acm-events-matchday/MM1_1219_iHKGKyhq_20251215105709 2.png" class="gallery-image" role="img" :aria-label="$t(&quot;Bud activation on the San Siro big screen&quot;)" style="--image-ratio: 1.5"></div>
        </div>
        <p class="image-credits">{{ $t("Selected photographs are sourced from Getty Images and are used solely to provide visual context for the design work presented. All image rights remain with their respective copyright holders.") }}</p>
      </section>
      <ProjectNextPrevious
        thumbnail="/images/covers/next/avi-next.jpg"
        class="column card-large biowhite avi"
        to="/audiovisualidentity"
        nextproject="Audiovisual Identity"
      :pill1="projectContent.audiovisualidentity.pill1" :pill2="projectContent.audiovisualidentity.pill2" :pill3="projectContent.audiovisualidentity.pill3" :bionext="projectContent.audiovisualidentity.bio" />
    </div>
    <PortfolioFooter />
  </div>
</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent.acmilan3, projectContent } },
  name: 'AcmEventsMatchday',
}
</script>
<style scoped>
.cover-parallax,
.cover-mobile,
.gallery-image {
  position: relative;
}

.cover-parallax::after,
.cover-mobile::after,
.gallery-image::after {
  content: '@GettyImages';
  position: absolute;
  right: 12px;
  bottom: 8px;
  z-index: 1;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.65);
  pointer-events: none;
}

.image-credits {
  text-align: center;
  margin-top: 16px;
  color: #767676;
  font-size: 12px;
  line-height: 1.5;
}

.events-matchday .cover-parallax {
  display: block;
  border-radius: 20px;
  overflow: hidden;
}
.events-matchday {
  background: #fff;
}
.events-matchday ::v-deep .subtitle {
  max-width: 100%;
  text-wrap: balance;
}
.section-copy {
  width: calc(80% + 100% / 12);
  padding: 48px 0;
}
.section-copy p {
  text-wrap: pretty;
  margin-bottom: 0;
}
.section-copy + .gallery-row {
  margin-top: 0;
}
.cover-mobile {
  height: auto;
}
.cover-mobile img {
  display: block;
  width: 100%;
  height: auto;
}
.gallery-split,
.gallery-row,
.gallery-column {
  display: grid;
  gap: 30px;
  min-width: 0;
}
.gallery-split {
  grid-template-columns: 3fr 2fr;
}
.gallery-column {
  align-content: start;
}
.gallery-row {
  margin-top: 30px;
}
.gallery-row > .gallery-image,
.gallery-column > .gallery-image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: var(--image-ratio);
  min-height: 0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}
/* Let the aerial photo fill the remaining height of the right column. */
@media (min-width: 768px) {
  /* The left column determines the height; crop the last image on the right. */
  .media-gallery > .gallery-column:last-child {
    min-height: 0;
    grid-template-rows: auto auto minmax(0, 1fr);
    align-content: stretch;
  }
  .media-gallery > .gallery-column:last-child > .gallery-image:last-child {
    height: 100%;
    aspect-ratio: auto;
  }
  /* The first image sets the row height; every sibling fills the same track. */
  .gallery-row > .gallery-image {
    height: 100%;
    aspect-ratio: auto;
  }
  .gallery-row > .gallery-image:first-child {
    height: auto;
    aspect-ratio: var(--image-ratio);
  }
  .venue-gallery > .gallery-column:last-child {
    align-content: stretch;
    grid-template-rows: auto minmax(0, 1fr);
  }
  .venue-gallery > .gallery-column:last-child > .gallery-image:last-child {
    height: 100%;
    aspect-ratio: auto;
  }
}
.venue-row {
  grid-template-columns: 4fr 3fr 3fr;
}
.media-pair,
.partner-pair {
  grid-template-columns: 1fr 1fr;
}
.media-pair {
  margin-top: 0;
}
.partner-row {
  grid-template-columns: 3fr 4fr 3fr;
}
@media (max-width: 767.98px) {
  .cover-mobile {
    margin-top: 40px;
    margin-bottom: 16px;
  }
  .image-credits {
    width: calc(100% - 16px);
    max-width: 340px;
    margin: 10px auto 0;
    text-align: center;
    text-wrap: balance;
  }
  .gallery-row.mobile-hidden,
  .gallery-image.mobile-hidden {
    display: none;
  }
  .events-matchday ::v-deep .subtitle,
  .section-copy {
    max-width: 100%;
    width: 100%;
  }
  .gallery-split,
  .gallery-row,
  .gallery-column {
    gap: 16px;
  }
  .gallery-split,
  .gallery-row {
    grid-template-columns: 1fr;
    aspect-ratio: auto;
  }
  .gallery-row {
    margin-top: 16px;
  }
  .media-pair {
    margin-top: 0;
  }
  .venue-gallery .gallery-column,
  .media-gallery .gallery-column {
    grid-template-rows: auto;
  }
  .gallery-row > .gallery-image,
  .gallery-column > .gallery-image {
    height: auto;
    aspect-ratio: var(--image-ratio);
    border-radius: 20px;
  }
}

@media (min-width: 768px) { .events-matchday .gallery-row { grid-template-columns: var(--columns); } }
</style>
