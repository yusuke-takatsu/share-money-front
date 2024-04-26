declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_SANCTUM_URL: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
  }
}
