import { Collection,SchemaWithId,ExtendCollection,get,getAll,insert } from "aeria"
export declare type carCollection = {description: {$id: "car",properties: {name: {type: "string"},pets: {type: "array",items: {$ref: "pet"}}},icon: "Car",presets: ["crud"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert},exposedFunctions: {get: true,getAll: true,insert: true}}
export declare const car: carCollection & {item: SchemaWithId<carCollection['description']>}
export declare type Car = SchemaWithId<typeof car.description>
export declare const extendCarCollection: <const TCollection extends { [P in keyof Collection]?: Partial<Collection[P]> }>(collection: TCollection) => ExtendCollection<typeof car,TCollection>
