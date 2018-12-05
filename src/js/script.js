import $ from "jquery";
import LineProgressbar from "./line-progressbar";
import slick from "slick-carousel";

const colorHeading = $("#colorHeading");

const imageColors = [];

$(".CarSlider img").each(function() {
  imageColors.push($(this).data("color"));
});

//Initialize Slider
$(".CarSlider")
  .slick({
    dots: true
  })
  .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    colorHeading.text(imageColors[nextSlide].toUpperCase());
  });

//Initialize Progress Bar
$(".ProgressBar").each(function() {
  const percentage = $(this).data("percentage");
  $(this).LineProgressbar({
    percentage,
    backgroundColor: "#fff3a5",
    fillBackgroundColor: "#fede00",
    height: "20px",
    radius: "15px"
  });
});

$(".slick-dots li").each(function(index) {
  $(this).css({ backgroundColor: imageColors[index] });
});
