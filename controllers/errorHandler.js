export default async ({ response }, next) => {
  try {
    await next();
  } catch (error) {
    response.status = 500;
    response.body = { msg: error.message };
  }
};
