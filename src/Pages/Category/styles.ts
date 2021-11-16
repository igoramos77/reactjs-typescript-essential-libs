import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const CategoriesGrid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;

  /* TABLET */
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  /* MOBILE */
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
