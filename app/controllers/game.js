import Ember from 'ember';

export default Ember.Controller.extend({
  coordsArray: Ember.computed('model.userGames.@each.hits',function() {
    let rows = [0,1,2,3,4,5,6,7,8,9];
    let cols = [0,1,2,3,4,5,6,7,8,9];
    let cArray = [];
    let innerArray = [];
    for (let i = 0;i < 10;i++) {
      for (let j = 0;j < 10;j++) {
        innerArray.push(`${rows[i]}${cols[j]}`);
      }
      cArray.push(innerArray);
      innerArray = [];
    }
    return cArray;
  }),
  aiFunction: Ember.computed('model.userGames.@each.hits', function() {
    const hits = this.store.peekAll('user_game').mapBy('hits')[0].split(",");
    var allHitsCoordinates = []
    hits.forEach(function(hit, index){
      if (hit == "2") allHitsCoordinates.push(index)
    })

    var allHitsCoordinatesSort = allHitsCoordinates.sort();
    var allNonMisses = []
    hits.forEach(function(hit, index){
      if (hit == "0") allNonMisses.push(index)
    })

    if (allHitsCoordinates.length == 0){
      return (allNonMisses[Math.floor(Math.random() * allNonMisses.length)]).toString()
    } else if (allHitsCoordinates.length == 1) {
      let surroundingArray = [[allHitsCoordinates[0] + 10],[allHitsCoordinates[0] - 10], [allHitsCoordinates[0] + 1], [allHitsCoordinates[0] - 1]]
      for (let i = 0;i < surroundingArray.length;i++) {
        if (hits[surroundingArray[i][0]] === "0") {
          let attack_coords = surroundingArray[i][0];
          return (attack_coords < 10 ? `0${attack_coords}` : attack_coords.toString());
        }
      }
    } else if (allHitsCoordinates.length > 1){
      var vertical = allHitsCoordinatesSort[0].toString()[1] === allHitsCoordinatesSort[1].toString()[1]
      var lastCoord = allHitsCoordinatesSort[allHitsCoordinatesSort.length - 1]
      var firstCoord = allHitsCoordinatesSort[0]
      let nextValue1 = (vertical ? parseInt(lastCoord) + 10 : parseInt(lastCoord) + 1)
      let nextValue2 = (vertical ? parseInt(firstCoord) - 10 : parseInt(firstCoord) - 1)
      return (hits[nextValue1] == 0 ? nextValue1.toString() : nextValue2.toString())
    }
  }),
  isGameWin: Ember.computed('model.games.completed', function() {
    console.log("Calling a win")
    return (this.get('model.games').get('completed') === 2);
  }),
  isGameLoss: Ember.computed('gameStatus', function() {
    console.log("Calling a loss")
    return (this.get('model.games').get('completed') === 1);
  })
  // isGameStillOn: Ember.computed('gameStatus', function() {
  //   console.log("Game still on")
  //   // return (this.get('gameStatus') === 1);
  // }),
});

