import Vue from 'vue';
import toast from './toast.vue';
var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(toast)
})