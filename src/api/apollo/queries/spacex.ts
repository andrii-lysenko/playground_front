import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
    query Launches {
        launches(limit: 5) {
            mission_name
            mission_id
            rocket {
                rocket_name
                rocket {
                    company
                    name
                    mass {
                        kg
                    }
                }
            }
            launch_site {
                site_name
            }
            links {
                article_link
                video_link
            }
            launch_date_local
        }
    }
`;
