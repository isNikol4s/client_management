import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const geolocation = defineCollection({description: {$id: "geolocation",properties: {name: {type: "string"}},presets: ["crud"]},functions: {get,getAll,insert,remove}})
export const extendGeolocationCollection = (collection) => extendCollection(geolocation,collection)
