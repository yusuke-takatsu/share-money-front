import {
  maxNumberSchema,
  maxStringSchema,
  requiredNumberSchema,
} from '@/utils/helpers/genericSchema';
import { z } from 'zod';

export const profileSchema = z.object({
  name: maxStringSchema('名前', 255),
  age: maxNumberSchema('年齢', 100),
  job: requiredNumberSchema('職業'),
  income: requiredNumberSchema('年収'),
  composition: requiredNumberSchema('世帯'),
  body: maxStringSchema('自己紹介', 1000),
});

export type ProfileRegisterForm = z.infer<typeof profileSchema>;

export const defaultValues: ProfileRegisterForm = {
  name: '',
  age: '',
  job: 0,
  income: 0,
  composition: 0,
  body: '',
};

export const JOBS = [
  { value: 1, label: 'メーカー' },
  { value: 2, label: '商社' },
  { value: 3, label: '小売' },
  { value: 4, label: '鉄道・航空' },
  { value: 5, label: '運輸・物流' },
  { value: 6, label: '電力・ガス・エネルギー' },
  { value: 7, label: 'ホテル・旅行' },
  { value: 8, label: '医療・福祉' },
  { value: 9, label: '不動産' },
  { value: 10, label: '金融' },
  { value: 11, label: '人材サービス' },
  { value: 12, label: '教育' },
  { value: 13, label: 'コンサルティング・調査' },
  {
    value: 14,

    label: 'ソフトウエア・インターネット・通信',
  },
  { value: 15, label: '広告・出版・マスコミ' },
  { value: 16, label: '公社・団体・官公庁' },
  { value: 17, label: 'その他' },
];

export const INCOMES = [
  { value: 1, label: '0~200万円' },
  { value: 2, label: '200~400万円' },
  { value: 3, label: '400~600万円' },
  { value: 4, label: '600~800万円' },
  { value: 5, label: '800~1000万円' },
  { value: 6, label: '1000万円以上' },
];

export const COMPOSITIONS = [
  { value: 1, label: '1人暮らし' },
  { value: 2, label: '恋人と同棲で2人' },
  { value: 3, label: '夫婦のみで2人' },
  { value: 4, label: '子供1人' },
  { value: 5, label: '子供2人' },
  { value: 6, label: '子供3人' },
  { value: 7, label: '子供4人' },
  { value: 8, label: 'その他' },
];
