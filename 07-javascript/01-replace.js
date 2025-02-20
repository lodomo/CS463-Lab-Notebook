const replaceItems = (input) => {
  // return a string with 'gold' replaced by 'SHINY' and 'wander' replaced by 'roam', regardless of the case of the letters

  // for reference, see the MDN "Regular Expressions" entry:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

  // Regex for all versions of the word "gold"
  const goldRegEx = new RegExp("[gG][oO][lL][dD]");
  const wanderRegEx = new RegExp("[wW][aA][nN][dD][eE][rR]");
  input = input.replace(goldRegEx, 'SHINY');
  input = input.replace(wanderRegEx, 'roam');
  return input;
};

console.log(replaceItems('All that is gold does not glitter'));
// expected: 'All that is SHINY does not glitter'
console.log(replaceItems('Wisdom is better than silver or GOLD.'));
// expected: 'Wisdom is better than silver or SHINY.'
console.log(replaceItems('Not all those who Wander are lost'));
// expected: 'Not all those who roam are lost'
