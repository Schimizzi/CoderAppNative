

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            user:null,
            token: null,
        }
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.value.user = payload.email,
            state.value.token = payload.idToken
        },
        cleanUser: (state) => {
            state.value.user = null
            state.value.token = null
        }
    }
})


export const {steUser, cleanUser} = authSlice
export default authSlice.reducer
