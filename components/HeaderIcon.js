import Link from "next/link";
// import Account from "../pages/Account";

function HeaderIcon({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-12 hover:text-white">
      <Link href={`/${title === "Home" ? "/" : title}`}>
        <Icon className="group-hover:animate-bounce h-8 mb-1" />
      </Link>
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderIcon;
