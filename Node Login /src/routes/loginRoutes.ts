import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if(req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403);
  res.send('Not Permitted');
}

const router = Router();

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password: pass } = req.body;

  if(email && pass && email === 'user@mail.com' && pass === 'password') {
    req.session = { loggedIn: true }
    res.redirect('/');

  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if(req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <h1>You're logged in</h1>
        <a href="/logout">Logout</a>
      </div>
    `)

  } else {
    res.send(`
      <div>
        <h1>You're not logged in</h1>
        <a href="/login">Login</a>
      </div>
    `)
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route');
})

export { router };