import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > input {
    height: 4.8rem;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme }) => theme.COLORS.BG_400};

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    font-size: 1.6rem;

    &::placeholder {
      padding-left: 1.4rem;
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
