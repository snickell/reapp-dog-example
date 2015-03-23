import React from 'react';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import List from 'reapp-ui/components/List';
import { storeRefreshMixin } from 'reapp-platform';

import shouldComponentUpdate from 'omniscient/shouldupdate';

import Store from '../store';
import Actions from '../actions';


var Dog = React.createClass({
  shouldComponentUpdate, // what about here?
  render() {
    return <div>{this.props.dog && this.props.dog.breed}</div>
  }
})

var Dogs = React.createClass({
  mixins: [
    storeRefreshMixin(Store),
  ],
  shouldComponentUpdate, // should this be here???
  render() {
    console.log("Dogs.render()");

    var dogIds = Store().get('dogIds');
    var dogs = dogIds.map(id => {
      var dog = Store().getIn(['dogs', id]);
      return <Dog dog={dog} />;
    });

    return (
      <View {...this.props} title={["", "Dogs"]}>
        <Button onTap={Actions.loadDogs}>Load Dogs (crash!)</Button>
        <Button onTap={Actions.reverseDogs}>Reverse Dogs</Button>

        <List>
          {dogs}
        </List>
      </View>
    )
  }
});

export default Dogs;