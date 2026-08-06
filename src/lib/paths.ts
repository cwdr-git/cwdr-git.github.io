const normalizedBase = import.meta.env.BASE_URL === '/'
  ? ''
  : import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path = '/') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${cleanPath}` || '/';
}

export function assetPath(path: string) {
  return withBase(path);
}
