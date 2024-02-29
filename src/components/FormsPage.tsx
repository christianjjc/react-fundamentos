import { useForm } from 'react-hook-form';

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues: {
      email: 'cjjc@cjjc.com',
      password: '123456',
    },
  });

  console.log(watch('email'));

  function onSubmit(miFrom: FormInputs) {
    console.log(miFrom);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="email" placeholder="email" id="email" {...register('email', { required: true })} />
          <input type="password" placeholder="password" id="password" {...register('password', { required: true })} />
          <button type="submit">Ingresar</button>
        </div>
      </form>
      <pre>{JSON.stringify(formState, null, 2)}</pre> {/* //*esto es el estado del formulario */}
    </>
  );
};
