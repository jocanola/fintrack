import { useState, useMemo } from "react";
import type { Transaction } from "../types/dashboard";

type SortDirection = "asc" | "desc";
type SortField = keyof Transaction;

interface UseTransactionSearchProps {
  data: Transaction[];
  defaultSortField?: SortField;
  defaultSortDirection?: SortDirection;
  externalQuery?: string;
}

export function useTransactionSearch({
  data,
  defaultSortField = "date",
  defaultSortDirection = "desc",
  externalQuery,
}: UseTransactionSearchProps) {
  const [internalQuery, setInternalQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>(defaultSortField);
  const [sortDirection, setSortDirection] = useState<SortDirection>(defaultSortDirection);

  // Use external query if provided, otherwise use internal query
  const query = externalQuery !== undefined ? externalQuery : internalQuery;

  // Filter and sort data in one pass
  const processedData = useMemo(() => {
    // Filter data based on search query
    const filtered = query.trim()
      ? data.filter((transaction) => {
          const searchTerm = query.toLowerCase();
          return (
            transaction.remark.toLowerCase().includes(searchTerm) ||
            transaction.amount.toString().includes(searchTerm) ||
            transaction.currency.toLowerCase().includes(searchTerm) ||
            transaction.type.toLowerCase().includes(searchTerm) ||
            transaction.date.includes(searchTerm)
          );
        })
      : data;

    // Sort filtered data
    return [...filtered].sort((a, b) => {
      const getValue = (transaction: Transaction, field: SortField) => {
        const value = transaction[field];
        if (field === "amount") return Math.abs(Number(value));
        if (field === "date") return new Date(String(value)).getTime();
        return String(value).toLowerCase();
      };

      const aValue = getValue(a, sortField);
      const bValue = getValue(b, sortField);

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, query, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const clearSearch = () => setInternalQuery("");
  const setQuery = (newQuery: string) => setInternalQuery(newQuery);

  return {
    // Data
    transactions: processedData,
    
    // Search state
    query,
    setQuery: externalQuery !== undefined ? undefined : setQuery,
    clearSearch: externalQuery !== undefined ? undefined : clearSearch,
    hasActiveSearch: Boolean(query.trim()),
    
    // Sort state
    sortField,
    sortDirection,
    handleSort,
    
    // Stats
    totalResults: processedData.length,
    isFiltered: Boolean(query.trim()),
  };
}