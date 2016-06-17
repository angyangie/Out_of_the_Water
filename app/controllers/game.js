import Ember from 'ember';

export default Ember.Controller.extend({
  coordsArray: Ember.computed(function() {
    let rows = [1,2,3,4,5,6,7,8,9,10];
    let cols = [1,2,3,4,5,6,7,8,9,10];
    let cArray = [];
    let innerArray = [];
    for (let i = 0;i < 10;i++) {
      for (let j = 0;j < 10;j++) {
        innerArray.push(`${rows[i]}${cols[j]}`);
      }
      cArray.push(innerArray);
      innerArray = [];
    }
    return cArray;
  }),
  hits: 
    [[false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]]
});

