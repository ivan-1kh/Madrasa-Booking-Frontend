import React from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import ChooseDatePage from "./pages/ChooseDatePage";
import ChooseTeacherPage from "./pages/ChooseTeacherPage";
import PaymentPage from "./pages/PaymentPage";
import ProgressBarPage from "./pages/ProgressBarPage";

export default (props) => {
    const [loggedUser, setLoggedUser] = React.useState(null);
    const [progress, setProgress] = React.useState(0);
    const [chosenYear, setChosenYear] = React.useState(null);
    const [chosenMonth, setChosenMonth] = React.useState(null);
    const [chosenDay, setChosenDay] = React.useState(null);
    const [chosenTime, setChosenTime] = React.useState(null);

    return (
        <div className='App'>
            
            {progress == 0 ? <LoginPage {...props} ProgressBarPage={ProgressBarPage} setProgress={setProgress} progress={progress} loggedUser={loggedUser} /> : <></>}
            {progress == 1 ?
                <ChooseDatePage
                    {...props}
                    chosenYear={chosenYear}
                    setChosenYear={setChosenYear}
                    chosenMonth={chosenMonth}
                    setChosenMonth={setChosenMonth}
                    chosenDay={chosenDay}
                    setChosenDay={setChosenDay}
                    chosenTime={chosenTime}
                    setChosenTime={setChosenTime}
                    ProgressBarPage={ProgressBarPage}
                    setProgress={setProgress}
                    progress={progress}
                    loggedUser={loggedUser}
                /> : <></>}
            {progress == 2 ? <ChooseTeacherPage {...props}
            
            chosenYear={chosenYear}
            setChosenYear={setChosenYear}
            chosenYear={chosenMonth}
            setChosenYear={setChosenMonth}
            chosenYear={chosenDay}
            setChosenYear={setChosenDay}
            chosenYear={chosenTime}
            setChosenYear={setChosenTime}
            ProgressBarPage={ProgressBarPage} setProgress={setProgress} progress={progress} loggedUser={loggedUser} /> : <></>}
            {progress == 3 ? <PaymentPage {...props} ProgressBarPage={ProgressBarPage} setProgress={setProgress} progress={progress} loggedUser={loggedUser} /> : <></>}

           
        </div>
    );
};
