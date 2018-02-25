function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-lists');
  var inc = parseInt(n);
  for (var l in list){
    list[l].innerHTML = (list[l].innerHTML + n).toString();
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
