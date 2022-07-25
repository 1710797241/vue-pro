import { defineStore } from 'pinia';

export const useDocStore = defineStore('main', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            counter: 0,
            name: 'qiye',
            isAdmin: true
        };
    }
});

export const useAddressStore = defineStore('address', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            city: 'nj',
            name: '南京'
        };
    }
});
