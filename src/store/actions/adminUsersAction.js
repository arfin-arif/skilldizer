// import axios from "axios";
// import {
//   adminUsersRequest,
//   adminUsersFailure,
//   adminUsersSuccess,
//   userUpdateRequest,
//   userUpdateSuccess,
//   userUpdateFailure,
//   userRemoveRequest,
//   userRemoveSuccess,
//   userRemoveFailure,
// } from "../reducer/adminUsersReducer";

// // GET ALL USER BY ADMIN

// export const adminGetUsers = () => async (dispatch) => {
//   try {
//     dispatch(adminUsersRequest());
//     const { data } = await axios.get("/api/admin/users");
//     dispatch(adminUsersSuccess(data.users));
//   } catch (error) {
//     dispatch(adminUsersFailure(error.response.data.message));
//   }
// };

// // UPDATE USER ROLE

// export const updateUserRoleAction = (id, role) => async (dispatch) => {
//   try {
//     dispatch(userUpdateRequest());
//     const { data } = await axios.put(
//       `/api//admin/user/update/${id}`,
//       { role },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     dispatch(userUpdateSuccess(data.message));
//   } catch (error) {
//     dispatch(userUpdateFailure(error.response.data.message));
//   }
// };

// // REMOVE USER

// export const removeUserAction = (id) => async (dispatch) => {
//   try {
//     dispatch(userRemoveRequest());
//     const { data } = await axios.delete(
//       `/api/admin/user/delete/${id}`,
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     dispatch(userRemoveSuccess(data.message));
//   } catch (error) {
//     dispatch(userRemoveFailure(error.response.data.message));
//   }
// };
