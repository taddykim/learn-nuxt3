// import { getUserFromEvent } from '@/server/utils/auth';

export default defineEventHandler((event) => {
  // const user = getUserFromEvent(event);
  const user = event.context.user;
  // const userJsonString = getCookie(event, '__user');

  // console.log('userJsonString', userJsonString);

  // if (!userJsonString) {
  //   return { user: null };
  // }

  // const user = JSON.parse(userJsonString);

  if (!user) {
    return { user: null };
  }

  return { user };
});
