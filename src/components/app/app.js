import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800},
                {name: 'Alex M.', salary: 3000},
                {name: 'Carl W.', salary: 5000},
                {name: 'Duke S.', salary: 2500},
            ]
        }
    }
    
    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className='app'>
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel />
                </div>
            </div>
        );
    }
}

export default App;