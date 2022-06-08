import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    overflow-x: scroll;
`

export const Content = styled.div`
    width: inherit;
`

export const Table = styled.table`
    width: 100%;

    th, td {
        background-color: #191919;
        border: 1px solid #f4f4f4;
        color: #f4f4f4;
        padding: .55em .95em;
        text-align: center;
    }
`

export const TableDataContainer = styled.td`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 1.75em;

    .image__container {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #f4f4f4;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }

        @media screen and (max-width: 500px) {
            width: 30px;
            height: 30px;
        }
    }
`