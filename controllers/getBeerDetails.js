import { getBeer } from "../services/beerService.js";

export default async ({ params, response }) => {
  const beerId = params.id;

  if (!beerId) {
    response.status = 500;
    response.body = { msg: "Invalid beer id" };
    return;
  }

  const beerFounded = await getBeer(beerId);
  if (!beerFounded) {
    response.status = 404;
    response.body = { msg: `Beer with id ${beerId} was not found` };
    return;
  }

  response.body = beerFounded;
};
