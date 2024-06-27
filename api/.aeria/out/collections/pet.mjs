import { extendCollection,defineCollection,get,getAll,insert,upload,remove } from "aeria"
export const pet = defineCollection({description: {$id: "pet",properties: {name: {type: "string"},owner: {type: "array",items: {$ref: "person"}},age: {type: "integer"},type: {enum: ["Mammal","Bird","Reptile","Fish","Invertebrate"]},picture: {$ref: "file",accept: ["image/*"]}},icon: "dog",presets: ["crud"],indexes: ["name","age"]},functions: {get,getAll,insert,upload,remove},exposedFunctions: {get: true,getAll: true,insert: true,upload: true,remove: true}})
export const extendPetCollection = (collection) => extendCollection(pet,collection)