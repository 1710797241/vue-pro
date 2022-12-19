import { defineStore } from 'pinia';
export const useAppStore = defineStore('app', {
    state: () => ({ lang: 'en' }),
    getters: {
        formatLang: state => state.lang + '-CN'
    },
    actions: {
        setLang() {
            if (this.lang === 'zh') this.lang = 'en';
            else this.lang = 'zh';
        }
    }
});
