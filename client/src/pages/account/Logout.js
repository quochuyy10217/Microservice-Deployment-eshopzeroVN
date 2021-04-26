/* /src/components/auth/logout.jsx */

import * as React from "react";
import { AuthConsumer } from "./AuthProvider";

export const Logout = () => (
    <AuthConsumer>
        {({ logout }) => {
            logout();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);