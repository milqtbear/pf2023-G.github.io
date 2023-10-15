$(() => {
  T_Content();


  // 추가 작성
});

const T_Content = () => {
  $items = $('.e-room__items');

  const itemTemplate = CONTENTS.map((item) => {
    return (
      `<li>
          <div>
              <h2 class="room__item-painter">${item.painter}</h2>
              <div>
                  ${T_StateBadge(item.dateRange)}
                  <span class="room__date-range">${dateRangeToString(item.dateRange)}</span>
              </div>
          </div>
          <div>
              <div>
                  <span class="room__item-time">${item.time}</span>
                  <span class="room__item-title">${item.title}</span>
              </div>
              <div>
                  <span class="room__item-researcher-name">${item.researcher.name}</span>
                  <span class="room__item-researcher-job">${item.researcher.job}</span>
              </div>
          </div>
          <button type="button">연구자 정보 더보기</button>
          <div class="room__item-researcher-description hidden" aria-hidden="true">${item.researcher.description}</div>
      </li>`
    );
  });

  $items.html(itemTemplate);
}

const T_StateBadge = (dateRange) => {
  const today = new Date();
  const startDate = new Date(dateRange[0]);
  const endDate = new Date(dateRange[1]);

  const state = startDate > today ? 'expected' : endDate < today ? 'end' : 'ongoing';

  return `<div class="room__badge-state ${STATE[state].class}">${STATE[state].text}</div>`
}

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
}


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
}

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
    dateRange: ['2023-09-19', '2024-10-30'],
    title: '꽃그늘 찾아가는 여행기',
    time: '9월 19일 14:30',
    researcher: {
      name: '이소요',
      job: '미술 작가',
      description: '이소요는 사람과 함께 해 온 생물의 문화사를 다루는 미술작가이다. 인간 활동으로 교란되는 환경에도 다양한 생태적 틈새와 삶의 가능성이 있다는 점에 주목하며, 작가가 직접 수행하는 현장 조사와 재료 실험을 주된 창작 과정으로 여긴다. 렌슬리어 공과대학에서 예술·과학사 학제간 연구로 박사학위를 받았고 경기도미술관, 국립현대미술관, 서울시립미술관, 백남준아트센터, 호주현대미술관 등에서 전시했다.'
    }
  },
  {
    painter: '김건희',
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
    painter: '공성훈',
    dateRange: ['2023-08-19', '2023-09-30'],
    title: '꽃그늘 찾아가는 여행기',
    time: '9월 19일 14:30',
    researcher: {
      name: '이소요',
      job: '미술 작가',
      description: '이소요는 사람과 함께 해 온 생물의 문화사를 다루는 미술작가이다. 인간 활동으로 교란되는 환경에도 다양한 생태적 틈새와 삶의 가능성이 있다는 점에 주목하며, 작가가 직접 수행하는 현장 조사와 재료 실험을 주된 창작 과정으로 여긴다. 렌슬리어 공과대학에서 예술·과학사 학제간 연구로 박사학위를 받았고 경기도미술관, 국립현대미술관, 서울시립미술관, 백남준아트센터, 호주현대미술관 등에서 전시했다.'
    }
  },
  {
    painter: '김정헌',
    dateRange: ['2023-12-19', '2023-10-30'],
    title: '꽃그늘 찾아가는 여행기',
    time: '9월 19일 14:30',
    researcher: {
      name: '이소요',
      job: '미술 작가',
      description: '이소요는 사람과 함께 해 온 생물의 문화사를 다루는 미술작가이다. 인간 활동으로 교란되는 환경에도 다양한 생태적 틈새와 삶의 가능성이 있다는 점에 주목하며, 작가가 직접 수행하는 현장 조사와 재료 실험을 주된 창작 과정으로 여긴다. 렌슬리어 공과대학에서 예술·과학사 학제간 연구로 박사학위를 받았고 경기도미술관, 국립현대미술관, 서울시립미술관, 백남준아트센터, 호주현대미술관 등에서 전시했다.'
    }
  }
]