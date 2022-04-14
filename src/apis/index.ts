import { useAuthStore } from "../store/auth";
import { useGlobalStore } from "../store/global";

export function apis() {
    useAuthStore()
    useGlobalStore()
}