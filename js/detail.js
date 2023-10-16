$(() => {
  $('.e-floating-btn').click(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드러운 스크롤 적용
    });
  });

  imagePaginationEvent();
});


/**
 * @description 이미지를 변경하는 클릭 이벤트를 모은 함수
 * @param currentImageIndex 현재 선택된 이미지의 번호
 */
const imagePaginationEvent = (currentImageIndex = 0) => {
  const $prev = $('.e-detail__icon-prev-image');
  const $next = $('.e-detail__icon-next-image');

  let currentIndex = currentImageIndex;

  (function () {
    /** 최초로 부를 때 세팅 **/
    imagePagination(currentIndex);

    $prev.click(function () {
      initEvent($prev, $next);

      currentIndex = currentIndex === 0 ? 0 : currentIndex - 1;
      imagePagination(currentIndex);
      imagePaginationEvent(currentIndex)
    });

    $next.click(function () {
      initEvent($prev, $next);

      currentIndex = currentIndex + 1;
      imagePagination(currentIndex);
      imagePaginationEvent(currentIndex)
    });
  })();
}

/**
 * @description 이벤트 초기화 로직
 */
const initEvent = ($prev, $next) => {
  $prev.off('click');
  $next.off('click');
};


/**
 * @description 해당 이미지의 파일을 찾아 스타일을 변경시키는 함수
 * @param currentImageIndex 현재 선택된 이미지의 번호
 */
const imagePagination = (currentImageIndex) => {
  const currentIndex = currentImageIndex;
  const href = window.location.href;
  const fileName = href.substring(href.lastIndexOf('/') + 1)
  const painter = fileName.split('.html')[0];
  const images = IMAGES[painter];

  changeButtonDisabled(currentIndex, images);
  changeContent(currentIndex, images);
};

/**
 * @description 작품 양에 따라 버튼의 유무를 결정하는 함수
 * @param currentIndex 현재 선택된 이미지의 번호
 */
const changeButtonDisabled = (currentIndex, images) => {
  const $prev = $('.e-detail__icon-prev-image');
  const $next = $('.e-detail__icon-next-image');

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== images.length -1;

  $prev.prop('disabled', !hasPrev);
  $next.prop('disabled', !hasNext);
}

const changeContent = (currentIndex, images) => {
  const $img = $('.e-detail__main-img');
  const $title = $('.e-detail__introduce-title');
  const $description = $('.detail__introduce-description');

  const content = images[currentIndex];

  $img.attr('src', `./../images/${content.fileName}`);
  $img.attr('alt', `./../images/${content.title}`);

  $title.text(content.title);
  $description.text(content.description);
}


const IMAGES = {
  'jung-jaechul': [
    {
      fileName: 'jjc-1.jpg',
      title: '〈3차 실크로드 프로젝트 루트맵 드로잉〉',
      description: '2010, 장지에 아크릴 물감, 먹, 210×304cm, 경기도미술관 소장품'
    }
  ],
  'min-jungki': [
    {
      fileName: 'mjk-1.jpg',
      title: '사람들의 연작',
      description: '내용 추가 필요'
    }
  ],
  'gong-sunghoon': [
    {
      fileName: 'ksh-1.jpg',
      title: '벽제의 밤 - 개',
      description: '내용 추가 필요'
    },
  ],
  'kim-jungheon': [
    {
      fileName: 'kjh-1.jpg',
      title: '무지개 공장',
      description: '내용 추가 필요'
    },
    {
      fileName: 'kjh-2.jpg',
      title: '분노하는 농부',
      description: '내용 추가 필요'
    },
    {
      fileName: 'kjh-3.jpg',
      title: '풍경 8',
      description: '내용 추가 필요'
    },
  ],
  'kim-kunhee': [
    {
      fileName: 'kkh-1.jpg',
      title: '〈얼얼덜덜〉',
      description: '1980, 종이에 실크스크린, 40.5×34.5cm, 경기도미술관 소장품'
    },
    {
      fileName: 'kkh-2.jpg',
      title: '〈얼얼덜덜〉',
      description: '1980(2010년 복원), 종이에 실크스크린, 61.5×55.5cm, 경기도미술관 소장품'
    },
  ]
};