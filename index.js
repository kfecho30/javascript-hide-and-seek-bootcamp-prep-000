function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var ranked_lists = document.querySelectorAll('.ranked-list')
  for (var r in ranked_lists){
    ranked_lists[r].innerHTML = (ranked_lists[r] + n).toString()
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
