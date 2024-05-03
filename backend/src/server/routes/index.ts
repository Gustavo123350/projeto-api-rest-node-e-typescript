import {Router} from  'express'
import {StatusCodes} from 'http-status-codes';
import {CidadesCrontoller } from './../controllers';

const router =  Router();

router.get('/',(_,res)=>{
  return res.send('Olá Dev!');
});

router.post('/cidades', CidadesCrontoller.create);


export {router};