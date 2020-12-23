import { AppsHeader } from './apps/AppsHeader.jsx';
import { MailApp } from './apps/Mail/MailApp.jsx';
import { KeepApp } from './apps/Keep/KeepApp.jsx';
import { About } from './pages/About.jsx';
import { Home } from './pages/home.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;


// Simple React Component
export function App() {
  return (
    <Router>
      <section className="app">
        <AppsHeader />
        <Switch>
          <Route exact path="/mail" component={MailApp} />
          <Route exact path="/keep" component={KeepApp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </section>
    </Router >
  );
}

// Using Class:
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <header>
//                     <h1>Lets Play</h1>
//                 </header>
//                 <main>
//                     <Home />
//                 </main>
//             </div>
//         )
//     }
// }
