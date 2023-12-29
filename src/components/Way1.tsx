import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from 'react-bootstrap';

export const Way1 = () => {
  const themeOptions = ['light', 'dark', 'system'];
  const [selectedTheme, setSelectedTheme] = useState('light');

  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl mb-5 font-semibold'>Themes</h1>
      <ThemeOptions
        themeOptions={themeOptions}
        setSelectedTheme={setSelectedTheme}
      />
      <p className='mt-10'>
        Selected theme:<strong>{selectedTheme}</strong>
      </p>
    </section>
  );
};

const ThemeOptions = <T extends React.ReactNode>({
  themeOptions,
  setSelectedTheme,
}: {
  themeOptions: T[];
  setSelectedTheme: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <ul className='list-disc'>
      {themeOptions.map((theme: T, index) => (
        <li key={index}>
          <Button onClick={() => setSelectedTheme(theme)}>{theme}</Button>
        </li>
      ))}
    </ul>
  );
};
