import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const Otp = ({ onChange }) => {
  const [otp, setOtp] = useState('');
  const handleChange = otp => {
    setOtp(otp);
    onChange(otp);
  };
  return (
    <OtpInput
      value={otp}
      onChange={handleChange}
      numInputs={6}
      separator={<span style={{ width: '8px' }}></span>}
      isInputNum={true}
      inputStyle={{
        border: '1px solid transparent',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
        fontSize: '18px',
        color: '#000',
        fontWeight: '400',
        caretColor: 'blue',
      }}
      focusStyle={{
        border: '1px solid #CFD3DB',
        outline: 'none',
      }}
    />
  );
};

export default Otp;
