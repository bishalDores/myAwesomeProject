"use client";

import React, { useCallback } from "react";
import PaginatedButton from "./PaginatedButton";
import { DoubleArrowLeft, DoubleArrowRight, NextIcon, PreviousIcon } from "./SVGs";

const Pagination = ({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}: {
  gotoPage: (arg: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
}) => {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 5;
    let numberOfButtons = pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];

    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;

      if (pageNumberBefore >= 0 && (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });

    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <PaginatedButton content={pageIndexToMap + 1} onClick={() => gotoPage(pageIndexToMap)} active={pageIndex === pageIndexToMap} />
      </li>
    ));
  }, [pageCount, pageIndex]);

  return (
    <ul className="flex gap-[10px]">
      <li>
        <PaginatedButton
          content={
            <div className="flex ml-1">
              <DoubleArrowLeft />
            </div>
          }
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
      </li>
      <li>
        <PaginatedButton
          content={
            <div className="flex ml-1">
              <PreviousIcon />
            </div>
          }
          onClick={() => gotoPage(pageIndex - 1)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <PaginatedButton
          content={
            <div className="flex ml-1">
              <NextIcon />
            </div>
          }
          onClick={() => gotoPage(pageIndex + 1)}
          disabled={!canNextPage}
        />
      </li>
      <li>
        <PaginatedButton
          content={
            <div className="flex ml-1">
              <DoubleArrowRight />
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
};

export default Pagination;
