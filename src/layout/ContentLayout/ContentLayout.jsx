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
    props: {
        showFooter: {
            type: Boolean,
            default: false
        },
        footerClass: {
            type: String,
            default: ''
        },
        backgroundColor: {
            type: String,
            default: '#001529'
        },
        textColor: {
            type: String,
            default: '#fff'
        },
        activeTextColor: {
            type: String,
            default: '#ffd04b'
        }
    },
    mounted() {
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
        },
        handleOpen(index, indexPath) {
            this.openeds = [index];
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
            window.addEventListener('resize', this.handleResize);
        },
        handleRemoveSizeListener() {
            window.removeEventListener('resize', this.handleResize);
        },
        handleResize() {
            const width = document.documentElement.clientWidth;
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
        renderMenuItems(list) {
            let divList = [];

            list.map((item, index) => {
                if (item.children && !item.meta.hideInMenu) {
                    divList.push(
                        <el-submenu key={index} index={item.path}>
                            <template slot="title">
                                <i class={item.meta.icon}></i>
                                <span slot="title">{item.meta.title}</span>
                            </template>
                            {this.renderMenuItems(item.children)}
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
        const { $slots, $attrs, footerClass, activeTextColor, textColor, backgroundColor } = this;
        // console.log('$slots', $slots, '$attrs', $attrs, 'footerClass', footerClass);

        return (
            <div class={'custom-pro-layout'}>
                <el-container style="height 100%;">
                    <div style={{ flexBasis: this.asideWidth }} class="el-aside-wrapper"></div>
                    <el-aside width={this.asideWidth}>
                        <span class="aside-logo"></span>
                        <el-menu
                            onOpen={this.handleOpen}
                            onSelect={this.handleSelect}
                            collapse-transition={false}
                            default-openeds={this.openeds}
                            collapse={this.isFlod}
                            router={true}
                            unique-opened={false}
                            default-active={this.active}
                            background-color={backgroundColor}
                            text-color={textColor}
                            active-text-color={activeTextColor}
                        >
                            {this.renderMenuItems(this.routes)}
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
                        <header style={{ height: '60px', backgronudColor: 'transparent' }}></header>
                        <el-header>{$slots.header}</el-header>
                        <el-main>
                            <div class="custom-el-main-content">
                                <router-view></router-view>
                            </div>
                        </el-main>
                        {this.showFooter ? (
                            <div class={['custom-footer', footerClass]}>{$slots.footer}</div>
                        ) : null}
                    </el-container>
                </el-container>
            </div>
        );
    }
};
export default ProLayout;
