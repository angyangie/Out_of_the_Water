import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ["33","34","35","66","56","92","93","94","95","28","38","48","58","68","11","12","13","14"]
  },
  actions: {
    makeHit(params) {
      // debugger;
      // let battleships = ["33","34","35","66","56","92","93","94","95","28","38","48","58","68","11","12","13","14"];

      // return battleships.includes(params);
      let model = this.modelFor(this.routeName);
      console.log(model.includes(params));
    }
  }
});
