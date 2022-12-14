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
            ],
            visible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            elVals: { age: 1 }
        };
    },
    watch: {
        deep: true,
        form: function (val) {
            console.log('form val', val);
        },
        form: {
            handler(newVal, oldVal) {
                console.log('form val', newVal);
            },
            deep: true
        }
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
        },
        handleVisible() {
            this.visible = !this.visible;
        },
        onSubmit() {
            this.$refs['form'].validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    render() {
        return (
            <div>
                <div domPropsInnerHtml={'div'}></div>
                <el-button onClick={this.handleVisible}>add</el-button>
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
                <el-dialog onClose={this.handleVisible} visible={this.visible}>
                    <el-form ref="form" vModel={this.elVals} label-width="180px">
                        {/* <el-form-item prop="name" label="活动名称">
                            <el-input vModel={this.form.name}></el-input>
                        </el-form-item>
                        <el-form-item prop="region" label="活动区域">
                            <el-select vModel={this.form.region} placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="date1" label="活动时间">
                            <el-col span={11}>
                                <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    vModel={this.form.date1}
                                    style="width: 100%;"
                                ></el-date-picker>
                            </el-col>
                            <el-col class="line" span={2}>
                                -
                            </el-col>
                            <el-col span={11}>
                                <el-time-picker
                                    placeholder="选择时间"
                                    vModel={this.form.date2}
                                    style="width: 100%;"
                                ></el-time-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item prop="delivery" label="即时配送">
                            <el-switch vModel={this.form.delivery}></el-switch>
                        </el-form-item>
                        <el-form-item prop="type" label="活动性质">
                            <el-checkbox-group vModel={this.form.type}>
                                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                <el-checkbox label="地推活动" name="type"></el-checkbox>
                                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item prop="resource" label="特殊资源">
                            <el-radio-group vModel={this.form.resource}>
                                <el-radio label="线上品牌商赞助"></el-radio>
                                <el-radio label="线下场地免费"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item prop="desc" label="活动形式">
                            <el-input type="textarea" vModel={this.form.desc}></el-input>
                        </el-form-item> */}
                        <el-form-item
                            label="年龄"
                            prop="age"
                            rules={[
                                { required: true, message: '年龄不能为空' },
                                { type: 'number', message: '年龄必须为数字值' }
                            ]}
                        >
                            <el-input vModel_number={this.form.age} autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item prop="option">
                            <el-button type="primary" onClick={this.onSubmit}>
                                立即创建
                            </el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>
        );
    }
};
export default Index;
