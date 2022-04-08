import isFrontendEnvironment from '../isFrontendEnvironment';

export default function getScrollTop() {
  if (isFrontendEnvironment()) return window.pageYOffset || document.documentElement.scrollTop;
}
