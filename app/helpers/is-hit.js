import Ember from 'ember';

export function isHit(coords, hash) {

  const hits = hash.model.get('user_games').mapBy('hits')[hash.player - 1]
  coords = [parseInt(coords[0][0]), parseInt(coords[0][1])];
  const hit = hits.split(",")[parseInt(coords.join(""))]
  switch(hit) {
    case "0":
    return null;
    break;
    case "1":
    return "<img src='assets/images/miss.png'>";
    break;
    case "2":
    return "<img src='assets/images/hit.png'>";
    break;
  }
}

export default Ember.Helper.helper(isHit);

