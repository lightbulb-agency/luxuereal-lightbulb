import { SiGmail, SiDiscord, SiSkype } from "react-icons/si";
import { motion } from "framer-motion";
import { useUserContext } from "@/util/useUserContext";


const Home = () => {

    const { user } = useUserContext();

  return (
    <main className="w-full h-[100vh] flex justify-center items-center gap-8 text-3xl">
        <motion.div
            initial={{ x: -600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .75, ease: "easeInOut" }}
            className="mr-20 leading-[96px] tracking-wider z-10"
        >
            <h1>Hi, 👋</h1>
            <span className="flex items-center justify-center group rounded text-sm rom-green-300 via-blue-500 to-purple-600 p-0.5 w-fit"> <span className="text-4xl">It's&nbsp;&nbsp;</span> 
                <div className="bg-transparent w-fit h-full font-semibold">
                    <h1 className="font-extrabold text-transparent text-4xl sm:text-4xl xl:text-4xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-transparent h-full">
                        {user.name}
                    </h1>
                </div>
            </span>
            <h1>{user.role.split(",")[0]}</h1>
        </motion.div>
        <motion.div 
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .75, ease: "easeInOut" }}
            className="w-40 h-40 ml-20 rounded-full bg-transparent group cursor-pointer [perspective:1000px]"
        >
          <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
            <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full border-4 border-green-500">
              <img
                src={user.avatar}
                alt=""
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <div className="absolute w-full h-full border-2 rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-green-500 shadow-xl">
              <div className="flex flex-col items-center justify-center h-full w-full gap-2">
                <h1 className="text-2xl">Online</h1>
                <div className="flex gap-3 items-center">
                  <SiGmail className="hover:fill-black fill-white text-white h-6 w-6" />
                  <SiSkype className="hover:fill-black fill-white text-white h-5 w-5" />
                  <SiDiscord className="hover:fill-black fill-white text-white h-6 w-6" />
                </div>
              </div>
            </div>
            <span className="absolute top-1.5 right-4 z-40 w-5 h-5 rounded-full bg-green-500 ring-2 ring-black" />
            <span className="absolute top-1.5 right-4 z-40 w-5 h-5 rounded-full bg-green-500 animate-ping" />
          </div>
        </motion.div>
    </main>
  );
};

export default Home;
