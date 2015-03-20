import Actions from '../actions';
import store from '../store';

// we fetch the ordered array of dogs
// then grab their individual data
Actions.loadDogs.listen(opts => {
  getDogsListFromAPI(opts).then(res => {
    store().set('dogIds', res);
    getDogsData(res);
  })
})

Actions.reverseDogs.listen(() =>
  store().update('dogs', dogs => dogs.reverse())
);

function getDogsData(res) {
  res.map(id => {
    getDogAPI(id).then(dog => {
      store().setIn(['dogs', dog.id], dog)
    })
  })
}

function getDogsListFromAPI() {
  return Promise.resolve([1, 2, 3]);
}

function getDogAPI(id) {
  var data = {
    1: { id: 1, breed: 'Jack Russell' },
    2: { id: 2, breed: 'Shih Tzu' },
    3: { id: 3, breed: 'Pitbull' },
  }
  return Promise.resolve(data[id]);
}