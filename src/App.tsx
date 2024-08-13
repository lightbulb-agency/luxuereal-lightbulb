import "./App.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "./components/custom/sub/Loader";
import Second from "./components/custom/Second";
import { UserContext } from "./util/useUserContext";
import { supabase } from "./util/supabaseClient";
import { UserData } from "./util/type";

const userid = import.meta.env.VITE_APP_USER_ID;

const App = () => {
  const [loaded, setLoaded] = useState(0);

  const [user, setUser] = useState<UserData | any>()

  const getUser = async () => {
    let { data } = await supabase.from("users").select().eq("id", userid);
    if (data) {
      setUser(data[0]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoaded(1);
    }, 3000);
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loaded ? (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          >
            <Second />
          </motion.div>
      ) : (
          <Loader />
      )}
    </UserContext.Provider>
  );
};

export default App;
