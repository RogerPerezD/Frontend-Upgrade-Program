
import React from 'react';

interface PropsSmall{
    value: number
}

export const Small: React.FC<PropsSmall> = React.memo(({ value }) => {
  console.log('Se llamo small');
  return <small> { value } </small>
});
