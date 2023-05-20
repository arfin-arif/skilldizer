import React from 'react'
import { Fragment } from "react";
import { Menu } from "@headlessui/react";

const links = [
  { href: "/account-settings", label: "Account" },
  { href: "/support", label: "Email" },
  { href: "/license", label: "Password" },
  { href: "/sign-out", label: "Payment Methods" },
  { href: "/sign-out", label: "Payment History" },
  { href: "/sign-out", label: "Notifications" },
  { href: "/sign-out", label: "FAQs" },
];

const SettingsDropdown = () => {

  return (
    <>
      <Menu>
        <Menu.Button>Settings</Menu.Button>
        <Menu.Items>
          {links.map((link) => (
            /* Use the `active` state to conditionally style the active item. */

            <Menu.Item key={link.href} as={Fragment}>
              {({ active }) => (
                <li className="">
                  <a
                    href={link.href}
                    className={`${
                      active
                        ? "pl-6 font-medium rounded-full text-slate-700 hover:text-[#FF5A00] transition-all duration-150"
                        : "bg-white font-medium rounded-full text-slate-700 text-right pl-6"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </>
  );
}

export default SettingsDropdown