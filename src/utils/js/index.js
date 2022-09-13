export const setCookie = (cookieName, cookieValue, exDay) => {
  const now = new Date();
  now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
};

export const getCookie = cookieName => {
  let cookiesArray = document.cookie.split(';');
  let mainCookie = null;
  cookiesArray.some(cookie => {
    if (cookie.includes(cookieName)) {
      mainCookie = cookie.substring(cookie.indexOf('=') + 1);
      return true;
    }
  });
  return mainCookie;
};

export const removeCookie = (cookieName, exDay) => {
  const now = new Date();
  now.setTime(now.getTime() - exDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=;path=/;expires=${now}`;
};
