const permission = {
    beforeCreate() {
        console.log('mixins permission');
    },
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 9, 9],
            mixins: true
        };
    }
};
export default permission;
