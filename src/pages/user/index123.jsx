const Index = {
    name: 'user',
    data() {
        return {
            tableData: [{}]
        };
    },
    render() {
        const columns = [
            {
                label: '日期',
                prop: 'date',
                width: 180
            },
            {
                label: '姓名',
                prop: 'name',
                width: 180
            },
            {
                label: '地址',
                prop: 'address'
            }
        ];
        return (
            <div>
                <el-table data={this.tableData} style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
            </div>
        );
    }
};
export default Index;
