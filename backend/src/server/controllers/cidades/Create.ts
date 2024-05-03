import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";


interface ICidadde {
   Nome: string;
   
}

const bodyValidation: yup.Schema<ICidadde> = yup.object().shape({
  Nome: yup.string().required().min(3),
});
export const create = async (req:Request<{},{}, ICidadde>, res:Response) => {
 let validatedData: ICidadde | undefined = undefined; 
try {
  validatedData = await  bodyValidation.validate(req.body);
}catch (error){
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message,
      }
    });
}


 console.log(validatedData);

   
  return res.send('Criado!');
};