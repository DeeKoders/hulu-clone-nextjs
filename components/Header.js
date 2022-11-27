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
  const tabs = [
    {
      id: 1,
      title: "Home",
      icon: HomeIcon,
    },
    {
      id: 2,
      title: "Trending",
      icon: BoltIcon,
    },
    {
      id: 3,
      title: "Verified",
      icon: CheckBadgeIcon,
    },
    {
      id: 4,
      title: "Collection",
      icon: CircleStackIcon,
    },
    {
      id: 5,
      title: "Search",
      icon: MagnifyingGlassIcon,
    },
    {
      id: 6,
      title: "Account",
      icon: UserIcon,
    },
  ];

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-5">
        {tabs.map((tab) => {
          return <HeaderIcon key={tab.id} title={tab.title} Icon={tab.icon} />;
        })}
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
