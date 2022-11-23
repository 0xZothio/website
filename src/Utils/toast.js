import { toast } from "react-toastify";
export const showToastMessage = (msg, error) => {
  if (error) {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
    });
  } else {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
    });
  }
};
