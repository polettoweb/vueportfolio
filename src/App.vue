<template>
  <div id="app">
    <div class="nav" v-scroll-class>
      <input type="checkbox" id="navcheck" role="button" title="menu">
      <label for="navcheck" aria-hidden="true" title="menu">
        <span class="burger">
          <span class="bar">
            <span class="visuallyhidden">Menu</span>
          </span>
        </span>
      </label>
      <nav id="menu">
        <router-link class="menu-item" active-class="active" exact to="/" @click.native="onMenuClick()">Home</router-link>
        <router-link class="menu-item" active-class="active" to="/portfolio" @click.native="onMenuClick()">Portfolio</router-link>
        <!--<router-link class="menu-item" active-class="active" to="/workshop" @click.native="onMenuClick()">Workshop</router-link>-->
        <router-link class="menu-item" active-class="active" to="/contacts" @click.native="onMenuClick()">Contacts</router-link>
      </nav>
      <div class="nav__content">
        <div class="logo--scroll" v-scroll-class:scrolled--logo>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381 381"><title>Marco</title><g id="name" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="380.5 1 120.5 1 120.5 0.5 0.5 0.5 0.5 1 0.5 121 0.5 380.5 120.5 380.5 120.5 121 380.5 121 380.5 1"/><rect class="cls-1" x="129.5" y="135" width="118" height="245.5"/><rect class="cls-1" x="259.5" y="135" width="118" height="245.5"/></g></g></svg>              
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.5 381"><title>Poletto</title><g id="surname" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="273 135 273 187.5 272.5 187.5 272.5 204 120.5 204 120.5 187.5 120.5 172 120.5 121 380.5 121 380.5 1 120.5 1 120.5 0.5 0.5 0.5 0.5 1 0.5 121 0.5 380.5 120.5 380.5 120.5 313.5 381 313.5 381 187.5 381 135 273 135"/></g></g></svg>
        </div>
        <img id="logo" src="./assets/PW-turtle-logo.svg" alt="Marco Poletto Frontend Web Developer">
      </div>
    </div>
    <router-view></router-view>
    <footer>
      <!--<div class="footer__content">-->

      <div class="footer__logo"></div>

      <div class="footer__copy"><p>@2017 Marco Poletto.</p></div>
      <div class="footer__social">
        <a href="https://twitter.com/polettoweb" target="_blank"><img src="./assets/img/twitter-logo-button.svg" alt=""></a>
        <a href="https://www.linkedin.com/in/marco-poletto-96853774/"><img src="./assets/img/linkedin-logo-button.svg" alt=""></a>
        <a href="mailto:marco@polettoweb.eu" target="_blank"><img src="./assets/img/mail-logo-button.svg" alt=""></a>
      </div>
      <!--</div>-->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    onMenuClick: function(e) {
      document.getElementById('menu').classList.add('going');
      setTimeout(function(){
        document.getElementById('menu').classList.remove('going');
        document.getElementById("navcheck").checked = false;
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
