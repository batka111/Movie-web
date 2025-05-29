import { title } from "process";

type MovieCardProps = {
  title: string;
  rate: number;
  //   description: string;
  image?: string;
};

export const TopRated = ({ title, rate, image }: MovieCardProps) => {
  return (
    // <div>
    //   <img
    //     src={`https://image.tmdb.org/t/p/w300${image}`}
    //     alt=""
    //     className="rounded-t-lg"
    //   />
    //   <div>
    //     <p>{title}</p>
    //     <p>{rate}</p>
    //     <p>{description}</p>
    //   </div>
    // </div>
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt=""
        className="rounded-t-lg"
      />
      <div className=" bg-[#F4F4F5] rounded-b-lg w-[300px] h-[79px] p-2">
        <div className="flex items-center gap-2 h-[23px]">
          <img src="/imgs/star.png" alt="" className=" w-4 h-4" />
          <p>{rate}</p>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};
