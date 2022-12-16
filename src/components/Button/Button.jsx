const CAButton = {
    name: 'CAButton',
    data() {
        return {
            text: 'CAButton'
        };
    },
    props: {
        /**
         * size 不会出现在$attrs
         */
        size: {
            type: Number,
            default: 1
        }
    },
    beforeCreate() {
        console.log('this.$bus', this.$bus);
    },
    methods: {
        changIcon() {
            this.$emit('changIcon', 'el-icon-refresh-left');
        }
    },
    render() {
        console.log('app', this);
        const { $attrs, $listeners, size, $emit } = this;

        const attrs = $attrs ? { ...$attrs } : {}; //$attrs仅支持string,除props定义的
        return (
            <div onClick={this.changIcon} size={size} class="a-button">
                {this.$scopedSlots.default?.({ text: this.text })}
                {this.$scopedSlots.icon({ icon: 'el-icon-loading' })}
            </div>
        );
    }
};
export default CAButton;
