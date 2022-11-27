import Header from "../components/Header";
import Nav from "../components/Nav";
import { UserIcon } from "@heroicons/react/24/outline";
const Account = ({ results }) => {
  const data = [
    { id: 1, title: "First Name", value: "Danyal" },
    { id: 2, title: "Last Name", value: "Ahmad" },
    { id: 3, title: "Gender", value: "Male" },
    { id: 4, title: "Contact No", value: "+92 312 7373848" },
    {
      id: 5,
      title: "Permanent Address",
      value: "ProductBox, Zaman Manzil, Warsak Road Peshawar",
    },
    { id: 6, title: "Email Address", value: "danyal.ahmad@productbox.dev" },
    { id: 7, title: "Date of Birth", value: "26 October" },
  ];
  return (
    <div>
      <Header />
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
              {data.map((item) => {
                return (
                  <div key={item.id} className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">{item.title}</div>
                    <div className="px-4 py-2">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
