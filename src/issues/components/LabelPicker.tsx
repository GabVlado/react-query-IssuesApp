
import { FC } from 'react';
import { useLabels } from '../../hooks/useLabels';
import { LoadingIcon } from '../../shared/components/LoadingIcon';



interface Props {
    selectedLabels: string[];
    onChange: (labelName: string) => void;
}

export const LabelPicker:FC<Props> = ( {selectedLabels, onChange}) => {

    const labelQuery = useLabels();

    if (labelQuery.isLoading) {  //Por que isLoading y no fetching
        return (<LoadingIcon />);


    }

    return (
        <div>
            {
                labelQuery.data?.map(label => (
                    <span
                        key={label.id}
                        className={ `badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ?'label-active': ''}` }
                        style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
                        onClick={ () => onChange(label.name) }
                    >
                        {label.name}
                    </span>
                ))
            }

        </div>
    )
}
