import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Champ requis.');
const minLength = min => value => (value && value.length < min ? `Doit faire au minimum ${min} caractères.` : undefined);
const minLength2 = minLength(2);

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

const SearchAddTag = (props) => {
  const {
    handleSubmit, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit} className="search_add_tag">
      <Field
        name="tag"
        type="text"
        label="Créer un nouveau tag"
        component={renderField}
        validate={[required, minLength2]}
      />
      <div className="profile-edit-validate">
        <button className="profile-edit-btn" type="submit" disabled={submitting}>Créer</button>
      </div>
    </form>
  );
};

SearchAddTag.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'searchAddTag', // a unique identifier for this form
})(SearchAddTag);
