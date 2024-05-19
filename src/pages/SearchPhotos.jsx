import React from "react";
import unsplashApi from "../utils/api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MasonaryGrid from "../components/MasonaryGrid";

function SearchPhotos() {
  let { query } = useParams();

  const { data } = useQuery({
    queryKey: ["photos", query],
    queryFn: () => unsplashApi.get(`/search/photos?query=${query}`),
    enabled: !!query,
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  // console.log(data);

  return (
    <>
      <h1 className="text-4xl font-bold capitalize">{query}</h1>
      <MasonaryGrid param={data?.data} />
    </>
  );
}

export default SearchPhotos;

// 3 Component
// 1. Photos Masonary Grid
// 2. Tags
// 3. Stats Navbar
