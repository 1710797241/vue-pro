const state = {
    num: 0
}

const mutations = {
    add(state, payload) {
        console.log('state', state, 'payload', payload)
        state.num += payload.num
    }
}

const actions = {
    add(mutation, payload) {
        console.log('mutation', mutation, 'payload', payload)
        mutation.commit('add', payload)
    }
}

const getters = {
    newNum: state => state.num + 'new'
}
export default { namespaced: true, state, getters, mutations, actions }
