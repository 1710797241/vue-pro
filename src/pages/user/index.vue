<template>
    <div>
        <el-button @click="handleAdd" type="primary">add</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="action">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope)" type="primary">edit</el-button>
                    <el-button @click="handleDelete(scope)" type="danger">delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :visible="visible" @close="handleVisible(false)">
            <el-form label-width="180px" :model="currentRow">
                <el-form-item label="日期" prop="date">
                    <el-date-picker
                        value-format="yyyy-MM-dd"
                        v-model="currentRow.date"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="currentRow.name"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="currentRow.address"></el-input>
                </el-form-item>
                <el-button @click="handleSubmit">submit</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎1',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎2',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎3',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎4',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            visible: false,
            currentIndex: null,
            currentRow: {},
            isEdit: false
        };
    },
    beforeCreate() {
        this.currentRow = {};
    },
    methods: {
        handleDelete(params) {
            const { $index } = params;
            this.tableData.splice($index, 1);
        },
        handleEdit(params) {
            this.isEdit = true;
            const { $index, row } = params;
            this.currentRow = { ...row };
            this.currentIndex = $index;
            this.handleVisible(true);
        },
        handleVisible(status) {
            this.visible = status;
            if (!status) {
                this.currentRow = {};
                this.currentIndex = null;
            }
        },
        handleSubmit() {
            if (this.isEdit) {
                this.tableData.splice(this.currentIndex, 1, this.currentRow);
                this.$message.success('编辑成功');
                this.handleVisible(false);
            } else {
                this.tableData.push(this.currentRow);
                this.$message.success('添加成功');
                this.handleVisible(false);
            }
        },
        handleAdd() {
            this.isEdit = false;
            this.handleVisible(true);
        }
    }
};
</script>
