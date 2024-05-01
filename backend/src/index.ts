import {server} from './server/server';

server.listen(process.env.PORT || 3333 , ()=> {
  console.log(`Rodando APP No http://lochalhost:${process.env.PORT || 3333}`)
});