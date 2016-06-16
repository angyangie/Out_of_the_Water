import Ember from 'ember';

export function isHit(coords, hash) {
  let hits = hash.hits;
  coords = [parseInt(coords[0][0]), parseInt(coords[0][1])];
  return hits[coords[0]][coords[1]];
}

export default Ember.Helper.helper(isHit);
