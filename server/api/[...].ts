export default defineEventHandler((event) => {
  console.log(event.context.params?._);
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found!',
  });
});
