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
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Teknofab.png";
import image from "../assets/language.jpeg";

const initialNavigation = [
  {
    nameEn: "Home",
    nameTr: "ANASAYFA",
    nameAr: "الصفحة الرئيسية",
    to: "/",
  },
  {
    nameEn: "About",
    nameTr: "HAKKIMIZDA",
    nameAr: "نبذة عننا",
    to: "/about",
  },
  {
    nameEn: "Solutions",
    nameTr: "Çözümlerimiz",
    nameAr: "الحلول",
    to: "",
    subItems: [
      { nameEn: "Robot Palletizers", nameTr: "Robot Paletleyiciler", nameAr: "روبوتات التكديس", to: "/robot-palletizers" },
      { nameEn: "Robot Packing", nameTr: "Robot Paketleme", nameAr: "التغليف الآلي", to: "/robot-packing" },
      { nameEn: "Packing Machines", nameTr: "Paketleme Makinaları", nameAr: "آلات التعبئة", to: "/packing-machines" },
      { nameEn: "Top Load Case Packer", nameTr: "TOP LOAD CASE PACKER", nameAr: "", to: "/case-packer" },
    ],
  },
  
  {
    nameEn: "Contact",
    nameTr: "İletişim",
    nameAr: "تواصل معنا",
    to: "/contact",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ language, setLanguage }) {
  const location = useLocation();
  const [navigation, setNavigation] = useState(initialNavigation);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

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

  useEffect(() => {
    const updatedNavigation = initialNavigation.map((item) => ({
      ...item,
      current: location.pathname === item.to,
    }));
    setNavigation(updatedNavigation);
  }, [location]);

  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
              </div>
              <div className={`flex flex-1 items-center justify-center `}>
                <div className="absolute inset-y-0 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="hidden md:block">
                  <div className="flex gap-2">
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
                        <li
                          key={itemName}
                          className=" lg:pe-1 relative"
                          data-twe-nav-item-ref
                          onMouseEnter={() => setShowSubMenu(item.subItems ? true : false)}
                          onMouseLeave={() => setShowSubMenu(false)}
                        >
                          {item.subItems ? (
                            <>
                              <Link
                                to={item.to}
                                className={classNames(
                                  item.current
                                    ? "bg-SecondColor text-white"
                                    : "text-black hover:bg-SecondColor hover:text-white",
                                  "rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
                                )}
                                aria-current={item.current ? "page" : undefined}
                               data-twe-nav-link-ref
                              >
                                {itemName}
                              </Link>
                              {showSubMenu && (
                                <ul
                                  className={`absolute z-[1000] mt-1 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark `}
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  {item.subItems.map((subItem) => (
                                    <li key={subItem.nameEn}>
                                      <Link
                                        to={subItem.to}
                                        className={`block w-full bg-white px-4 py-2 text-sm font-normal dark:text-black dark:hover:bg-SecondColor hover:text-white`}
                                        data-twe-dropdown-item-ref
                                      >
                                        {language === "EN"
                                          ? subItem.nameEn
                                          : language === "TR"
                                          ? subItem.nameTr
                                          : subItem.nameAr}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link
                              to={item.to}
                              className={classNames(
                                item.current
                                  ? "bg-SecondColor text-white"
                                  : "text-black hover:bg-SecondColor hover:text-white",
                                "rounded-md px-3 py-1 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                              data-twe-nav-link-ref
                            >
                              {itemName}
                            </Link>
                          )}
                        </li>
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
                <Menu as="div" className="relative ml-3">
                  <div className="flex items-center gap-3">
                    <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-7 w-7 rounded-full "
                        src={image}
                        alt=""
                      />
                    </MenuButton>
                    <div className="text-black font-bold">{language}</div>
                  </div>
                  <MenuItems
                    className={`absolute z-10 mt-2 w-48 origin-top-right ${
                      language === "AR" ? "left-0" : "right-0"
                    }  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  >
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => handleLanguageChange("EN")}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block w-full px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          English
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => handleLanguageChange("TR")}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block w-full px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Turkish
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => handleLanguageChange("AR")}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block w-full px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Arabic
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className=" px-2 pb-3 pt-2">
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
                  <Link key={itemName} to={item.to}>
                    <DisclosureButton
                      as="a"
                      onClick={() => {
                        if (item.subItems) {
                          setShowMobileSubMenu(!showMobileSubMenu);
                        }
                      }}
                      className={classNames(
                        item.current
                          ? "bg-SecondColor text-white"
                          : "text-black hover:bg-SecondColor hover:text-white",
                        "block rounded-md px-3 py-2 mb-2 text-base font-medium cursor-pointer"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {itemName}
                    </DisclosureButton>
                    {item.subItems && showMobileSubMenu && (
                      <div className="pl-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.nameEn}
                            to={subItem.to}
                            className={`block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal dark:text-black dark:hover:bg-SecondColor hover:text-white `}
                            data-twe-dropdown-item-ref
                          >
                            {language === "EN"
                              ? subItem.nameEn
                              : language === "TR"
                              ? subItem.nameTr
                              : subItem.nameAr}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </DisclosurePanel>
          {/* <DisclosurePanel className="md:hidden">
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
                    href={item.to}
                    className={classNames(
                      item.current
                        ? "bg-SecondColor text-white"
                        : "text-black hover:bg-SecondColor hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {itemName}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel> */}
        </>
      )}
    </Disclosure>
  );
}
