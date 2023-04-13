import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#FF7B7C] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#FF7B7C] mr-2" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#FF7B7C]">
          <h1 className="font-bold text-white">
            Want to learn more about Juno Network?
          </h1>
          <Link
            href="https://www.youtube.com/channel/UCNptx502adgY35LY28-zK4Q"
            className="text-[#FF7B7C] font-bold ml-2"
          >
            www.junoCommsDao.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
