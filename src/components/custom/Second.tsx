import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Home from "./Home";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import { Card, CardContent } from "../ui/card";
import { Toaster } from "../ui/toaster";
import Background from "./Background";

const Second = () => {

    const [timed, setTimed] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimed(1);
        }, 3000)
    }, []);

    return (
        <>
            <Background />
            {timed ? (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="h-screen w-screen 2xl:py-12 2xl:px-32 xl:p-12 xl:py-32 lg:p-10 lg:py-24 md:p-8 md:py-20 p-8 py-20 z-10"
                >
                    <Card className="m-0 h-full w-full p-0 z-10">
                    <CardContent className="flex h-full w-full flex-row p-0 2xl:gap-12 xl:gap-10 lg:gap-8 md:gap-6 gap-6">
                        <LeftPart />
                        <RightPart />
                    </CardContent>
                    </Card>
                </motion.div>
            ) : (
            <Home />
            )}
            <Toaster />
        </>

    )
}

export default Second;