import React from 'react';

export class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: props.employees,
      filter: '',
      filtered: props.employees,
      loading: true
    };

    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(event) {
    const value = event.target.value;
    this.setState({filter: value});
    let e = this.state.employees;
    e = e.filter(i => i.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    this.setState({filtered: e});
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" value={this.state.filter} onChange={this.updateFilter}/>
        </div>
        <div>{`FILTER: ${this.state.filter}`}</div>
        <ul className="employees-list">
          { this.state.filtered.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
