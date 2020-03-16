import FuseUtils from "@fuse/utils";
import { authRoles } from "app/auth";
import { useSelector } from "react-redux";

function LoggedIn(props) {
    const user = useSelector(({ auth }) => auth.user);
    return FuseUtils.hasPermission(authRoles.user, user.role) ? props.children : null;
}

export default LoggedIn;
