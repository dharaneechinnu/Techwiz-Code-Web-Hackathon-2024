
import './App.css';
import Home from './Pages/Home';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <>
     <AnimatedCursor
      innerSize={10}
      outerSize={25}
      color='255, 0, 191'
      outerAlpha={0.2}
      innerScale={0.5}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Home/>
    </>
  );
}

export default App;
