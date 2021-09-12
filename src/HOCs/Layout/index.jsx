import {React, Fragment} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Layout(props) {
    return (
        <Fragment>
            <Header />
                {props.children}
            <Footer />
        </Fragment>
    );
}

export default Layout;