import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Home = lazy(() => import("./components/Registration/Home"));
const Login = lazy(() => import("./components/Registration/Login"));
const SetPin = lazy(() => import("./components/Registration/SetPin"));
const VerificationCode = lazy(() => import("./components/Registration/VerificationCode"));
const GetStarted = lazy(() => import("./components/Registration/GetStarted"));
const Dispatch = lazy(() => import("./components/Dispatch/Dispatch"));
const Sender = lazy(() => import("./components/Dispatch/Sender"));
const Receiver = lazy(() => import("./components/Dispatch/Receiver"));
const DeliverySchedule = lazy(() => import("./components/Dispatch/DeliverySchedule"));
const TopUpAccount = lazy(() => import("./components/BankingDeposit/TopUpAccount"));
const TopUpWithBankTransfer = lazy(() => import("./components/BankingDeposit/TopUpWithBankTransfer"));
const TopUpWithCard = lazy(() => import("./components/BankingDeposit/TopUpWithCard"));
const AccountToTopUp = lazy(() => import("./components/BankingDeposit/AccountToTopUp"));
const RequestfromotherUsers = lazy(() => import("./components/BankingDeposit/RequestfromotherUsers"));
const AirtimeTransSuccess = lazy(() => import("./components/BankingAirtime/AirtimeTransSuccess"));
const BuyAirtime = lazy(() => import("./components/BankingAirtime/BuyAirtime"));
const BuyAirtimeandData = lazy(() => import("./components/BankingAirtime/BuyAirtimeandData"));
const BuyAirtimeVerify = lazy(() => import("./components/BankingAirtime/BuyAirtimeVerify"));
const SendMoney = lazy(() => import("./components/BankingSend/SendMoney"));
const TransferToBank = lazy(() => import("./components/BankingSend/TransferToBank"));
const TransferToPpayAcc = lazy(() => import("./components/BankingSend/TransferToPpayAcc"));
const VerifyTransfer = lazy(() => import("./components/BankingSend/VerifyTransfer"));
const ChangePassword = lazy(() => import("./components/ResetPassword/ChangePassword"));
const ForgotPassword = lazy(() => import("./components/ResetPassword/ForgotPassword"));
const SetPassword = lazy(() => import("./components/ResetPassword/SetPassword"));

function App() {
  return (
    <>
      <Router>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/setpin" component={SetPin} />
                <Route exact path="/verificationcode" component={VerificationCode} />
                <Route exact path="/getstarted" component={GetStarted} />
                <Route exact path="/dispatch" component={Dispatch} />
                <Route exact path="/sender" component={Sender} />
                <Route exact path="/receiver" component={Receiver} />
                <Route exact path="/deliveryschedule" component={DeliverySchedule} />
                <Route exact path="/topupaccount" component={TopUpAccount} />
                <Route exact path="/topupwithbanktransfer" component={TopUpWithBankTransfer} />
                <Route exact path="/topupwithcard" component={TopUpWithCard} />
                <Route exact path="/accounttotopup" component={AccountToTopUp} />
                <Route exact path="/requestfromotherusers" component={RequestfromotherUsers} />
                <Route exact path="/airtimetranssuccess" component={AirtimeTransSuccess} />
                <Route exact path="/buyairtime" component={BuyAirtime} />
                <Route exact path="/buyairtimeanddata" component={BuyAirtimeandData} />
                <Route exact path="/buyairtimeverify" component={BuyAirtimeVerify} />
                <Route exact path="/sendmoney" component={SendMoney} />
                <Route exact path="/transfertobank" component={TransferToBank} />
                <Route exact path="/transfertoppayacc" component={TransferToPpayAcc} />
                <Route exact path="/verifytransfer" component={VerifyTransfer} />
                <Route exact path="/changepassword" component={ChangePassword} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
                <Route exact path="/setpassword" component={SetPassword} />
              </Switch>
            </Router>
          </Suspense>
        </main>
      </Router>
    </>
  );
}

export default App;
