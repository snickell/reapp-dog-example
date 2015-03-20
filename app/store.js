import { createCursorStore } from 'fynx';
import { fromJS } from 'immutable';

module.exports = createCursorStore(fromJS({
  dogIds: [],
  dogs: {}
}));