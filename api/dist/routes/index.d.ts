export declare const router: import("aeria").ProxiedRouter<{
    route: <const TContractWithRoles extends import("aeria").ContractWithRoles, TCallback extends (TContractWithRoles extends {
        response: infer Response;
    } ? import("aeria").InferProperties<Response> : unknown) extends infer Response ? (context: Omit<import("aeria").RouteContext<import("aeria").RoleFromAccessCondition<TContractWithRoles["roles"]>>, "request"> & {
        request: Omit<import("aeria").GenericRequest, "query" | "payload"> & {
            payload: TContractWithRoles extends {
                payload: infer Payload;
            } ? import("aeria").PackReferences<import("aeria").InferProperties<Payload>> : Record<string, unknown>;
            query: TContractWithRoles extends {
                query: infer Query;
            } ? import("aeria").InferProperties<Query> : Record<string, unknown>;
        };
    }) => Response : never>(method: import("aeria").RequestMethod | import("aeria").RequestMethod[], exp: import("aeria").RouteUri, cb: TCallback, contract?: TContractWithRoles) => void;
    routes: ((_: unknown, context: import("aeria").RouteContext, groupOptions?: import("aeria").RouteGroupOptions) => unknown)[];
    routesMeta: import("aeria").RoutesMeta;
    group: <TRouter extends {
        install: (context: import("aeria").RouteContext, options?: import("aeria").RouterOptions) => unknown;
        routesMeta: import("aeria").RoutesMeta;
    }>(exp: import("aeria").RouteUri, router: TRouter, middleware?: (context: import("aeria").RouteContext) => unknown) => void;
    install: (_context: import("aeria").RouteContext, _options?: import("aeria").RouterOptions) => Promise<unknown>;
}>;
