import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FaPlusCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';

import SearchAddTag from './SearchAddTag';

// Tests & errors responses if inputs are not well completed
const required = value => (value ? undefined : 'Champ requis.');

const minLength = min => value => (value && value.length < min ? `Doit faire au minimum ${min} caractères.` : undefined);
const minLength10 = minLength(10);

const url = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i;
const validUrl = value => (value && !url.test(value)
  ? 'URL invalide' : undefined);

// Render for input
const renderField = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <div className="search_add_form_line">
    <label className="search_add_form_label">
      {label} :
      <input className="search_add_form_input" {...input} placeholder={label} type={type} />
    </label>
    <div>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.any.isRequired,
};

// Render for textarea
const renderTextArea = ({
  input, label, rows, cols, meta: { touched, error, warning },
}) => (
  <div className="search_add_form_line">
    <label className="search_add_form_label">
      {label} :
      <textarea {...input} className="search_add_form_textarea" rows={rows} cols={cols} placeholder={label} />
    </label>
    <div>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

renderTextArea.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  meta: PropTypes.any.isRequired,
};

// For bind the modal with the principal div of this app
Modal.setAppElement('#root');

class SearchAddForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    filters: PropTypes.objectOf(PropTypes.array.isRequired).isRequired,
    addTag: PropTypes.func.isRequired,
    showAddTag: PropTypes.func.isRequired,
    showFormTag: PropTypes.bool.isRequired,
  }

  openModal = () => {
    const { showAddTag } = this.props;
    showAddTag();
  };

  render() {
    const {
      handleSubmit, submitting, filters, addTag, showFormTag,
    } = this.props;

    return (
      // Using Fragment for enclose the render in place a <div>
      <Fragment>
        <form onSubmit={handleSubmit} className="search_add_form">
          {/* Input Titre */}
          <Field
            name="title"
            type="text"
            label="Titre"
            component={renderField}
            validate={[required, minLength10]}
          />
          {/* Input Resumé */}
          <Field
            name="resume"
            label="Resumé"
            rows="5"
            cols="50"
            component={renderTextArea}
            validate={required}
          />
          {/* Input URL */}
          <Field
            name="url"
            type="text"
            label="Lien vers la ressource"
            component={renderField}
            validate={[required, validUrl]}
          />
          {/* Input Image */}
          <Field
            name="image"
            type="text"
            label="URL image de présentation"
            component={renderField}
            validate={validUrl}
          />
          {/* Input Date de publication */}
          <Field
            name="published_at"
            type="date"
            label="Date de publication"
            component={renderField}
            validate={required}
          />
          {/* Input Auteur */}
          <Field
            name="author"
            type="text"
            label="Auteur"
            component={renderField}
            validate={required}
          />
          {/* Select Support */}
          <div className="search_add_form_line">
            <label className="search_add_form_label">Sélectionner un support :
              <Field
                name="select_type"
                className="search_add_form_select"
                component="select"
              >
                {filters.supports.map(support => (
                  <option value={support.name} key={support.id}>{support.name}</option>
                ))}
              </Field>
            </label>
          </div>
          {/* Select Langue */}
          <div className="search_add_form_line">
            <label className="search_add_form_label">Sélectionner une langue :
              <Field
                name="select_language"
                className="search_add_form_select"
                component="select"
              >
                {filters.locales.map(locale => (
                  <option value={locale.name} key={locale.id}>{locale.name}</option>
                ))}
              </Field>
            </label>
          </div>
          {/* Select Niveau */}
          <div className="search_add_form_line">
            <label className="search_add_form_label">Sélectionner un niveau :
              <Field
                name="select_level"
                className="search_add_form_select"
                component="select"
              >
                {filters.difficulties.map(difficultie => (
                  <option value={difficultie.name} key={difficultie.id}>{difficultie.name}</option>
                ))}
              </Field>
            </label>
          </div>
          {/* Select TAG 1 */}
          <div className="search_add_form_line">
            <label className="search_add_form_label">Sélectionner un tag :
              <Field
                name="select_tag1"
                className="search_add_form_select"
                component="select"
                validate={required}
              >
                <option>Aucun</option>
                {filters.tags.map(tag => (
                  <option value={tag.label} key={tag.id}>{tag.label}</option>
                ))}
              </Field>
            </label>
            {/* Option for add a tag with a modal window */}
            <div className="search_add_form_addTag" onClick={this.openModal}><FaPlusCircle /> Ajouter un tag</div>
          </div>
          {/* Select TAG 2 */}
          <div className="search_add_form_line">
            <label className="search_add_form_label">Sélectionner un tag :
              <Field
                name="select_tag2"
                className="search_add_form_select"
                component="select"
                validate={required}
              >
                <option>Aucun</option>
                {filters.tags.map(tag => (
                  <option value={tag.label} key={tag.id}>{tag.label}</option>
                ))}
              </Field>
            </label>
          </div>
          {/* Select TAG 3 */}
          <div className="search_add_form_line">
            <label className="search_add_form_label">Sélectionner un tag :
              <Field
                name="select_tag3"
                className="search_add_form_select"
                component="select"
                validate={required}
              >
                <option>Aucun</option>
                {filters.tags.map(tag => (
                  <option value={tag.label} key={tag.id}>{tag.label}</option>
                ))}
              </Field>
            </label>
          </div>
          {/* Button Envoyer */}
          <div className="profile-edit-validate">
            <button className="profile-edit-btn" type="submit" disabled={submitting}>Envoyer</button>
          </div>
        </form>
        {/* Modal */}
        <Modal
          isOpen={showFormTag}
          onRequestClose={this.openModal}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="Modal"
        >
          <MdClose className="Modal-btn" onClick={this.openModal} />
          <SearchAddTag onSubmit={addTag} />
        </Modal>
      </Fragment>
    );
  }
}

export default reduxForm({
  form: 'searchAddForm', // a unique identifier for this form
})(SearchAddForm);
