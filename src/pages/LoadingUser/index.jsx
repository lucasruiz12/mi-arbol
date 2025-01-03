import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import LoadingLogo from '../../components/LoadingLogo';
import { IS_AUTHENTICATED } from '../../helpers/constants';

const LoadingUser = () => {
    const { user, isAuthenticated } = useAuth0();
    // const history = useHistory(); // Hook para acceder al historial de navegación

    const navigate = useNavigate();

    useEffect(() => {
        console.log("USER", user)
        console.log("authent", isAuthenticated)

        const { name, sub } = user;
        if (isAuthenticated) {
            if (user.email) {
                const dataUser = {
                    name,
                    email: user.email,
                    password: "T40s0lu7i0n5-Google"
                };
                localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(dataUser));
            } else {
                const dataUser = {
                    name,
                    email: sub,
                    password: "T40s0lu7i0n5-Facebook"
                };
                localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(dataUser));
            };
        };
    }, [isAuthenticated, user]);

    return (
        <LoadingLogo />
    );
};

export default LoadingUser;