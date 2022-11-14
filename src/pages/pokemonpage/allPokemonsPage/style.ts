import styled from 'styled-components';

export const AllPokemonsPageContainer = styled.div`
    padding: 0.5rem;
    width: 33%;
    display: flex;
    flex: none;
    align-content: stretch;
    box-sizing: border-box;

    @media (max-width: 1024px) {
    width: 50%;
    }

    @media (max-width: 300px) {
    width: 100%;
    }
`

export const AllPokemonsPageHeader = styled.div`
    width: 100%;
    height: 50%;
`


export const ItemWrapper = styled.div`
  flex: 1;
  text-align: center;
  font-size: 80%;
  padding: 1rem 1rem;
  border: 1px solid var(gray);
  white-space: nowrap;
`

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
