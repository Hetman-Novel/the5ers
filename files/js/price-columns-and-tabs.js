document.getElementById('our-plans-one').addEventListener("click", function () {
   document.getElementById('our-plans-two').classList.remove('active');
   document.getElementById('our-plans-three').classList.remove('active');
   document.getElementById('our-plans-one').classList.add('active');

   document.getElementById('our-plans-content-two').classList.remove('show-info');
   document.getElementById('our-plans-content-three').classList.remove('show-info');
   document.getElementById('our-plans-content-one').classList.add('show-info');
});
document.getElementById('close-plan-one').addEventListener("click", function () {
   document.getElementById('our-plans-one').classList.remove('active');
   document.getElementById('our-plans-content-one').classList.remove('show-info');
});

document.getElementById('our-plans-two').addEventListener("click", function () {
   document.getElementById('our-plans-one').classList.remove('active');
   document.getElementById('our-plans-three').classList.remove('active');
   document.getElementById('our-plans-two').classList.add('active');

   document.getElementById('our-plans-content-one').classList.remove('show-info');
   document.getElementById('our-plans-content-three').classList.remove('show-info');
   document.getElementById('our-plans-content-two').classList.add('show-info');
});
document.getElementById('close-plan-two').addEventListener("click", function () {
   document.getElementById('our-plans-two').classList.remove('active');
   document.getElementById('our-plans-content-two').classList.remove('show-info');
});

document.getElementById('our-plans-three').addEventListener("click", function () {
   document.getElementById('our-plans-one').classList.remove('active');
   document.getElementById('our-plans-two').classList.remove('active');
   document.getElementById('our-plans-three').classList.add('active');

   document.getElementById('our-plans-content-one').classList.remove('show-info');
   document.getElementById('our-plans-content-two').classList.remove('show-info');
   document.getElementById('our-plans-content-three').classList.add('show-info');
});
document.getElementById('close-plan-three').addEventListener("click", function () {
   document.getElementById('our-plans-three').classList.remove('active');
   document.getElementById('our-plans-content-three').classList.remove('show-info');
});

// Tab one, Prices one
function TabOneSetEqualHeightForListsOne(TabOneClassNameOne) {
   var TabOneElementsOne = document.querySelectorAll(TabOneClassNameOne);
   for (var i = 0; i < TabOneElementsOne.length; i++) {
      var TabOneParentOne = TabOneElementsOne[i].parentNode;
      var TabOneFirstListOne = TabOneParentOne.querySelector('.js-tab-one-fl-one');
      var TabOneSecondListOne = TabOneParentOne.querySelector('.js-tab-one-sl-one');
      var TabOneFirstItemsOne = TabOneFirstListOne.querySelectorAll('.js-tab-one-fi-one');
      var TabOneSecondItemsOne = TabOneSecondListOne.querySelectorAll('.js-tab-one-si-one');
      for (var j = 0; j < TabOneFirstItemsOne.length && j < TabOneSecondItemsOne.length; j++) {
         var TabOneFirstHeightOne = TabOneFirstItemsOne[j].clientHeight;
         var TabOneSecondHeightOne = TabOneSecondItemsOne[j].clientHeight;
         var TabOneMaxHeightOne = Math.max(TabOneFirstHeightOne, TabOneSecondHeightOne);
         TabOneFirstItemsOne[j].style.height = TabOneMaxHeightOne + "px";
         TabOneSecondItemsOne[j].style.height = TabOneMaxHeightOne + "px";
      }
   }
}
document.getElementById('our-plans-one').addEventListener("click", function () {
   setTimeout(() => {
      TabOneSetEqualHeightForListsOne(".js-tab-one-columns-one");
   }, 1)
});
document.getElementById('tab-one-block-one').addEventListener("click", function () {
   setTimeout(() => {
      TabOneSetEqualHeightForListsOne(".js-tab-one-columns-one");
   }, 1)
});
// Tab one, Prices two
function TabOneSetEqualHeightForListsTwo(TabOneClassNameTwo) {
   var TabOneElementsTwo = document.querySelectorAll(TabOneClassNameTwo);
   for (var i = 0; i < TabOneElementsTwo.length; i++) {
      var TabOneParentTwo = TabOneElementsTwo[i].parentNode;
      var TabOneFirstListTwo = TabOneParentTwo.querySelector('.js-tab-one-fl-two');
      var TabOneSecondListTwo = TabOneParentTwo.querySelector('.js-tab-one-sl-two');
      var TabOneFirstItemsTwo = TabOneFirstListTwo.querySelectorAll('.js-tab-one-fi-two');
      var TabOneSecondItemsTwo = TabOneSecondListTwo.querySelectorAll('.js-tab-one-si-two');
      for (var j = 0; j < TabOneFirstItemsTwo.length && j < TabOneSecondItemsTwo.length; j++) {
         var TabOneFirstHeightTwo = TabOneFirstItemsTwo[j].clientHeight;
         var TabOneSecondHeightTwo = TabOneSecondItemsTwo[j].clientHeight;
         var TabOneMaxHeightTwo = Math.max(TabOneFirstHeightTwo, TabOneSecondHeightTwo);
         TabOneFirstItemsTwo[j].style.height = TabOneMaxHeightTwo + "px";
         TabOneSecondItemsTwo[j].style.height = TabOneMaxHeightTwo + "px";
      }
   }
}
document.getElementById('tab-one-block-two').addEventListener("click", function () {
   setTimeout(() => {
      TabOneSetEqualHeightForListsTwo(".js-tab-one-columns-two");
   }, 1)
});
// Tab one, Prices three
function TabOneSetEqualHeightForListsThree(TabOneClassNameTwo) {
   var TabOneElementsTwo = document.querySelectorAll(TabOneClassNameTwo);
   for (var i = 0; i < TabOneElementsTwo.length; i++) {
      var TabOneParentTwo = TabOneElementsTwo[i].parentNode;
      var TabOneFirstListTwo = TabOneParentTwo.querySelector('.js-tab-one-fl-three');
      var TabOneSecondListTwo = TabOneParentTwo.querySelector('.js-tab-one-sl-three');
      var TabOneFirstItemsTwo = TabOneFirstListTwo.querySelectorAll('.js-tab-one-fi-three');
      var TabOneSecondItemsTwo = TabOneSecondListTwo.querySelectorAll('.js-tab-one-si-three');
      for (var j = 0; j < TabOneFirstItemsTwo.length && j < TabOneSecondItemsTwo.length; j++) {
         var TabOneFirstHeightTwo = TabOneFirstItemsTwo[j].clientHeight;
         var TabOneSecondHeightTwo = TabOneSecondItemsTwo[j].clientHeight;
         var TabOneMaxHeightTwo = Math.max(TabOneFirstHeightTwo, TabOneSecondHeightTwo);
         TabOneFirstItemsTwo[j].style.height = TabOneMaxHeightTwo + "px";
         TabOneSecondItemsTwo[j].style.height = TabOneMaxHeightTwo + "px";
      }
   }
}
document.getElementById('tab-one-block-three').addEventListener("click", function () {
   setTimeout(() => {
      TabOneSetEqualHeightForListsThree(".js-tab-one-columns-three");
   }, 1)
});

