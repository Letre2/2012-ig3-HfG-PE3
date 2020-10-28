
$('.number-spinner').mousedown(function(e) {
  let clickedElement = this;
  let clickX = e.clientX;
  let clickY = e.clientY;
  let actValue = parseFloat($(clickedElement).text());

  let min = parseFloat($(clickedElement).attr("data-min"));
  let max = parseFloat($(clickedElement).attr("data-max"));
  let steps = parseFloat($(clickedElement).attr("data-stepper"));


  $(window).mousemove(function(e) {
    let actX = e.clientX;
    let actY = e.clientY;

    let distX = actX - clickX;

  //  let value = $(clickedElement).text();

    let newValue = actValue + distX * steps;
    $(clickedElement).removeClass('fast slow');

    if (actY < clickY - 20) {
      newValue = actValue + distX * steps *10;
      $(clickedElement).addClass('fast');

    } else if (actY > clickY + 20) {
      newValue = actValue + steps * distX/10;
      $(clickedElement).addClass('slow');

    }

    actValue = newValue;
    clickX = actX;

    displayedValue = Math.round(actValue);
    actValue = Math.min(actValue, max);
    actValue = Math.max(actValue, min);

    $(clickedElement).text( displayedValue );

  });


  $(window).mouseup(function(e) {
    $(window).off("mousemove");
    $(clickedElement).removeClass('fast slow');

  });

});
