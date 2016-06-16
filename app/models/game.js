import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  completed: attr('boolean'),
  game_type: attr('string'),
  scores: has_many('score'),
  users: has_many('user'),
  ships: has_many('ship'),
  winner: belongsTo('user')
});