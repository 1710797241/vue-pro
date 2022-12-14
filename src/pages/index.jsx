const Index = {
    name: 'index',
    render() {
        return (
            <div ref="home">
                <ElSkeleton rows={16} animated />
            </div>
        );
    },
    mounted() {
        console.log(this);
    }
};
export default Index;
