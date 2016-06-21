import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  completed: attr('number'),
  gameType: attr('string'),
  userGames: hasMany('user-game', { async: true }),
  users: hasMany('user', { async: true }),
  ships: hasMany('ship')
  // winner: belongsTo('user')
});