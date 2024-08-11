
import { Card, CardContent } from "../ui/card";
import { combinedInformation } from "@/lib/DynamicValues";
import DynamicSection from "./sub/DynamicSection";
import TopRightButtons from "./sub/TopRightButtons";

const RightPart = () => {

  return (
    <Card className="flex flex-col w-full h-full z-10">
      <CardContent className="p-0 w-full h-full overflow-y-hidden">
        <TopRightButtons />

        <div className="flex flex-col w-full h-[calc(100%-48px)] overflow-y-auto">
          {combinedInformation.routes.map((item, index) => {
            return <DynamicSection item={item} index={index} key={`rightpart-${index}`} />;
          })}
          {/* {
            categories.map((category: string, idx: number) =>
              <DynamicSection title={category} index={idx} key={`rightpart-${idx}`} />
            )
          } */}
        </div>
      </CardContent>
    </Card>
  );
};

export default RightPart;
