import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getValidSubdomain } from './utils/subdomain';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

  if (
    (url.href.includes('localhost') && url.href.includes('/api/')) ||
    url.href.includes('mndorp.nl/api/')
  ) {
    return;
  }
  const host = req.headers.get('host');
  const subdomain = getValidSubdomain(host);

  if (subdomain) {
    console.log(`Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
