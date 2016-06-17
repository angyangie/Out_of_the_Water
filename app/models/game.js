import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  completed: attr('boolean'),
  game_type: attr('string'),
  user_games: hasMany('user_game', { async: true }),
  users: hasMany('user', { async: true }),
  ships: hasMany('ship')
  // winner: belongsTo('user')
});