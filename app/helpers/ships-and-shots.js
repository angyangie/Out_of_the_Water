import Ember from 'ember';

export function shipsAndShots(coords, hash) {
  const player = hash.player
  const hits = hash.model.get('user_games').mapBy('hits')[parseInt(player) - 1];
  const hitValue = hits.split(",")[parseInt(coords[0])];
  let wasHit = "";

  switch(hitValue) {
    case "1":
    return "<img src='assets/images/miss.png' class='shots-fired'>";
    break;
    case "2":
    if (!hash.showShip) return "<img src='assets/images/hit.png' class='shots-fired'>";
    wasHit = "hit-";
    break;
    case "3":
    debugger;
    wasHit = "hit-";
    break;
  }

  if (!hash.showShip && hitValue !== "3") return null;

  const ships = hash.model.get('ships').filter(function(item){
    if(item.get('user.id') === hash.player) return true 
  })
  let ship;

  for (let i = 0;i < ships.length;i++) {
    ship = ships[i].get('coordinates').split(",")
    if (ship.includes(coords[0])) {
      let vertical = "";
      let shipPiece = "";

      if (ship[0][1] === ship[1][1]) vertical = " ship-rotate";

      const ship_type = ships.mapBy('ship_type')[i]

      if ((ship[0][0] > ship[1][0]) && (vertical !== "")) {
        shipPiece = `${ship_type.toLowerCase()}-${ship.length - ship.indexOf(coords[0])}`;
      } else {
        shipPiece = `${ship_type.toLowerCase()}-${ship.indexOf(coords[0])+1}`;
      }

      return `<img src="assets/images/${wasHit}ship-pieces/${shipPiece}.png" class="ship-piece${vertical}">`
    }
  }
  return null;
}

export default Ember.Helper.helper(shipsAndShots);