import access from '../access';
export const checkAccess = (accessType, to) => {
    const canAccess = access({ user: 'user' })[accessType];

    if (typeof canAccess == 'boolean') {
        if (canAccess) {
            return true;
        } else {
            return false;
        }
    } else if (typeof canAccess == 'function') {
        if (canAccess(to)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
};
export const filterRoutes = routes => {
    let originRoutes = mapRoutes(routes);
    originRoutes.map(item => {
        if (item.children) {
            item.children.map(item2 => {
                if (item2.meta.hideInMenu) {
                    if (item.meta.hideInChildrenMenucount) {
                        item.meta.hideInChildrenMenucount = item.meta.hideInChildrenMenucount + 1;
                    } else {
                        item.meta.hideInChildrenMenucount = 1;
                    }
                }
            });
        }
    });
    originRoutes.map(item => {
        if (item.children && item.children.length == item.meta.hideInChildrenMenucount) {
            item.meta.hideInMenu = true;
        }
    });
    return originRoutes;
};

export const mapRoutes = routes => {
    let originRoutes = routes;
    originRoutes.map(item => {
        if (item.meta.access) {
            let isShowMenu = checkAccess(item.meta.access, item);

            item.meta.hideInMenu = !isShowMenu;
        }
        if (item.children) {
            mapRoutes(item.children);
        }
    });

    return originRoutes;
};
