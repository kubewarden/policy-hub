import './Hub.css';
import * as React from 'react';
import PolicyItem from './entities/Policy';
import Select from 'react-select';

class Hub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionCriteria: "",
      dataSet: require('./data/policy-hub.json'),
      resourcesOptionsSelected: [],
    };
  }

  getDistinctSetOfResources() {
    let arrayWithDuplicateResources = [];
    this.state.dataSet.forEach(p => arrayWithDuplicateResources = arrayWithDuplicateResources.concat(...p.resources));
    return Array.from(new Set(arrayWithDuplicateResources));
  }

  additionalResourceFilter(e) {
    const newResourceToFilter = { value: e, label: e };
    const currentSelection = this.state.resourcesOptionsSelected;
    if (!currentSelection.map(s => s.value).includes(e)) {
      this.setState({ resourcesOptionsSelected: currentSelection.concat(newResourceToFilter) });
    }
  }

  onResourcesFilterChange(e) {
    this.setState({ resourcesOptionsSelected: e });
  }

  onDescriptionFilterChange(e) {
    const criteria = e.target.value;
    this.setState({ descriptionCriteria: criteria });
  }

  filter() {
    let filteredDataSet = this.state.dataSet ? this.state.dataSet.filter(p =>
        p.description.toLowerCase().includes(this.state.descriptionCriteria.toLowerCase()))
      : [];

    filteredDataSet = this.state.resourcesOptionsSelected.length > 0 ? filteredDataSet.filter(p =>
        this.state.resourcesOptionsSelected.map(k => k.value).every(r => p.resources.includes(r)))
      : filteredDataSet;

    return filteredDataSet;
  }

  render() {
    let resourcesOptions = [];
    this.getDistinctSetOfResources().forEach(k => {
      resourcesOptions = [...resourcesOptions, {value: k, label: k}];
    });

    return (
      <div className="Hub">
        <header className="Hub-header">
          <a href="/policy-hub" className="header-homepage" rel="noopener noreferrer">Policy Hub</a>
          <input
            className="filter-box"
            name="filter-description"
            key="filter-description"
            onChange={(e) => this.onDescriptionFilterChange(e)}
            placeholder="Filter by description"
          />
          <div className="resources-select-container">
            <Select
              value={this.state.resourcesOptionsSelected}
              onChange={(e) => this.onResourcesFilterChange(e)}
              options={resourcesOptions}
              isMulti={true}
              placeholder="Filter by resources"
            />
          </div>
        </header>
        <section>
          {
            this.filter()
              .map(e =>
                <PolicyItem policy={e} key={e.name}
                  descriptionCriteria={this.state.descriptionCriteria}
                  additionalResourceFilter={(e) => this.additionalResourceFilter(e)}
                />
              )
          }
        </section>
      </div>
    );
  }
}

export default Hub;
