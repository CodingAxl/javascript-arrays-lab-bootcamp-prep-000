const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){

  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){

kittens.unshift(name);
return kittens;

}

function destructivelyRemoveLastKitten(){

  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){

  kittens.shift();
  return kittens;
}

 function appendKitten(name){

var newKitten = ([...kittens, name]);

return newKitten;

 }

function prependKitten(name){

  var newKitten = ([name, ...kittens]);

  return newKitten;
}

function removeLastKitten(){

var newarray = kittens.slice(0, kittens.length -1);
  return newarray;
}

function removeFirstKitten(){
  var newArray = kittens.slice(1);
return newArray;
}
