// create our first middlware
// here we need to receive curri function
/*
characteristic of curri function
=> it take one parameter only 
=> curried function function means: ekta function ekta parameter receive kore,
ei function theke ekta function return korbo jeita arekta parameter nibe. ei return function theke ekta function return korbo jeno aber eita ekta function return kore arekta parameter near jonno. now kisu kaj korte pari. 

tinta value pass korar currued function. then multiply kore final return
const curriedMultiply = (a) => {
    return (b) => {
        return (c) => {
            return a*b*c;
        }
    }
}

curriedMultiply(2) ata return kore ekta function jeita ekta parameter nite pare
so, curriedMultiply(2)(10) second function return k ami value die disi. ekhon eta aber arekta function return kore
so, ami ekhon aber oitate value die dibo
curriedMultiply(2)(10)(3); ekhon ei function ta ekta jinis return kore jokhon ami 3 die call korsi. call value kori r nai kori ata call hobe. and ata return kore a*b*c er multiplication.
so we can get ans = curriedMultiply(2)(10)(3); as 60

*/
// first parameter is state, second is next, third is action. redux pass them
// state means previous state, next means when we call it, then it go to reducer otherwise it holds

import store from "../store";

// action means current action object.
const myLogger = (state) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  // pass next with action parameter
  return next(action);
};

export default myLogger;
