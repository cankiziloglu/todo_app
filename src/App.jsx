import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Sidebar from './components/Sidebar';
import TasksContextProvider from './context/TasksContextProvider';

function App() {
  return (
    <>
      <BackgroundHeading />
      <TasksContextProvider>
        <main>
          <Header />
          <TaskList />
          <Sidebar />
        </main>
      </TasksContextProvider>
      <Footer />
    </>
  );
}

export default App;
