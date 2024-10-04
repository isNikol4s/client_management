export * from "../.aeria/out/collections/index.mjs";
export { user, file, tempFile } from "aeria";
export declare const person: import("aeria").ExtendCollection<import("../.aeria/out/collections/person.mjs").personCollection & {
    item: import("aeria").SchemaWithId<import("../.aeria/out/collections/person.mjs").personCollection["description"]>;
}, {
    readonly description: {
        readonly properties: {
            readonly treatment: {
                readonly getter: (doc: {
                    _id: import("bson").ObjectId;
                }) => string;
            };
        };
    };
    readonly functions: {
        readonly insert: (payload: any, context: import("aeria").Context<{
            $id: "person";
            properties: {
                name: {
                    type: "string";
                };
                document: {
                    type: "string";
                    mask: ["###.###.###-##"];
                };
                email: {
                    type: "string";
                };
                phone: {
                    type: "string";
                    mask: ["(##) #####-####"];
                };
                type: {
                    enum: ["Employees", "Customers", "Suppliers", "Marketing"];
                };
                state_registration: {
                    type: "integer";
                };
                address: {
                    $ref: "geolocation";
                };
            };
            icon: "person";
            presets: ["crud"];
            indexes: ["name", "email", "phone"];
        }>) => Promise<import("aeria").InsertReturnType<import("aeria").SchemaWithId<{
            $id: "person";
            properties: {
                name: {
                    type: "string";
                };
                document: {
                    type: "string";
                    mask: ["###.###.###-##"];
                };
                email: {
                    type: "string";
                };
                phone: {
                    type: "string";
                    mask: ["(##) #####-####"];
                };
                type: {
                    enum: ["Employees", "Customers", "Suppliers", "Marketing"];
                };
                state_registration: {
                    type: "integer";
                };
                address: {
                    $ref: "geolocation";
                };
            };
            icon: "person";
            presets: ["crud"];
            indexes: ["name", "email", "phone"];
        }>>>;
    };
}>;
