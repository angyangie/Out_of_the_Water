import Ember from 'ember';

export function isShip(coords, hash) {
  const player = hash.player
  const ships = hash.model.get('ships').filter(function(item){
    if(item.get('user.id') === player) return true 
  })
  debugger
  let ship;
  for (let i = 0;i < ships.length;i++) {
    ship = ships[i].get('coordinates').split(",")
    if (ship.includes(coords[0])) {
      let vertical = "";
      let shipPiece = "";

      if (ship[0][1] === ship[1][1]) vertical = "transform:rotate(90deg);";

      const ship_type = ships.mapBy('ship_type')[i]

      if ((ship[0][0] > ship[1][0]) && (vertical !== "")) {
        shipPiece = `${ship_type.toLowerCase()}-${ship.length - ship.indexOf(coords[0])}`;
      } else {
        shipPiece = `${ship_type.toLowerCase()}-${ship.indexOf(coords[0])+1}`;
      }

      return `<img src="assets/images/ship-pieces/${shipPiece}.png" style="width:50px;height:50px;${vertical}">`
    }
  }
  return null;
}

export default Ember.Helper.helper(isShip);


