import { Collection,SchemaWithId,ExtendCollection,get,getAll,insert,remove } from "aeria"
export declare type personCollection = {description: {$id: "person",properties: {name: {type: "string"},document: {type: "string",mask: ["###.###.###-##"]},email: {type: "string"},phone: {type: "string",mask: ["(##) #####-####"]},type: {enum: ["Employees","Customers","Suppliers","Marketing"]},state_registration: {type: "integer"},address: {$ref: "geolocation",inline: true}},icon: "person",presets: ["crud"],indexes: ["name","email","phone"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert,remove: typeof remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}}
export declare const person: personCollection & {item: SchemaWithId<personCollection['description']>}
export declare type Person = SchemaWithId<typeof person.description>
export declare const extendPersonCollection: <const TCollection extends { [P in keyof Collection]?: Partial<Collection[P]> }>(collection: TCollection) => ExtendCollection<typeof person,TCollection>