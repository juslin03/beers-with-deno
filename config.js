
const env = Deno.env();
const no_color = Deno.noColor();

export const APP_HOST = env.APP_HOST || '127.0.0.1';
export const APP_PORT = env.APP_PORT || 3000;