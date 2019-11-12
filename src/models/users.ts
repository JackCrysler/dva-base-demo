import {getTokenApi} from './../api'
export default {
    namespace:'users',
    state:{
        token:'default'
    },
    reducers:{
        SET_TOKEN(state:any,action:any){
            console.log(action)
            return {
                ...state,
                token: action.payload
            }
        }
    },
    effects:{
        *ASYNC_SET_TOKEN(action:any, effects:any){

            let {username, password} = action.payload
            let res = yield effects.call(getTokenApi,username, password)

            yield effects.put({
                type:'SET_TOKEN',
                payload: res.token
            })
        }
    }
}