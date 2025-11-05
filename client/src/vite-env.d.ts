/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_CALENDLY_URL: string;
  readonly VITE_GA_TRACKING_ID: string;
  readonly VITE_GOOGLE_BUSINESS_PLACE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
