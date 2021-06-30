import './Hub.css';
import * as React from 'react';
import PolicyItem from './entities/Policy';
import Select from 'react-select';
import DataSet from './data/policy-hub.json';
import LogoKubewarden from './logo-kubewarden.svg'
import LogoNoText from './logo-no-text.svg'

function adjustSectionHeight() {
  const footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
  console.log(footerHeight);
  const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
  console.log(headerHeight);
  document.getElementsByTagName('section')[0].style.minHeight =
      (window.innerHeight - footerHeight - headerHeight- 31) + "px";
}

class Hub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionCriteria: "",
      dataSet: DataSet,
      resourcesOptionsSelected: [],
      keywordsOptionsSelected: [],
    };
  }

  componentDidMount() {
    adjustSectionHeight();
  }
  componentDidUpdate() {
    adjustSectionHeight();
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

    const allCounter = Object.keys(this.state.dataSet).length;
    const filteredData = this.filter();
    const visibleCounter = filteredData.length;

    return (
      <div className="Hub">
        <header className="Hub-header">
          <div className="header-links">
            <a href="/" className="header-homepage" rel="noopener noreferrer">
              <img src={LogoNoText} alt="Kubewarden Policy Hub Logo" /> POLICY HUB
            </a>
            <a href="https://www.kubewarden.io/" className="main-site">KUBEWARDEN</a>
          </div>
          <div className="filters-wrapper">
            <div className="filter-box filter-description">
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
            <div className="toolbar">
              <b>{visibleCounter}</b> {visibleCounter > 1 ? "items" : "item"} of <b>{allCounter}</b>
            </div>
          </div>
        </header>
        <section>
          {
            filteredData.map(e =>
                <PolicyItem policy={e} key={e.name}
                  descriptionCriteria={this.state.descriptionCriteria}
                  additionalResourceFilter={(e) => this.additionalResourceFilter(e)}
                  additionalKeywordFilter={(e) => this.additionalKeywordFilter(e)}
                />
              )
          }
        </section>
        <footer>
          <a href="https://www.kubewarden.io/" className="kubewarden-logo">
            <img src={LogoKubewarden} alt="Kubewarden main site logo" />
          </a>
        </footer>
      </div>
    );
  }
}

export default Hub;
