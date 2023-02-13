import * as types from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: true,
    products : []
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        //get Products 
      case types.GET_PRODUCT_REQUEST:
        return { ...state, isLoading: true, products: [] };
      case types.GET_PRODUCT_SUCCESS: 
        return { ...state, isLoading: false, products: payload };
      case types.GET_PRODUCT_FAILURE:
            return { ...state, isLoading: false, isError: true, products: [] };
        
        default: return state;
    }
    
}

export { reducer }