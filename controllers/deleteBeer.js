import { deleteBeer, getBeer } from "../services/beerService.js";

export default async ({ params, response }) => {
  const beerId = params.id;

  if (!beerId) {
    response.status = 400;
    response.body = { msg: "Invalid beer id" };
    return;
  }

  const beerIdFounded = await getBeer(beerId);

  if (!beerIdFounded) {
    response.status = 404;
    response.body = { msg: `Beer with id ${beerId} not found` };
    return;
  }

  await deleteBeer(beerId);
  response.body = { msg: "Beer %d deleted ", beerId };
};
