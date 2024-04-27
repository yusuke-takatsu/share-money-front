type StatusName = 'attention' | 'success';

/**
 * NOTE: アプリケーションステータスコード増加に伴い、拡張予定
 */
const RESPONSE_CODE: { [key: string]: { status: StatusName } } = {
  '2': { status: 'success' },
  '3': { status: 'success' },
  '4': { status: 'attention' },
  '5': { status: 'attention' },
} as const;

export const responseStatus = (statusCode: number): StatusName => {
  return RESPONSE_CODE[statusCode?.toString().slice(0, 1)]?.status;
};
