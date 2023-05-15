if (window.matchMedia("(min-width: 801px)").matches) {
   const boxes = document.querySelectorAll('.programm__itemHead')
   if (boxes) {
      let height = 0;
      for (var i = 0; i < boxes.length; i++) {
         var current_height = boxes[i].offsetHeight;
         if (current_height > height) {
            height = current_height;
         }
      }
      for (var i = 0; i < boxes.length; i++) {
         boxes[i].style.height = height + 'px';
      }
   }
}
function setEqualHeightForLists(className) {
   var elements = document.querySelectorAll(className);
   for (var i = 0; i < elements.length; i++) {
      var parent = elements[i].parentNode.parentNode;
      var firstList = parent.querySelector('.js-first-programm-list');
      var secondList = parent.querySelector('.js-second-programm-list');
      var firstItems = firstList.querySelectorAll('li');
      var secondItems = secondList.querySelectorAll('li');
      for (var j = 0; j < firstItems.length && j < secondItems.length; j++) {
         var firstHeight = firstItems[j].clientHeight;
         var secondHeight = secondItems[j].clientHeight;
         var maxHeight = Math.max(firstHeight, secondHeight);
         firstItems[j].style.height = maxHeight + "px";
         secondItems[j].style.height = maxHeight + "px";
      }
   }
}
setEqualHeightForLists(".js-programm-columns");