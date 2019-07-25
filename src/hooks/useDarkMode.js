import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = () => {
  const [mode, setMode] = useLocalStorage('key1');

  useEffect( () => {
    return mode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
  }, []);
}
