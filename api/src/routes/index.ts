import { createRouter, log, request, Result } from 'aeria'
import { validarCPF } from '../function/script.js'

export const router = createRouter()

router.GET('/test', async (context) => {
  return validarCPF('122.934.036-08')
})

router.GET('/list/chekin', async (context) => {
const cpf = context.request.query.document
console.log({cpf});
  const {error,result: person} = await context.collections.person.functions.get(
    { filters: {
       document: cpf } 
      }
    )
  if (error) {
    console.log('error');
    return Result.error(error)
  }
  console.log(person);
  
  const {error: petError, result: pets} = await context.collections.pet.functions.getAll(
    { filters: { 
      owner: person._id}
    }
  );
  if (petError) {
    console.log('errors');
    return Result.error(petError)
  }
  const chekinAnimal = await context.collections.checkin.functions.getAll(
    { filters: {
       animal: {$in: pets.map(pet => [pet._id]) }
      }
    }
  ); return chekinAnimal
}, {
  query: {
    type: "object", 
    properties: {
      document: {
        type: "string"
      }
    }
  }
})

