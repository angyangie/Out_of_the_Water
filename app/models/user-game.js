import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  hits: attr('string'),
  users: belongsTo('user'),
  games: belongsTo('game'),
  ships: hasMany('ship')
});