// add active Class
let links = document.querySelectorAll(".navbar-nav a");

links.forEach((a) => {
  a.addEventListener('click', function () {
    links.forEach(link => link.classList.remove('nav-active'));
    this.classList.add('nav-active');
  });
});

$(function () {
// see more see less button for about section
  let seeMore = $(".about-content button");
  let moreContent = $(".more-content");

  seeMore.click(function () {
    if (moreContent.css('display') == 'none') {
      moreContent.slideDown(),
      $(this).text("See Less");
    } else {
      moreContent.slideUp(),
      $(this).text("See More")
    }
  });
// see more see less button for our client section
  let moreClientsButton = $(".our-clients button");
  let moreClients = $(".our-clients .more-clients");

  moreClientsButton.click(function () {
    if (moreClients.css('display') == 'none') {
      moreClients.slideDown().css('display','flex'),
      $(this).text("-");
    } else {
      moreClients.slideUp(),
      $(this).text("+");
    }
  });
// trigger buttons in services out-sourcing selection
  let contentButtons = $(".out-sourcing .out-sourcing-buttons button");
  contentButtons.click(function () {
  $(this).addClass("select").siblings().removeClass("select");
  // switch taps
  $(".out-sourcing .out-sourcing-info > div").hide();
  $($(this).data('class')).show();
  });
// trigger up button
  let upButton = $(".up");

  upButton.click(function () {
    $("html,body").animate({
      scrollTop: 0
    });
  });

  $(window).scroll(function () {
  if ($(window).scrollTop() >= 950) {
    $(".up").fadeIn(500)
  } else {
    $(".up").hide()
  }
});

});
