import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { supabase } from "@/util/supabaseClient";
import Background from "./Background";
import Carousel from "./sub/Carousel";

const Project = () => {

  const params = useParams();
  const [slides, setSlides] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  // const [github, setGithub] = useState<string>("");
  // const [live, setLive] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { data, status }: { data: any, status: number } = await supabase.from("projects").select().eq("id", params.id);
      if (status === 200) {
        console.log(data[0])
        let imgs = data[0].images.split(",");
        setSlides(new Array(Number(imgs[1])).fill(0).map((arr, id) => `${imgs[0]}${id+1}.png`));
        setTitle(data[0].name);
        setLogo(data[0].logo);
        setDesc(data[0].description);
        setSkills(data[0].skills.split(";"));
      }
    })();
  }, [params])

  return (
    <>
      <Background />
      <div className="w-screen h-screen flex justify-between items-center">
        <div className="w-full !z-50 flex flex-col items-center gap-8">
          <div className="flex justify-center gap-8 items-center">
            <img src={logo} className="w-12 h-12" alt="" />
            <span className="text-[48px]">{title}</span>
          </div>
          <span className="w-[72%] text-center text-xl">
            &nbsp;&nbsp;{desc}
          </span>
          <div className="flex gap-4 w-52 flex-wrap">
            {
              skills.map((skill, id) =>
                <img key={`${params.id}-slide-${id}`} src={skill} className="w-10 h-10 border border-[rgba(255,255,255,.5)] rounded-[10px] bg-white" alt="" />
              )
            }
          </div>
        </div>
        <Carousel slides={slides} />
      </div>
    </>
  )
}

export default Project