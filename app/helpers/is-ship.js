import Ember from 'ember';

export function isShip(params) {
  // console.log(params)
  let ships = [["Cruiser","33","34","35"],["Destroyer","66","56"],["Battleship","92","93","94","95"],["Carrier","28","38","48","58","68"],["Battleship", "11","12","13","14"]];
  for (let i = 0;i < ships.length;i++) {
    if (ships[i].includes(params[0])) {
      let vertical = "";
      let shipPiece = "";

      if (ships[i][1][1] === ships[i][2][1]) vertical = "transform:rotate(90deg);";

      if ((ships[i][1][0] > ships[i][2][0]) && (vertical !== "")) {
        shipPiece = `${ships[i][0].toLowerCase()}-${ships[i].length - ships[i].indexOf(params[0])}`;
      } else {
        shipPiece = `${ships[i][0].toLowerCase()}-${ships[i].indexOf(params[0])}`;
      }

      return `<img src="assets/images/ship-pieces/${shipPiece}.png" style="width:50px;height:50px;${vertical}">`
    }
  }
  return false;
}

export default Ember.Helper.helper(isShip);
