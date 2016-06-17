import Ember from 'ember';

export function isShip(coords, hash) {
  let ships = hash.ships.mapBy('coordinates');
  let ship;
  for (let i = 0;i < ships.length;i++) {
    ship = ships[i].split(",")
    if (ship.includes(coords[0])) {
      let vertical = "";
      let shipPiece = "";

      if (ship[0][1] === ship[1][1]) vertical = "transform:rotate(90deg);";


      let ship_type = hash.ships.mapBy('ship_type')[i]

      // debugger;
        console.log(`Coords are ${coords[0]} and ${ship_type.toLowerCase()}-${ship.indexOf(coords[0])+1}`);

      if ((ship[0][0] > ship[1][0]) && (vertical !== "")) {
        // shipPiece = `${ship_type.toLowerCase()}-${ship.indexOf(coords[0])+1}`;
        shipPiece = `${ship_type.toLowerCase()}-${ship.length - ship.indexOf(coords[0])}`;
      } else {
        shipPiece = `${ship_type.toLowerCase()}-${ship.indexOf(coords[0])+1}`;
      }

      // console.log(`Coords: ${coords} and Ships: ${ships}`);

      return `<img src="assets/images/ship-pieces/${shipPiece}.png" style="width:50px;height:50px;${vertical}">`
    }
  }
  return false;
}

export default Ember.Helper.helper(isShip);
