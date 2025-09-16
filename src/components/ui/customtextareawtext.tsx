import { Label } from "./label";
import { Textarea } from "./textarea";

function CustomTextAreaWithText({task, placeholderTask}: {task: string, placeholderTask: string}) {
  return (
    <div className="grid w-full gap-3">
      <Label className="text-md">{task}</Label>
      <Textarea className="resize-none " placeholder={placeholderTask}/>
    </div>
  );
}

export default CustomTextAreaWithText;
