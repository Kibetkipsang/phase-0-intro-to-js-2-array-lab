const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (Ambuso){
      cats.push(Ambuso);
}
function destructivelyPrependCat(Carlos){
      cats.unshift(Carlos);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function  appendCat(Lyon){
const othercats = cats.slice();
      othercats.push (Lyon);
      return othercats;
}

function  prependCat(Buddy){
    const simplecats =cats.slice();
          simplecats.unshift (Buddy);
          return simplecats;
}
function   removeLastCat(){
    const ourcats =cats.slice();
   ourcats.pop ();
    return ourcats;
}
function removeFirstCat(){
    const freshCats = cats.slice(1);
    return freshCats;
}