interface LoginInputProps {
  password?: boolean;
  placeholder: string;
  value: string;
  changeFN: Function;
  red?: boolean;
}

export const LoginInput: React.FC<LoginInputProps> = (props) => {
  return (
    <input
      className={`bg-standard text-standard mt-3 rounded-md ${
        props.red && "border-b-2 border-red-500"
      } p-2 text-lg focus:outline-none `}
      type={props.password ? "password" : "text"}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.changeFN(e.target.value)}
    />
  );
};
