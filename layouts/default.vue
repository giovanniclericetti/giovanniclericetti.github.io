<template>
  <Nuxt/>
</template>

<script>
export default {
  name: "DefaultLayout",
  head() {
    return {
      link: [
        {href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap', rel: 'stylesheet'}
      ]
    }
  }
}
</script>


<style>

body {
  background-color: #F6F2F2;
}

::selection {
  background-color: var(--color-primary);
  color: #ffffff;

}

h1 {
  font-family: "title-bold";
  color: var(--color-primary);
  font-size: 64pt;
  font-weight: 100;
}

h2 {
  font-family: 'DM Sans';
  font-size: 32px;
  font-weight: 400;
}

h3 {
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 130%;
}

h4 {
  font-family: 'title-regular';
  font-size: 22px;
  font-weight: 400;
  color: var(--color-primary);
}

h5 {
  font-family: 'title-regular';
  font-size: 18px;
  font-weight: 400;
}

h6 {
  font-family: 'title-regular';
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}

p {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin: 0px;
}

p2 {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
}

.gradient {
  background: -webkit-linear-gradient(45deg, #FFA857, #FF4466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  --color-primary: #FF6E60;
}

.sourdata {
  --color-primary: #FF5880;
  --color-secondary: #3741DC;
  --color-success: #3741DC;
  --color-warning: white;


}

.it-back {
  --color-primary: #EA4A3C;
  --color-secondary: green;
  --color-success: #EA4A3C;
  --color-warning: white;
}

.quattriny {
  --color-primary: #F7A716;
  --color-success: #F7A716;
}

.previewpretest {
  --color-primary: #33D09D;
  --color-success: #4BC3D7;
}

.carachioggia {
  --color-primary: #5E5F3C;
  --color-success: #5E5F3C;
}

.aura {
  --color-primary: #FF7673;
  --color-success: #C26CBA;
}

.around {
  --color-primary: #5650D8;
  --color-success: #5650D8;
}

.disruptive {
  --color-primary: #3C83ED;
  --color-success: #70A4E0;
}

.bottleneck {
  --color-primary: #3C646A;
  --color-secondary: green;
  --color-success: #3A6069;
}



.referto {
  --color-primary: #D92121;
  --color-success: #CB0A00;
}

.imgproject{
  transform-origin: center;
  transform: scale(1.01);
}


.imgbox{
  overflow: hidden;
  border-radius: 30px;
}

.pills {
  border-radius: 20px;
  background-color: var(--color-primary);
  border: none;
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 16px;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: var(--color-primary);
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.img-parallax{
  width: 100%;
  background-size: cover;
  height: 600px;
  border-radius: 30px;
  background-color: white;
}
.h400{
  height: 400px
}

.h500 {
  height: 500px;
}

.h600 {
  height: 600px;
}

.cover-parallax{
  width: 100%;
  height: 400px;
  background-size: cover;
  border-radius: 30px;
  background-color: white;
}

.subtitlecv{
  color: rgba(0, 0, 0, 0.5);
}

.prllx-small{
  height: 400px;
}

.projectbox {
  background-color: white;
  max-height: 600px;
  border-radius: 30px;
  overflow: hidden;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@font-face {
  font-family: "title-bold";
  src: local("title-bold"), url(./static/font/title-bold.otf) format("opentype");
}

@font-face {
  font-family: "title-regular";
  src: local("title-regular"), url(./static/font/title-regular.otf) format("opentype");
}

@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format('woff2');
}

@media (max-width: 768px) {

h1{
  font-size: 52px;
}


h2 {
  font-size: 24px;
}

h3{
  font-size: 20px;
}

  h4 {;
    font-size: 20px;
  }


  p{
    font-size: 16px;
  }

  .cover-parallax{
    width: 100%;
height: 300px;
    background-size: cover;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
  }

  .img-parallax{
    background-size: cover;
    height: 230px;
    border-radius: 20px;
    background-position: center;

  }

  .h400{
    height: 150px;
  }

  .h500 {
    height: 260px;
  }

  .h600 {
    height: 250px;
  }

  .imgbox{
    border-radius: 20px;
  }

  .projectbox {
    max-height: 600px;
    border-radius: 20px;
  }

  .pills {
    border-radius: 20px;
    background-color: var(--color-primary);
    border: none;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 12px;
  }




}




</style>
