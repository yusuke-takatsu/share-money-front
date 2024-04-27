import { memo } from 'react';
import styled from '@emotion/styled';
import { Alert, Snackbar } from '@mui/material';
import { FilledAttentionIcon } from '@/components/icons/FilledAttentionIcon';
import { FilledSuccess } from '@/components/icons/FilledSuccess';
import { responseStatus } from '@/lib/axios/mappingStatus';
import { SnackBar } from '@/lib/stores/snackBar';
import { borderColor } from '@/utils/themeClient';
import { CancelIcon } from '../icons/CancelIcon';

const CustomMuiSnackbar = styled(Snackbar)`
  top: 98px !important;
`;

const BaseAlert = styled(Alert)`
  &.MuiAlert-root {
    align-items: center;
    background-color: #fff !important;
    border: 1px solid ${borderColor.lightGray};
    border-radius: 6px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
    max-width: 500px;
    min-width: 392px;
    padding: 12px 20px 12px 12px;
    white-space: break-spaces;
    width: 100%;
  }

  .MuiAlert-icon {
    padding: 0;
  }

  .MuiAlert-action {
    padding-left: 24px;
    padding-top: 0;
  }

  .MuiAlert-message {
    padding: 0;
  }
`;

const AlertCloseIcon = styled('div')`
  cursor: pointer;
`;

const AlertTitle = styled('p')`
  font-size: 14px;
  font-weight: 600;
`;

const ALERT_STATUS_ICONS = {
  attention: <FilledAttentionIcon />,
  success: <FilledSuccess />,
};

type Props = {
  snackbar: SnackBar;
  onClose: () => void;
};

export const BasicSnackBar = memo(({ snackbar, onClose }: Props) => {
  const { isOpen, status, message } = snackbar;

  return (
    <CustomMuiSnackbar
      open={isOpen}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={onClose}
    >
      <BaseAlert
        icon={ALERT_STATUS_ICONS[responseStatus(status)]}
        action={
          <AlertCloseIcon onClick={onClose}>
            <CancelIcon />
          </AlertCloseIcon>
        }
      >
        <AlertTitle>{message}</AlertTitle>
      </BaseAlert>
    </CustomMuiSnackbar>
  );
});
