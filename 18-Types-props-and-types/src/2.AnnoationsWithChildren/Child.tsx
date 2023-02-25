interface ChildProps {
  color: string;
  OnClick: () => void;
  // children : We have to mentioned the children type manually.
}

export const Child = ({ color, OnClick }: ChildProps) => {
  return (
    <div style={{ color }}>
      {/* {children} */}
      <button onClick={OnClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  OnClick,
  children,
}) => {
  return (
    <div style={{ color }}>
      {children}
      {/* No need to mentioned the type of Children it is explicity is done by this approach of declaring a component. */}
      <button onClick={OnClick}>Click me</button>
    </div>
  );
};
