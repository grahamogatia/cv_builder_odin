import CardPrompt from "./CardPrompt";
import { useState } from "react";
import EducationFormSection from "./sections/EducationFormSection";
import PersonalDetailsFormSection from "./sections/PersonalDetailsFormSection";
import ExperienceFormSection from "./sections/ExperienceFormSection";
import Header from "./sections/Header";

function EditForm() {
  const [editingEducationForm, setEditingEducationForm] = useState(false);
  const [editingExpForm, setEditingExpForm] = useState(false);

  return (
    <div className="space-y-4">
      <Header />
      <CardPrompt cardTitle="Personal Details">
        <PersonalDetailsFormSection />
      </CardPrompt>
      <CardPrompt cardTitle="Education">
        <EducationFormSection
          editingEducationForm={editingEducationForm}
          setEditingEducationForm={setEditingEducationForm}
        />
      </CardPrompt>
      <CardPrompt cardTitle="Experience">
        <ExperienceFormSection
          editingExpForm={editingExpForm}
          setEditingExpForm={setEditingExpForm}
        />
      </CardPrompt>
    </div>
  );
}

export default EditForm;
