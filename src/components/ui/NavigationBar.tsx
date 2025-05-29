import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "./badge";

const NavigationBar = () => {
  return (
    <div className="flex justify-between items-center container h-[59px] mt-2 mb-8 ">
      <div className="flex justify-center items-center gap-2">
        <img src="/imgs/film.png" alt="#" className="w-5 h-5" />
        <p className=" text-[#4338CA] italic font-bold text-base leading-5 cursor-pointer">
          Movie Z
        </p>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div className="flex justify-center items-center w-[100px] h-[36px] border-[#E4E4E7] rounded-md border-solid shadow-sm bg-[#fff]">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex w-4 h-4 justify-center gap-2 items-center">
              <img src="/imgs/chevron-down.png" alt="" /> Genre
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[577px] p-5">
              <DropdownMenuLabel>
                <div className="flex flex-col w-[213px] items-start">
                  <h2 className="text-2xl font-semibold">Genres</h2>
                  <p className="text-[16px]">See lists of movies by genre</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="flex flex-wrap">
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Action{" "}
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Adventure{" "}
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Animation{" "}
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Biography{" "}
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Comedy{" "}
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Crime{" "}
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Documentary
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Drama
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Family
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Fantasy
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Film-Noir
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Game-Show
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    History
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Horror
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Music
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Musical
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Mystery
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    News
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Reality-TV
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Romance
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Sci-Fi
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Short
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Sport
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Talk-Show
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Thriller
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    War
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge className="bg-white text-black">
                    Western
                    <img
                      src="/imgs/chevron-right.png"
                      alt=""
                      className="w-4 h-4"
                    />
                  </Badge>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex w-[379px] h-[36px] ">
          <div className=" flex justify-center items-center gap-3 border-[#E4E4E7] border-solid rounded-lg px-3 shadow-sm bg-[#fff]">
            <img src="/imgs/shil.png" alt="" className=" w-4 h-4" />
            {/* <input
              type="text"
              placeholder="Search..."
              className=" outline-none"
            /> */}
            <Input
              placeholder="Search..."
              className="border-none shadow-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Button className="bg-[#fff]">
          <img src="/imgs/sar.png" alt="" className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
