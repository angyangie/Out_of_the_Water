import Ember from 'ember';

export function ai(model) {
  const hits = model.get('user_games').mapBy('hits')[0].split(",") //strings

  var aiHit = ""

  var allHitsCoordinates = []
  hits.forEach(function(hit, index){
    if (hit == "2") {
      allHitsCoordinates.push(index)
    }
  })

  var allHitsCoordinatesSort = allHitsCoordinates.sort();

  var allNonMisses = []
  hits.forEach(function(hit, index){
    if (hit == "0") {
      allNonMisses.push(index)
    }
  })

  if (allHitsCoordinates.length == 0){

    aiHit = (allNonMisses[Math.floor(Math.random() * allNonMisses.length)]).toString()

  } else if (allHitsCoordinates.length == 1) {

    let firstHitCoord = hits.indexOf("2")

    let surroundingArray = [[firstHitCoord + 10],[firstHitCoord - 10], [firstHitCoord + 1], [firstHitCoord - 1]]

    surroundingArray.forEach(function(coord){
      if (hits[coord] === "0") {
        aiHit = coord.toString()
        break
      }
    })

  } else if (allHitsCoordinates.length >1){

    var vertical = allHitsCoordinatesSort[0][1] === allHitsCoordinatesSort[1][1]

    var lastCoord = allHitsCoordinatesSort[-1]
    var firstCoord = allHitsCoordinatesSort[0]

    let nextValue1 = (vertical ? parseInt(lastCoord[0]) + 10 : parseInt(lastCoord[0]) + 1)

    let nextValue2 = (vertical ? parseInt(lastCoord[0]) - 10 : parseInt(lastCoord[0]) - 1)

    aiHit = (hits[nextValue1] == 0 ? nextValue1.toString() : nextValue2.toString())

  } 
}

export default Ember.Helper.helper(ai);
