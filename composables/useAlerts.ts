import { useToast } from 'vue-toastification'
const toast = useToast()

export const useAlerts = () => {
  const successAlert = (msg: string) => {
    toast.success(msg, {
      timeout: 1000,
      icon: () => h('span', '✅'),
      hideProgressBar: true,
    })
  }

  const errorAlert = (msg: string) => {
    toast.error(msg, {
      timeout: 5000,
      icon: () => h('span', '❌'),
    })
  }

  const infoAlert = (msg: string) => {
    toast.info(msg, {
      timeout: 3000,
      icon: () => h('span', 'ℹ️'),
    })
  }

  return {
    successAlert,
    errorAlert,
    infoAlert,
  }
}