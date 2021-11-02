import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

import { commerce } from '../../../lib/commerce';
import Circle from '../../../assets/CIRCLE.png';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [err, setErr] = useState([])
  const classes = useStyles();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateTokenFrom('cart', cart.id);

        setCheckoutToken(token);
      } catch (error) {
        setErr(error)
        console.error(error);
      }
    };

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    // console.log(data)
    nextStep();
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div className={classes.confirmation}>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <img alt="circle logo" src={Circle} style={{ height: '10vw' }} />
          <Typography variant="h5">You will receive an email shortly with shipping information.</Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Order: {order.customer_reference}</Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <h3>{err.message}</h3>
        <br />
        <h4>Please enter a valid email address.</h4>
        <br />
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br />
      <Button component={Link} to="/" variant="outlined" type="button">
        Home
      </Button>
    </>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} style={{ marginTop: '40vh' }} />
    ) : (
      <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} backStep={backStep} />
    );
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper} style={{ marginTop: '26vh' }}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
