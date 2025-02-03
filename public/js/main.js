// Show or hide the return-to-top button
window.addEventListener('scroll', function () {
  const topButton = document.getElementById('return-to-top')

  // Check if the page is scrolled more than 100 px
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.classList.add('visible') // Fade in
  } else {
    topButton.classList.remove('visible') // Fade out
  }
})

// Smooth scroll to the top
document.getElementById('return-to-top').addEventListener('click', function (e) {
  e.preventDefault() // Prevent default anchor behaviour

  // Scroll smoothly to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
