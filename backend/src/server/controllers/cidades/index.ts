import * as  create from './Create';
import * as update from './Update';
import * as remove from './Delete';

export const CidadesCrontoller = {
  ...create,
  ...update,
  ...remove
};
