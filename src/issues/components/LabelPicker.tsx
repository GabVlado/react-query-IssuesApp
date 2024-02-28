import { useQuery } from '@tanstack/react-query';

export const LabelPicker = () => {

    const getLabels = async () => {
        const res = await fetch('https://api.github.com/repos/facebook/react/labels');
        const data = await res.json();
        console.log(data);
        return data;

    }


    const labelQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels
    })

    return (
        <div>
            <span
                className="badge rounded-pill m-1 label-picker"
                style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
            >
                Primary
            </span>

        </div>
    )
}
