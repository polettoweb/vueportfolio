<template>
<scroll-container @change="updateState">
  <div class="portfolio">
    <div class="portfolio__content">
    <h1>Portfolio</h1>
    <scroll-item>
    <div class="portfolio__box" :class="state">
      <div class="portfolio__img"><a href="http://aqua-pura.com" title="Aqua Pura UK" target="_blank"><img src="../assets/img/aqua-pura-portfolio.jpg" alt="Aqua-pura.com" /></a></div>
      <div class="portfolio__links">
        <p class="portfolio__links-text">Responsive website based on Wordpress and developed from scratch</p>
      </div>
      <div class="portfolio__tags">
        <a target="_self" href="#">Wordpress</a>
        <a target="_self" href="#">Frontend Development</a>
        <a target="_self" href="#">HTML5</a>
        <a target="_self" href="#">CSS3</a>
        <a target="_self" href="#">JavaScript</a>
        <a target="_self" href="#">jQuery</a>
        <a target="_self" href="#">JSON</a>
        <a target="_self" href="#">AJAX</a>
        <a target="_self" href="#">WebGL</a>
        <a target="_self" href="#">Rest API</a>
      </div>
    </div>
    </scroll-item>

    <scroll-item>
    <div class="portfolio__box" :class="state">
      <div class="portfolio__img"><a href="http://www.belling.co.uk" title="Belling UK" target="_blank"><img src="../assets/img/belling-portfolio.jpg" alt="Belling.co.uk" /></a></div>
      <div class="portfolio__links">
        <p class="portfolio__links-text">Responsive website made on top of Umbraco cms.</p>
      </div>
      <div class="portfolio__tags">
        <a target="_self" href="#"><i class="fa fa-tag"></i>Frontend Development</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>Umbraco</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>HTML5</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>CSS3</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>JavaScript</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>jQuery</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>JSON</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>AJAX</a>
      </div>
    </div>
    </scroll-item>
    <scroll-item>
    <div class="portfolio__box" :class="state">
      <div class="portfolio__img"><a href="http://www.thelanterntankard.com" title="The Lantern Tankard" target="_blank"><img src="../assets/img/tankard-portfolio.jpg" alt="Thelanterntankard.com" /></a></div>
      <div class="portfolio__links">
        <p class="portfolio__links-text">Responsive single page website built from scratch </p>
      </div>
      <div class="portfolio__tags">
        <a target="_self" href="#"><i class="fa fa-tag"></i>Frontend Development</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>HTML5</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>CSS3</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>JavaScript</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>jQuery</a>
      </div>
    </div>
    </scroll-item>
    <scroll-item>
    <div class="portfolio__box" :class="state">
      <div class="portfolio__img"><a href="http://www.stoves.co.uk" title="Stoves UK" target="_blank"><img src="../assets/img/stoves-portfolio.jpg" alt="Stoves.co.uk" /></a></div>
      <div class="portfolio__links">
        <p class="portfolio__links-text">Responsive website made on top of Umbraco cms.</p>
      </div>
      <div class="portfolio__tags">
        <a target="_self" href="#"><i class="fa fa-tag"></i>Frontend Development</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>Umbraco</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>HTML5</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>CSS3</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>JavaScript</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>jQuery</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>JSON</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>AJAX</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>GoogleMapsAPI</a>
      </div>
    </div>
    </scroll-item>
    <scroll-item>
    <div class="portfolio__box" :class="state">
      <div class="portfolio__img"><a href="http://www.bbvenezia.com" title="B&amp;B Venezia" target="_blank"><img src="../assets/img/bbvenezia-portfolio.jpg" alt="BBVenezia.com" /></a></div>
      <div class="portfolio__links">
        <p class="portfolio__links-text">Responsive website built for a Bed&amp;Breakfast in Venice using HTML5, CSS3, jQuery, and PHP for the online booking.</p>
      </div>
      <div class="portfolio__tags">
        <a target="_self" href="#"><i class="fa fa-tag"></i>Graphic Design</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>Development</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>PHP</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>CSS3</a>
        <a target="_self" href="#"><i class="fa fa-tag"></i>jQuery</a>
      </div>
    </div>
    </scroll-item>
    </div>
  </div>
</scroll-container>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      state: {}
    }
  },
  methods: {
    updateState (state) {
      this.state = state
    }
  },
  computed: {
    itemsInViewport() {
      return _.pickBy(this.state, ({ isInViewport }) => isInViewport)
    }
  }
}
</script>
<style>
</style>
