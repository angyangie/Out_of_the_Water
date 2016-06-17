import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return this.store.findRecord('game', 1);
    //What does this look like?? -- need to figure out how to grab params!!!

    // return [["Cruiser","33","34","35"],["Destroyer","66","56"],["Battleship","92","93","94","95"],["Carrier","28","38","48","58","68"],["Battleship", "11","12","13","14"]];
  },
  actions: {
    makeHit(params) {
      let model = this.modelFor(this.routeName);
      let hits = this.controllerFor(this.routeName).get('hits');
      let hit = false;
      for (let i = 0;i < model.length;i++) {
        for (let j = 0;j < model[i].length;j++) {
          if (model[i][j] === params) { //need to figure out how to grab params from the API!! (see above)
            hit = true;
            hits[params[0]][params[1]] = true;
          }
        }
      }
      console.log(params);
      // console.log(hit);
      // console.log(hits[params[0]][params[1]])
    }
    sendRequest() {
      return this.get('ajax').request('/games/hits_array'), {
        method: 'GET',
        data: {
          
        }
      });
    }
  }
});
