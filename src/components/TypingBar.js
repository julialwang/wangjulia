import { TypeAnimation } from 'react-type-animation';

const TypingBar = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          '> software engineer,',
          500,
          '> software engineer, cozy bookworm,', //  Continuing previous Text
          500,
          '> software engineer, cozy bookworm, and full-time full-sender.',
          1000,
          '> software engineer, cozy bookworm, and full-time full-sender.',
          1000,
          '> software engineer, cozy bookworm, and full-time full-sender.',
          1000,
          '> software engineer, cozy bookworm',
          500,
          '> software engineer',
          500,
        ]}
        speed={20}
        repeat={Infinity}
        style={{ fontSize: '1em', fontFamily: 'Roboto Mono', color:'#C6CA53' }}
      />
    </div>
  );
};

export default TypingBar;