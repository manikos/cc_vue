import Vue from 'vue';
import Dummy from './components/Dummy';

Vue.config.productionTip = false;

Vue.component('dummy-component', Dummy);

new Vue({
	el: "#app",
});
