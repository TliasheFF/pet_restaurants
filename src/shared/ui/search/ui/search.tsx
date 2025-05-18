import { TextField } from "@mui/material";
import { useCallback, type ChangeEvent, type ReactElement } from "react";

interface SearchProps<T> {
  items?: T[];
  searchKey: keyof T;
  onSearch: (filteredItems: T[]) => void;
  isFullWidth?: boolean;
  label?: string;
}

type SearchComponent = <T>(props: SearchProps<T>) => ReactElement;

export const Search: SearchComponent = <T,>(props: SearchProps<T>) => {
  const { items, searchKey, onSearch, isFullWidth = false, label = "Поиск" } = props;

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.toLowerCase();
      const filtered = items?.filter((item) =>
        String(item[searchKey]).toLowerCase().includes(value)
      );
      onSearch(filtered || []);
    },
    [items, searchKey, onSearch]
  );

  return (
    <TextField
      onChange={handleSearch}
      variant="standard"
      fullWidth={isFullWidth}
      label={label}
      sx={{ marginY: 2 }}
    />
  );
};
