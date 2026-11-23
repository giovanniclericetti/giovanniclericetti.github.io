<template>

  <div>

<div class="container mt-4 index">

  <IndexHeader class="homepage-header"></IndexHeader>

  <div class="homepage-intro">

    <h1 v-if="$locale.state.language === 'en'" class="titleindex">
      <span class="intro-line">{{ $t("Hey! I'm Giovanni, a ") }}<span class="name gradient">{{ $t("Visual Designer") }}</span>{{ $t(" working in the") }}</span>
      <span class="intro-line">{{ $t("sports industry. I currently work with ") }}<a class="hover-a-underline-animation" href="https://www.acmilan.com/">AC Milan</a>{{ $t(", focusing") }}</span>
      <span class="intro-line">{{ $t("on brand communication and commercial partnerships.") }}</span>
    </h1>
    <h1 v-else class="titleindex italian-intro">Ciao! Sono Giovanni, <span class="name gradient">Visual Designer</span> nel mondo dello sport. Collaboro con <span class="intro-link-word"><a class="hover-a-underline-animation" href="https://www.acmilan.com/">AC Milan</a>,</span> lavorando a progetti di comunicazione visiva per il Club e le sue partnership commerciali.</h1>

  </div>

<PortfolioGrid class="mb-5"/>

</div>

  <PortfolioFooter/>

</div>


</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style >
.index .italian-intro { text-wrap: balance; }
.intro-link-word { white-space: nowrap; }
.titleindex { font-family: 'Bricolage Grotesque'; font-size: 32px; font-weight: 400; color: inherit; }

.name{
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 34px;
  font-weight: 800;
}

.titleindex{
  width: 85%;
  line-height: 140%
}


.index .homepage-header {
  margin-bottom: 0 !important;
}

.index .homepage-intro {
  padding-block: 48px;
}

.index .homepage-intro .titleindex {
  margin-top: 0;
  margin-bottom: 0;
}

.index .titleindex {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.index {
  --color-primary: #FF4466;
}

.hover-a-underline-animation {
  display: inline-block;
  position: relative;
  color: black;
}

.hover-a-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2.5px;
  bottom: 5px;
  left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-a-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

a:hover {
  text-decoration: none;
  color: black;
}


@media (min-width: 992px) {
  .index .homepage-intro {
    padding-block: 96px;
  }

  .index .titleindex {
    width: 100%;
    font-size: clamp(20px, 2.25vw, 32px);
  }

  .index .intro-line {
    display: block;
    white-space: nowrap;
  }

  html[lang="it"] .index .intro-line {
    display: inline;
    white-space: normal;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .index .titleindex {
    width: 90%;
    font-size: 24px;
  }

  .index .name {
    font-size: 30px;
  }
}

/* Scale introductory copy smoothly through tablet and desktop widths. */
@media (min-width: 768px) {
  .index .titleindex {
    font-size: clamp(20px, 2.25vw, 32px);
    text-wrap: balance;
  }

  .index .titleindex .name {
    font-size: 1.0625em;
  }
}

@media (max-width: 767.98px) {
  .index .homepage-intro {
    padding-block: 48px;
  }

  .index .name {
    font-size: 21px;
  }

  .index .titleindex {
    text-align: left;
    margin-left: 0;
    margin-right: auto;
    width: 90%;
    font-size: 19px;
    line-height: 1.3;
  }
}



</style>
