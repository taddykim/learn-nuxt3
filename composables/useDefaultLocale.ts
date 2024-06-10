export const useDefaultLocale = (fallback = 'en') => {
  const locale = ref(fallback);

  if (process.server) {
    // const reqLocale = useRequestHeader()['accept-language'];
    const reqLocale = useRequestHeader('accept-language')
      ?.split(';')[0]
      .split(',')[1];
    const reqLocale2 = useRequestHeaders()['accept-language'];
    const reqAgent = useRequestHeader('User-Agent');
    const headers = useRequestHeaders();
    const reqcookie = useRequestHeaders(['cookie']);
    // console.log('reqLocale: ', reqLocale);
    console.log('reqAgent: ', reqAgent);
    console.log('headers: ', headers);
    console.log('reqcookie: ', reqcookie);
    console.log('reqLocale2: ', reqLocale2);
    if (reqLocale) {
      locale.value = reqLocale;
    }
  } else if (process.client) {
    locale.value = navigator.language.split('-')[0];
  }

  return locale;
};
