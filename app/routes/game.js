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

      // AI call goes here

      let ai_coords = aiFunction(this.model)

      function aiFunction(model) {


        //Do AI logic based on which grid squares have been attacked, and also whether its most recent shot was a hit or a miss
        //Do logic, random grid square or adjacent square to most recent shot, if most recent shot was a hit
        //Return coordinates to attack next
      }

      let data = {
        url: 'http://localhost:3000/api/v1/games/hits_array',
        type: 'post',
        dataType: 'json',
        context: this,
        data: {
          user_game_id: 1,
          player_coords: params,
          ai_coords: "12"
        }
      }

      Ember.$.ajax(data).success(function(response) {
        let ai_user_game = this.store.peekRecord('user_game', 2)
        let player_user_game = this.store.peekRecord('user_game', 1)
        ai_user_game.set('hits', response.data.ai_grid);
        player_user_game.set('hits', response.data.player_grid);
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
