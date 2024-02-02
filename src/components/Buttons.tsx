type AllowedColor = 'red' | 'pink' | 'blue' | 'orange' | 'blue' | 'green' | 'purple' | 'slate';
export type AllowedColorClass = `bg-${AllowedColor}-500`;

type ColorClass = Array<{
    title: AllowedColor,
    color: AllowedColorClass
}>

const colorClasses: ColorClass = [
    {
        title: 'red',
        color: 'bg-red-500'
    },
    {
        title: 'pink',
        color: 'bg-pink-500'
    },
    {
        title: 'blue',
        color: 'bg-blue-500'
    },
    {
        title: 'orange',
        color: 'bg-orange-500'
    },
    {
        title: 'green',
        color: 'bg-green-500'
    },
    {
        title: 'purple',
        color: 'bg-purple-500'
    },
    {
        title: 'slate',
        color: 'bg-slate-500'
    },
];

type ButtonProps = {
    onClick: (newColorClass: AllowedColorClass) => void;
};

function Buttons(props: ButtonProps) {
    const { onClick } = props;

    return (
        <>
            {colorClasses.map((colorObject) => (
                <button onClick={() => onClick(colorObject.color)} className={`outline-none px-4 py-1 text-white rounded-full ${colorObject.color}`}>{`${colorObject.title.charAt(0).toUpperCase()}${colorObject.title.slice(1)}`}</button>
            ))}
        </>
    );
}

export default Buttons;