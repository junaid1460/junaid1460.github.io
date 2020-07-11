import logo from './logo.svg';
import './App.css';
import { createState } from 'solid-js';




function App() {

  const [state, setState] = createState({
    stateClassName: 'one',
    text: 'mystery'
  })

  const firstStep = (() => {
    let taps = 0;
    let timer: any = null
    return () => {

        if(timer) {
          clearTimeout(timer)
        }
        if(taps >= 10) {
          setState({ stateClassName: 'two', text: 'I might tell you, if you pull me enough.' })
        }
        timer = setTimeout(() => {
          taps = 0
        }, 1000)
        taps += 1
      }
  })()


  const secondStep = (() => {
    let taps = 0;
    let timer: any = null
    return () => {

        if(timer) {
          clearTimeout(timer)
        }
        if(taps >= 3000) {
          setState({ stateClassName: 'three', text: `I'm not ready yet, sorry` })
        }
        timer = setTimeout(() => {
          taps = 0
        }, 100)
        taps += 1
      }
  })()

  return (
    <div class="container">
        <button class={state.stateClassName + " action-button"}  onClick={() => {
          if(state.stateClassName == 'one') {
            firstStep()
          }
        }} draggable={true} onDrag={() => {
          if(state.stateClassName == 'two') {
            secondStep()
          }
        }} onDragStart={e => {
          const div = <div></div> as HTMLDivElement
          e.dataTransfer?.setDragImage(div, 0, 0)
        }} > {state.text} </button>
    </div>
  );
}

export default App;
