
document.addEventListener('DOMContentLoaded', () => {
  stars = document.querySelectorAll(".stars");
  stars.forEach(item => {
    item.addEventListener('click', function () {

      token.style.display="flex";
      
      var rating = this.getAttribute("data-rating");
      document.querySelector(".RatingAmount").innerText = rating;
      return SetRatingStar(rating, stars);
    });
  });
});

/**
* SetRatingStar sets the rating on page
*
* @param {int} rating           Int of the rating value. 
* @returns {object} stars       html stars elements
*
*/


function SetRatingStar(rating, stars) {
  var len = stars.length;

  for (var i = 0; i < len; i++) {
    if (i < rating) {
      stars[i].innerHTML = '★';
    } else {
      stars[i].innerHTML = '☆';
    }
  }

}


function average(){
  //retreive data from json file
  let num =document.getElementById('num_readers');
  let avg_num = database/(parseInt(num.innerText));
  avg=document.getElementById('text');
  avg.innerHTML = `${Math.round(avg_num * 10) / 10}`;
}