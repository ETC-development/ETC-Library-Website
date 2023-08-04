import { FetchFunction, SearchResponse } from "../interfaces/interfaces.index";

const URL =
    process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_SERVER_URL_PROD || ""
        : process.env.NEXT_PUBLIC_SERVER_URL_DEV || "";

const fetchFunction: FetchFunction = async (filters) => {
    filters = Object.fromEntries(
        Object.entries(filters).map(([key, value]) => [key, encodeURIComponent(value)])
    );

    const { name = "", module, year, type, page, limit } = filters;

    try {
        const res = await fetch(
            `${URL}/search/?name=${name}&type=${type}&module=${module}&year=${year}&page=${page}&limit=${limit}`
        );

        const data: SearchResponse = await res.json();

        if (res.status === 200) {
            return { data, status: res.status };
        } else if (res.status === 400) {
            return { errorMsg: data.error, status: res.status };
            //We couldn't find any files with the provided information. Please try using filters to find what you're looking for
        } else {
            return { errorMsg: "Unknown error has occurred !", status: res.status };
        }
    } catch (e) {
        console.log(e);
        return { errorMsg: "Unknown error has occurred !" };
    }
};

export default fetchFunction;
