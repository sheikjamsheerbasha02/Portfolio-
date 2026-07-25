/**
 * Optional Analytics Service
 * Supports Google Analytics 4, Plausible, and Microsoft Clarity
 */

export const initAnalytics = () => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (gaId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gaId);
  }

  if (plausibleDomain) {
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = plausibleDomain;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }

  if (clarityId) {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", clarityId);
  }
};

export const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
  if (window.plausible) {
    window.plausible(eventName, { props: params });
  }
};
