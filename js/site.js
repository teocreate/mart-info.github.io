document.addEventListener("scroll", (event) => {
    let headers = document.getElementsByClassName('main-header');
    if (headers && headers.length > 0) {
        if (document.documentElement.scrollTop == 0) {
            headers[0].classList.remove('is-active');
        } else {
            if (!headers[0].classList.contains('is-active')) {
                headers[0].classList.add('is-active');
            }
        }
    }
});

function scrollToElement(elementId) {
      let element = document.getElementById(elementId);
      window.scrollTo(
        {
            top: element.offsetTop - 100,
            behavior: 'smooth'
        });
}
