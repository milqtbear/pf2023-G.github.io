// const IMAGES = require( './details/images');

$(function () {
  $('.e-header__btn-close').click(function () {
    location.href = 'map/index.html';
  });

  $('.e-header__drawer-container').html(T_Aside());
  E_Aside();
});

const T_Aside = () => {
  return `
      <div class="header__drawer">
          <div class="header__drawer-header">
              <button type="button" class="header__btn-aside-close e-header__btn-aside-close">
                  <img src="icons/icon-clear.svg" alt="메뉴 닫기"/>
              </button>
          </div>
          <ul class="header__drawer-list">
              <li class="header__drawer-list-item"><a href="introduce/index.html">전시 소개</a></li>
              <li class="header__drawer-list-item"><a href="map/index.html">전시 동선</a></li>
              <li class="header__drawer-list-item"><a href="timeline/202310.html">도슨트 시간표</a></li>
              <li class="header__drawer-list-item"><a href="room/index.html">연구자의 방</a></li>
              <li class="header__drawer-list-item"><a href="./index.html">설문조사</a></li>
          </ul>
          <section class="header__drawer-introduce">
              <dl>
                  <div>
                      <dt class="visually-hidden">주최</dt>
                      <dd class="header__introduce-host">경기도미술관</dd>
                  </div>
                  <div>
                      <dt class="visually-hidden">주소</dt>
                      <dd class="header__introduce-address">15385 경기도 안산시 단원구 동산로 268</dd>
                  </div>
                  <div>
                      <dt>관람시간</dt>
                      <dd>오전 10시 ~ 오후 6시</dd>
                  </div>
                  <div>
                      <dt>관람종료</dt>
                      <dd>한 시간 전까지 입장</dd>
                  </div>
                  <div>
                      <dt>휴관일</dt>
                      <dd>매주 월요일 (1월 1일과 설날, 추석 당일)</dd>
                  </div>
                  <div>
                      <dt>관람료</dt>
                      <dd>무료</dd>
                  </div>
                  <div class="header__cs-container">
                      <dt class="header__cs-title">관람문의</dt>
                      <dd class="header__cs-description">
                          T. +82 31 481 7000
                      </dd>
                      <dd class="header__cs-description">
                          F. +82 31 481 7053
                      </dd>
                  </div>
              </dl>
              <div class="header__direct-links">
                  <a href="https://gmoma.ggcf.kr/" target="_blank" aria-label="경기도미술관 바로가기">
                      <img src="icons/icon-gmoma.svg" alt="경기도미술관"/>
                  </a>
                  <a href="https://www.instagram.com/gyeonggimoma/" target="_blank" aria-label="인스타그램 바로가기">
                      <img src="icons/icon-instagram.svg" alt="인스타그램"/>
                  </a>
                  <a href="https://www.facebook.com/ggmoma/" target="_blank" aria-label="페이스북 바로가기">
                      <img src="icons/icon-facebook.svg" alt="페이스북"/>
                  </a>
              </div>
          </section>
      </div>
  `;
}

/**
 * @description 햄버거 메뉴의 이벤트 기능을 담당하는 함수
 */
const E_Aside = () => {
  $('.e-header__btn-menu').click(function () {
    $('.e-header__drawer-container').toggleClass('aside-hidden');
    $('.header__btn-aside-close').toggleAttribute('aria-hidden', 'false');
  });

  $('.e-header__btn-aside-close').click(function () {
    $('.e-header__drawer-container').toggleClass('aside-hidden');
    $('.header__btn-aside-close').toggleAttribute('aria-hidden', 'true');
  });
}