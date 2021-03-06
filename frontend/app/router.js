import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', {path: '/landing'});
  //this.route('dataset');
  this.resource('users', function() {
    this.resource('user', { path: '/:user_id' });
  });

  this.resource('datasets', {path:'/datasets'}, function() {
    this.route('new');
  });

  this.route('dashboard', {path: '/'});

  this.resource('classifiers', function() {
    this.resource('classifier', { path: '/:classifier_id' }, function() { });
  });
  this.route('datasets/new');
});

export default Router;
