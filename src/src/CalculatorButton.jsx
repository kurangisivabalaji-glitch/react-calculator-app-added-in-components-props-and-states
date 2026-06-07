// ఇది ఒక విడి బటన్ కాంపోనెంట్
// Props ద్వారా లేబుల్ మరియు క్లిక్ ఫంక్షన్ ని తీసుకుంటుంది
function CalculatorButton({ label, onClick, className }) {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default CalculatorButton;