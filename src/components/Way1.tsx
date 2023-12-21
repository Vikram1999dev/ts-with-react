import { Button } from 'react-bootstrap';

type Color = 'red' | 'blue' | 'green' | 'white';

type ButtonProps = {
  backgroundColor: Color;
  fontSize: number;
  textColor: Color;
  padding: [number, number, number, number];
};

export const Way1 = ({
  backgroundColor,
  fontSize,
  textColor,
  padding,
}: ButtonProps) => {
  return (
    <Button
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: fontSize,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      }}
    >
      {backgroundColor}
    </Button>
  );
};
