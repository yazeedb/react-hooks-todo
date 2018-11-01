import { useState } from 'react';

export default initialValue => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: event => {
      setValue(event.target.value);
    },
    reset: () => setValue('')
  };
};
