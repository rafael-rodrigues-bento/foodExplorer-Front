import styled from 'styled-components';

export const Container = styled.div`
  > main {
     max-width: 136.8rem;
     padding-inline: 4rem;
     margin-inline: auto;

    > button {
      display: flex;
      align-items: center;

      font-family: 'Poppins';
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-top: 2.4rem;
      margin-bottom: 4.1rem;
      flex: 1;
      background: none;
      border: none;
      
      > svg {
        font-size: 3.2rem;
      }
    }

    > section {
        max-width: 136.8rem;
        height: 100%;
        padding-inline: 4rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        gap: 5rem;

      > .img {
        width: 38.9rem;
        height: 38.9rem;
        border-radius: 50%;

        img {
          width: 100%;
        }
      }

      > .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > h1 {
          font-family: 'Poppins';
          font-weight: 500;
          font-size: 4rem;
          line-height: 140%;
          color: ${({ theme }) => theme.COLORS.GRAY_100};
          margin-bottom: 0.8rem;
        }

        > h2 {
          font-family: 'Poppins';
          font-weight: 400;
          font-size: 2.4rem;
          line-height: 140%;
          color: ${({ theme }) => theme.COLORS.GRAY_100};
          margin-bottom: 2.6rem;
        }

        > .ingredients {
          display: flex;
          gap: 1.6rem;
          margin-bottom: 4.7rem;
        }

        > .order {
          display: flex;
          gap: 5rem;
          align-items: center;

          > .price p {
            font-size: 3.2rem;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.BLUE};
            white-space: nowrap;
          }

          > .amount {
            display: flex;
            align-items: center;
            gap: 1.4rem;

            .less-btn,
            .more-btn {
              border: none;
              background: transparent;
              color: #ffffff;
              font-weight: 700;
              font-size: 2rem;
              line-height: 160%;
              transition: transform 0.8s;

              &:hover {
                transform: scale(2);
              }
            }

            > span {
              font-weight: 700;
              font-size: 2rem;
              line-height: 160%;
              color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
          }
        }
      }
    }
  }

  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;
