import React from "react";
import {
	useLocation,
	useRouteMatch,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import HomePage from "./routes/Home/HomePage";
import GamePage from "./routes/Game/GamePage";
import MenuHeader from "./components/menuHeader/MenuHeader";
import AboutPage from "./routes/About/AboutPage";
import NotFoundPage from "./routes/NotFound/NotFoundPage";
import ContactPage from "./routes/Contact/ContactPage";
import Footer from "./components/footer/Footer";
import s from "./App.module.css";
import cn from "classnames";
import { FireBaseContext } from "./context/firebaseContext";
import Firebase from "./service/firebase";

const App = () => {
	const location = useLocation();
	const isPadding =
		location.pathname === "/" || location.pathname === "/game/board";

	return (
		<FireBaseContext.Provider value={new Firebase()}>
			<Switch>
				<Route path={"/404"} component={NotFoundPage} />
				<Route>
					<>
						<MenuHeader bgActive={!isPadding} />
						<div
							className={cn(s.wrap, {
								[s.isHomePage]: isPadding,
							})}
						>
							<Switch>
								<Route path="/" exact component={HomePage} />
								<Route path="/game" component={GamePage} />
								<Route path="/about" component={AboutPage} />
								<Route
									path="/contact"
									component={ContactPage}
								/>
								<Route render={() => <Redirect to="/404" />} />
							</Switch>
						</div>
						<Footer />
					</>
				</Route>
			</Switch>
		</FireBaseContext.Provider>
	);
};

export default App;
