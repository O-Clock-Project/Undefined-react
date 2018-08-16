/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

/**
 * Local import
 */
// Composants


// Styles et assets
import './search.sass';

/**
 * Code
 */
class FormSearch extends React.Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    filters: PropTypes.objectOf(PropTypes.array.isRequired).isRequired,
    status: PropTypes.oneOf(['loading', 'loaded']).isRequired,
    changeSelectValue: PropTypes.func.isRequired,
    resetSelectValue: PropTypes.func.isRequired,
  };

  handleChange = (evt) => {
    // I prepare my action creator
    const { changeSelectValue } = this.props;
    // I catch the name of the selector
    const { name } = evt.target;
    // I catch the value of the selector
    const { value } = evt.target;
    // I change the state with action creator
    changeSelectValue(name, value);
  }

  handleClick = () => {
    // Catch my action creator
    const { resetSelectValue } = this.props;
    // Update the state with the action creator
    resetSelectValue();
  }

  render() {
    const { data, filters, status } = this.props;

    return (
      <form id="search_form">
        {/* Title */}
        <div id="search_form_intro">
          <p id="search_form_title">Filtrer les bookmarks</p>
          <button type="button" className="search_form_reset" onClick={this.handleClick}>Reset</button>
        </div>

        {/* Loading */}
        {status === 'loading' && (
          <div className="loading">
            {/* <ReactLoading
              type="spinningBubbles"
              color="#e8ddcb"
              className="react_loading"
              width="5%"
              height="5%"
            /> */}
          </div>)}

        {/* Filters */}
        {status === 'loaded'
          && (
          <div>
            {/* Categories */}
            <div className="search_form_tags">
              {/* Category type */}
              <div className="search_form_tag">
                <p className="search_form_label">Veuillez selectionner un support :</p>
                <select name="select_type" value={data.select_type} className="search_form_select" onChange={this.handleChange}>
                  <option value="All">Tous</option>
                  {filters.supports.map(support => (
                    <option value={support.name} key={support.id}>{support.name}</option>
                  ))}
                </select>
              </div>
              {/* Category language */}
              <div className="search_form_tag">
                <p className="search_form_label">Veuillez selectionner une langue :</p>
                <select name="select_language" value={data.select_language} className="search_form_select" onChange={this.handleChange}>
                  <option value="All">Tous</option>
                  {filters.difficulties.map(difficultie => (
                    <option value={difficultie.name} key={difficultie.id}>{difficultie.name}</option>
                  ))}
                </select>
              </div>
              {/* Category level */}
              <div className="search_form_tag">
                <p className="search_form_label">Veuillez selectionner un niveau :</p>
                <select name="select_level" value={data.select_level} className="search_form_select" onChange={this.handleChange}>
                  <option value="All">Tous</option>
                  {filters.locales.map(locale => (
                    <option value={locale.name} key={locale.id}>{locale.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="search_form_tags">
              {/* Category tag1 */}
              <div className="search_form_tag">
                <p className="search_form_label">Champs libre 1</p>
                <select name="select_tag1" value={data.select_tag1} className="search_form_select" onChange={this.handleChange}>
                  <option value="All">Tous</option>
                  {filters.tags.map(tag => (
                    <option value={tag.label} key={tag.id}>{tag.label}</option>
                  ))}
                </select>
              </div>
              {/* Category tag2 */}
              <div className="search_form_tag">
                <p className="search_form_label">Champs libre 2</p>
                <select name="select_tag2" value={data.select_tag2} className="search_form_select" onChange={this.handleChange}>
                  <option value="All">Tous</option>
                  {filters.tags.map(tag => (
                    <option value={tag.label} key={tag.id}>{tag.label}</option>
                  ))}
                </select>
              </div>
              {/* Category tag3 */}
              <div className="search_form_tag">
                <p className="search_form_label">Champs libre 3</p>
                <select name="select_tag3" value={data.select_tag3} className="search_form_select" onChange={this.handleChange}>
                  <option value="All">Tous</option>
                  {filters.tags.map(tag => (
                    <option value={tag.label} key={tag.id}>{tag.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          )
        }

      </form>
    );
  }
}

/**
 * Export
 */
export default FormSearch;
