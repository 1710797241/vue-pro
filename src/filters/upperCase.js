import Vue from 'vue';
Vue.filter('upper', function (value) {
    if (value) {
        value = value.toString();
        return value.toUpperCase();
    }
});
