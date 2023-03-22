import { useForm } from 'react-hook-form';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [formData, setFormData] = React.useState(null);

  const onSubmit = (data) => setFormData(data);
  const { formatMessage } = useIntl();

  return (
    <div className='register-form'>
      <h2><FormattedMessage id='register_form:register_title'></FormattedMessage></h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='register-form__fieldset'>
          <input placeholder={formatMessage({ id: 'register_form:first_name' })} type='text' {...register('firstName', { required: true })} />
          {errors?.firstName && <p className='register-form__error'><FormattedMessage id='register_form:required_field'></FormattedMessage></p>}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <input placeholder={formatMessage({ id: 'register_form:last_name' })} type='text' {...register('lastName', { required: true, minLength: 3 })} />
          {errors?.lastName && <p className='register-form__error'><FormattedMessage id='register_form:required_field_3_chars'></FormattedMessage></p>}
        </fieldset>
        <button type='submit'><FormattedMessage id='register_form:submit_button'></FormattedMessage></button>
      </form>

      <h2><FormattedMessage id='register_form:form_data_title'></FormattedMessage></h2>
      <p>First name: {formData?.firstName}</p>
      <p>Last name: {formData?.lastName}</p>

      <h2><FormattedMessage id='register_form:live_data_title'></FormattedMessage></h2>
      <p>First name: {watch('firstName')}</p>
      <p>Last name: {watch('lastName')}</p>
    </div>
  );
};

export default Register;
