const Index = {
    name: 'user',
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    },
    methods: {
        toggleSelection(rows) {
            console.log('rows', rows);
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            console.log('val', val);
            this.multipleSelection = val;
        }
    },
    render() {
        return (
            <div>
                <el-table
                    tooltip-effect="dark"
                    ref="multipleTable"
                    onSelection-change={this.handleSelectionChange}
                    data={this.tableData}
                    style="width: 100%"
                >
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                    <el-button
                        onClick={() => {
                            this.toggleSelection();
                        }}
                    >
                        取消选择
                    </el-button>
                </div>
            </div>
        );
    }
};
export default Index;
