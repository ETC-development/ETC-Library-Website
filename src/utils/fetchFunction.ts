import { FetchFunction, SearchResponse } from "../interfaces/interfaces.index";

const URL = "http://localhost:3001";

const fetchFunction: FetchFunction = async (filters) => {
    const { name = "", module, year, type, page, limit } = filters;

    try {
        const res = await fetch(
            `${URL}/search/?name=${name}&type=${type}&module=${module}&year=${year}&page=${page}&limit=${limit}`
        );

        const data: SearchResponse = await res.json();

        if (res.status === 200) {
            return { data };
        } else if (res.status === 400) {
            return { errorMsg: data.error };
            //We couldn't find any files with the provided information. Please try using filters to find what you're looking for
        } else {
            return { errorMsg: "Unknown error has occurred !" };
        }
    } catch (e) {
        console.log(e);
        return { errorMsg: "Unknown error has occurred !" };
    }
};

export default fetchFunction;