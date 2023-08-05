import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="lg:px-20 container flex items-center justify-between px-10 py-4 mx-auto"
        aria-label="Global">
        <div className="lg:flex-1 flex">
          <NavLink className="text-primary text-2xl font-semibold" to="/">
            Tutor.IK
          </NavLink>
        </div>
        <div className="lg:hidden flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <FiMenu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="lg:flex lg:gap-x-12 hidden">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#4f46e5" : "#000",
              backgroundColor: isActive ? "" : null,
            })}
            to="/"
            className="py-1 px-2 block text-base font-normal hover:!text-primary">
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#4f46e5" : "#000",
              backgroundColor: isActive ? "" : null,
            })}
            to="/search-tutor"
            className="py-1 px-2 block text-base font-normal hover:!text-primary">
            Search Tutor
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#4f46e5" : "#000",
              backgroundColor: isActive ? "" : null,
            })}
            to="/student"
            className="py-1 px-2 block text-base font-normal hover:!text-primary">
            Student
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#4f46e5" : "#000",
              backgroundColor: isActive ? "" : null,
            })}
            to="/tutor"
            className="py-1 px-2 block text-base font-normal hover:!text-primary">
            Tutor
          </NavLink>
        </Popover.Group>
        <div className="lg:flex lg:flex-1 lg:justify-end hidden gap-2">
          <NavLink
            to="/student-login"
            className="hover:opacity-80 bg-primary block px-5 py-2 text-base font-normal text-white rounded-lg">
            Student Login
          </NavLink>
          <NavLink
            to="/tutor-login"
            className="hover:opacity-80 bg-primary block px-5 py-2 text-base font-normal text-white rounded-lg">
            Tutor Login
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <FiX className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="divide-gray-500/10 -my-6 divide-y">
              <div className="py-6 space-y-2">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#4f46e5" : "#000",
                    backgroundColor: isActive ? "" : null,
                  })}
                  to="/"
                  className="py-1 px-2 block text-base font-normal hover:!text-primary">
                  Home
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#4f46e5" : "#000",
                    backgroundColor: isActive ? "" : null,
                  })}
                  to="/"
                  className="py-1 px-2 block text-base font-normal hover:!text-primary">
                  Search Tutor
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#4f46e5" : "#000",
                    backgroundColor: isActive ? "" : null,
                  })}
                  to="/"
                  className="py-1 px-2 block text-base font-normal hover:!text-primary">
                  Student
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#4f46e5" : "#000",
                    backgroundColor: isActive ? "" : null,
                  })}
                  to="/"
                  className="py-1 px-2 block text-base font-normal hover:!text-primary">
                  Tutor
                </NavLink>
              </div>
              <div className="py-6">
                <button className="hover:opacity-80 bg-primary block px-5 py-2 text-base font-normal text-white rounded-lg">
                  Login
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
