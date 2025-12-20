import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    })
})