import axios from "axios";

const commonConnection = async ({ url, method, data }) => {
  const res = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
    params: data,
  });
  return res.data;
};

export const getAllEmployee = (city) => {
  const result = commonConnection({
    url: "http://localhost:5000/api/employee/getAllemployee",
    method: "GET",
    data: { address: city },
  });
  console.log("result", result);
  return result;
};
