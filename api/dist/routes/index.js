import { createRouter } from "aeria";
import { validarCPF } from "../function/script.js";
const router = createRouter();
router.GET("/test", async (context) => {
  return validarCPF("122.934.036-08");
});
router.GET("/list/chekin", async (context) => {
  return validarCPF(context.request.payload.document);
}, {
  payload: {
    type: "object",
    properties: {
      document: {
        type: "string"
      }
    }
  }
});
export {
  router
};
