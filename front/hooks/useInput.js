import React, { useState, useCallback } from 'react';

export default (initialValue = null) => { //hooks 중복 제거
   const [value, setValue] = useState(initialValue);
   const handler = useCallback((e) => {
      setValue(e.target.value)
   }, []);
   return [value, handler];
}