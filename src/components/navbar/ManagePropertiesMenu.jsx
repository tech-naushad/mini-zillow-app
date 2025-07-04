import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  EyeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  {
    name: "Add New Property",
    description:
      "Add New Property lets users list properties with details and images.",
    href: "/property/add",
    icon: HomeIcon,
  },
  {
    name: "View Properties",
    description: "View Properties shows all listings for users to browse.",
    href: "/",
    icon: EyeIcon,
  },
  {
    name: "Manage Property Listing",
    description:
      "Manage Property Listing lets admins edit and control property listings.",
    href: "/admin",
    icon: WrenchScrewdriverIcon,
  },
];

const ManagePropertiesItems = () => {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <PopoverButton className="inline-flex items-center text-sm/6 font-semibold text-gray-900 cursor-pointer focus:outline-none focus:ring-0 focus:border-none">
            <span>Manage Properties</span>
          </PopoverButton>
          <PopoverPanel
            transition
            className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
          >
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
                        style={{ textDecoration: "none" }}
                        to={item.href}
                        onClick={() => close()}
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

export default ManagePropertiesItems;
