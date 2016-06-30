import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('game', 1);
  },
  actions: {
    makeHit(params) {
      let ai_coords = this.get('controller').get('aiFunction');
      let data = {
        url: 'http://localhost:3000/api/v1/games/hits_array',
        type: 'post',
        dataType: 'json',
        context: this,
        data: {
          user_game_id: 1,
          player_coords: params,
          ai_coords: ai_coords
        }
      }

      Ember.$.ajax(data).success(function(response) {
        let ai_user_game = this.store.peekRecord('user_game', 2);
        let player_user_game = this.store.peekRecord('user_game', 1);
        let game = this.store.peekRecord('game', 1);
        ai_user_game.set('hits', response.data.ai_grid);
        player_user_game.set('hits', response.data.player_grid);
        game.set('completed', response.data.game_status);
      }, this)
    },
    newGame() {
      window.location.reload(true)
    }
  }
});
