import CustomUiButton from './Button';
function install(Vue) {
    console.log('install button');
    Vue.component(CustomUiButton.name, CustomUiButton);
}
export default install;
