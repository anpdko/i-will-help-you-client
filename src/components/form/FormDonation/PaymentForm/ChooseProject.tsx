import { Controller, useFormContext } from 'react-hook-form';
import { typeOfAssistanceList } from '../../../../utils/typeOfAssistanceList';
import RadioInput from '../RadioInput/RadioInput';
import s from './PaymentForm.module.scss';
import basic from '../FormDonation.module.scss';

const ChooseProject = () => {
  const { control } = useFormContext();

  return (
    <div className={s.projectList}>
      {typeOfAssistanceList.map((item) => (
        <Controller
          key={item.id}
          name='project'
          rules={{ required: true }}
          control={control}
          defaultValue={item.id === 'opportunityConnect' ? item.id : null}
          render={({ field }) => (
            <>
              <RadioInput
                name={field.name}
                id={item.id}
                onChange={field.onChange}
                value={field.value}
                title={item.title}
              />
            </>
          )}
        />
      ))}
    </div>
  );
};

export default ChooseProject;
