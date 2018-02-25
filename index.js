function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var ranked_lists = document.querySelectorAll('.ranked-list')
  var inc = parseInt(n)
  for (let i = 0; i < ranked_lists.length; i++){
    ranked_lists[i].innerHTML = (ranked_lists[i] + inc).toString()
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
