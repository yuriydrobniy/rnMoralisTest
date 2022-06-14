import React, {memo, useCallback} from 'react';
import {Text, View, Image} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

// components
import TextInputField from '../TextInputField/TextInputField';
import StereoImageIcon from '../StereoImageIcon/StereoImageIcon';
import MainButton from '../MainButton/MainButton';

// styles
import styles from './styles';

interface NameDescriptionFormType {
  onSetNameDescription: (data: any) => void;
  imageData: string;
}

const NameDescriptionForm = ({
  onSetNameDescription,
  imageData,
}: NameDescriptionFormType) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    resetField,
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
    },
  });
  const onSubmit = useCallback(
    data => {
      console.log(data);
      onSetNameDescription(data);
    },
    [onSetNameDescription],
  );

  return (
    <View style={styles.flex}>
      <View style={styles.container}>
        {imageData ? (
          <Image style={styles.image} source={{uri: imageData}} />
        ) : (
          <View style={styles.iconWrapper}>
            <StereoImageIcon name={'sentiment-dissatisfied'} size={50} />
            <Text style={styles.iconText}>No Image</Text>
          </View>
        )}
        <View style={styles.flex}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputField
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                onClear={() => resetField('name')}
                deleteButton={true}
                placeholder={'Name'}
              />
            )}
            name="name"
          />
          {errors.name && <Text>Name is required.</Text>}
        </View>
      </View>

      <View style={styles.flex}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputField
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              multiline={true}
              onClear={() => resetField('description')}
              deleteButton={true}
              height={100}
              placeholder={'Description'}
            />
          )}
          name="description"
        />
        {errors.description && <Text>Description is required.</Text>}

        <MainButton onPress={handleSubmit(onSubmit)} text="Submit" />
      </View>
    </View>
  );
};

export default memo(NameDescriptionForm);
