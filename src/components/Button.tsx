type colorClass = {
    Red: string;
    Pink: string;
    Blue: string;
    Orange: string;
    Black: string;
    Green: string;
    Purple: string;
    Gray: string;
};

const colorClass: colorClass = {
    Red : 'bg-red-500',
    Pink: 'bg-pink-500',
    Blue: 'bg-blue-500',
    Orange: 'bg-orange-500',
    Black: 'bg-black',
    Green: 'bg-green-500',
    Purple: 'bg-purple-500',
    Gray: 'bg-slate-500',
};

type ButtonProps = {
    color: string;
    onClick: (newColorClass: string) => void;
};

function Button(props: ButtonProps) {
    const { color, onClick } = props;

    return (
        <button
            className={`outline-none px-4 py-1 text-white rounded-full ${colorClass[color]}`}
            onClick={() => onClick(colorClass[color])}
        >
            {color}
        </button>
    );
}

export default Button;
