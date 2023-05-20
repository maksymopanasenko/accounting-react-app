import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

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
            ],
            filter: 'all'
        }
    }
    
    render() {
        const employees = this.state.data.length;
        const {filter} = this.state;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className='app'>
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter filter={filter} />
                </div>
                
                <EmployeesList
                        data={this.state.data}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}/>

                <EmployeesAddForm data={this.state.data}/>
            </div>
        );
    }
}

export default App;