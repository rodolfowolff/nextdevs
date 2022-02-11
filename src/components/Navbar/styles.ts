import styled, { css } from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: bold;

  > a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  }
`;

export const NavbarLinks = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      gap: ${theme.grid.gutter};

      a {
        flex: 1;
        color: ${theme.colors.white};
        font-weight: ${theme.font.weights.medium};
        font-size: ${theme.font.sizes.medium};
        transition: all 0.3s ease-in-out;
        position: relative;

        &:hover {
          color: ${theme.colors["white-200"]};

          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.primary};
            bottom: -20px;
            left: 0;
          }
        }
      }
    }
  `} 
`;
