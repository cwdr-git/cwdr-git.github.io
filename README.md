# 斗湖 Portfolio — Astro


## 포함된 페이지

- `/` — Home
- `/works/` — Selected Works + 카테고리 필터
- `/works/[slug]/` — 재사용형 Project Detail
- `/works/project-template/` — 상세 페이지 구조 예시
- `/about/` — About / Experience
- `/contact/` — Contact
- `/404/` — 404 페이지

### 사이트 문구·이메일·작품 정보

`src/data/portfolioData.ts`

### 이미지 교체

`public/images/`

- `hero-banner.png` — Home 상단 배너
- `profile-image.png` — About 프로필 이미지
- `projects/` — 작품 썸네일

## 로컬 실행

사이트 제작자가 AI를 활용해 만들어, 차후 수정 코드를 까먹을수 있어 작성

```bash
npm install
npm run dev
```

정적 빌드 테스트:

```bash
npm run build
npm run preview
```

## 개인 도메인

1. `public/CNAME` 파일을 만들고 도메인 입력
2. `astro.config.mjs`의 기본 `site` 값을 도메인으로 바꾸거나, 빌드 환경변수 `SITE_URL`을 설정
3. DNS를 GitHub Pages 안내에 맞게 연결

## Project 추가 예시

`src/data/portfolioData.ts`의 `projects` 배열에 항목을 추가

```ts
{
  slug: 'new-project',
  title: 'New Project',
  year: '2026',
  category: 'Motion Graphics',
  thumbnail: '/images/projects/new-project.webp',
  featured: false,
  summary: '목록과 상세 상단에 표시할 짧은 설명',
  overview: [
    '프로젝트 배경과 목표',
    '접근 방식과 결과'
  ],
  roles: ['Motion Design', 'Editing'],
  tools: ['Adobe After Effects'],
  videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID'
}
```

그리고 썸네일 추가

```text
public/images/projects/new-project.webp
```

## 디자인 수정

`src/styles/global.css`

```css
:root {
  --bg: #080a0b;
  --panel: #121619;
  --text: #f2f4f4;
  --muted: #9ba4a9;
  --accent: #56d7f5;
  --max: 1380px;
}
```
