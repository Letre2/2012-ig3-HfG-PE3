
$('.number-spinner').mousedown(function(e) {
  let clickedElement = this;
  let clickX = e.clientX;
  let clickY = e.clientY;
  let clickValue = parseFloat($(clickedElement).text());

  $(window).mousemove(function(e) {
    let actX = e.clientX;
    let distX = actX - clickX;
    let value = $(clickedElement).text();

    let newValue = clickValue + distX;

    $(clickedElement).text(newValue)
  });


  $(window).mouseup(function(e) {
    $(window).off("mousemove");
  });

});
