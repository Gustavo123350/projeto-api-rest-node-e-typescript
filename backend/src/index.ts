import {server} from './server/server';

server.listen(process.env.PORT || 3333 , ()=> {
  console.log(`Rodando APP  na Porta ${process.env.PORT || 3333}`)
});