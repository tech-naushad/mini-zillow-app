 
import { NavLink } from "react-router-dom";
import { EyeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
const menuItems = [
  {
    name: "My Listing",
    description: "View Properties created by you.",
    href: "/property/mylisting",
    icon: EyeIcon,
  },
  {
    name: "Sign out",
    description: "Logout from your account.",
    href: "/",
    icon: EyeIcon,
  },
];

const UserProfileMenu = (props) => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    if (item.name === "Sign out") {
      sessionStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <PopoverButton className="inline-flex items-center gap-2 text-sm/6 font-semibold text-gray-900 cursor-pointer focus:outline-none focus:ring-0 focus:border-none">
            <UserCircleIcon className="w-5 h-5 text-gray-500" />
            <span>{props?.name}</span>
          </PopoverButton>

          <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {menuItems.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div>
                      <NavLink
                        to={item.href}
                        onClick={() => {
                          handleClick(item);
                          close(); // ✅ Close the popover panel
                        }}
                        className={({ isActive }) =>
                          `font-semibold text-gray-900 relative no-underline ${
                            isActive ? "underline" : ""
                          }`
                        }
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </NavLink>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
};

export default UserProfileMenu;
