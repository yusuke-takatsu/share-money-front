import CustomCard from '@/components/card/CustomCard';
import { InputText } from '@/components/inputs/InputText';
import { SelectBox } from '@/components/inputs/SelectBox';
import styled from '@emotion/styled';
import React from 'react';
import { COMPOSITIONS, INCOMES, JOBS } from '../hooks/schema';
import { useProfile } from '../hooks/useProfile';
import { Button } from '@/components/button/Button';

const InputTextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ButtonWrapper = styled('div')`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 40px;
`;

const Profile = () => {
  const { register, handleSubmit, onSubmit, errors } = useProfile();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomCard title="プロフィール登録">
        <InputTextWrapper>
          <InputText
            label="名前"
            placeholder="山田 花子"
            register={register('name')}
            error={errors.name !== undefined}
            helperText={errors.name?.message}
          />
          <InputText
            label="年齢"
            type="number"
            placeholder="20"
            register={register('age')}
            error={errors.age !== undefined}
            helperText={errors.age?.message}
          />
          <SelectBox
            options={JOBS}
            name="job"
            label="職業"
            register={register}
            errors={errors.job}
          />
          <SelectBox
            options={INCOMES}
            name="income"
            label="年収"
            register={register}
            errors={errors.income}
          />
          <SelectBox
            options={COMPOSITIONS}
            name="composition"
            label="世帯"
            register={register}
            errors={errors.composition}
          />
          <InputText
            label="自己紹介"
            placeholder="都内で一人暮らしをしています。よろしくお願いします！"
            register={register('body')}
            error={errors.body !== undefined}
            helperText={errors.body?.message}
          />
        </InputTextWrapper>
        <ButtonWrapper>
          <Button type="submit">登録</Button>
        </ButtonWrapper>
      </CustomCard>
    </form>
  );
};

export default Profile;
