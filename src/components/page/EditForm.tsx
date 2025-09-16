import { ArrowDownToLine } from "lucide-react";
import { Button } from "../ui/button";
import { CardContent } from "../ui/card";
import CustomTextAreaWithText from "../ui/customtextareawtext";
import CardPrompt from "./CardPrompt";

function EditForm() {
  return (
    <div className="space-y-4">
      <div className="text-left">
        <p className="text-4xl font-semibold">CV Generator</p>
        <p className="text-foreground max-w-3xl sm:text-lg">
          Creates professional resumes using the Harvard template
        </p>
      </div>
      <CardPrompt cardTitle="Personal Details">
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
          <Button className="w-full">
            <ArrowDownToLine />
            Save
          </Button>
        </CardContent>
      </CardPrompt>
    </div>
  );
}

export default EditForm;
