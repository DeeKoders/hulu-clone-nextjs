import Header from "../components/Header";
import Nav from "../components/Nav";
import { UserIcon } from "@heroicons/react/24/outline";
const Account = () => {
  return (
    <div>
      <Header />
      {/* <Nav /> */}
      <div className="p-8 w-full md:p-4 mt-4 md:h-auto ">
        <div className=" bg-[#082e38] border border-gray-400 p-3 shadow-sm md:h-auto rounded-sm">
          <div className="justify-center md:justify-start my-5 flex items-center space-x-2 font-semibold text-gray-300 leading-8  ">
            <span className="text-blue-300">
              <UserIcon className="h-7 mb-3" />
            </span>
            <span className="tracking-wide text-3xl">About</span>
          </div>
          <div className="text-gray-300 ">
            <div className="grid md:grid-cols-1 text-lg w-full">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">First Name</div>
                <div className="px-4 py-2">Danyal</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Last Name</div>
                <div className="px-4 py-2">Ahmad</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">Male</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">+92 312 7373848</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Current Address</div>
                <div className="px-4 py-2">
                  ProductBox, Zaman Manzil, Warsak Road Peshawar
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                <div className="px-4 py-2">
                  ProductBox, Zaman Manzil, Warsak Road Peshawar
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email</div>
                <div className="px-4 py-2">
                  <a className="text-blue-300" href="mailto:jane@example.com">
                    danyal.ahmad@productbox.dev
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Date of Birth</div>
                <div className="px-4 py-2">Oct 26, 2000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
