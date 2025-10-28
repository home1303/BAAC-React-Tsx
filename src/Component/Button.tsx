import "./_variables.scss";
import "./Button.scss";

type ButtonColor =
  | "white"
  | "dark-green";

  type TextColor =
 "white"
  | "dark-green";

type ButtonProps = {
  text?: string;
  color: ButtonColor;   
  outline?: boolean;    
  textColor?: TextColor;   
};

export default function Button({
  text = "Click Me",
  color = "dark-green",
  outline = false,
  textColor,             
}: ButtonProps) {
  const className = outline
    ? `btn1 btn1-${color}` 
    : `btn btn-${color}`;

  return (
    <button className={className} style={{ color: textColor }}>
      {text}
    </button>
  );
}
