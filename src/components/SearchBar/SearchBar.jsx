import { Formik } from 'formik';
import { ReactComponent as SearchIcon } from '../img/search.svg';
import { Form, Field } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <button
            className="SearchForm-button"
            type="submit"
            disabled={isSubmitting}
            aria-label="Search images"
          >
            <SearchIcon width="20" height="20" />
          </button>
          <Field
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      )}
    </Formik>
  );
};
