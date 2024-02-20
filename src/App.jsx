import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <TaskList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
