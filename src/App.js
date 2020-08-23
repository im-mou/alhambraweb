import React from 'react';
import MyHeader from './Components/Header';
import AppContext from './Context/AppContext';
import AppStore from './Store/AppStore';

function App(props) {
    return (
        <AppContext.Provider value={AppStore}>
            <MyHeader />
            {props.children}
        </AppContext.Provider>
    );
}

export default App;
