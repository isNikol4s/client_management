export * as collections from './collections.js';
declare const _default: {
    options: {
        config: {};
    } & import("aeria").InitOptions;
    listen: () => Promise<{
        server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
        listen: () => import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    }>;
};
export default _default;
