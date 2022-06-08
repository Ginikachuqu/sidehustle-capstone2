import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: .85em 2.5em;
`

export const ContainerInner = styled.div`
    width: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;

    .product__card {
        min-height: 300px;
        width: 220px;
        padding: .85em 1.25em;
        border-radius: .45em;
        background: #b5b5b5;
        color: #151515;
        
        &-inner {
            height: 100%;
            width: 100%;

            .product__image {
                height: 50%;
                width: 100%;
                border-radius: .45em;

                img {
                    height: 100%;
                    width: inherit;
                    object-fit: cover;
                    border-radius: .45em;
                }
            }

            .product__details {
                height: 50%;
                width: 100%;

                &-inner {
                    h2 {
                        font-size: 1.45rem;
                        font-weight: bold;
                        line-height: .95em;
                        margin: .85em 0;
                    }

                    .product__price {
                        display: flex;
                        flex-direction: column;
                        
                        span {
                            font-size: .85rem;
                        }
                    }
                }
            }
        }
    }

    
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`