import './Hub.css';
import * as React from 'react';
import PolicyItem from './entities/Policy';

class Hub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abstractCriteria: "",
      dataSet: require('./data/policy-hub.json'),
    };
  }

  onAbstractFilterChange(e) {
    const criteria = e.target.value;
    this.setState({ abstractCriteria: criteria });
  }

  filter() {
    return this.state.dataSet ? this.state.dataSet.filter(p =>
      p.abstract.toLowerCase().includes(this.state.abstractCriteria.toLowerCase()))
      : [];
  }

  render() {
    return (
      <div className="Hub">
        <header className="Hub-header">
          <a className="link"
            href="/policy-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policy Hub
          </a>
        </header>
        <section>
          <div className="filter-box">
            <input
              name="filter-abstract"
              key="filter-abstract"
              onChange={(e) => this.onAbstractFilterChange(e)}
              placeholder="Filter by abstract"
            />
          </div>
          {
            this.filter()
              .map(e =>
                <PolicyItem policy={e} key={e.name}
                  abstractCriteria={this.state.abstractCriteria}
                />
              )
          }
        </section>
      </div>
    );
  }
}

export default Hub;
