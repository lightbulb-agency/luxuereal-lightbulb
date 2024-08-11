import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { scrollToView } from "@/lib/utils";

import { SkipBack, SkipForward, Star } from "lucide-react";
import React from "react";

interface Props {
  name: string;
  index: number;
}

const SectionName: React.FC<Props> = ({ name, index }) => {

  const categories = ['About', 'Skills', 'Projects', 'Contact'];

  const onPrevClicked = () => {
    scrollToView(`section-${getPrevSectionName}`);
  }
  const onNextClicked = () => {
    scrollToView(`section-${getNextSectionName}`);
  }

  const getPrevSectionName = ( index == 0 ) ? categories[3] : categories[index-1]

  const getNextSectionName = ( index == 3 ) ? categories[0] : categories[index+1]

  return (
    <div className="flex flex-col bg-gray-900 mb-2 sticky top-0 z-10 ">
      <div className="flex flex-row items-center px-4 py-2 justify-between">
        <div className="flex flex-row items-center">
          <Star className="mr-2 h-4 w-4" />
          <h1 className="text-lg uppercase font-extrabold tracking-wider">
            {name}
          </h1>
        </div>

        <div className="flex flex-row items-center lg:hidden">
          <Button variant="ghost" size="icon" onClick={onPrevClicked} title={`Goto ${getPrevSectionName} Section`}>
            <SkipBack className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={onNextClicked} title={`Goto ${getNextSectionName} Section`}>
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator className="w-full" />
    </div>
  );
};

export default SectionName;
