import { actionTypes } from "../common/constants/actionTypes";
import { LoginEntity } from "../model";

export const adminAction = (data: any) => dispatch => {
  dispatch(mapAdminAction(data));
};

const mapAdminAction = (login: LoginEntity) => ({
  type: actionTypes.ADMIN_LOGIN,
  payload: login
});
