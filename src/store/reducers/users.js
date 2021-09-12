import { actionType } from "../actions/type";

const initialState = {
    userList: [],
    pages:[],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_USER:{
            state.userList = action.payload.items.filter((sp) => {
                if (sp.maLoaiNguoiDung === 'KhachHang') {
                    return sp
                }

            })
            state.pages = {totalPages:action.payload.totalPages,currentPage:action.payload.currentPage};
            return { ...state };
        }
        case actionType.DEL_USER:{
            let cloneUsers = [...state.userList];
            const foundIndex = cloneUsers.findIndex((item) => {
             return item.taiKhoan === action.payload}
            );
            cloneUsers.splice(foundIndex, 1);
            state.userList = cloneUsers;
            return { ...state };
        }
        case actionType.UPDATE_USER:{
            let cloneUsers = [...state.userList];
            const foundIndex = cloneUsers.findIndex(
                (item) => item.taiKhoan === action.payload.taiKhoan
            );
            cloneUsers[foundIndex]= action.payload;
            state.userList = cloneUsers;
            return { ...state };
        }
        case actionType.ADD_USER: 
            let cloneUsers = [...state.userList];
            cloneUsers.unshift(action.payload);
            state.userList = cloneUsers;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
