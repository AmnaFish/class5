//pure fuction does not depend or updates on any fuction
const numbReducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.val
        case 'DECREMENT':
            return state - action.val
        default:
            
    }
}
export default numbReducer;
