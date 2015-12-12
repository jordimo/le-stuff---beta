
function startAnimation(skip)
{
	var tl = new TimelineLite();

	tl.to('.logo_outline', 0, {autoAlpha:1})
	.fromTo('#logo_hornsL', 4, {drawSVG:"50% 50%"}, { drawSVG:"0% 100%", ease:Power1.easeOut})
	.fromTo('#logo_hornsR', 4, {drawSVG:"50% 50%"}, {drawSVG:"0% 100%", ease:Power1.easeOut}, 0)
	.fromTo('.gray-line', 3, {drawSVG:0}, {drawSVG:"102%"}, "-=2")
	.to('.logo_outline', 2, {autoAlpha:0})
	.to('.logo_full', 0.5, {autoAlpha:1}, '-=2');

  tl.totalDuration(5);

	if (skip) {
		tl.progress(1);
	} else {
		tl.play();
	}
}

$(document).ready(function() {
  startAnimation(false);
});
