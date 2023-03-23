import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employees accaunting at Exemplary Company</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Regarded: {increased}</h2>
        </div>
    );
}

export default AppInfo;