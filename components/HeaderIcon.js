import Link from "next/link";
// import Account from "../pages/Account";

function HeaderIcon({ Icon, title }) {
  return (
    <Link href={`/${title === "Home" ? "/" : title}`}>
      <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-12 hover:text-white">
        <Icon className="group-hover:animate-bounce h-8 mb-1" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default HeaderIcon;
