console.clear();
console.log('Thanks for using lowhatex's script. github.com/lowylow');

let pickfrom = [];
let comments = Array.from(document.querySelectorAll(’#author-text > span’));
comments.forEach( comment => {
pickfrom.push(comment);
});
let random_pick = Math.floor(Math.random()*pickfrom.length);
console.log(pickfrom[random_pick]);

// Because giveaway winner picking should be easier.
