import { Button } from 'react-bootstrap';

interface Admin {
  role: string;
}
interface User {
  email: string;
}
export const Way2 = () => {
  function redirect(user: Admin | User) {
    if ('role' in user) {
      // use the `in` operator for typeguards since TS 2.7+
      console.log(user.role);
    } else {
      console.log(user.email);
    }
  }
  return (
    <div>
      <Button onClick={() => redirect({ role: 'Admin' })}>Admin</Button>
      <Button
        onClick={() => redirect({ email: 'vikramdungarwal10@gmail.com' })}
      >
        User
      </Button>
    </div>
  );
};
