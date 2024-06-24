export * from "../.aeria/out/collections/index.mjs";
import { user, file, tempFile } from "aeria";
import { extendPersonCollection } from "../.aeria/out/index.mjs";
const person = extendPersonCollection({
  description: {
    properties: {
      treatment: {
        getter: (doc) => {
          return `sr ${doc.name.split(" ")[0]}`;
        }
      }
    }
  }
});
export {
  file,
  person,
  tempFile,
  user
};
