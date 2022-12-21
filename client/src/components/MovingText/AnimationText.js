import MovingText from 'react-moving-text'

function AnimationText() { 
  return (
    <MovingText
          type="slideInFromTop"
        duration="1000ms"
        delay="200ms"
        direction="normal"
        timing="ease"
        iteration="3"
        fillMode="none">
       <h1 className="mt-2">
          TAŞ KAĞIT MAKAS
        </h1>
     </MovingText>
  );
}

export default AnimationText;
