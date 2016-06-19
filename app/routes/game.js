import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('game', 1);
  },
  isHit(coords) {
    const user_game = this.store.peekRecord('user_game', 1)

    const hits_array = user_game.get('hits');
    coords = [parseInt(coords[0][0]), parseInt(coords[0][1])];
    
    if (hits[coords[0]][coords[1]]){
      return "<img src='assets/images/miss.jpg'>"
    }

  },

  actions: {
    makeHit(params) {

      let data = {
        url: 'http://localhost:3000/api/v1/games/hits_array',
        type: 'post',
        dataType: 'json',
        context: this,
        data: {
          user_game_id: 1,
          coords: params
        }
      }

      Ember.$.ajax(data).success(function(response) {

        let user_game = this.store.peekRecord('user_game', 2)
        debugger;
        user_game.set('hits', response.data.grid);
      }, this)

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
  }
});
