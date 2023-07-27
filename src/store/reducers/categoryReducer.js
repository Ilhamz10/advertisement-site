const initialState = {
    currentCategory: '',
}

const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload }
        default:
            return state
    }
}

export const setCurrentCategoryAction = (payload) => ({ type: SET_CURRENT_CATEGORY, payload }) 