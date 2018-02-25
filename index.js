function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var lists = document.querySelectorAll('.ranked-list')
  for (var r in lists){
    lists[r].innerHTML = (lists[r] + n).toString()
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
