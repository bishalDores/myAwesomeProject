"use client";
import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import Image from "next/image";
import { ActionIcon } from "../SVGs";
import Pagination from "../Pagination";
import { useGetUsersQuery } from "@/redux/services/userApi";
import Loader from "../Loader";

const DashboardUsersPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageCount = 10;

  // @ts-ignore
  const { isLoading, isFetching, data, error } = useGetUsersQuery(pageIndex + 1);

  const fetchNextPage = (page: number) => {
    setPageIndex(page);
  };

  return (
    <DashboardLayout>
      <div>
        <h2 className="text-[#323B4B] text-[23px] font-semibold mb-[42px]">Users List</h2>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden">
            {isLoading ? (
              <>
                <Loader />
              </>
            ) : (
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 pt-[15px] pb-[14px] w-[10%] text-center bg-[#FAFBFC]  text-[12px] font-semibold text-[#4E5D78] uppercase rounded-tl-[12px] rounded-bl-[12px]">
                      #id
                    </th>
                    <th className="px-5 pt-[15px] pb-[14px]  bg-[#FAFBFC] text-left text-[12px] font-semibold text-[#4E5D78] uppercase">user</th>
                    <th className="px-5 pt-[15px] pb-[14px]  bg-[#FAFBFC] text-left text-[12px] font-semibold text-[#4E5D78] uppercase">email</th>
                    <th className="px-5 pt-[15px] pb-[14px] w-[10%] bg-[#FAFBFC] text-left text-[12px] font-semibold text-[#4E5D78] uppercase">
                      options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((item: { id: number; email: string; first_name: string; last_name: string; avatar: string }, id: number) => {
                    return (
                      <tr key={item.id}>
                        <td className="px-5 py-5 bg-white text-[#4E5D78] text-[14px] font-semibold text-center">{item.id}</td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 ">
                              <Image src={item.avatar} className="rounded-[15px]" width={60} height={60} alt={"user image"} />
                            </div>
                            <div className="ml-3">
                              <p className="text-[#4E5D78] text-[14px] font-semibold whitespace-no-wrap">
                                {item.first_name} {item.last_name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-[#4E5D78] text-[14px] font-semibold">{item.email}</p>
                        </td>
                        <td className="px-5 py-5  bg-white text-sm">
                          <div className="px-4 cursor-pointer">
                            <ActionIcon />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="mt-[47px]">
          <Pagination
            gotoPage={fetchNextPage}
            canPreviousPage={pageIndex > 0}
            canNextPage={pageIndex < pageCount - 1}
            pageCount={data?.total_pages || 0}
            pageIndex={pageIndex}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardUsersPage;
