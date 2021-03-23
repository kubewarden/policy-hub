import './Hub.css';
import * as React from 'react';
import PolicyItem from './entities/Policy';

class Hub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionCriteria: "",
      dataSet: require('./data/policy-hub.json'),
    };
  }

  onDescriptionFilterChange(e) {
    const criteria = e.target.value;
    this.setState({ descriptionCriteria: criteria });
  }

  filter() {
    return this.state.dataSet ? this.state.dataSet.filter(p =>
      p.description.toLowerCase().includes(this.state.descriptionCriteria.toLowerCase()))
      : [];
  }

  render() {
    return (
      <div className="Hub">
        <header className="Hub-header">
          <a href="/policy-hub" rel="noopener noreferrer">Policy Hub</a>
          <input
            className="filter-box"
            name="filter-description"
            key="filter-description"
            onChange={(e) => this.onDescriptionFilterChange(e)}
            placeholder="Filter by description"
          />
        </header>
        <section>
          {
            this.filter()
              .map(e =>
                <PolicyItem policy={e} key={e.name}
                  descriptionCriteria={this.state.descriptionCriteria}
                />
              )
          }
        </section>
      </div>
    );
  }
}

export default Hub;
