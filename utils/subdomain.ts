export const getValidSubdomain = (host?: string | null) => {
  let subdomain: string | null = null;
  if (!host && typeof window !== 'undefined') {
    // On client side, get the host from window
    host = window.location.host;
  }

  if (host && host.includes('.')) {
    const candidate = host.split('.')[0];
    const allowedDomains = ['localhost', 'index', 'data', 'mndorp', 'www'];

    if (candidate && !allowedDomains.includes(candidate)) {
      // Valid candidate
      subdomain = candidate;
    }
  }
  return subdomain;
};
