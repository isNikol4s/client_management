import { Collection,SchemaWithId,ExtendCollection,get,getAll,insert,remove } from "aeria"
export declare type checkinCollection = {description: {$id: "checkin",properties: {animal: {type: "array",items: {$ref: "pet"}},weight: {type: "integer"},temperature: {type: "integer"},type: {enum: ["Routine","Emergency"]},reason: {type: "string"}},icon: "check-fat",presets: ["crud"],indexes: ["animal","weight","temperature","type","reason"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert,remove: typeof remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}}
export declare const checkin: checkinCollection & {item: SchemaWithId<checkinCollection['description']>}
export declare type Checkin = SchemaWithId<typeof checkin.description>
export declare const extendCheckinCollection: <const TCollection extends { [P in keyof Collection]?: Partial<Collection[P]> }>(collection: TCollection) => ExtendCollection<typeof checkin,TCollection>
