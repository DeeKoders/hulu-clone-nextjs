import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-5">
        <HeaderIcon title={"HOME"} Icon={HomeIcon} />
        <HeaderIcon title={"TRENDING"} Icon={BoltIcon} />
        <HeaderIcon title={"VERIFIED"} Icon={CheckBadgeIcon} />
        <HeaderIcon title={"COLLECTION"} Icon={CircleStackIcon} />
        <HeaderIcon title={"SEARCH"} Icon={MagnifyingGlassIcon} />
        <HeaderIcon title={"ACCOUNT"} Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src={
          "https://firebasestorage.googleapis.com/v0/b/nextjs-app-62a9d.appspot.com/o/hulu-white.png?alt=media&token=50da4804-a7a7-4832-b673-34ac19ba27e2"
        }
        width={200}
        height={100}
        alt={"asd"}
      />
    </header>
  );
}

export default Header;
