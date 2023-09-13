import { useToast } from "vue-toastification";

export default function useNotification() {
  const notification = useToast();

  return notification;
}
