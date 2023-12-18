export const getProducts = () => async (dispatch) => {
  try {
    const data = await fetch("localhost:8005/getproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    console.log(res);
    dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: res });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
  }
};

// import axios from 'axios';

// export const getProducts = () => async (dispatch) => {
//   try {
//     const response = await axios.get("http://localhost:8005/getproducts", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     console.log(response.data);
//     dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: response.data });
//   } catch (error) {
//     // If there is an error, you can access the error response using error.response
//     if (error.response) {
//       console.error(error.response.data);
//       dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response.data });
//     } else {
//       // Handle other types of errors
//       console.error(error.message);
//       dispatch({ type: "FAIL_GET_PRODUCTS", payload: "An error occurred" });
//     }
//   }
// };
