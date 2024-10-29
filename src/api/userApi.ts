import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserDetail, UserLogin } from "@/api/types.ts";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: build => ({
    doLogin: build.query<UserDetail, UserLogin>({
      query: (user) => `/user?email=${user.email}&pwd=${user.password}`
    })
  })
});
