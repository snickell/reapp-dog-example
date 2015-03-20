import { createAsyncActions } from 'fynx';

export default createAsyncActions([
  'loadDogs',
  'reverseDogs'
]);

// Required here so actions are bundled with the app
import dogActions from './actions/dogActions';