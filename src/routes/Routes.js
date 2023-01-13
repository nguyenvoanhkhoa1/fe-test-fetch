import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routeUrls from "../configs/route";
import { RedemptionView } from "./views";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<RedemptionView />} />
        <Route path={routeUrls.redemption.path} element={<RedemptionView />} />
        <Route
          path="*"
          element={<Navigate to={routeUrls.redemption.path} replace />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
