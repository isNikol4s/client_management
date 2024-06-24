export declare const router: import("aeria").ProxiedRouter<{
    route: <const TContractWithRoles extends import("aeria").ContractWithRoles, TCallback extends (TContractWithRoles extends {
        response: infer Response;
    } ? import("aeria").InferResponse<Response> : any) extends infer Response_1 ? (context: import("aeria").RouteContext<import("aeria").RoleFromAccessCondition<TContractWithRoles["roles"]>> & {
        request: Omit<import("aeria").GenericRequest, "payload" | "query"> & {
            payload: TContractWithRoles extends {
                payload: infer Payload;
            } ? import("aeria").PackReferences<import("aeria").InferProperty<Payload>> : any;
            query: TContractWithRoles extends {
                query: infer Query;
            } ? import("aeria").InferProperty<Query> : any;
        };
    }) => Response_1 : never>(method: import("aeria").RequestMethod | import("aeria").RequestMethod[], exp: import("aeria").RouteUri, cb: TCallback, contract?: TContractWithRoles) => void;
    routes: ((_: unknown, context: import("aeria").RouteContext, groupOptions?: import("aeria").RouteGroupOptions) => ReturnType<typeof import("aeria").registerRoute>)[];
    routesMeta: import("aeria").RoutesMeta;
    group: <TRouter extends {
        install: (context: import("aeria").RouteContext, options?: import("aeria").RouterOptions) => any;
        routesMeta: import("aeria").RoutesMeta;
    }>(exp: import("aeria").RouteUri, router: TRouter, middleware?: import("aeria").Middleware) => void;
    install: (_context: import("aeria").RouteContext, _options?: import("aeria").RouterOptions) => Promise<any>;
}>;
