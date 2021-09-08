'use strict';

var choose_no_repeat_number=(collection)=>collection.filter(function (e,index,self) {return self.indexOf(e) == index})


module.exports = choose_no_repeat_number;
