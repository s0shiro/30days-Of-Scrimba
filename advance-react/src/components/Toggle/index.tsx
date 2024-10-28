import Toggle from "./Toggle";
import ToggleButton from "./ToggleButton";
import ToggleOn from "./ToggleOn";
import ToggleOff from "./ToggleOff";
import ToggleDisplay from "./ToggleDisplay";

// Define the types for the Toggle component and its subcomponents
interface ToggleComponent
  extends React.FC<{
    children: React.ReactNode;
    onToggle?: (on: boolean) => void;
  }> {
  Button: typeof ToggleButton;
  On: typeof ToggleOn;
  Off: typeof ToggleOff;
  Display: typeof ToggleDisplay;
}

// Assign the subcomponents to the Toggle component with the correct types
const ToggleWithSubcomponents: ToggleComponent = Toggle as ToggleComponent;
ToggleWithSubcomponents.Button = ToggleButton;
ToggleWithSubcomponents.On = ToggleOn;
ToggleWithSubcomponents.Off = ToggleOff;
ToggleWithSubcomponents.Display = ToggleDisplay;

// Export the Toggle component with subcomponents
export default ToggleWithSubcomponents;
