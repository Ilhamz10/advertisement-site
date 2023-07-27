const initialState = {
    currentProduct: {},
    products: [
        {
            img: '',
            title: '',
            description: ''
        }
    ]
}

const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
const SET_CATEGORY_PRODUCTS = 'SET_CATEGORY_PRODUCTS'

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_PRODUCT:
            return {...state, currentProduct: action.payload}
        case SET_CATEGORY_PRODUCTS:
            return { ...state, products: action.payload }
        default: 
            return state
    }
}

export const setCurrentProductAction = (payload) => ({type: SET_CURRENT_PRODUCT, payload})
export const setCategoryProducts = (payload) => ({type: SET_CATEGORY_PRODUCTS, payload})