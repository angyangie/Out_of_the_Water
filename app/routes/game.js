import Ember from 'ember';

export default Ember.Route.extend({
  // ajax: Ember.inject.service(),
  model() {
    return this.store.findRecord('game', 1);
  },
  actions: {
    makeHit(params) {
      debugger;

      let data = {
        url: 'http://localhost:3000/api/v1/games/hits_array',
        type: 'post',
        dataType: 'json',
        data: {
          user_game_id: 1,
          coords: params
        }
      }

      Ember.$.ajax(data).success(function(response) {
        debugger;
      })

      // let model = this.modelFor(this.routeName);
      // let hits = this.controllerFor(this.routeName).get('hits');
      // let hit = false;
      // for (let i = 0;i < model.length;i++) {
      //   for (let j = 0;j < model[i].length;j++) {
      //     if (model[i][j] === params) {
      //       hit = true;
      //       hits[params[0]][params[1]] = true;
      //     }
      //   }
      // }
      // console.log(params);
      // console.log(hit);
      // console.log(hits[params[0]][params[1]])
    }
    // sendRequest(coords) {
    //   let data = {
    //     url: 'games/hits_array',
    //     type: 'get',
    //     dataType: 'json',
    //     data: {
    //       user_game: 1,
    //       coords: coords
    //     }
    //   }

    //   Ember.$.ajax(data).success(function(response) {
    //     debugger;
    //   })
    //   return this.get('ajax').request('/games/hits_array'), {
    //     method: 'GET',
    //     data: {
          
    //     }
    //   };
    // }
  }
});
