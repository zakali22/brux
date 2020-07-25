const animatedTags = document.querySelectorAll('h2, h3, p, .button, img')

// Fade out on load
animatedTags.forEach(tag => {
    tag.style.opacity = 0;
    // console.log(tag.offsetTop)
})

// Fade in animation
function fadeInAnim(){
    let delay = 0.25
    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;
        const pageHeight = window.innerHeight;
        
        if(tagTop < pageHeight && tagBottom > 0){
            tag.style.animation = `fadeIn 1s ${delay}s both`;
            delay = delay + 0.25
        } else {
            tag.style.opacity = 0;
            tag.style.animation = "";
        }
    })
}

// Run fadeInAnim on page load
fadeInAnim();

// Run fadeInAnim on scroll
document.addEventListener('scroll', () => {
    fadeInAnim();
})


