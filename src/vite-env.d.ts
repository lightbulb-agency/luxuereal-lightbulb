/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
        VITE_APP_SUPABASE_URL: string;
        VITE_APP_SUPABASE_KEY: string;
        VITE_APP_SUPABASE_STORAGE: string;
    }
}