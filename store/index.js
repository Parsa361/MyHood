import axios from 'axios'


export const state = () => ({
    user: {
        id: 0,
        username: '',
        token: '',
    },
    isAuthenticated: false,
})

export const getters = {}

export const mutations = {
    initializeStore(state) {
        if (process.client) {
            const token = localStorage.getItem('token')

            if (token) {
                state.user.token = token
                state.isAuthenticated = true
                axios.defaults.headers.common.Authorization = 'Token ' + token
            }
        }
    },
    setUser(state, user) {
        state.user.id = user.id
        state.user.username = user.username
        state.isAuthenticated = true
    },
    removeUser(state) {
        state.user.id = 0
        state.user.username = 'user.username'
        state.isAuthenticated = false
    }
}

export const actions = {}
