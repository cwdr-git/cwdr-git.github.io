import { defineConfig } from 'astro/config';


const repository =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

const owner =
  process.env.GITHUB_REPOSITORY_OWNER ?? 'cwdr-git';

const isUserSite =
  repository === `${owner}.github.io`;

const base =
  process.env.BASE_PATH ??
  (repository && !isUserSite ? `/${repository}` : '/');

const site =
  process.env.SITE_URL ??
  `https://${owner}.github.io`;

export default defineConfig({
  site,
  base,

  output: 'static',
  trailingSlash: 'always',

  build: {
    format: 'directory'
  }
});