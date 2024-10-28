import Toggle from "./Toggle";
import ToggleButton from "./ToggleButton";
import ToggleOn from "./ToggleOn";
import ToggleOff from "./ToggleOff";

// Define the types for the Toggle component and its subcomponents
interface ToggleComponent
  extends React.FC<{
    children: React.ReactNode;
    onToggle?: (on: boolean) => void;
  }> {
  Button: typeof ToggleButton;
  On: typeof ToggleOn;
  Off: typeof ToggleOff;
}

// Assign the subcomponents to the Toggle component with the correct types
const ToggleWithSubcomponents: ToggleComponent = Toggle as ToggleComponent;
ToggleWithSubcomponents.Button = ToggleButton;
ToggleWithSubcomponents.On = ToggleOn;
ToggleWithSubcomponents.Off = ToggleOff;

// Export the Toggle component with subcomponents
export default ToggleWithSubcomponents;
