import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
});
