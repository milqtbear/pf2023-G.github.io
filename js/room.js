$(() => {
  T_Content();

  $('.e-room__item-btn-researcher').click((e) => {
    const $this = $(e.target);
    const name = $this.data('researcher');
    const $description = $(`.e-room__item-researcher-description[data-researcher=${name}]`)
    const applyHidden = $description.attr('aria-hidden') === 'true'

    $description.attr('aria-hidden', !applyHidden);
    $this.attr('aria-expanded', applyHidden);
  });
});

const T_Content = () => {
  const $items = $('.e-room__items');

  const itemTemplate = CONTENTS.map((item) => {
    return (
      `<li>
          <div class="room__item-header">
              <h2 class="room__item-painter">${item.painter}</h2>
              <div class="room__item-header-right">
                  ${T_StateBadge(item.dateRange)}
                  <span class="room__item-date-range">${dateRangeToString(item.dateRange)}</span>
              </div>
          </div>
          <div class="room__item-body">
              <div class="room__item-column">
                  <span class="room__item-time">${item.time}</span>
                  <span class="room__item-title">「${item.title}」</span>
              </div>
              <div class="room__item-column">                 
                  <span class="room__item-researcher-job">${item.researcher.job}</span>
                  <span class="room__item-researcher-name">${item.researcher.name}</span>
              </div>
          </div>
          <div class="room__item-btn-researcher-wrapper">
            <button type="button" class="room__item-btn-researcher e-room__item-btn-researcher" aria-expanded="false" aria-controls="researcher-description" data-researcher="${item.researcher.name}">
              <img src="./../icons/icon-chevron-left.svg" class="room__item-btn-researcher-icon e-room__item-btn-researcher-icon">
              연구자 정보 더보기
            </button>
          </div>
          <div class="room__item-researcher-description e-room__item-researcher-description" aria-hidden="true" aria-describedby="researcher-description" data-researcher="${item.researcher.name}">
            <div>
               ${item.researcher.job}
            </div>
            <div>
               ${item.researcher.description}
            </div>     
          </div>
      </li>`
    );
  });

  $items.html(itemTemplate);
};

/**
 * @description '예정', '진행 중', '종료'의 상태를 나타내는 badge 를 반환하는 함수
 * @param dateRange [Date, Date]
 */
const T_StateBadge = (dateRange) => {
  const today = new Date();
  const startDate = new Date(dateRange[0]);
  const endDate = new Date(dateRange[1]);

  const state = startDate > today ? 'expected' : endDate < today ? 'end' : 'ongoing';

  return `<div class="room__badge-state ${STATE[state].class}">${STATE[state].text}</div>`;
};


/**
 * @description ['2023-10-15', '2024-10-22'] -> '10월 15일 ~ 24년 10월 22일'로 변환시키는 함수
 * @param dateRange [Date, Date]
 */
const dateRangeToString = (dateRange) => {
  const currentDate = new Date();
  const startDate = new Date(dateRange[0]);
  const endDate = new Date(dateRange[1]);

  const startString = `${startDate.getMonth() + 1}월 ${startDate.getDay()}일`;

  const endYear = currentDate.getFullYear() === endDate.getFullYear() ? '' : `${endDate.getFullYear().toString().slice(2, 4)}년 `;
  const endString = `${endYear}${endDate.getMonth() + 1}월 ${endDate.getDay()}일`;

  return [startString, endString].join(' ~ ');
};

const STATE = {
  expected: {
    class: 'state-expected',
    text: '예정'
  },
  end: {
    class: 'state-end',
    text: '종료'
  },
  ongoing: {
    class: 'state-ongoing',
    text: '진행 중'
  }
};

