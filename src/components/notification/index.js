import { toast } from 'react-toastify';

const successNotification = (message, options) => {
  toast.success(message, options);
};

const errorNotification = (message, options) => {
  toast.error(message, options);
};

const infoNotification = (message, options) => {
  toast.error(message, options);
};

export { successNotification, errorNotification, infoNotification };
