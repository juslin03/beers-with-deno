import beerRepo from "../repositories/beerRepo.js";

// get all beers
export const getBeers = async () => {
    const beers = await beerRepo.selectAll();

    var result = new Array();

    beers.rows.map(beer => {
        var obj = new Object();

        beers.rowDescription.column.map((el, i) => {
            obj[el.name] = beer[i];
        });
        result.push(obj);
    });

    return result;
}


// recup un element du tableau
export const getBeer = async beerId => {
    const beers = await beerRepo.selectById(beerId);

    var obj = new Object();

    beers.rows.map(beer => {
        beers.rowDescription.column.map((el, i) => {
            obj[el.name] = beer[i];
        });
    });

    return obj;
}


// creer un element
export const createBeer = async(beerData) => {
    const newBeer = {
        name: String(beerData.name),
        brand: String(beerData.brand),
        is_premium: 'in_premium' in beerData ? Boolean(beerData.is_premium) : false,
        registration_date: new Date()
    }

    await beerRepo.create(newBeer);

    return newBeer.id;
}

// mise a jour
export const updateBeer = async(beerId, beerData) => {
    const beer = await getBeer(beerId);

    if (Object.key(beer).length === 0 && beer.constructor === object) {
        throw new Error("Sorry! Beer not found !");
    }

    const updateBeer = {
        name: beerData.name !== undefined ? String(beerData.name) : beer.name,
        brand: beerData.brand !== undefined ? String(beerData.brand) : beer.brand,
        is_premium: beerData.is_premium !== undefined ? Boolean(beerData.is_premium): beer.is_premium
    }

    beerRepo.update(beerId, updateBeer);
};

export const deleteBeer = async (beerId) => {
    beerRepo.delete(beerId);
}