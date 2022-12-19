<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { ObjectData } from './typing';
import { useAppStore } from './stores/app';
import { useI18n } from 'vue-i18n';
const appStore = useAppStore();

const handleClick = (data: ObjectData) => {
    console.log(data);
};
const handleChange = (data: any) => {
    console.log(data);
};
const { locale } = useI18n();
const setLang = () => {
    appStore.setLang();
    locale.value = appStore.lang;
};
</script>

<template>
    <div>
        <p>message:{{ $t('title') }}------{{ appStore.lang }}</p>
        <button @click="setLang">chang lang</button>
    </div>
    <HelloWorld
        @changeCustom="handleChange"
        @clickCustom="handleClick"
        msg="Vite + Vue"
        title="qiye"
    />
    <router-view></router-view>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
