export const initialState ={
    canasto:[],
}

const Reducer = (state,action)=>{
    switch(action.type){
        case "AGREGAR":
            return{
                ...state,
                canasto: [...state.canasto, action.item]
            }
    }
        
}

export default Reducer