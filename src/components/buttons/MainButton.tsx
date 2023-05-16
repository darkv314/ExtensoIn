import "./MainButton.css";

export default function MainButton(txtButton: string = "Button") {
  return <button className="main__button">{txtButton}</button>;
}
