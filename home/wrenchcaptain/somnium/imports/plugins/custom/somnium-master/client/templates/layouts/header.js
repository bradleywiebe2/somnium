/**
 * layoutHeader events
 */
Template.somniumHeader.events({
  // "click a.somnium-brand-dropdown": function () {
  //   if ($('.navbar-accounts').css('left') === '0')
  //     $('.navbar-accounts').css({ 'top': '-64px', 'opacity': '1', 'left': '45px' });
  //   else
  //     $('.navbar-accounts').css({ 'top': '-64px', 'opacity': '0', 'left': '0px' });
  // },
  "click .navbar-accounts .dropdown-toggle": function () {
    return setTimeout(function () {
      return $("#login-email").focus();
    }, 100);
  },
  "click .header-tag, click .navbar-brand": function () {
    return $(".dashboard-navbar-packages ul li").removeClass("active");
  }
});
