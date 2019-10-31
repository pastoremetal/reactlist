import { gql } from 'apollo-boost';

export const pocSearch = gql`
    query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
        pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
            id
            status
            tradingName
            officialName
            products {
                id
                title
                rgb
                images {
                    url
                }
                productVariants {
                    price
                }
            }
        }
    }
`;
