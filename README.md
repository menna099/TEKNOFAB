# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



 <nav
                    className="relative flex w-full flex-nowrap items-center justify-between py-2  lg:flex-wrap  lg:py-4"
                    data-twe-navbar-ref>
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                      <div
                        className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
                        id="navbarSupportedContent8"
                        data-twe-collapse-item>
                       
                              <ul
                          className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row"
                          data-twe-navbar-nav-ref>
                            
                          <li className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
                          
                            <Link className="text-black hover:bg-SecondColor hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" to="/" data-twe-nav-link-ref>Home</Link>
                           
                          </li>
                         
                          <li
                            className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                            data-twe-nav-item-ref>
                            <Link
                              className="text-black hover:bg-SecondColor hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                              to="/about"
                              data-twe-nav-link-ref
                            >About</Link>
                          </li>
                          <li
                            className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                            data-twe-nav-item-ref
                            data-twe-dropdown-ref>
                            <Link
                              className="text-black hover:bg-SecondColor hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                              to="/"
                              type="button"
                              id="dropdownMenuButton2"
                              data-twe-dropdown-toggle-ref
                              aria-expanded="false">
                              Solutions
                              
                            </Link>
                            <ul
                              className="absolute z-[1000] float-left mt-3 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                              aria-labelledby="dropdownMenuButton1"
                              data-twe-dropdown-menu-ref>
                              <li>
                                <Link
                                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-black dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                  to="/"
                                  data-twe-dropdown-item-ref
                                >Robot Palletizers</Link>
                              </li>
                              <li>
                                <Link
                                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-black dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                  to="/"
                                  data-twe-dropdown-item-ref
                                >Robot Packing</Link>
                              </li>
                              <li>
                                <Link
                                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-black dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                  to="/"
                                  data-twe-dropdown-item-ref
                                >Packing Machines</Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                            data-twe-nav-link-ref>
                            <Link
                              className="text-black hover:bg-SecondColor hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                              to="/contact"
                            >Contact</Link>
                          </li>
                          
                        </ul>
                           
                      </div>
                    </div>
                  </nav>


                  ///////////////////////
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
                          <Link
                            key={itemName}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-SecondColor text-white "
                                : "text-black hover:bg-SecondColor hover:text-white ",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {itemName}
                          </Link>
                        );
                      })} 
                  </div>