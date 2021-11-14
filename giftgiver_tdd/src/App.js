import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const App = () => {
  return (
    <main>
      <h2>Snapshot</h2>

      <ChildOne text='Child One' />
      <ChildTwo text='Child Two' />
    </main>
  );
};

export default App;
