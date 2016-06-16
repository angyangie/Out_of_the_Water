import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr('string'),
  first_name: attr('string'),
  last_name: attr('string'),
  email: attr('string'),
  player_rank: attr('number'),
  scores: hasMany('score', { async: true }),
  games: hasMany('game', { async: true }),
  ships: hasMany('ship', { async: true })
});