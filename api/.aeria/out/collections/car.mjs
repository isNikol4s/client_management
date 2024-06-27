import { extendCollection,defineCollection,get,getAll,insert } from "aeria"
export const car = defineCollection({description: {$id: "car",properties: {name: {type: "string"},pets: {type: "array",items: {$ref: "pet"}}},icon: "Car",presets: ["crud"]},functions: {get,getAll,insert},exposedFunctions: {get: true,getAll: true,insert: true}})
export const extendCarCollection = (collection) => extendCollection(car,collection)
