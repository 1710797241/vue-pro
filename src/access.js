export default function access(state) {
    // console.log('access user', state);
    const ignoreCheck = ['*', '/403'];

    return {
        canAdmin: curr => {
            // console.log('access curr', curr);
            if (ignoreCheck.includes(curr.path)) {
                return true;
            }

            if (curr.path.includes('/ch')) {
                return false;
            } else {
                return true;
            }
        }
    };
}
