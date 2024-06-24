import { Collection,SchemaWithId,ExtendCollection,get,getAll,insert,remove } from "aeria"
export declare type geolocationCollection = {description: {$id: "geolocation",properties: {name: {type: "string"}},presets: ["crud"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert,remove: typeof remove}}
export declare const geolocation: geolocationCollection & {item: SchemaWithId<geolocationCollection['description']>}
export declare type Geolocation = SchemaWithId<typeof geolocation.description>
export declare const extendGeolocationCollection: <const TCollection extends { [P in keyof Collection]?: Partial<Collection[P]> }>(collection: TCollection) => ExtendCollection<typeof geolocation,TCollection>
