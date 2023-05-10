import React, { FC } from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import { routes } from './list'
import Layout from '../layout/Layout';
import { useAuth } from '../providers/useAuth';
import Auth from '../pages/auth/Auth';

const Routes: FC = () => {
    const isAuth = true;
    const { user } = useAuth()

  return (
    <Router>
        <Switch>
            {
                routes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Layout>
                                    {route.auth && !user ? (
                                        <Auth />
                                    ) : (
                                        <route.element />
                                    )}
                                </Layout>
                            }
                        />
                    )
                })
            }
        </Switch>
    </Router>
  )
}

export default Routes