// Tab two, Prices one
function TabTwoSetEqualHeightForListsOne(TabTwoClassNameOne) {
   var TabTwoElementsOne = document.querySelectorAll(TabTwoClassNameOne);
   for (var i = 0; i < TabTwoElementsOne.length; i++) {
      var TabTwoParentOne = TabTwoElementsOne[i].parentNode;
      var TabTwoFirstListOne = TabTwoParentOne.querySelector('.js-tab-two-fl-one');
      var TabTwoSecondListOne = TabTwoParentOne.querySelector('.js-tab-two-sl-one');
      var TabTwoFirstItemsOne = TabTwoFirstListOne.querySelectorAll('.js-tab-two-fi-one');
      var TabTwoSecondItemsOne = TabTwoSecondListOne.querySelectorAll('.js-tab-two-si-one');
      for (var j = 0; j < TabTwoFirstItemsOne.length && j < TabTwoSecondItemsOne.length; j++) {
         var TabTwoFirstHeightOne = TabTwoFirstItemsOne[j].clientHeight;
         var TabTwoSecondHeightOne = TabTwoSecondItemsOne[j].clientHeight;
         var TabTwoMaxHeightOne = Math.max(TabTwoFirstHeightOne, TabTwoSecondHeightOne);
         TabTwoFirstItemsOne[j].style.height = TabTwoMaxHeightOne + "px";
         TabTwoSecondItemsOne[j].style.height = TabTwoMaxHeightOne + "px";
      }
   }
}
document.getElementById('our-plans-two').addEventListener("click", function () {
   setTimeout(() => {
      TabTwoSetEqualHeightForListsOne(".js-tab-two-columns-one");
   }, 1)
});
document.getElementById('tab-two-block-one').addEventListener("click", function () {
   setTimeout(() => {
      TabTwoSetEqualHeightForListsOne(".js-tab-two-columns-one");
   }, 1)
});
// Tab two, Prices two
function TabTwoSetEqualHeightForListsTwo(TabTwoClassNameTwo) {
   var TabTwoElementsTwo = document.querySelectorAll(TabTwoClassNameTwo);
   for (var i = 0; i < TabTwoElementsTwo.length; i++) {
      var TabTwoParentTwo = TabTwoElementsTwo[i].parentNode;
      var TabTwoFirstListTwo = TabTwoParentTwo.querySelector('.js-tab-two-fl-two');
      var TabTwoSecondListTwo = TabTwoParentTwo.querySelector('.js-tab-two-sl-two');
      var TabTwoFirstItemsTwo = TabTwoFirstListTwo.querySelectorAll('.js-tab-two-fi-two');
      var TabTwoSecondItemsTwo = TabTwoSecondListTwo.querySelectorAll('.js-tab-two-si-two');
      for (var j = 0; j < TabTwoFirstItemsTwo.length && j < TabTwoSecondItemsTwo.length; j++) {
         var TabTwoFirstHeightTwo = TabTwoFirstItemsTwo[j].clientHeight;
         var TabTwoSecondHeightTwo = TabTwoSecondItemsTwo[j].clientHeight;
         var TabTwoMaxHeightTwo = Math.max(TabTwoFirstHeightTwo, TabTwoSecondHeightTwo);
         TabTwoFirstItemsTwo[j].style.height = TabTwoMaxHeightTwo + "px";
         TabTwoSecondItemsTwo[j].style.height = TabTwoMaxHeightTwo + "px";
      }
   }
}
document.getElementById('tab-two-block-two').addEventListener("click", function () {
   setTimeout(() => {
      TabTwoSetEqualHeightForListsTwo(".js-tab-two-columns-two");
   }, 1)
});
// Tab two, Prices three
function TabTwoSetEqualHeightForListsThree(TabTwoClassNameThree) {
   var TabTwoElementsThree = document.querySelectorAll(TabTwoClassNameThree);
   for (var i = 0; i < TabTwoElementsThree.length; i++) {
      var TabTwoParentThree = TabTwoElementsThree[i].parentNode;
      var TabTwoFirstListThree = TabTwoParentThree.querySelector('.js-tab-two-fl-three');
      var TabTwoSecondListThree = TabTwoParentThree.querySelector('.js-tab-two-sl-three');
      var TabTwoFirstItemsThree = TabTwoFirstListThree.querySelectorAll('.js-tab-two-fi-three');
      var TabTwoSecondItemsThree = TabTwoSecondListThree.querySelectorAll('.js-tab-two-si-three');
      for (var j = 0; j < TabTwoFirstItemsThree.length && j < TabTwoSecondItemsThree.length; j++) {
         var TabTwoFirstHeightThree = TabTwoFirstItemsThree[j].clientHeight;
         var TabTwoSecondHeightThree = TabTwoSecondItemsThree[j].clientHeight;
         var TabTwoMaxHeightThree = Math.max(TabTwoFirstHeightThree, TabTwoSecondHeightThree);
         TabTwoFirstItemsThree[j].style.height = TabTwoMaxHeightThree + "px";
         TabTwoSecondItemsThree[j].style.height = TabTwoMaxHeightThree + "px";
      }
   }
}
document.getElementById('tab-two-block-three').addEventListener("click", function () {
   setTimeout(() => {
      TabTwoSetEqualHeightForListsThree(".js-tab-two-columns-three");
   }, 1)
});

