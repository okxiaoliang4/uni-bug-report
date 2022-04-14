import { defineStore } from 'pinia'
import { apis } from '../apis'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
        }
    },
    actions: {
        t() {
            apis()
        }
    },
})
