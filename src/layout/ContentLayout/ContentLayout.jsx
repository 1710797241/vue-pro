import routes from '../../routes/routes';
import { filterRoutes } from '../../utils/utils';
import './index.less';
const ProLayout = {
    name: 'ProLayout',
    data() {
        return {
            routes: [],
            openeds: ['/'],
            active: '/',
            isFlod: false,
            minWidth: 1000,
            asideWidth: '220px',
            asideMinWidth: '64px',
            asideMaxWidth: '220px'
        };
    },
    mounted() {
        console.log('init layout', this.$route);
        // if (this.$route.path !== this.active) {
        //   this.$router.push(this.active)
        // }
        this.handleResize();
        this.handleAddSizeListener();
        this.handleInitRoutes();
    },
    unmounted() {
        this.handleRemoveSizeListener();
    },
    methods: {
        handleSelect(index, indexPath) {
            this.active = index;

            console.log('select', index, 'path', indexPath);
        },
        handleOpen(index, indexPath) {
            this.openeds = [index];
            console.log('handleOpen', index, 'path', indexPath);
        },
        handleFold() {
            if (!this.isFlod) {
                this.isFlod = true;
                this.asideWidth = this.asideMinWidth;
            } else {
                this.isFlod = false;
                this.asideWidth = this.asideMaxWidth;
            }
        },
        handleAddSizeListener() {
            console.log('resize');
            window.addEventListener('resize', this.handleResize);
        },
        handleRemoveSizeListener() {
            window.removeEventListener('resize', this.handleResize);
        },
        handleResize() {
            const width = document.documentElement.clientWidth;
            console.log('width', width);
            if (width < this.minWidth) {
                this.isFlod = true;
                this.asideWidth = this.asideMinWidth;
            } else {
                this.isFlod = false;
                this.asideWidth = this.asideMaxWidth;
            }
        },
        handleInitRoutes() {
            try {
                let originRoutes = filterRoutes(routes);
                this.routes = originRoutes;
            } catch (error) {
                console.log('error', error);
            }
        },
        renderMenuItems() {
            let divList = [];

            //   <template v-for="(item, index) in routes">
            //   <el-menu-item v-bind:key="index" v-if="!item.children && !item.meta.hideInMenu" :index="item.path">

            //     <i :class="item.meta.icon"></i>
            //     <span slot="title">{{ item.meta.title }}</span>

            //   </el-menu-item>

            //   <template v-if="item.children && !item.meta.hideInMenu">
            //     <el-submenu v-bind:key="index" :index="item.path">
            //       <template slot="title">
            //         <i :class="item.meta.icon"></i>
            //         <span slot="title">{{ item.meta.title
            //         }}</span>
            //       </template>
            //       <template v-for="(item2, index2) in item.children">
            //         <el-menu-item v-if="!item2.meta.hideInMenu" v-bind:key="index2" :index="item2.path">
            //           {{ item2.meta.title }}
            //         </el-menu-item>
            //       </template>

            //     </el-submenu>
            //   </template>
            // </template>
            this.routes.map((item, index) => {
                let childrenDivList = [];
                if (item.children && !item.meta.hideInMenu) {
                    item.children.map((item2, index2) => {
                        if (item2.meta.hideInMenu) {
                        } else {
                            childrenDivList.push(
                                <el-menu-item key={index2} index={item2.path}>
                                    {item2.meta.title}
                                </el-menu-item>
                            );
                        }
                    });
                    divList.push(
                        <el-submenu key={index} index={item.path}>
                            <template slot="title">
                                <i class={item.meta.icon}></i>
                                <span slot="title">{item.meta.title}</span>
                            </template>
                            {childrenDivList}
                        </el-submenu>
                    );
                }
                if (!item.children && !item.meta.hideInMenu) {
                    divList.push(
                        <el-menu-item key={index} index={item.path}>
                            <i class={item.meta.icon}></i>
                            <span slot="title">{item.meta.title}</span>
                        </el-menu-item>
                    );
                }
            });
            return divList;
        }
    },
    render() {
        let sel_props = {
            on: {
                open: this.handleOpen,
                select: this.handleSelect
            }
        };
        return (
            <div>
                <el-container style="height 100%;">
                    <el-aside width={this.asideWidth}>
                        <span class="aside-logo"></span>
                        <el-menu
                            onOpen={e => {
                                console.log('e');
                            }}
                            collapse-transition={false}
                            default-openeds={this.openeds}
                            collapse={this.isFlod}
                            router={true}
                            unique-opened={false}
                            default-active={this.active}
                            background-color="#001529"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                        >
                            {this.renderMenuItems()}
                        </el-menu>

                        {this.isFlod ? (
                            <span onClick={this.handleFold} class="tool">
                                <i class="el-icon-s-unfold"></i>
                            </span>
                        ) : (
                            <span onClick={this.handleFold} class="tool">
                                <i class="el-icon-s-fold"></i>
                            </span>
                        )}
                    </el-aside>

                    <el-container>
                        <el-header>
                            <div class="header-container">
                                <div class="header-left"></div>
                                <div class="header-right">
                                    <el-dropdown class="custom-el-dropdown-menu_item">
                                        <i
                                            class="el-icon-setting"
                                            style="margin-right 0px;color#fff;"
                                        >
                                            <span style="margin-left5px">王小虎</span>
                                        </i>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>查看</el-dropdown-item>
                                            <el-dropdown-item>新增</el-dropdown-item>
                                            <el-dropdown-item>删除</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                        </el-header>

                        <el-main>
                            <router-view></router-view>
                        </el-main>
                    </el-container>
                </el-container>
            </div>
        );
    }
};
export default ProLayout;
