export const checkIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 960; // Bootstrap md breakpoint
};