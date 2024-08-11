import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

import { loadSlim } from "tsparticles-slim";

import { particleData } from "@/lib/particle";

interface Props { }

const Background: React.FC<Props> = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles 
            id="tsparticles"
            init={particlesInit}
            options={particleData}
            className="z-0"
        />
    )
}

export default Background;