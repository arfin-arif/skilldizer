// import axios from "axios";
// import {
//   adminOrdersFailure,
//   adminOrdersRequest,
//   adminOrdersSuccess,
//   deleteOrderFailure,
//   deleteOrderRequest,
//   deleteOrderSuccess,
//   orderNewStatusFailure,
//   orderNewStatusRequest,
//   orderNewStatusSuccess,
//   updateOrderFailure,
//   updateOrderRequest,
//   updateOrderSuccess,
// } from "../reducer/adminOrdersReducer";

// // GET ALL ORDERS BY ADMIN

// export const getOrdersByAdmin = () => async (dispatch) => {
//   try {
//     dispatch(adminOrdersRequest());
//     const { data } = await axios.get("/api/order/all/admin");
//     dispatch(adminOrdersSuccess(data));
//   } catch (error) {
//     dispatch(adminOrdersFailure(error.response.data.message));
//   }
// };

// // UPDATE ORDER STATUS

// export const updateOrderStatusAction = (id, status) => async (dispatch) => {
//   try {
//     dispatch(updateOrderRequest());
//     const { data } = await axios.put(
//       `/api/order/status/admin/${id}`,
//       { status },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     dispatch(updateOrderSuccess(data.message));
//   } catch (error) {
//     dispatch(updateOrderFailure(error.response.data.message));
//   }
// };

// //   DELETE ORDER

// export const deleteOrderAction = (id) => async (dispatch) => {
//   try {
//     dispatch(deleteOrderRequest());
//     const { data } = await axios.delete(
//       `/api/order/delete/admin/${id}`,
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     dispatch(deleteOrderSuccess(data.message));
//   } catch (error) {
//     dispatch(deleteOrderFailure(error.response.data.message));
//   }
// };

// // UPDATE ORDER PROGRESS STATUS
// export const projectNewStatus = (data, id) => async (dispatch) => {
//   const {
//     planning,
//     design,
//     development,
//     budget,
//     startDate,
//     endDate,
//     document,
//   } = data;
//   try {
//     dispatch(orderNewStatusRequest());
//     const { data } = await axios.post(
//       `/api/admin/project/status/new/${id}`,
//       {
//         planning,
//         design,
//         development,
//         budget,
//         startDate,
//         endDate,
//         document,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     dispatch(orderNewStatusSuccess(data.message));
//   } catch (error) {
//     dispatch(orderNewStatusFailure(error.response.data.message));
//   }
// };
