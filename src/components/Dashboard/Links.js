import Link from 'next/link';
import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BarChartIcon from "@mui/icons-material/BarChart";
import StreamIcon from "@mui/icons-material/Stream";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsDropdown from './SettingsDropdown'

const Links = () => {
  return (
    <div className="text-left">
      <ul class="px-4">
        <li className="font-semibold rounded-full text-slate-700 hover:text-[#FF5A00] transition-all duration-150">
          <a href="#" class="block px-4 py-2 text-lg">
            <MailOutlineIcon className="text-blue mr-2 h-6 w-6" />
            Messages
          </a>
        </li>
        <li className="font-semibold rounded-full text-slate-700 hover:text-[#FF5A00] transition-all duration-150">
          <a href="#" class="block px-4 py-2 text-lg">
            <LocalLibraryIcon className="text-blue mr-2 h-6 w-6" />
            My Classes
          </a>
        </li>
        <li className="font-semibold rounded-full text-slate-700 hover:text-[#FF5A00] transition-all duration-150">
          <a href="#" class="block px-4 py-2 text-lg">
            <BarChartIcon className="text-blue mr-2 h-6 w-6" />
            Statistics
          </a>
        </li>
        <li className="font-semibold rounded-full text-slate-700 hover:text-[#FF5A00] transition-all duration-150">
          <a href="#" class="block px-4 py-2 text-lg">
            <StreamIcon className="text-blue mr-2 h-6 w-6" />
            Points
          </a>
        </li>
        <li className="font-semibold rounded-full text-slate-700 hover:text-[#FF5A00] transition-all duration-150">
          <a href="#" class="block px-4 py-2 text-lg">
            <SettingsIcon className="text-blue mr-2 h-6 w-6" />
            <SettingsDropdown />
          </a>
        </li>
        <li className="font-semibold rounded-full text-slate-700 hover:text-[#FF5A00] transition-all duration-150">
          <a href="#" class="block px-4 py-2 text-lg">
            <LogoutIcon className="text-blue mr-2 h-6 w-6" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links