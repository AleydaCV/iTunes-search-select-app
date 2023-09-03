import { getService } from "../services/getService";

export const getSearch = async <T>(search: string) => {
  const param = "search?term=" + search;
  const { res, error } = await getService<T>(param);
  return {
    res: res,
    error: error,
  };
};

export const getSearchFilter = async <T>(search: string, filter: string) => {
  const param = "search?term=" + search + "&entity=" + filter;
  
  const { res, error } = await getService<T>(param);
  return {
    res: res,
    error: error,
  };
};

export const getSearchFilterLimit = async <T>(
  search: string,
  filter: string,
  limit: string
) => {
  const param = "search?term=" + search + "&entity=" + filter + "&limit="+limit;
  console.log('param',param)
  const { res, error } = await getService<T>(param);
  return {
    res: res,
    error: error,
  };
};
