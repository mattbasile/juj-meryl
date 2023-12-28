import list from './list.json';

export const checkInviteList = (name) => {
  if (Object.values(list.friday).includes(name.toLowerCase())) {
    setUserTypeCookie('VIP');
    return {
      message: 'VIP',
      status: 200,
    };
  } else if (Object.values(list.everyone).includes(name.toLowerCase())) {
    setUserTypeCookie('NIP');
    return {
      message: 'NIP',
      status: 200,
    };
  } else {
    return {
      message: 'GTFO',
      status: 401,
    };
  }
};

export const setUserTypeCookie = (userType) => {
  const daysToExpire = 60; // Cookie will expire in 60 days
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();

  document.cookie = 'userType=' + userType + ';' + expires + ';path=/';
};

export const getUserTypeCookie = () => {
  const name = 'userType=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
