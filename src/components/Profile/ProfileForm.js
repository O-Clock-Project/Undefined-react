import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Champ requis.');
const minLength = min => value => (value && value.length < min ? `Doit faire au minimum ${min} caractères.` : undefined);
const minLength2 = minLength(2);
const minLength4 = minLength(4);
const minLength8 = minLength(8);
const maxLength = max => value => (value && value.length > max ? `Doit faire au maximum ${max} caractères.` : undefined);
const maxLength10 = maxLength(10);
const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Adresse email invalide' : undefined);
const passwordsMatch = (value, allValues) => (value !== allValues.password ? 'Les mots de passe ne correspondent pas.' : undefined);

const renderField = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <div className="profile-edit-form-line">
    <label className="profile-edit-form-label">
      {label} :
      <input {...input} placeholder={label} type={type} className="profile-edit-form-input" />
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

const EditProfilForm = (props) => {
  const {
    handleSubmit, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit} className="profile-edit-form">
      <h2 className="annonce-subtitle">Informations</h2>
      <Field
        name="firstname"
        type="text"
        label="Prénom *"
        component={renderField}
        validate={[required, minLength2]}
      />
      <Field
        name="lastname"
        type="text"
        label="Nom *"
        component={renderField}
        validate={[required, minLength2]}
      />
      <Field
        name="email"
        type="email"
        label="Email *"
        component={renderField}
        validate={[required, email]}
      />
      <Field
        name="birthday"
        type="date"
        label="Date de naissance *"
        component={renderField}
        validate={required}
      />
      <Field
        name="github"
        type="text"
        label="Pseudo GitHub *"
        component={renderField}
        validate={required}
      />
      <Field
        name="zip"
        type="text"
        label="Code postal *"
        component={renderField}
        validate={[required, minLength4, maxLength10]}
      />
      <h2 className="annonce-subtitle">Changement de mot de passe</h2>
      <Field
        name="old_password"
        type="password"
        label="Mot de passe actuel"
        component={renderField}
        // validate={minLength8}
      />
      <Field
        name="password"
        type="password"
        label="Nouveau mot de passe"
        component={renderField}
        validate={minLength8}
      />
      <Field
        name="confirmPassword"
        type="password"
        label="Confirmation du nouveau mot de passe"
        component={renderField}
        validate={passwordsMatch}
      />
      <div className="profile-edit-legend">
        * : Champs obligatoires
      </div>
      <div id="edit-error" />
      <div className="profile-edit-validate">
        <button className="profile-edit-btn" type="submit" disabled={submitting}>Valider</button>
      </div>
    </form>
  );
};

EditProfilForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'editProfilForm', // a unique identifier for this form
})(EditProfilForm);
