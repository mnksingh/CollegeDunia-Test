import $ from 'jquery'
import LineProgressbar from './line-progressbar'
import slick from 'slick-carousel'

$('.ProgressBar').each(function() {
  const percentage = $(this).data('percentage')
  $(this).LineProgressbar({
    percentage,
    backgroundColor: '#fff3a5',
    fillBackgroundColor: '#fede00',
    height: '20px',
    radius: '15px'
  })
})

$('.CarSlider').slick({
  dots: true
})
