
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function TillButton({name}){
    let color = randomColor();
    return (
        <button className="drink-button" style={{ backgroundColor: color }}>
            {name}
        </button>
    )
}

export default TillButton;