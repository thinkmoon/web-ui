(function() {
  if (!location.href.startsWith('https://www.thinkmoon.cn')) {
    return;
  }
  const done = false;
  const script = document.createElement('script');
  script.async = true;
  script.type = 'text/javascript';
  script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3208634444966567';

  window.onload = function() {
    document.getElementsByTagName('HEAD').item(0).appendChild(script);
  };

  script.onreadystatechange = script.onload = function(e) {
    if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  };
})();
