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
/////

      if (hits[nextValue2] !=0 && hits[nextValue1] !=0 && allHitsCoordinatesSort.length == 2) {
        vertical = !vertical
        return (vertical ? parseInt(allHitsCoordinatesSort[0]) + 10 : parseInt(allHitsCoordinatesSort[0]) + 1)         
      } else if (hits[nextValue2] !=0 && hits[nextValue1] !=0 && allHitsCoordinatesSort.length > 2){

        let horizontalArray = [] //int
        let verticalArray = [] //int

        if (verticalArray.length == 0 && allHitsCoordinatesSort[0].toString()[1] === allHitsCoordinatesSort[1].toString()[1]){
          
          verticalArray.push(allHitsCoordinatesSort[0])

        } else if (horizontalArray.length == 0 && allHitsCoordinatesSort[0].toString()[0] === allHitsCoordinatesSort[1].toString()[0]){

          horizontalArray.push(allHitsCoordinatesSort[0])
        }

      

        let horizontalCoord = horizontalArray[0].toString()[0]
        let verticalCoord = verticalArray[0].toString()[1]

        for (let i = 1;i < allHitsCoordinates.length;i++) {
          if (allHitsCoordinatesSort[i].toString()[0] == horizontalCoord){
            horizontalArray.push(allHitsCoordinatesSort[i])
          } else {
            verticalArray.push(allHitsCoordinatesSort[i])
          }

        }

      

///repeated code from above: 

    //sets new allhits array. 

    if (horizontalArray.length > verticalArray.length) {
      let newHitsArraySort = horizontalArray.sort()
    } else {
      let newHitsArraySort = verticalArray.sort()
    }

   

    if (newHitsArraySort.length == 1) {
      ///surrounding array....can it be the same as above? 
      surroundingArray = [[newHitsArraySort[0] + 10],[newHitsArraySort[0] - 10], [newHitsArraySort[0] + 1], [newHitsArraySort[0] - 1]]
      for (let i = 0;i < surroundingArray.length;i++) {
        if (hits[surroundingArray[i][0]] === "0") {
          
          ///attack coords...can they be the same as above?? 
          attack_coords = surroundingArray[i][0];

        
          return (attack_coords < 10 ? `0${attack_coords}` : attack_coords.toString());
        }
      }
    } else if (newHitsArraySort.length > 1){

      ///can all these vars be the same as above?? 
      vertical = newHitsArraySort[0].toString()[1] === newHitsArraySort[1].toString()[1]

      lastCoord = newHitsArraySort[newHitsArraySort.length - 1]
      firstCoord = newHitsArraySort[0]

      nextValue1 = (vertical ? parseInt(lastCoord) + 10 : parseInt(lastCoord) + 1)
      nextValue2 = (vertical ? parseInt(firstCoord) - 10 : parseInt(firstCoord) - 1)

      return (hits[nextValue1] == 0 ? nextValue1.toString() : nextValue2.toString())

    }

////
      }
      return (hits[nextValue1] == 0 ? nextValue1.toString() : nextValue2.toString())
    }

  }),
  isGameWin: Ember.computed('model.completed', function() {
    return this.get('model.completed') === 2;
  }),
  isGameLoss: Ember.computed('model.completed', function() {
    return this.get('model.completed') === 1;
  })
});










