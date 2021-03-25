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
      keywordsOptionsSelected: [],
    };
  }

  getDistinctSetOfResources() {
    let arrayWithDuplicateResources = [];
    this.state.dataSet.forEach(p => arrayWithDuplicateResources = arrayWithDuplicateResources.concat(...p.resources));
    return Array.from(new Set(arrayWithDuplicateResources));
  }

  getDistinctSetOfKeywords() {
    let arrayWithDuplicateKeywords = [];
    this.state.dataSet.forEach(p => arrayWithDuplicateKeywords = arrayWithDuplicateKeywords.concat(...p.keywords));
    return Array.from(new Set(arrayWithDuplicateKeywords));
  }

  additionalResourceFilter(e) {
    const newResourceToFilter = { value: e, label: e };
    const currentSelection = this.state.resourcesOptionsSelected;
    if (!currentSelection.map(s => s.value).includes(e)) {
      this.setState({ resourcesOptionsSelected: currentSelection.concat(newResourceToFilter) });
    }
  }

  additionalKeywordFilter(e) {
    const newKeywordToFilter = { value: e, label: e };
    const currentSelection = this.state.keywordsOptionsSelected;
    if (!currentSelection.map(s => s.value).includes(e)) {
      this.setState({ keywordsOptionsSelected: currentSelection.concat(newKeywordToFilter) });
    }
  }

  onResourcesFilterChange(e) {
    this.setState({ resourcesOptionsSelected: e });
  }

  onKeywordsFilterChange(e) {
    this.setState({ keywordsOptionsSelected: e });
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

    filteredDataSet = this.state.keywordsOptionsSelected.length > 0 ? filteredDataSet.filter(p =>
        this.state.keywordsOptionsSelected.map(k => k.value).every(r => p.keywords.includes(r)))
      : filteredDataSet;

    return filteredDataSet;
  }

  render() {
    let resourcesOptions = [];
    this.getDistinctSetOfResources().forEach(k => {
      resourcesOptions = [...resourcesOptions, {value: k, label: k}];
    });

    let keywordsOptions = [];
    this.getDistinctSetOfKeywords().forEach(k => {
      keywordsOptions = [...keywordsOptions, {value: k, label: k}];
    });

    return (
      <div className="Hub">
        <header className="Hub-header">
          <a href="/policy-hub" className="header-homepage" rel="noopener noreferrer">Policy Hub</a>
          <div className="filter-box">
            <input
              name="filter-description"
              key="filter-description"
              onChange={(e) => this.onDescriptionFilterChange(e)}
              placeholder="Filter by description"
            />
          </div>
          <div className="filter-box resources-select-container">
            <Select
              value={this.state.resourcesOptionsSelected}
              onChange={(e) => this.onResourcesFilterChange(e)}
              options={resourcesOptions}
              isMulti={true}
              placeholder="Filter by resources"
            />
          </div>
          <div className="filter-box keywords-select-container">
            <Select
              value={this.state.keywordsOptionsSelected}
              onChange={(e) => this.onKeywordsFilterChange(e)}
              options={keywordsOptions}
              isMulti={true}
              placeholder="Filter by keywords"
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
                  additionalKeywordFilter={(e) => this.additionalKeywordFilter(e)}
                />
              )
          }
        </section>
      </div>
    );
  }
}

export default Hub;
