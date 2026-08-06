# CROWNSHREDDER Portfolio — Astro

ChatGPT Sites에서 확정한 방향을 바탕으로 다시 구성한 **독립형 Astro 정적 포트폴리오**입니다.
GitHub Pages에서 무료로 배포할 수 있고, 중요한 텍스트·이미지·작품 정보는 한 데이터 파일에서 수정하도록 구성했습니다.

## 포함된 페이지

- `/` — Home
- `/works/` — Selected Works + 카테고리 필터
- `/works/[slug]/` — 재사용형 Project Detail
- `/works/project-template/` — 상세 페이지 구조 예시
- `/about/` — About / Experience
- `/contact/` — Contact
- `/404/` — 404 페이지

## 가장 자주 수정할 파일

### 사이트 문구·이메일·작품 정보

`src/data/portfolioData.ts`

여기에서 다음 내용을 바꿀 수 있습니다.

- 브랜드명과 이름
- 소개 문구
- 이메일 및 SNS 주소
- 경력
- 프로젝트 제목·연도·분류
- 썸네일 경로
- YouTube 주소
- 상세 설명·역할·도구·크레딧
- Home에 표시할 대표작 (`featured: true`)

### 이미지 교체

`public/images/`

- `hero-banner.png` — Home 상단 배너
- `profile-image.png` — About 프로필 이미지
- `projects/` — 작품 썸네일

같은 파일명으로 덮어쓰면 코드 수정 없이 교체됩니다.

## 로컬 실행

Node.js 24 이상을 권장합니다.

```bash
npm install
npm run dev
```

브라우저에서 터미널에 표시되는 주소를 엽니다.

정적 빌드 테스트:

```bash
npm run build
npm run preview
```

## GitHub Pages 배포

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더의 파일 전체를 저장소에 올립니다.
3. 기본 브랜치 이름을 `main`으로 사용합니다.
4. 저장소의 `Settings → Pages → Build and deployment → Source`를 **GitHub Actions**로 지정합니다.
5. `main`에 push하면 `.github/workflows/deploy.yml`이 자동으로 사이트를 빌드하고 배포합니다.

프로젝트 저장소 주소는 보통 다음 형태입니다.

```text
https://USERNAME.github.io/REPOSITORY/
```

`astro.config.mjs`가 GitHub Actions의 저장소 이름을 읽어 `base` 경로를 자동 설정합니다.

### 사용자 사이트 저장소

저장소 이름을 `USERNAME.github.io`로 만들면 주소가 다음처럼 짧아집니다.

```text
https://USERNAME.github.io/
```

## 개인 도메인

개인 도메인을 사용할 때는:

1. `public/CNAME` 파일을 만들고 도메인 한 줄을 입력합니다.
2. `astro.config.mjs`의 기본 `site` 값을 도메인으로 바꾸거나, 빌드 환경변수 `SITE_URL`을 설정합니다.
3. DNS를 GitHub Pages 안내에 맞게 연결합니다.

## Project 추가 예시

`src/data/portfolioData.ts`의 `projects` 배열에 다음 형태로 항목을 추가합니다.

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

그리고 썸네일을 아래 경로에 넣습니다.

```text
public/images/projects/new-project.webp
```

## 디자인 수정

전체 색상, 간격, 반응형 설정은 다음 파일에 있습니다.

`src/styles/global.css`

상단의 CSS 변수만 바꿔도 전체 인상이 바뀝니다.

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

## 오프라인 시각 미리보기

`preview/self-contained.html`은 이미지와 CSS를 한 파일에 포함한 Home 시각 미리보기입니다.
Astro를 설치하지 않은 상태에서도 파일을 브라우저로 열어 대략적인 화면을 확인할 수 있습니다.

`preview/home-desktop.png`, `preview/home-mobile.png`에는 제작 시점의 데스크톱·모바일 화면이 저장되어 있습니다.

## 참고

- 프로젝트 썸네일은 제공된 포트폴리오 PDF의 작업 이미지에서 임시로 추출했습니다.
- 원본 해상도 이미지나 영상 썸네일로 교체하면 품질이 더 좋아집니다.
- 미확정 SNS 주소와 일부 날짜는 데이터 파일에서 비워두거나 출처에 있는 범위만 사용했습니다.
