
import axiosInstance from "./initService";
const AUTH_API_URL = `/api/v1/auth`;

async function registerUser(payload) {
  try {
    const { data } = await axiosInstance.post(
      `${AUTH_API_URL}/register`,
      payload,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    throw error.response.data;
  }
}

async function verifyEmail(token) {
  try {
    const { data } = await axiosInstance.put(
      `${AUTH_API_URL}/account/email-verify/${token}`,
      {},
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return data;
  } catch (error) {
    throw error.response.data;
  }
}

const requestForEmailVerification = async (payload) => {
  try {
    const { data } = await axiosInstance.put(
      `${AUTH_API_URL}/account/request-email-verification`,
      payload,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

const AuthService = {
  registerUser,
  verifyEmail,
  requestForEmailVerification,
};

export default AuthService;

















// import axiosInstance from "./initService";
// export const BASE_URL = "http://localhost:8000"
// const AUTH_API_URL = `/api/v1/auth`;

// async function registerUser(payload) {
//   try {
//     const { data } = await axiosInstance.post(
//       `${BASE_URL}${AUTH_API_URL}/register`,
//       payload,
//       {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(data);
//     return data;
//   } catch (error) {
//     throw error.response.data;
//   }
// }


// async function verifyEmail(token) {
//   console.log('verifyEmail')
//   try {
//     const { data } = await axiosInstance.put(

//       `${BASE_URL}${AUTH_API_URL}/account/email-verify/${token}`,
//       {},
//       {
//         withCredentials: true,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }

//     );
//     console.log('verifyEmail', data);
//     return data;
//   } catch (error) {
//     throw error.response.data;
//   }
// }

// const requestForEmailVerification = async (payload) => {
//   console.log('request email verification 47');
//   try {
//     const { data } = await axiosInstance.put(
//       `${BASE_URL}${AUTH_API_URL}/account/request-email-verification`,
//       payload,
//       {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(data, '59 line');
//     return data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// const AuthService = {
//   registerUser,
//   verifyEmail,
//   requestForEmailVerification,

// };

// export default AuthService;
