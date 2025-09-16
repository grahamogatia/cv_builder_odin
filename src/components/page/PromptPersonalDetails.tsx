import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CustomTextAreaWithText from "../ui/customtextareawtext";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { ArrowDownToLine, ChevronDown, ChevronsUpDown, Save } from "lucide-react";

function PromptPersonalDetails() {

  return (
    <div>
      <Collapsible>
        <Card className="gap-1">
          <CardHeader className="space-y-">
            <div className="flex justify-between items-center">
              <CardTitle className="text-left text-xl p-0">
                Personal Details
              </CardTitle>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="space-y-4">
              <CustomTextAreaWithText
                task="Name"
                placeholderTask="e.g., John A. Doe"
              />
              <CustomTextAreaWithText
                task="Email"
                placeholderTask="e.g., john.doe@email.com"
              />
              <CustomTextAreaWithText
                task="Phone Number"
                placeholderTask="e.g., john.doe@email.com"
              />
              <CustomTextAreaWithText
                task="Address"
                placeholderTask="e.g., 123 Main Street, City, Country"
              />
              <Button className="w-full"><ArrowDownToLine/>Save</Button>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
}

export default PromptPersonalDetails;
