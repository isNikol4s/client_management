export * from "../.aeria/out/collections/index.mjs";
import { user, file, tempFile } from "aeria";
import { insert } from "aeria";
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
  },
  functions: {
    insert: (payload, context) => {
      return insert(payload, context);
    }
  }
});
export {
  file,
  person,
  tempFile,
  user
};
