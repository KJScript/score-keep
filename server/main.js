import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

});

let house = {
  berooms: 2,
  bathrooms: 1.5
};

let yearBuilt = 1995;

let soi = {
  ...house,
  berooms: 3,
  yearBuilt,
  flooring: 'Carpet'
}

console.log(soi);
