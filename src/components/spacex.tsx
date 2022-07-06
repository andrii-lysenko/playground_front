import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from '~/api/apollo/queries/spacex';

export const SpaceX = () => {
    const { loading, error, data } = useQuery(GET_LAUNCHES);
    console.log({ loading, error });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Mission name</th>
                    <th>Rocket name</th>
                </tr>
            </thead>
            <tbody>
                {data.launches.map((item: any) => {
                    return (
                        <tr key={item.mission_name}>
                            <td>{item.mission_name}</td>
                            <td>{item.rocket.rocket_name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
