$(function () {
  $('.e-header__btn-close').click(function () {
    location.href= './../map/index.html'; // TODO: 지도로 경로 수정
  });

  $('.e-header__btn-menu').click(function () {
    $('.e-header__drawer-container').toggleClass('hidden');
    $('.header__btn-aside-close').toggleAttribute('aria-hidden', 'false');
  });

  $('.e-header__btn-aside-close').click(function () {
    $('.e-header__drawer-container').toggleClass('hidden');
    $('.header__btn-aside-close').toggleAttribute('aria-hidden', 'true');
  });
});