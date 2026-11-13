<template>

  <div>

<div class="container mt-4 index">

  <IndexHeader></IndexHeader>

  <div class="mt-5 py-lg-5 py-2">

    <h1 class="titleindex">Hey! I'm Giovanni, a <span class="name gradient">Visual Designer</span> working in the sports industry. I'm currently part of <a class="hover-a-underline-animation" href="https://www.acmilan.com/">AC Milan</a>, focusing on brand design and commercial communication.</h1>

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
.titleindex { font-family: 'DM Sans'; font-size: 32px; font-weight: 400; color: inherit; }

.name{
  font-family: 'title-regular';
  font-size: 34px;
}

.titleindex{
  width: 85%;
  line-height: 140%
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
  .index .titleindex {
    width: 75%;
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
