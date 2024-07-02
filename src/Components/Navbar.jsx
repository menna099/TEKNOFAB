import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Teknofab.png"

const navigation = [
  {
    nameEn: "Home",
    nameTr: "EV",
    nameAr: "الصفحة الرئيسية",
    href: "/",
    current: true,
  },
  {
    nameEn: "About",
    nameTr: "Hakkinda",
    nameAr: "نبذة عننا",
    href: "/about",
    current: false,
  },
  {
    nameEn: "Projects",
    nameTr: "Projeler",
    nameAr: "مشروعاتنا",
    href: "/",
    current: false,
  },
  {
    nameEn: "Contact",
    nameTr: "Temas Etmek",
    nameAr: "تواصل معنا",
    href: "/contact",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ language, setLanguage }) {
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    if (language === "AR") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [language]);
  
  useEffect(() => {
    if (language === "AR") {
      document.body.className = "AR";
    } else if (language === "EN") {
      document.body.className = "EN";
    } else {
      document.body.className = "TR";
    }
  }, [language]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="Your Company"
                />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="absolute inset-y-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex px-14 space-x-4">
                    {navigation.map((item) => {
                      let itemName;
                      if (language === "EN") {
                        itemName = item.nameEn;
                      } else if (language === "TR") {
                        itemName = item.nameTr;
                      } else {
                        itemName = item.nameAr;
                      }

                      return (
                        <Link
                          key={itemName}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {itemName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className={`absolute inset-y-0 ${
                  language === "AR" ? "left-0" : "right-0"
                } flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}
              >
                {/* language dropdown */}
                <Menu as="div" className="relative ml-3 ltr:right-0 rtl:left-0">
                  <div className="flex gap-3">
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://tse4.mm.bing.net/th?id=OIP.aKlgOETtIFeAWvrUFsNkfQHaHa&pid=Api&P=0&h=220"
                        alt=""
                      />
                    </MenuButton>
                    <div>
                      <div className="py-1 text-gray-300 font-bold">
                        {language}
                      </div>
                    </div>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to="#"
                          data-language="EN"
                          onClick={() => handleLanguageChange("EN")}
                          className={classNames(
                            focus ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          English
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to="#"
                          data-language="TR"
                          onClick={() => handleLanguageChange("TR")}
                          className={classNames(
                            focus ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Turkish
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to="#"
                          data-language="AR"
                          onClick={() => handleLanguageChange("AR")}
                          className={classNames(
                            focus ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Arabic
                        </Link>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                let itemName;
                if (language === "EN") {
                  itemName = item.nameEn;
                } else if (language === "TR") {
                  itemName = item.nameTr;
                } else {
                  itemName = item.nameAr;
                }

                return (
                  <DisclosureButton
                    key={itemName}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {itemName}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}