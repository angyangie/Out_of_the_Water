import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  coordinates: attr('string'),
  shipType: attr('string'),
  userGame: belongsTo('user-game'),
  user: belongsTo('user'),
  game: belongsTo('game')
});