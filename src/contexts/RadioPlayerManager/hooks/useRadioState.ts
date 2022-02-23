import { useState } from 'react';
import IChannel from '../../../interfaces/IChannel';

export default function useRadioState(c: IChannel) {
  const [title, setTitle] = useState(); //Название трека и автора

  return {
    title,
    setTitle,
  };
}
