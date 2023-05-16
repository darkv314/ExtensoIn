import "./MainButton.css";

type MainButtonProps = {
    txtButton: string;
}

export default function MainButton({ txtButton }: MainButtonProps) {
  return <button className="main__button">{txtButton}</button>;
  
}
