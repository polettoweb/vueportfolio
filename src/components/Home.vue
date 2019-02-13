<template>
<scroll-container @change="updateState">
  <div class="home">
    <div class="home__content">
      <div class="home__hero">
        <div class="home__hero-text">
          <div class="name__text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.5 382"><title>Marco</title><g id="name" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="381 0.5 120.5 1.5 0.5 1.5 0.5 2 0.5 122 0.5 381.5 120.5 381.5 120.5 122 380.5 122 381 0.5"/><rect class="cls-1" x="129.5" y="136" width="118" height="245.5"/><rect class="cls-1" x="259.5" y="136" width="118" height="245.5"/></g></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.5 382"><title>Poletto</title><g id="surname" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="273 136 273 188.5 272.5 188.5 272.5 205 120.5 205 120.5 188.5 120.5 173 120.5 122 380.5 122 381 0.5 120.5 1.5 0.5 1.5 0.5 2 0.5 122 0.5 381.5 120.5 381.5 120.5 314.5 381 314.5 381 188.5 381 136 273 136"/></g></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 779.77 48.6"><title>Frontend Developer</title><g id="role" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,48.26V.34H32.67V8.51H9.45V20.86H28.77L9.45,28.42V48.26Z"/><path d="M39.32,48.26V.34H60.83A14,14,0,0,1,67,1.72a16,16,0,0,1,4.9,3.65,17.19,17.19,0,0,1,3.22,5.13,15.25,15.25,0,0,1,1.16,5.77,15.76,15.76,0,0,1-2.36,8.47,13.51,13.51,0,0,1-6.4,5.5l11.1,18H68L58.08,32.2H48.77V48.26ZM48.77,24H60.62a5.06,5.06,0,0,0,2.43-.61,6.19,6.19,0,0,0,2-1.65,8.21,8.21,0,0,0,1.3-2.46,9.43,9.43,0,0,0,.48-3,8.54,8.54,0,0,0-.55-3.1,8.1,8.1,0,0,0-1.47-2.46,6.67,6.67,0,0,0-2.12-1.62,5.59,5.59,0,0,0-2.43-.57H48.77Z"/><path d="M105.62,48.6a22.35,22.35,0,0,1-9.69-2.06,23.76,23.76,0,0,1-7.47-5.47,24.78,24.78,0,0,1-4.83-7.8,24.48,24.48,0,0,1-1.71-9,23.78,23.78,0,0,1,1.81-9.18,25.28,25.28,0,0,1,5-7.76A23.85,23.85,0,0,1,96.31,2a22.75,22.75,0,0,1,9.52-2,21.62,21.62,0,0,1,9.62,2.13,24,24,0,0,1,7.43,5.57,25.59,25.59,0,0,1,4.79,7.83,24.35,24.35,0,0,1,1.71,8.91,23.93,23.93,0,0,1-1.78,9.15,24.81,24.81,0,0,1-4.93,7.7,23.71,23.71,0,0,1-7.53,5.33A22.75,22.75,0,0,1,105.62,48.6ZM91.51,24.3a19,19,0,0,0,1,6,16,16,0,0,0,2.77,5.13A13.73,13.73,0,0,0,99.7,39a14,14,0,0,0,12.06,0,13.76,13.76,0,0,0,4.45-3.68,16.32,16.32,0,0,0,2.74-5.16,18.93,18.93,0,0,0,.92-5.84,18.45,18.45,0,0,0-1-6,16.51,16.51,0,0,0-2.81-5.13,13.37,13.37,0,0,0-4.45-3.54,14.06,14.06,0,0,0-12,.07,13.48,13.48,0,0,0-4.45,3.65,16.29,16.29,0,0,0-2.71,5.13A18.93,18.93,0,0,0,91.51,24.3Z"/><path d="M146.1,17.55V48.26h-9.45V.34H144l25.34,31.46V.41h9.45V48.26h-7.67Z"/><path d="M225.29,8.51H209.74V48.26h-9.38V8.51H184.8V.34h40.48Z"/><path d="M265.08,40.1l-33.77,8.17V.34h33.15V8.51h-23.7V20h20.48v7.56H240.77V40.1Z"/><path d="M281.93,17.55V48.26h-9.45V.34h7.33l25.34,31.46V.41h9.45V48.26h-7.67Z"/><path d="M324.74,48.26V.34h17.67a26.76,26.76,0,0,1,10.45,1.89,21.47,21.47,0,0,1,7.5,5.13A21.19,21.19,0,0,1,364.88,15a28.2,28.2,0,0,1,1.51,9.28,27.69,27.69,0,0,1-1.68,9.89,21.08,21.08,0,0,1-4.83,7.56,21.79,21.79,0,0,1-7.57,4.86,27.08,27.08,0,0,1-9.9,1.72Zm32.13-24a20.14,20.14,0,0,0-1-6.35,14.15,14.15,0,0,0-2.81-5,12.51,12.51,0,0,0-4.56-3.24,15.58,15.58,0,0,0-6.13-1.15h-8.22V40.1h8.22a15,15,0,0,0,6.2-1.21,12.68,12.68,0,0,0,4.52-3.34,14.82,14.82,0,0,0,2.77-5A19.91,19.91,0,0,0,356.87,24.23Z"/><path d="M390.22,48.26V.34H407.9a26.76,26.76,0,0,1,10.45,1.89,21.47,21.47,0,0,1,7.5,5.13A21.19,21.19,0,0,1,430.36,15a28.2,28.2,0,0,1,1.51,9.28,27.69,27.69,0,0,1-1.68,9.89,21.08,21.08,0,0,1-4.83,7.56,21.79,21.79,0,0,1-7.57,4.86,27.08,27.08,0,0,1-9.9,1.72Zm32.13-24a20.14,20.14,0,0,0-1-6.35,14.15,14.15,0,0,0-2.81-5A12.51,12.51,0,0,0,414,9.65a15.58,15.58,0,0,0-6.13-1.15h-8.22V40.1h8.22a15,15,0,0,0,6.2-1.21,12.68,12.68,0,0,0,4.52-3.34,14.82,14.82,0,0,0,2.77-5A19.91,19.91,0,0,0,422.35,24.23Z"/><path d="M473,40.1l-33.77,8.17V.34h33.15V8.51h-23.7V20H469.2v7.56H448.72V40.1Z"/><path d="M485.44.34l13.15,36.25L511.6.34h9.93l-19,47.93h-7.95L475.5.34Z"/><path d="M560.51,40.1l-33.77,8.17V.34h33.15V8.51h-23.7V20h20.48v7.56H536.19V40.1Z"/><path d="M567.91,48.26V.34h9.45V40.1h24.8v8.17Z"/><path d="M625.58,48.6a22.35,22.35,0,0,1-9.69-2.06,23.76,23.76,0,0,1-7.47-5.47,24.78,24.78,0,0,1-4.83-7.8,24.48,24.48,0,0,1-1.71-9,23.78,23.78,0,0,1,1.81-9.18,25.28,25.28,0,0,1,5-7.76A23.85,23.85,0,0,1,616.26,2a22.75,22.75,0,0,1,9.52-2,21.62,21.62,0,0,1,9.62,2.13,24,24,0,0,1,7.43,5.57,25.59,25.59,0,0,1,4.79,7.83,24.35,24.35,0,0,1,1.71,8.91,23.93,23.93,0,0,1-1.78,9.15,24.81,24.81,0,0,1-4.93,7.7,23.71,23.71,0,0,1-7.53,5.33A22.75,22.75,0,0,1,625.58,48.6ZM611.47,24.3a19,19,0,0,0,1,6,16,16,0,0,0,2.77,5.13A13.73,13.73,0,0,0,619.66,39a14,14,0,0,0,12.06,0,13.76,13.76,0,0,0,4.45-3.68,16.32,16.32,0,0,0,2.74-5.16,18.93,18.93,0,0,0,.92-5.84,18.45,18.45,0,0,0-1-6A16.51,16.51,0,0,0,636,13.16a13.37,13.37,0,0,0-4.45-3.54,14.06,14.06,0,0,0-12,.07,13.48,13.48,0,0,0-4.45,3.65,16.29,16.29,0,0,0-2.71,5.13A18.93,18.93,0,0,0,611.47,24.3Z"/><path d="M656.61,48.26V.34h20.62a14,14,0,0,1,6.2,1.38,16,16,0,0,1,4.9,3.65,17.18,17.18,0,0,1,3.22,5.13,15.25,15.25,0,0,1,1.16,5.77,16.69,16.69,0,0,1-4.18,11,15.14,15.14,0,0,1-4.79,3.58,14,14,0,0,1-6.16,1.35H666.06V48.26ZM666.06,24h11a5.44,5.44,0,0,0,4.35-2.09,8.57,8.57,0,0,0,1.75-5.67,9.22,9.22,0,0,0-.55-3.27,8,8,0,0,0-1.44-2.46A5.73,5.73,0,0,0,679,9a6.2,6.2,0,0,0-2.43-.51H666.06Z"/><path d="M733.05,40.1l-33.77,8.17V.34h33.15V8.51h-23.7V20h20.48v7.56H708.74V40.1Z"/><path d="M740.45,48.26V.34H762a14,14,0,0,1,6.2,1.38,16,16,0,0,1,4.9,3.65,17.19,17.19,0,0,1,3.22,5.13,15.25,15.25,0,0,1,1.16,5.77,15.76,15.76,0,0,1-2.36,8.47,13.51,13.51,0,0,1-6.4,5.5l11.1,18H769.15L759.22,32.2H749.9V48.26ZM749.9,24h11.85a5.06,5.06,0,0,0,2.43-.61,6.19,6.19,0,0,0,2-1.65,8.21,8.21,0,0,0,1.3-2.46,9.43,9.43,0,0,0,.48-3,8.54,8.54,0,0,0-.55-3.1,8.1,8.1,0,0,0-1.47-2.46,6.67,6.67,0,0,0-2.12-1.62,5.59,5.59,0,0,0-2.43-.57H749.9Z"/></g></g></svg>
          </div>
        </div>
        <div class="home__arrows"></div>
      </div>
      <div class="home__message">
        <div class="home__message-content">
          <div class="home__message-content--left">
            <h1>Marco Poletto Frontend Web Developer</h1>
            <h2>Hello, my name is Marco, I'm a frontend web developer. Using the latest cutting edge web technologies I create websites from scratch. With attention to details, I always deliver the best solution to the clients according to their requirements.</h2>
          </div>
          <div class="home__message-content--right">
            <scroll-item>
              <img src="../assets/img/mp-macbook.png" alt="" id="message-img" :class="state">
            </scroll-item>
          </div>
        </div>
      </div>
      <div class="home__feature">
        <div class="home__feature-content">
          <div v-for="(feature, index) in features" :key="index" class="home__feature-element">
            <div class="home__feature-content--top">
              <scroll-item>
                <img :src="feature.src" :alt="feature.h2" :id="feature.id" />
              </scroll-item>
            </div>
            
            <div class="home__feature-content--bottom">
              <h2>{{feature.h2}}</h2>
              <p>{{feature.p}}</p>
            </div>
          </div>  
        </div>
      </div>
      <div class="home__recents">
        <!-- <div class="home__recents-content"> -->
          <carousel-3d controlsVisible space="220" perspective="30" width="800" height="490" border="0" :autoplay="true" :autoplay-timeout="3000">
            <slide v-for="(slide, index) in slides" :key="index" :index="index">
              <div class="home__recents-item">
                <img :src="slide.image" :alt="slide.p">
                <div class="home__recents--overlay">
                  <a :href="slide.link" :title="slide.p" target="_blank">
                    <p>{{slide.p}}</p>
                    <img src="../assets/img/eye.svg" alt="Watch Website">
                  </a>
                </div>
              </div>
            </slide>
          </carousel-3d>
          <div class="home__recents-item link">
            <router-link class="see__works" to="/portfolio">See all my works</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </scroll-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      state: {},
      features: [
        {
          src: `${require('../assets/img/design__logo.svg')}`,
          id: 'design__logo',
          h2: 'Design',
          p: 'Creation of Logos and brand identities. Designing websites starting from wireframes and mock-ups for a totally customizable experience.'
        },
        {
          src: `${require('../assets/img/code__logo.svg')}`,
          id: 'code__logo',
          h2: 'Develop',
          p: 'Writing clean code for best performance and high scalability. Using the latest technologies, I write the code wether if they are completely custom, or using cms like Magento and Wordpress.'
        },
        {
          src: `${require('../assets/img/seo__logo.svg')}`,
          id: 'seo__logo',
          h2: 'SEO & Optimisation',
          p: 'Service of optimization for your existing website. I can work on the existing code for the optimization of the code and for improvement in SEO.'
        }

      ],
      slides: [
        {
          link: 'http://www.aqua-pura.com',
          p: 'Aqua Pura',
          image : `${require('../assets/img/aqua-pura.jpg')}`
        },
        {
          link: 'http://www.belling.co.uk',
          p: 'Belling UK',
          image : `${require('../assets/img/belling.jpg')}`
        },
        {
          link: 'http://www.thelanterntankard.com',
          p: 'Lantern Tankard',
          image : `${require('../assets/img/tankard.jpg')}`
        },
        {
          link: 'http://www.stoves.co.uk',
          p: 'Stoves UK',
          image : `${require('../assets/img/stoves.jpg')}`
        },
        {
          link: 'http://www.bbvenezia.com',
          p: 'B&B Venezia',
          image : `${require('../assets/img/bbvenezia.jpg')}`
        }
      ]
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
