export const getValidSubdomain = (host?: string | null) => {
  let subdomain: string | null = null;
  if (!host && typeof window !== 'undefined') {
    // On client side, get the host from window
    host = window.location.host;
  }

  console.log('host', host);
  if (host && host.includes('.')) {
    const candidate = host.split('.')[0];
    console.log('candidate', candidate);
    if (
      candidate &&
      !candidate.includes('localhost') &&
      !candidate.includes('index') &&
      !candidate.includes('data') &&
      !candidate.includes('mndorp') &&
      !candidate.includes('www')
    ) {
      // Valid candidate
      subdomain = candidate;
    }
  }
  return subdomain;
};
