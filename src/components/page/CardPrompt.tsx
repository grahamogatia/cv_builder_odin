import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

function CardPrompts({
  cardTitle,
  children,
}: {
  cardTitle: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Collapsible>
        <Card className="gap-1">
          <CardHeader className="space-y-">
            <div className="flex justify-between items-center">
              <CardTitle className="text-left text-xl p-0">
                {cardTitle}
              </CardTitle>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="space-y-4">{children}</CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
}

export default CardPrompts;
