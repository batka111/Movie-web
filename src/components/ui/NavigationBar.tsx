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
            <DropdownMenuTrigger className="flex items-center justify-center gap-2 py-2 px-4">
              <img src="/imgs/down.png" alt="" className="w-4 h-4" /> Genre
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
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
            <Input placeholder="Search..." className="border-none shadow-none"/>
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