// Tab three, Prices one
function TabThreeSetEqualHeightForListsOne(TabThreeClassNameOne) {
   var TabThreeElementsOne = document.querySelectorAll(TabThreeClassNameOne);
   for (var i = 0; i < TabThreeElementsOne.length; i++) {
      var TabThreeParentOne = TabThreeElementsOne[i].parentNode;
      var TabThreeFirstListOne = TabThreeParentOne.querySelector('.js-tab-three-fl-one');
      var TabThreeSecondListOne = TabThreeParentOne.querySelector('.js-tab-three-sl-one');
      var TabThreeFirstItemsOne = TabThreeFirstListOne.querySelectorAll('.js-tab-three-fi-one');
      var TabThreeSecondItemsOne = TabThreeSecondListOne.querySelectorAll('.js-tab-three-si-one');
      for (var j = 0; j < TabThreeFirstItemsOne.length && j < TabThreeSecondItemsOne.length; j++) {
         var TabThreeFirstHeightOne = TabThreeFirstItemsOne[j].clientHeight;
         var TabThreeSecondHeightOne = TabThreeSecondItemsOne[j].clientHeight;
         var TabThreeMaxHeightOne = Math.max(TabThreeFirstHeightOne, TabThreeSecondHeightOne);
         TabThreeFirstItemsOne[j].style.height = TabThreeMaxHeightOne + "px";
         TabThreeSecondItemsOne[j].style.height = TabThreeMaxHeightOne + "px";
      }
   }
}
document.getElementById('our-plans-three').addEventListener("click", function () {
   setTimeout(() => {
      TabThreeSetEqualHeightForListsOne(".js-tab-three-columns-one");
   }, 1)
});
document.getElementById('tab-three-block-one').addEventListener("click", function () {
   setTimeout(() => {
      TabThreeSetEqualHeightForListsOne(".js-tab-three-columns-one");
   }, 1)
});
// Tab three, Prices two
function TabThreeSetEqualHeightForListsTwo(TabThreeClassNameTwo) {
   var TabThreeElementsTwo = document.querySelectorAll(TabThreeClassNameTwo);
   for (var i = 0; i < TabThreeElementsTwo.length; i++) {
      var TabThreeParentTwo = TabThreeElementsTwo[i].parentNode;
      var TabThreeFirstListTwo = TabThreeParentTwo.querySelector('.js-tab-three-fl-two');
      var TabThreeSecondListTwo = TabThreeParentTwo.querySelector('.js-tab-three-sl-two');
      var TabThreeFirstItemsTwo = TabThreeFirstListTwo.querySelectorAll('.js-tab-three-fi-two');
      var TabThreeSecondItemsTwo = TabThreeSecondListTwo.querySelectorAll('.js-tab-three-si-two');
      for (var j = 0; j < TabThreeFirstItemsTwo.length && j < TabThreeSecondItemsTwo.length; j++) {
         var TabThreeFirstHeightTwo = TabThreeFirstItemsTwo[j].clientHeight;
         var TabThreeSecondHeightTwo = TabThreeSecondItemsTwo[j].clientHeight;
         var TabThreeMaxHeightTwo = Math.max(TabThreeFirstHeightTwo, TabThreeSecondHeightTwo);
         TabThreeFirstItemsTwo[j].style.height = TabThreeMaxHeightTwo + "px";
         TabThreeSecondItemsTwo[j].style.height = TabThreeMaxHeightTwo + "px";
      }
   }
}
document.getElementById('tab-three-block-two').addEventListener("click", function () {
   setTimeout(() => {
      TabThreeSetEqualHeightForListsTwo(".js-tab-three-columns-two");
   }, 1)
});
// Tab three, Prices three
function TabThreeSetEqualHeightForListsThree(TabThreeClassNameThree) {
   var TabThreeElementsThree = document.querySelectorAll(TabThreeClassNameThree);
   for (var i = 0; i < TabThreeElementsThree.length; i++) {
      var TabThreeParentThree = TabThreeElementsThree[i].parentNode;
      var TabThreeFirstListThree = TabThreeParentThree.querySelector('.js-tab-three-fl-three');
      var TabThreeSecondListThree = TabThreeParentThree.querySelector('.js-tab-three-sl-three');
      var TabThreeFirstItemsThree = TabThreeFirstListThree.querySelectorAll('.js-tab-three-fi-three');
      var TabThreeSecondItemsThree = TabThreeSecondListThree.querySelectorAll('.js-tab-three-si-three');
      for (var j = 0; j < TabThreeFirstItemsThree.length && j < TabThreeSecondItemsThree.length; j++) {
         var TabThreeFirstHeightThree = TabThreeFirstItemsThree[j].clientHeight;
         var TabThreeSecondHeightThree = TabThreeSecondItemsThree[j].clientHeight;
         var TabThreeMaxHeightThree = Math.max(TabThreeFirstHeightThree, TabThreeSecondHeightThree);
         TabThreeFirstItemsThree[j].style.height = TabThreeMaxHeightThree + "px";
         TabThreeSecondItemsThree[j].style.height = TabThreeMaxHeightThree + "px";
      }
   }
}
document.getElementById('tab-three-block-three').addEventListener("click", function () {
   setTimeout(() => {
      TabThreeSetEqualHeightForListsThree(".js-tab-three-columns-three");
   }, 1)
});

/* ============================ */
if (window.matchMedia("(max-width: 576px)").matches) {
   document.getElementById('our-plans-one').addEventListener("click", function () {
      setTimeout(() => {
         const boxes = document.querySelectorAll('.our-plans__plan-info-blockTitle')
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
      }, 1);
   });
   document.getElementById('our-plans-two').addEventListener("click", function () {
      setTimeout(() => {
         const boxes = document.querySelectorAll('.our-plans__plan-info-blockTitle')
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
      }, 1);
   });
   document.getElementById('our-plans-three').addEventListener("click", function () {
      setTimeout(() => {
         const boxes = document.querySelectorAll('.our-plans__plan-info-blockTitle')
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
      }, 1);
   });
}
/* ============================ */

// Button Show Banners
document.getElementById('tab-one-banners-btn').addEventListener("click", function () {
   document.getElementById('tab-one-banners').classList.add('show-banners');
});
document.getElementById('tab-two-banners-btn').addEventListener("click", function () {
   document.getElementById('tab-two-banners').classList.add('show-banners');
});
document.getElementById('tab-three-banners-btn').addEventListener("click", function () {
   document.getElementById('tab-three-banners').classList.add('show-banners');
});