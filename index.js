function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-lists');
  for (var l in list){
    list[l].innerHTML = parseInt(list[l].innerHTML) + n;
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
