import { Button } from "@/components/ui/button";
import CustomTextAreaWithText from "@/components/ui/customtextareawtext";
import { ArrowDownToLine, Plus } from "lucide-react";

type ExperienceFormSectionProps = {
  editingExpForm: boolean;
  setEditingExpForm: React.Dispatch<React.SetStateAction<boolean>>;
};

function ExperienceFormSection({
  editingExpForm,
  setEditingExpForm,
}: ExperienceFormSectionProps) {
  const experienceDetails = [
    " Company Name",
    "Position Title",
    "Start Date",
    "End Date",
    "Location",
    "Description",
  ];

  return editingExpForm ? (
    <>
      {experienceDetails.map((experienceDetail) => (
        <CustomTextAreaWithText
          key={experienceDetail}
          task={experienceDetail}
          placeholderTask={`Enter ${experienceDetail}`}
        />
      ))}
      <div className="flex justify-end gap-0.5">
        <Button
          className="bg-white border text-black shadow-2xs"
          onClick={() => {
            setEditingExpForm(false);
          }}
        >
          Cancel
        </Button>
        <Button>
          <ArrowDownToLine />
          Save
        </Button>
      </div>
    </>
  ) : (
    <Button className="w-full" onClick={() => setEditingExpForm(true)}>
      <Plus />
      Experience
    </Button>
  );
}

export default ExperienceFormSection;
