import { TextInput } from '../../UI';

interface EmailProps {
  className: string;
}

const Email = ({ className }: EmailProps) => {
  return (
    <TextInput
      type='email'
      id='email'
      placeholder='mail@example.com'
      required={true}
      regexp={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
      message='Please write your email in the format mail@example.com'
      title='Email *'
      classNameContainer={className}
    />
  );
};

export default Email;
