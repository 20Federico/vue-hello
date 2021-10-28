'use strict';
Vue.config.devtools = true;

window.addEventListener('DOMContentLoaded', function () {
  const vueApp = new Vue({
      el: '#vue',
      data: {
        h1: 'Titolo della pagina',
        imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads-ssl.webflow.com%2F5e96913c9bac7c0b5cb3391c%2F5f44a7398c0cdf460857e744_img-image.jpg&f=1&nofb=1',
        imgAlt: 'copertina'
      },
      methods: {
        function () {
          
        },
      },
  });
});