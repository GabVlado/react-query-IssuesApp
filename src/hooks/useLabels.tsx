import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/githubApi';
import { Label } from '../issues/interfaces/label';
import { sleep } from '../helpers/sleep';



const getLabels = async (): Promise<Label[]> => {

    await sleep(2);
    const { data } = await githubApi.get<Label[]>('/labels')
    console.log(data);
    return data;

}


export const useLabels = () => {

    const labelQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        // staleTime: 1000 * 60 * 60
        // initialData:   Es la data inicial por tanto no hace fetching y la toma como Fresh

        placeholderData: [
            {
                "id": 791921801,
                "node_id": "MDU6TGFiZWw3OTE5MjE4MDE=",
                "url": "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
                "name": "❤️",
                "color": "ffffff",
                "default": false,
            },
            {
                "id": 710400704,
                "node_id": "MDU6TGFiZWw3MTA0MDA3MDQ=",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Renderer",
                "name": "Component: Test Renderer",
                "color": "006b75",
                "default": false,
            },
        ]
    })


    return labelQuery;
}
