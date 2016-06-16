import Ember from 'ember';

export function isShip(coords, hash) {
  let ships = hash.ships;
  debugger
  for (let i = 0;i < ships.length;i++) {
    if (ships[i].includes(coords[0])) {
      let vertical = "";
      let shipPiece = "";

      if (ships[i][1][1] === ships[i][2][1]) vertical = "transform:rotate(90deg);";

      if ((ships[i][1][0] > ships[i][2][0]) && (vertical !== "")) {
        shipPiece = `${ships[i][0].toLowerCase()}-${ships[i].length - ships[i].indexOf(coords[0])}`;
      } else {
        shipPiece = `${ships[i][0].toLowerCase()}-${ships[i].indexOf(coords[0])}`;
      }

      // console.log(`Coords: ${coords} and Ships: ${ships}`);

      return `<img src="assets/images/ship-pieces/${shipPiece}.png" style="width:50px;height:50px;${vertical}">`
    }
  }
  return false;
}

export default Ember.Helper.helper(isShip);
