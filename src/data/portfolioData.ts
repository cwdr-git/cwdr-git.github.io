export type ProjectCategory =
  | 'BGA / PV'
  | 'Motion Graphics'
  | 'Event / Design'
  | 'Work experience';

export type ProjectSection = 'works' | 'mads';

export type ContentLanguage = 'ko' | 'ja' | 'en';

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  year?: string;

  section?: ProjectSection;

  category: ProjectCategory;
  thumbnail: string;
  featured: boolean;
  summary: string;
  overview: string[];
  roles: string[];
  tools: string[];
  videoUrl?: string;
  externalUrl?: string;
  credits?: string[];
  process?: string[];
}

export const site = {
  brand: '斗湖',
  brandMark: '斗湖',
  brandName: 'CROWNSHREDDER',

  personName: '김두호',
  role: 'Motion Designer',
  descriptor: 'BGA · PV · Motion Graphics · Visual Identity',
  heroBanner: '/images/hero-banner.png',
  profileImage: '/images/profile-image.png',
  email: 'eternitykim98@gmail.com',
  social: {
    youtube: 'https://www.youtube.com/@crownshredder5389',
    x: 'https://x.com/TangenT_boy',
    discord: 'https://discordapp.com/users/_tangent0827',
    vimeo: 'https://vimeo.com/crownshredder'
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Works', href: '/works/' },
    { label: 'About / Experience', href: '/about/' },
    { label: 'Contact', href: '/contact/' }
  ]
};

export const capabilities = [
  'Motion Graphics',
  'BGA / PV',
  'Logo & Visual Identity',
  'Event Design'
];

export const tools = [
  'Adobe After Effects',
  'Blender',
  'Adobe Illustrator',
  'Adobe Photoshop'
];

export type ExperienceItem = {
  period: string;
  title: string;
  description: string;
  href?: string;
};

export const experience = [
  {
    period: '2022 —',
    title: '개인 활동',
    description:
      'BGA, PV, 로고, 포스터, 이벤트 비주얼을 중심으로 개인 작업과 협업을 이어가고 있습니다.'
  },
  {
    period: '2021.10 — 2022.11',
    title: '마리북스',
    href: 'https://www.youtube.com/channel/UCslbF6JPnKhxHp5Q8wmAcWQ',
    description:
      '프로모션 영상과 도서 자료 영상화를 담당하고, 제작 영상 및 학습 자료의 YouTube 업로드와 관리를 수행했습니다.'
  },
  {
    period: '2021.02 — 2021.08',
    title: '스튜디오 비주얼캐스트',
    href: 'https://www.instagram.com/studio_visualcast/',
    description:
      '정부·기업 소개 영상과 방송 그래픽을 제작했으며, 6월부터 생방송 인터페이스와 송출 관리에도 참여했습니다.'
  }
];

