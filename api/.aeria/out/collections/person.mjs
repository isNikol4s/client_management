import { extendCollection,defineCollection,get,getAll,insert } from "aeria"
export const person = defineCollection({description: {$id: "person",properties: {name: {type: "string"},document: {type: "string"},email: {type: "string"},phone: {type: "string"}},icon: "person",presets: ["crud"]},functions: {get,getAll,insert},exposedFunctions: {get: true,getAll: true,insert: true}})
export const extendPersonCollection = (collection) => extendCollection(person,collection)
