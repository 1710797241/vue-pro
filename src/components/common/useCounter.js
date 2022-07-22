import { ref } from 'vue';
export default function useCounter(init = 0) {
    const counter = ref(init);
    const handleCounter = val => {
        counter.value = val;
    };
    return {
        counter,
        handleCounter
    };
}
