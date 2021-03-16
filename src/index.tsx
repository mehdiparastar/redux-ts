import ReactDom from 'react-dom'
import App1 from './components/App';

const App = () => {
    return <div>
        <App1 />
    </div>
};

ReactDom.render(<App />, document.querySelector('#root'))