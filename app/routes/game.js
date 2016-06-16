import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [["Cruiser","33","34","35"],["Destroyer","66","56"],["Battleship","92","93","94","95"],["Carrier","28","38","48","58","68"],["Battleship", "11","12","13","14"]];

  },
  actions: {
    makeHit(params) {
      let model = this.modelFor(this.routeName);
      for (let i = 0;i < model.length;i++) {
        for (let j = 0;j < model[i].length;j++) {
          if (model[i][j] === params) {
            console.log(true)
            return true;
          }
        }
      }
      console.log(false);
      return false;
    }
  }
});
