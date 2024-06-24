export * from '../.aeria/out/collections/index.mjs';
export { user, file, tempFile } from 'aeria';
export declare const person: import("aeria").ExtendCollection<import("../.aeria/out/collections/person.mjs").personCollection & {
    item: import("aeria").SchemaWithId<import("../.aeria/out/collections/person.mjs").personCollection["description"]>;
}, {
    readonly description: {
        readonly properties: {
            readonly treatment: {
                readonly getter: (doc: any) => string;
            };
        };
    };
}>;