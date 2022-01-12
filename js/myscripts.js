$(function() {
  new Slider({
    images: '.slider-2 img',
    btnPrev: '.slider-2 .buttons .prev',
    btnNext: '.slider-2 .buttons .next',
    auto: true,
    rate: 5000
  });
});

function show(shown, hidden, hidden2) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  document.getElementById(hidden2).style.display='none';
  return false;
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Slider(obj) {
  this.images = $(obj.images);
  this.auto = obj.auto;
  this.btnPrev = obj.btnPrev;
  this.btnNext = obj.btnNext;
  this.rate = obj.rate || 1000;

  var i = 0;
  var slider = this;

  // The "Previous" button: to remove the class .shown, to show the previous image and to add the .shown class
  this.prev = function () {
    slider.images.eq(i).removeClass('shown');
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images.eq(i).addClass('shown');
  }

  // The "Next" button: to remove the class .shown, to show the next image and to add the .shown class
  this.next = function () {
    slider.images.eq(i).removeClass('shown');
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images.eq(i).addClass('shown');
  }

  // To add next and prev functions when clicking on the corresponding buttons
  $(slider.btnPrev).on('click', function(){ slider.prev();});
  $(slider.btnNext).on('click', function(){ slider.next();});

  // For the automatic slider: this method calls the next function at the set rate
  if (slider.auto)	{
    setInterval(slider.next, slider.rate);
  }
};
