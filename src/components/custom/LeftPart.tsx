import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { scrollToView } from "@/lib/utils";
import { useUserContext } from "@/util/useUserContext";


const LeftPart = () => {

  const { user } = useUserContext();

  const changeTab = (category: string) => {
    scrollToView(`section-${category}`)
  };

  const categories = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <Card className="lg:w-1/3 xl:w-1/3 2xl:w-1/4 h-full p-0 m-0 lg:block hidden z-10 backdrop-blur-[2px]">
      <CardContent className="p-0 m-0 flex flex-col h-full justify-between">
        <div className="flex flex-col w-full items-center p-10">

          <img src={user.avatar} className={`w-28 h-28 border-2 rounded-md my-8 p-2`} />

          <h1 className="text-xl font-extrabold tracking-normal">
            {user.name}
          </h1>

          <h1 className="text-sm font-extrabold tracking-normal mt-0.5">
            {user.role.split(',')[0]}
          </h1>
        </div>

        <div className="flex flex-col w-full p-3 gap-y-2">
          {
            categories.map((category, idx) => 
              <Button
                variant="outline"
                onClick={() => changeTab(category)}
                key={`leftpart-${idx}`}
              >
                {category}
              </Button>
            )
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default LeftPart;
