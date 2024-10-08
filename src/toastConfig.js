import { toast } from "react-toastify";

export const successToast = (message) => {
  toast.success(`${message}`, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: { borderRadius: "15px" },
  });
};

export const errorToast = (message) => {
  toast.error(`${message}`, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: { borderRadius: "15px" },
  });
};
