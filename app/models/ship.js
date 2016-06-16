import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  coordinates: attr('string'),
  hits: attr('string'),
  ship_type: attr('string'),
  user: belongsTo('user'),
  game: belongsTo('game')
});