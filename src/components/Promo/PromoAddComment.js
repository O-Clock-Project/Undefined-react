import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Formatizer } from 'formatizer';
import glamorous from 'glamorous';

// Tests & errors responses if inputs are not well completed
const required = value => (value ? undefined : 'Champ requis.');

const minLength = min => value => (value && value.length < min ? `Doit faire au minimum ${min} caractères.` : undefined);
const minLength10 = minLength(10);

const maxLength = max => value => (value && value.length > max ? `Doit faire au maximum ${max} caractères.` : undefined);
const maxLength1000 = maxLength(1000);

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

const Quote = glamorous.span({
  display: 'block',
  borderLeft: '3px solid rgba(255,255,255,0.2)',
  fontStyle: 'italic',
  paddingLeft: '.7em',
  margin: '0 1rem',
  '&:last-of-type': {
    marginBottom: '.2em',
  },
});

const Code = glamorous.span({
  display: 'block',
  background: '#3c4247',
  border: '1px solid #32373c',
  borderRadius: '.2em',
  margin: '0 1rem',
  fontFamily: 'Menlo',
  fontSize: '0.825em',
  textTransform: 'none',
});

class PromoAddComment extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  handleTruc = () => {
    console.log('Test');
  }

  render() {
    const {
      handleSubmit, submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="search_add_form">
        {/* Input Resumé */}
        <Field
          name="comment"
          label="Ajouter un commentaire"
          rows="5"
          cols="50"
          component={renderTextArea}
          validate={[required, minLength10, maxLength1000]}
        />
        <div className="comment_exemples">
          <p className="comment_exemples_exemple comment_exemples_bold">*gras*</p>
          <p className="comment_exemples_exemple comment_exemples_italic">_italique_</p>
          <p className="comment_exemples_exemple comment_exemples_crossed">~barré~</p>
          <Code>`code`</Code>
          <Code>```préformaté```</Code>
          <Quote>> citation</Quote>
          <p className="comment_exemples_exemple">###Spoiler###</p>
          <p className="comment_exemples_smiley">:smiley:</p>
          <Formatizer>:sunglasses:</Formatizer>
        </div>
        {/* Button Envoyer */}
        <div className="profile-edit-validate">
          <button className="profile-edit-btn" type="submit" disabled={submitting}>Envoyer</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'promoAddComment', // a unique identifier for this form
})(PromoAddComment);
