import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('game');
  this.route('about');
  this.route('tutorial');
  this.route('home');
});

export default Router;
