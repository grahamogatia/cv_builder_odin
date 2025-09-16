import { Button } from "@/components/ui/button";
import CustomTextAreaWithText from "@/components/ui/customtextareawtext";
import { ArrowDownToLine } from "lucide-react";

function PersonalDetailsFormSection() {
    const personalDetails = ["Name", "Email", "Phone Number", "Address"];

    return (
      <>
        {personalDetails.map((personalDetail) => (
          <CustomTextAreaWithText
            key={personalDetail}
            task={personalDetail}
            placeholderTask={`Enter ${personalDetail}`}
          />
        ))}
        <Button className="w-full">
          <ArrowDownToLine />
          Save
        </Button>
      </>
    );
}

export default PersonalDetailsFormSection;