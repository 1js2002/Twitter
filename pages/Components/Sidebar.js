import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        <div className="hoverEffect p-0 hover:bg-blue-100 ">
        {/* twitter logo */}
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>  

        </div>
        <div className="mt-4 mb-2.5 xl:items-start">
        {/* icons     */}
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
            <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
            <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuItem text="Profile" Icon={UserIcon}/>
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>
        {/* tweet button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>
        {/* miniProfile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
             src="https://pbs.twimg.com/profile_images/1529162618786590724/JhT_Ffgz_400x400.jpg" 
             alt="user-img" className="h-10 w-10 rounded-full xl: mr-2"></img>
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold ">Dinesh</h4>
                <p className="text-gray-500">@1js2002</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>


    </div>
        
  )
}
