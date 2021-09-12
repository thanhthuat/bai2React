import { request } from "../../api/request";
import { createAction } from "./index";
import { actionType } from "./type";

export const getUser = (pagenumber) => {
    return (dispatch) => {
        request({
            method: "GET",
            url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang",
            params: {
                MaNhom: "GP01",
                soTrang: pagenumber,
                soPhanTuTrenTrang: 10,
            },
        })
            .then((res) => {
              console.log(res.data.content.items);
              // items: Array(10)
              // 0: { taiKhoan: '123@admin', matKhau: '1234567324', email: '88888@gmail.com', soDt: '0123456711', maNhom: null, … }
             
              dispatch(createAction(actionType.GET_USER, res.data.content));
                console.log(res.data.content);
            })
            .catch((err) => {
                console.log("err " + err);
            });
    };
};

export const delUser = (userName) => {
    return async (dispatch) =>{ 
        try{
          let { status} = await request({
            method: "DELETE",
              url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/XoaNguoiDung",
              params: {
                TaiKhoan: userName,
            },
          });
          if (status===200){
              alert("Xóa thành công");
            dispatch(createAction(actionType.DEL_USER, userName));
          }
        }
        catch (err) {
            alert(err.response.data.content);
        }
      }
};

export const updateUser = (values, callback) => {
    return async (dispatch) =>{ 
        try{
          let { status} = await request({
            method: "POST",
              url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
              data: values,
          });
          if (status===200){
            alert("Cập nhập thành công");
            dispatch(createAction(actionType.UPDATE_USER, values));
            callback();
          }
        }
        catch (err) {
            alert(err.response.data.content);
        }
      }
};
export const addUser = (value, callback) => {
    return async (dispatch) =>{ 
        try{
          let { status} = await request({
            method: "POST",
              url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThemNguoiDung",
              data: value,
          });
          console.log(status)
          if (status===200){
            alert("Thêm mới thành công");
            dispatch(createAction(actionType.ADD_USER, value));
            callback();
          }
        }
        catch (err) {
            alert(err.response.data.content);
        }
      }
};
