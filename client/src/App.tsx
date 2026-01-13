import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Blackjack from "./pages/games/Blackjack";
import Slots from "./pages/games/Slots";
import Roulette from "./pages/games/Roulette";
import SpinWheel from "./pages/games/SpinWheel";
import Keno from "./pages/games/Keno";
import AboutUs from "./pages/AboutUs";
import HowToPlay from "./pages/HowToPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Disclaimer from "./pages/legal/Disclaimer";
import Todo from "./pages/Todo";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/games"} component={Games} />
      <Route path={"/games/blackjack"} component={Blackjack} />
      <Route path={"/games/slots"} component={Slots} />
      <Route path={"/games/roulette"} component={Roulette} />
      <Route path={"/games/spin-wheel"} component={SpinWheel} />
      <Route path={"/games/keno"} component={Keno} />
      <Route path={"/about"} component={AboutUs} />
      <Route path={"/how-to-play"} component={HowToPlay} />
      <Route path={"/responsible-gaming"} component={ResponsibleGaming} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/disclaimer"} component={Disclaimer} />
      <Route path={"/todo"} component={Todo} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
