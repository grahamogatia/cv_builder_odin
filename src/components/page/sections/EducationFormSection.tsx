import { Button } from "@/components/ui/button";
import CustomTextAreaWithText from "@/components/ui/customtextareawtext";
import { ArrowDownToLine, Plus } from "lucide-react";

type EducationFormSectionProps = {
  editingEducationForm: boolean;
  setEditingEducationForm: React.Dispatch<React.SetStateAction<boolean>>;
};

function EducationFormSection({
  editingEducationForm,
  setEditingEducationForm,
}: EducationFormSectionProps) {
  const educationDetails = [
    "School",
    "Degree",
    "Start Date",
    "End Date",
    "Location",
  ];

  return (
    <>
      {editingEducationForm ? (
        <>
          {educationDetails.map((educationDetail) => (
            <CustomTextAreaWithText
              key={educationDetail}
              task={educationDetail}
              placeholderTask={`Enter ${educationDetail}`}
            />
          ))}
          <div className="flex justify-end gap-0.5">
            <Button
              className="bg-white border text-black shadow-2xs"
              onClick={() => {
                setEditingEducationForm(false);
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
        <Button className="w-full" onClick={() => setEditingEducationForm(true)}>
          <Plus />
          Education
        </Button>
      )}
    </>
  );
}

export default EducationFormSection;
