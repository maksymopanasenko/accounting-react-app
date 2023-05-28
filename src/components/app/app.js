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
                {name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3},
                {name: 'Duke S.', salary: 2500, increase: false, rise: false, id: 4}
            ],
            filter: 'all'
        };
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }
    
    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    
    render() {
        const employees = this.state.data.length;
        const {data, filter} = this.state;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className='app'>
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                
                <EmployeesList
                        data={data}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}/>

                <EmployeesAddForm data={data}/>
            </div>
        );
    }
}

export default App;