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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen items-center ">
      <NavigationBar />
      <div className="flex w-screen h-screen">
        <Carousel>
          <CarouselContent className="flex w-screen m-0">
            <CarouselItem className="p-0">
              <div
                style={{ backgroundImage: `url("/imgs/wicked.png")` }}
                className="bg-no-repeat bg-cover bg-center flex w-screen relative h-[900px]"
              >
                <div className="w-[404px] h-[264px] gap-4 flex flex-col absolute bottom-[250px] left-[200px]">
                  <div>
                    <p className="text-[#FFFFFF]">Now Playing:</p>
                    <h2 className="text-[#FFFFFF] font-bold text-4xl">
                      Wicked
                    </h2>
                    <div>
                      <p className="flex items-center text-[#FAFAFA] gap-1">
                        <img src="/imgs/star.png" alt="" className=" w-7 h-7" />
                        6.9<span className="text-[#71717A]">/10</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-[#FAFAFA] text-xs w-[302px]">
                    Elphaba, a misunderstood young woman because of her green
                    skin, and Glinda, a popular girl, become friends at Shiz
                    University in the Land of Oz. After an encounter with the
                    Wonderful Wizard of Oz, their friendship reaches a
                    crossroads.
                  </p>
                  <Button className="bg-[#fff] text-[#18181B] flex items-center justify-center w-[145px]">
                    <img src="/imgs/play.png" alt="" className="w-4 h-4" />{" "}
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="p-0">
              <div
                style={{ backgroundImage: `url("/imgs/glad.png")` }}
                className="bg-no-repeat bg-cover bg-center flex w-screen relative h-[900px]"
              >
                <div className="w-[404px] h-[264px] gap-4 flex flex-col absolute bottom-[250px] left-[200px]">
                  <div>
                    <p className="text-[#FFFFFF]">Now Playing:</p>
                    <h2 className="text-[#FFFFFF] font-bold text-4xl">
                      Gladiator II
                    </h2>
                    <div>
                      <p className="flex items-center text-[#FAFAFA] gap-1">
                        <img src="/imgs/star.png" alt="" className=" w-7 h-7" />
                        6.9<span className="text-[#71717A]">/10</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-[#FAFAFA] text-xs w-[302px]">
                    After his home is conquered by the tyrannical emperors who
                    now lead Rome, Lucius is forced to enter the Colosseum and
                    must look to his past to find strength to return the glory
                    of Rome to its people.
                  </p>
                  <Button className="bg-[#fff] text-[#18181B] flex items-center justify-center w-[145px]">
                    <img src="/imgs/play.png" alt="" className="w-4 h-4" />{" "}
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="p-0">
              <div
                style={{ backgroundImage: `url("/imgs/moana.png")` }}
                className="bg-no-repeat bg-cover bg-center flex w-screen relative h-[900px]"
              >
                <div className="w-[404px] h-[264px] gap-4 flex flex-col absolute bottom-[250px] left-[200px]">
                  <div>
                    <p className="text-[#FFFFFF]">Now Playing:</p>
                    <h2 className="text-[#FFFFFF] font-bold text-4xl">Moana</h2>
                    <div>
                      <p className="flex items-center text-[#FAFAFA] gap-1">
                        <img src="/imgs/star.png" alt="" className=" w-7 h-7" />
                        6.9<span className="text-[#71717A]">/10</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-[#FAFAFA] text-xs w-[302px]">
                    After receiving an unexpected call from her wayfinding
                    ancestors, Moana must journey to the far seas of Oceania and
                    into dangerous, long-lost waters for an adventure unlike
                    anything she's ever faced.
                  </p>
                  <Button className="bg-[#fff] text-[#18181B] flex items-center justify-center w-[145px]">
                    <img src="/imgs/play.png" alt="" className="w-4 h-4" />{" "}
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-[150px]" />
          <CarouselNext className="absolute right-[150px]" />
        </Carousel>
      </div>
    </div>
  );
}
