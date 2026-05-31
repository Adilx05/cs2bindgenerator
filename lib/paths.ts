const basePath = process.env.NODE_ENV === 'production' ? '/cs2bindgenerator' : '';

export function asset(path: string) {
  return `${basePath}${path}`;
}
