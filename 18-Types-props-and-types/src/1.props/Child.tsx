interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// This below method is better because now typescript know that we are making a component.
// FC is abbr of Functional Component so in place of FC we can use Functional Component.
// Because of this type of declaration we can access property like displayName, context type and many more.
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};

//export  const Child = (props: ChildProps) => {
//   return <div>{props.color}</div>;
// };
