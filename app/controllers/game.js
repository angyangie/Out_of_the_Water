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
    const hits = this.store.peekRecord('user_game', 1).get('hits').split(",");
    var allHitsCoordinates = []
    hits.forEach(function(hit, index){
      let coordToPad = index.toString();
      if (coordToPad.length === 1) coordToPad = "0" + coordToPad;
      if (hit == "2") allHitsCoordinates.push(coordToPad)
    })

    let allHitsCoordinatesSort = allHitsCoordinates.sort();
    let allMissesCoordinates = []
    hits.forEach(function(hit, index){
      if (hit == "0") {
        let coordToPad = index.toString();
        if (coordToPad.length === 1) coordToPad = "0" + coordToPad;
        allMissesCoordinates.push(coordToPad);
      }
    })
    if (allHitsCoordinates.length == 0){
      return (allMissesCoordinates[Math.floor(Math.random() * allMissesCoordinates.length)])
    } else if (allHitsCoordinates.length == 1) {
      let surroundingArray = [[parseInt(allHitsCoordinates[0]) + 10], [parseInt(allHitsCoordinates[0]) - 10], [parseInt(allHitsCoordinates[0]) + 1], [parseInt(allHitsCoordinates[0]) - 1]]
      for (let i = 0;i < surroundingArray.length;i++) {
        if (hits[surroundingArray[i][0]] === "0") {
          let attack_coords = surroundingArray[i][0];
          return (attack_coords < 10 ? `0${attack_coords}` : attack_coords.toString());
        }
      }
    } else if (allHitsCoordinates.length > 1){
      let vertical = allHitsCoordinatesSort[0].toString()[1] === allHitsCoordinatesSort[1].toString()[1]
      let lastCoord = allHitsCoordinatesSort[allHitsCoordinatesSort.length - 1]
      let firstCoord = allHitsCoordinatesSort[0]
      let nextValue1 = (vertical ? parseInt(lastCoord) + 10 : parseInt(lastCoord) + 1)
      let nextValue2 = (vertical ? parseInt(firstCoord) - 10 : parseInt(firstCoord) - 1)
      
      if (hits[nextValue1] === "0" || hits[nextValue2] === "0") {
        return (hits[nextValue1] === "0" ? nextValue1.toString() : nextValue2.toString())
      }

      for (let i = 0;i <= 1; i++) {
        for (let j = 0; j < allHitsCoordinates.length; j++) {
          nextValue1 = (vertical ? parseInt(allHitsCoordinates[j]) + 10 : parseInt(allHitsCoordinates[j]) + 1)
          nextValue2 = (vertical ? parseInt(allHitsCoordinates[j]) - 10 : parseInt(allHitsCoordinates[j]) - 1)
          if (hits[nextValue1] === "0" || hits[nextValue2] === "0") {
            return (hits[nextValue1] === "0" ? nextValue1.toString() : nextValue2.toString())
          }
        }
        vertical = !vertical;
      }
    }
  }),
  isGameWin: Ember.computed('model.completed', function() {
    return this.get('model.completed') === 2;
  }),
  isGameLoss: Ember.computed('model.completed', function() {
    return this.get('model.completed') === 1;
  })
});

