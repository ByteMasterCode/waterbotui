import { TOGGLE_DRAWER } from '../actions/drawerActions';

const initialState = {
    isOpen: false,
    type: '',
};

const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                isOpen: action.payload.isOpen,
                type: action.payload.type,
            };
        default:
            return state;
    }
};

export default drawerReducer;
