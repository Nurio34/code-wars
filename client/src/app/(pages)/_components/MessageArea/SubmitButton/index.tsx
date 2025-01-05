import { useFormStatus } from "react-dom";
import { RiSendPlaneFill } from "react-icons/ri";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? (
        <span className="loading loading-sm loading-spinner"></span>
      ) : (
        <RiSendPlaneFill size={20} />
      )}
    </button>
  );
}
export default SubmitButton;