export const projects: Project[] = [
  {
    slug: 'bof21-bga-collection',
    title: 'BOF21 - Team "デジタルの窓" BGA Works',
    subtitle: '操リ人形ノ舞ニ意味ハ有ルカ · Awakening Pulse · Sudden Encounter',
    year: '2025',
    category: 'BGA / PV',
    thumbnail: '/images/projects/bof21.webp',
    featured: true,
    summary: 'THE BMS OF FIGHTERS 21 -GO BACK 2 YOUR ROOTS-',
    overview: [
      '음악 게임 BGA 제작에 도전하기 위해 “BOF21”에 제출한 세 작품입니다.',
      '프로젝트 내부 인원들의 노래를 받아 각 곡에 맞는 영상을 제작했으며, 각 곡이 주는 이미지를 영상으로 표현하기 위한 구상과 작업을 담당했습니다.'
    ],
    roles: ['Concept', 'Motion Design', '3D Design', 'Editing'],
    tools: ['Adobe After Effects', 'Blender'],
    videoUrl: 'https://vimeo.com/1215937969',
    externalUrl: 'https://manbow.nothing.sh/event/event_teamprofile.cgi?event=149&team=99',
    credits: [
      '操リ人形ノ舞ニ意味ハ有ルカ — https://youtu.be/dculW9lq5Kc',
      'Awakening Pulse — https://youtu.be/UA7ZTSeJXb0',
      'Sudden Encounter — https://youtu.be/839BVvgRguE'
    ]
  },
  {
    slug: 'killzone',
    title: 'K1LLZ0NE',
    year: '2024',
    category: 'BGA / PV',
    thumbnail: '/images/projects/killzone.jpg',
    featured: true,
    summary: '自称無名BMS作家が物申す!2024',
    overview: [
      '이전부터 제작해 보고 싶었던 음악 게임 수록곡의 BGA 제작에 도전하기 위해 “무명전 2024”에 제출한 작품입니다.',
      '중세 시대를 연상시키는 분위기의 사운드에 맞춰 클래식한 디자인의 오브젝트를 배치했으며, 곡 제목인 “KILLZONE”을 표현하기 위해 공간감을 중점적으로 고려했습니다.'
    ],
    roles: ['Concept', 'Motion Design', 'Editing'],
    tools: ['Adobe After Effects', 'Blender'],
    videoUrl: 'https://vimeo.com/1124246251',
  },
  {
    slug: 'sorimad-festival',
    title: '소리MAD 가요제',
    subtitle: '12 Team Logos & Introduction PVs',
    year: '2024',
    category: 'Motion Graphics',
    thumbnail: '/images/projects/sorimad.jpg',
    featured: true,
    summary: '2024 소리MAD 가요제',
    overview: [
      '2024년에 기획된 이벤트 “소리MAD 가요제”에서 총 12팀의 로고 및 팀 소개 PV를 제작했습니다.',
      '각 팀 이름에서 유래한 단어나 멤버들이 직접 이야기한 개성을 반영해 로고를 디자인했습니다. 12팀이 동일한 구도를 사용할 것을 전제로 PV를 기획하고, 6주 동안 매주 2팀씩 소개 영상을 업로드하는 일정을 설정했습니다.',
      '효율적인 진행을 위해 제작 프로세스를 세분화하고, 3D 툴의 렌더링 시간을 고려한 스케줄 조정과 업로드를 담당했습니다.'
    ],
    roles: ['Logo Design', 'Motion Design', 'Schedule Management', 'Upload Direction'],
    tools: ['Adobe After Effects', 'Blender', 'Adobe Illustrator'],
    videoUrl: 'https://vimeo.com/1215940013',
    externalUrl: 'https://www.youtube.com/@SoriMADFestival'
  },
  {
    slug: 'our-ks',
    title: 'OUR_KS',
    year: '2025',
    category: 'Event / Design',
    thumbnail: '/images/projects/our-ks.webp',
    featured: false,
    summary: 'OUR_KS',
    overview: [
      '2025년 9월 13일에 개최된 이벤트의 포스터를 제작했습니다.',
      '이벤트의 음악 장르에 어울리는 비주얼을 반영하고, 행사의 세부사항과 전체적인 디자인을 담당했습니다. 장르의 분위기를 시각적으로 강조할 수 있도록 색감과 레이아웃을 조정했습니다.'
    ],
    roles: ['Poster Design', 'Event Visual Design', 'Layout'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    externalUrl: 'https://x.com/our_ks_event'
  },
  {
    slug: 'sorimix',
    title: 'SORIMIX',
    year: '2024',
    category: 'Event / Design',
    thumbnail: '/images/projects/sorimix.webp',
    featured: false,
    summary: '소리믹스',
    overview: [
      '한국의 오프라인 인터넷 밈 DJ 이벤트 “SORIMIX”에 이벤트 스태프 및 퍼포머로 참여하여 이벤트 진행을 담당했습니다.',
      '기획 초기 단계부터 디자인 및 이벤트 콘셉트에 대한 적극적인 의견 교환을 진행했으며, 세부적인 요소까지 신경 쓰며 완성도를 높이는 제안을 통해 중요한 역할을 수행했습니다.'
    ],
    roles: ['Event Planning', 'Visual Direction', 'Poster Design', 'Performance'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects'],
    externalUrl: 'https://x.com/sorimix_'
  },
  {
    slug: 'sorimix2',
    title: 'SORIMIX 2',
    subtitle: 'Teaser PV',
    year: '2026',
    category: 'Motion Graphics',
    thumbnail: '/images/projects/sorimix2.jpg',
    featured: true,
    summary: '소리믹스 2',
    overview: [
      '한국의 오프라인 인터넷 밈 DJ 이벤트 “소리믹스 2”에 티저 PV 제작으로 참여했습니다.',
      '두 번째로 열리는 행사에 맞는 PV를 기획하고, 기간 내로 소개 영상을 업로드하는 일정을 설정했습니다.',
      '효율적인 진행을 위해 제작 프로세스를 세분화하고, 3D 툴의 렌더링 시간을 고려한 스케줄 조정과 음향 작업자와의 협업 조율을 담당했습니다.'
    ],
    roles: ['Logo Design', 'Motion Design', 'Schedule Management', 'Upload Direction'],
    tools: ['Adobe After Effects', 'Blender', 'Adobe Illustrator'],
    videoUrl: 'https://vimeo.com/1215939041',
    externalUrl: 'https://x.com/sorimix_'
  },
  {
    slug: 'studio_visualcast',
    title: 'Studio Visualcast',
    subtitle: 'Work Experience',
    year: '2021',
    category: 'Work Experience',
    thumbnail: '/images/projects/studio_visualcast.jpg',
    featured: false,
    summary: '스튜디오 비주얼캐스트',
    overview: [
      '모션 그래픽 담당으로 정부 부처 스타트업 콘테스트 영상, 프린터 기업 OKI의 신제품 소개 영상, 드론 기업 NEARTHLAB의 기업 소개 영상 등을 제작했습니다.',
      '실시간 스트리밍 방송 양식 관리도 담당하여, 작업하였습니다.'
    ],
    roles: ['Motion Graphics', 'Broadcast Graphics', 'Editing', 'Content Management'],
    tools: ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Photoshop'],
    externalUrl: 'https://www.instagram.com/studio_visualcast/'
  },
  {
    slug: 'maribooks',
    title: 'Maribooks',
    subtitle: 'Work Experience',
    year: '2021 — 2022',
    category: 'Work Experience',
    thumbnail: '/images/projects/maribooks.webp',
    featured: false,
    summary: '마리북스',
    overview: [
      '출판사의 영상 담당으로 근무하며 프로모션 영상과 도서 자료 영상화를 수행하고, 제작 자료를 정리해 YouTube 채널에 업로드하고 관리했습니다.',
      '기업 소개, 제품 영상, 도서 관련 영상 편집, 출판 프로모션 영상을 담당하고, 제작하였습니다.'
    ],
    roles: ['Motion Graphics', 'Broadcast Graphics', 'Editing', 'Content Management'],
    tools: ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Photoshop'],
    externalUrl: 'https://www.youtube.com/@maribooks8491'
  },  
  {
    slug: 'apollo',
    title: '" 𝑨 𝒑 𝒐 𝒍 𝒍 ♂ "',
    year: '2022 — 2023',
    section: 'mads',
    featured: true,
    category: 'MADs',
    thumbnail: '/images/projects/apollo.jpg',
    summary: '"𝑨 𝒑 𝒐 𝒍 𝒍 ♂"',
    overview: [
      'sasakure.UK의 작품 “Apollo” 영상을 참고하여 재구성한 소리MAD입니다.',
      '원본 영상이 가진 분위기를 유지하면서도 다루고 싶은 밈 요소를 자연스럽게 녹여내는 방법을 고민했고, 효과와 3D 툴을 조사해 다양한 연출 기법을 적용했습니다.'
    ],
    roles: ['MAD'],
    tools: ['Adobe After Effects', 'Blender'],
    videoUrl: 'https://www.youtube.com/watch?v=gvJB-XVjU_8'
  }
];

export const filterCategories = [
  'All',
  'BGA / PV',
  'Motion Graphics',
  'Event / Design',
  'Work Experience'
] as const;
