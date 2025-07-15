
function randomColor() {
  const letters = '0123456789ABCDEF';

  function generate() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function isReadableOnWhite(hex) {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Calculate relative luminance (per WCAG)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
    return luminance < 128; // Dark enough for white text
  }

  let color;
  do {
    color = generate();
  } while (!isReadableOnWhite(color));

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