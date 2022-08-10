import { defineComponent, ref, reactive, onMounted } from 'vue';
import './foo.css';

// named exports w/ variable declaration: ok
export const Foo = defineComponent({
    name: 'foo',
    setup() {
        const time = ref(0);
        const list = reactive([1, 2, 3, 5]);
        onMounted(() => {
            console.log('onMounted');
        });
        return () => (
            <div class="jsx">
                {time.value}
                {list.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))}
            </div>
        );
    },
    mounted() {
        console.log('mounted');
    }
});