const CONTENTS = [
  {
    painter: '정재철',
    dateRange: ['2023-09-19', '2023-10-30'],
    title: '꽃그늘 찾아가는 여행기',
    time: '9월 19일 14:30',
    researcher: {
      name: '이소요',
      job: '미술 작가',
      description: '이소요는 사람과 함께 해 온 생물의 문화사를 다루는 미술작가이다. 인간 활동으로 교란되는 환경에도 다양한 생태적 틈새와 삶의 가능성이 있다는 점에 주목하며, 작가가 직접 수행하는 현장 조사와 재료 실험을 주된 창작 과정으로 여긴다. 렌슬리어 공과대학에서 예술·과학사 학제간 연구로 박사학위를 받았고 경기도미술관, 국립현대미술관, 서울시립미술관, 백남준아트센터, 호주현대미술관 등에서 전시했다.'
    }
  },
  {
    painter: '민정기',
    dateRange: ['2023-10-31', '2023-12-04'],
    title: '키치문화와 당대를 표현하는 <br/> 민정기 판화의 사회성',
    time: '11월 1일 15:00',
    researcher: {
      name: '이혜현',
      job: '해당 전시기획자',
      description: '이혜현은 국문학과 미술이론을 공부했다. 경기도미술관에서 근무 중이며 최근 박물관과 미술관 소장품을 활용한 전시를 기획했다. 플럭서스와 페미니즘 아트 경계에서 규정된 미술사적 의미를 은유라는 방법론으로 연구하는 과정에 관심이 있다. 또한 문학적 용어를 방법론적으로 응용하여 현대미술 안에서 풀어내고자 노력한다.'
    }
  },
  {
    painter: '김건희',
    dateRange: ['2023-12-05', '2024-01-15'],
    title: '묻힌 시대상의 발굴- <br/> 김건희의 작업실 리서치와 인터뷰를 중심으로',
    time: '9월 19일 14:30',
    researcher: {
      name: '김소정',
      job: '월간미술 기자',
      description: '김소정은 학부에서 사학을 전공하고 이대 미술사학과에서 석사 학위를 받았다. 동시대 미술 현장에서 전시 기획자로 활동하다 미술품 유통이 첨예하게 이뤄지는 미술시장에서 갤러리스트로 일했다. 이후 미술계의 지원제도와 유통구조 개선에 기여하고자 예술경영지원센터에서 미술의 힘과 가치와 시장성을 선순환시킨는 지원사업들을 기획 운영했다. 현재는 월간 미술에서 기자로 재직하며 미술계 전반의 흐름을 기록, 취재, 연구하고있다.'
    }
  },
  {
    painter: '공성훈',
    dateRange: ['2024-01-16', '2024-02-19'],
    title: '설치에서 회화로, 대상에서 풍경으로',
    time: '1월 중',
    researcher: {
      name: '신지현',
      job: '독립기획자',
      description: '신지현은 전시 기획자로 뉴미디어 시대 안에서 전통적 매체의 지속가능성을 모색하는 것을 연구과제로 삼고 전시와 글을 통해 활동을 지속하고 있다. 《미니어처》(WESS, 서울, 2023), 《영원과 하루》(WESS, 서울, 2023), 《끝에서 두 번째 세계》(공동기획, 하이트컬렉션, 서울, 2022),《각》(공동기획, 하이트컬렉션, 서울, 2022), 《이곳에선 모든 게 자연스럽지 않으면 이상하다》(시청각 랩, 서울, 2022),《21세기 회화》(공동기획, 하이트컬렉션, 서울, 2021), 《10 Pictures》(WESS, 서울, 2020), 노은주 개인전 《Walking ― Aside》(스페이스윌링앤딜링, 서울, 2020), 전명은 개인전 《Floor》(세마창고, 서울, 2019), 《3×3： 그림과 조각》(시청각, 서울, 2018), 《Post-Pictures》(갤러리175, 서울, 2015) 등을 기획하였다.'
    }
  },
  {
    painter: '김정헌',
    dateRange: ['2024-02-20', '2024-03-24'],
    title: '1980년대 김정헌 작품의 다층적 재조명',
    time: '2월 중',
    researcher: {
      name: '조은솔',
      job: '경기도미술관 학예연구사',
      description: '조은솔은 대학에서는 미술사를 공부했다. 경기도미술관 학예연구사로 일하며 전시를 기획하고 아카이브를 구축한다. 기록을 기반으로 한 미술사 재정립에 관심을 가지고 연구를 이어가고 있다.'
    }
  }
];