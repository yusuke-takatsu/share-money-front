import styled from '@emotion/styled';
import { AccountCircleOutlined } from '@mui/icons-material';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PATH } from '@/utils/constants/path';
import logo from '@/utils/assets/logo__fixed.png';
import { borderColor } from '@/utils/themeClient';
import { OutlinedLogoutIcon } from '../icons/logoutIcon';

const BaseHeader = styled('header')`
  align-items: center;
  background: #fbb950;
  border-bottom: 1px solid ${borderColor.gray};
  display: flex;
  height: 75px;
  justify-content: space-between;
  padding: 0 32px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const HeaderLeft = styled('div')`
  align-items: center;
  display: flex;
`;

const HeaderLogo = styled(Link)`
  align-items: center;
  display: flex;
  gap: 24px;

  span {
    font-weight: 600;
  }
`;

const HeaderMenu = styled('div')`
  display: flex;
  gap: 24px;
  color: #fff;
`;

const HeaderMenuItem = styled('button')`
  align-items: center;
  display: flex;
  gap: 4px;

  span {
    font-weight: 600;
  }
`;

export const Header = () => {
  const router = useRouter();

  const handleClickMypage = () => router.push(PATH.MYPAGE.INDEX);

  const handleClickLogout = async () => {
    console.log('log out');
  };

  return (
    <BaseHeader>
      <HeaderLeft>
        <HeaderLogo href={PATH.MYPAGE.INDEX}>
          <Image
            src={logo}
            width={180}
            height={40}
            alt="Share Money"
            priority
          />
        </HeaderLogo>
      </HeaderLeft>
      <HeaderMenu>
        <HeaderMenuItem onClick={handleClickMypage}>
          <span>マイページ</span>
          <AccountCircleOutlined width="20px" height="20px" />
        </HeaderMenuItem>
        <HeaderMenuItem onClick={handleClickLogout}>
          <span>ログアウト</span>
          <OutlinedLogoutIcon width="20px" height="20px" />
        </HeaderMenuItem>
      </HeaderMenu>
    </BaseHeader>
  );
};
