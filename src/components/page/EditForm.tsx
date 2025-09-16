import { ArrowDownToLine, Plus } from "lucide-react";
import { Button } from "../ui/button";
import CustomTextAreaWithText from "../ui/customtextareawtext";
import CardPrompt from "./CardPrompt";
import { useState } from "react";

function EditForm() {
  const [editingEducationForm, setEditingEducationForm] = useState(false);
  const [editingExpForm, setEditingExpForm] = useState(false);

  const personalDetails = ["Name", "Email", "Phone Number", "Address"];
  const educationDetails = [
    "School",
    "Degree",
    "Start Date",
    "End Date",
    "Location",
  ];
  const experienceDetails = [
    " Company Name",
    "Position Title",
    "Start Date",
    "End Date",
    "Location",
    "Description",
  ];

  const addPersonalDetails = () => {
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
  };

  const onAddEducation = () => {
    //School, Degree, Start Date, End Date, Location
    setEditingEducationForm(true);
  };

  const addEducation = () => {
    return editingEducationForm ? (
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
      <Button className="w-full" onClick={onAddEducation}>
        <Plus />
        Education
      </Button>
    );
  };

  const onSaveEducation = () => {};

  const onAddExperience = () => {
    // Company Name, Position Title, Start Date, End Date, Location, Description
    setEditingExpForm(true);
  };

  const addExperience = () => {
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
      <Button className="w-full" onClick={onAddExperience}>
        <Plus />
        Experience
      </Button>
    );
  };

  const onSaveExperience = () => {};

  return (
    <div className="space-y-4">
      <div className="text-left">
        <p className="text-4xl font-semibold">CV Generator</p>
        <p className="text-foreground max-w-3xl sm:text-lg">
          Creates professional resumes using the Harvard template
        </p>
      </div>
      <CardPrompt cardTitle="Personal Details">
        {addPersonalDetails()}
      </CardPrompt>
      <CardPrompt cardTitle="Education">
        {addEducation()}
        </CardPrompt>
      <CardPrompt cardTitle="Experience">
        {addExperience()}
        </CardPrompt>
    </div>
  );
}

export default EditForm;
