import Vue from 'vue';
Vue.directive('action', {
    bind: function (el, binding) {
        console.log('directive-action bind', binding);
    },
    inserted: function (el) {
        console.log('directive-action inserted', el);
    },
    update: function (el) {
        console.log('directive-action update', el);
    }
});
