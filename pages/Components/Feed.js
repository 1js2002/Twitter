import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [{
    id: "1",
    name: "dinesh",
    username: "1js2002",
    userImg:"https://pbs.twimg.com/profile_images/1529162618786590724/JhT_Ffgz_400x400.jpg",
    img: "https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/p2-1176473-1672391454.png?itok=GGeLaOgb",
    text: "puss",
    timestamp: "2 hours ago"
  },
  {
    id: "2",
    name: "hsenid",
    username: "1js2023",
    userImg:"https://pbs.twimg.com/profile_images/1529162618786590724/JhT_Ffgz_400x400.jpg",
    img: "https://mamasgeeky.com/wp-content/uploads/2022/11/puss-in-boots-the-last-wish-wolf-scary.jpg",
    text: "death",
    timestamp: "3 hours ago"
  }
]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl: min-w-[576px] sm: ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input/>
        {posts.map((post)=>(
          <Post key={post.id} post={post}/>           
        ))}
    </div>
  )
}
