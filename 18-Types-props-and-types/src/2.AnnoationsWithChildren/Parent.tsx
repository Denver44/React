import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" OnClick={() => console.log('Clicked')}>
      Hello
    </ChildAsFC>
  );
};

export default Parent;
