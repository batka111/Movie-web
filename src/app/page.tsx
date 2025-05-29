"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavigationBar from "@/components/ui/NavigationBar";
import { Popular } from "@/components/Popular";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { DataTwo } from "@/components/DataTwo";
import { MovieCard } from "@/components/MovieCard";
import { TopRated } from "@/components/TopRated";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
type Movie = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
};

type MovieResponse = {
  results: Movie[];
};
export default function Home() {
  const [movies, setMovies] = useState<MovieResponse>({ results: [] });

  const baseUrl = "https://api.themoviedb.org/3/movie";
  useEffect(() => {
    fetch(`${baseUrl}/upcoming?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  const [moviess, setMoviess] = useState<MovieResponse>({ results: [] });
  useEffect(() => {
    fetch(`${baseUrl}/popular?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setMoviess(data);
      });
  }, []);
  const [moviesss, setMoviesss] = useState<MovieResponse>({ results: [] });
  useEffect(() => {
    fetch(`${baseUrl}/top_rated?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setMoviesss(data);
      });
  }, []);

  return (
    <div className="flex flex-col w-screen items-center gap-20">
      <NavigationBar />
      <DataTwo />
      <div className="bg-white flex w-screen">
        <div className="flex flex-col m-auto  gap-8">
          <div className="flex justify-between  ">
            <h3 className="font-semibold text-2xl">Upcoming</h3>
            <button className="flex justify-center items-center gap-2 h-9 py-2 px-4 rounded-md bg-[#fff] cursor-pointer ">
              See more <img src="arrow-right.png" alt="" className=" w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-8 ">
            {movies?.results?.slice(0, 10).map((movies) => {
              return (
                <MovieCard
                  key={movies.id}
                  image={movies.poster_path}
                  rate={movies.vote_average}
                  title={movies.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-white flex w-screen">
        <div className="flex flex-col m-auto  gap-8">
          <div className="flex justify-between  ">
            <h3 className="font-semibold text-2xl">Popular</h3>
            <button className="flex justify-center items-center gap-2 h-9 py-2 px-4 rounded-md bg-[#fff] cursor-pointer ">
              See more <img src="arrow-right.png" alt="" className=" w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-8 ">
            {moviess?.results?.slice(0, 10).map((moviess) => {
              return (
                <Popular
                  key={moviess.id}
                  image={moviess.poster_path}
                  rate={moviess.vote_average}
                  title={moviess.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-white flex w-screen">
        <div className="flex flex-col m-auto  gap-8">
          <div className="flex justify-between  ">
            <h3 className="font-semibold text-2xl">Top Rated</h3>
            <button className="flex justify-center items-center gap-2 h-9 py-2 px-4 rounded-md bg-[#fff] cursor-pointer ">
              See more{" "}
              <img src="/imgs/arrow-right.png" alt="" className=" w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-8 ">
            {moviesss?.results?.slice(0, 10).map((moviesss) => {
              return (
                <TopRated
                  key={moviesss.id}
                  image={moviesss.poster_path}
                  rate={moviesss.vote_average}
                  title={moviesss.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
