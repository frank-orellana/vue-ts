// This path will be replaced by the utils/post-compile.js script
import Vue from './lib/vue.esm.browser.js';
const main = new Vue({
    el: '#app',
    data: {
        test: 'This is from Vue!',
        n: 0
    }
});
