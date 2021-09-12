import { request } from "../../api/request";
import { createAction } from "./index";
import { actionType } from "./type";

export const signIn = (userLogin, callback) => {
  return (dispatch) => {
    request({
    url:"http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
    method: "POST",
    data: userLogin,
    })
      .then((res) => {
        if(res.data.content.maLoaiNguoiDung!== "QuanTri")
        {
          return alert("Bạn phải có quyền Quản Trị mới được đăng nhập");
        }
        dispatch(createAction(actionType.SET_USER, res.data.content));
        localStorage.setItem("token", res.data.content.accessToken);
        callback();
      })
      .catch((err) => {
        console.log("err " + err);
        alert(err.response.data.content);
      });
  };
};

export const fetchMe = async (dispatch) => {
  try {
    const res = await request({
      method: "POST",
      url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
    });
    console.log('data:',res.data.content);
    dispatch(createAction(actionType.SET_USER, res.data.content));
  } catch (err) {
    console.log(err);
  }
};
