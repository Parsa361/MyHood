import Cookie from 'js-cookie'

export const state = () => ({
    token: null,
    error: null,
    loading: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setError(state, error) {
        state.error = error
    },
    setLoading(state, loading) {
        state.loading = loading
    },
    clearToken(state) {
        state.token = null
    }
}

export const actions = {
    async authenticateUser(vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.webAPIKey
        if (!authData.isLogin) {
            authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.webAPIKey
        }
        vuexContext.commit('setLoading', true)
        await this.$axios.$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        })
            .then(data => {
                vuexContext.commit('setToken', data.idToken)
                vuexContext.commit('setError', null)
                vuexContext.commit('setLoading', false)

                localStorage.setItem('token', data.idToken)
                localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(data.expiresIn) * 1000)
                Cookie.set('jwt', data.idToken)
                Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(data.expiresIn) * 1000)


                console.log(data);
                console.log('expire time :' + new Date().getTime() + Number.parseInt(data.expiresIn) * 1000);
            })
            .catch(e => {
                vuexContext.commit('setError', e.message)
                vuexContext.commit('setLoading', false)
                console.log(e);
            })
    },
    async initAuth(vuexContext, req) {
        let token;
        let expirationTime;
        if (req) {
            if (!req.headers.cookie) {
                return;
            }
            const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
            if (!jwtCookie) {
                console.log('jwtCookie in vuex is null');
                return;
            }
            token = jwtCookie.split('=')[1]
            expirationTime = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate='))
                .split('=')[1]

        } else {
            token = localStorage.getItem('token')
            expirationTime = localStorage.getItem('tokenExpiration')
        }
        if (!token || new Date().getTime() > Number.parseInt(expirationTime)) {
            console.log('No token or invalid token!');
            vuexContext.commit('clearToken')
            Cookie.remove('jwt')
            Cookie.remove('expirationDate')
            localStorage.removeItem('token')
            localStorage.removeItem('tokenExpiration')
            return
        }
        vuexContext.commit('setToken', token)

    }

}
export const getters = {
    isAuthenticated(state) {
        return state.token != null
    },
    error(state) {
        return state.error
    },
    loading(state) {
        return state.loading
    }
}


