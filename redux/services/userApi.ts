import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: [
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    }
  ];
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.BASE_URL}/`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User, null>({
      query: (page) => `users?page=${page}`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
