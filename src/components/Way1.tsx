import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

type ThemeOptionsProps<T> = {
  themeOptions: T[];
  onThemeClick: (x: T) => void;
};

export const Way1 = () => {
  const themeOptions = [1, 2, 3];
  const [selectedTheme, setSelectedTheme] = useState(4);

  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl mb-5 font-semibold'>Themes</h1>
      <ThemeOptions
        themeOptions={themeOptions}
        onThemeClick={(x) => setSelectedTheme(x)}
      />
      <p className='mt-10'>
        Selected theme:<strong>{selectedTheme}</strong>
      </p>
    </section>
  );
};

const ThemeOptions = <T extends React.ReactNode>({
  themeOptions,
  onThemeClick,
}: ThemeOptionsProps<T>) => {
  return (
    <ul className='list-disc'>
      {themeOptions.map((theme: T, index) => (
        <li key={index}>
          <Button onClick={() => onThemeClick(theme)}>{theme}</Button>
        </li>
      ))}
    </ul>
  );
};
