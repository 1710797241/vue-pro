export default function access(state) {
    console.log('access user', state);
    return {
        canAdmin: curr => {
            console.log('access curr', curr);
            if (curr.path.includes('/hello')) {
                return false;
            } else {
                return true;
            }
        }
    };
}
