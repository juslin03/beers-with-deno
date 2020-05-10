import { createBeer } from "../services/beerService.js";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: `Invalid beer data` };
    return;
  }

  const {
    value: { name, brand, is_premium },
  } = await request.body();
  if (!name || !brand) {
    response.status = 422;
    response.body = { msg: "Incorrect beer data, name or brand is required" };
    return;
  }

  const beerId = await createBeer({ name, brand, is_premium });
  response.body = { msg: 'Beer number %d created!', beerId }
};
