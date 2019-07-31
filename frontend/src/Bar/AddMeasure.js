import React, { useContext } from 'react';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import {
    Button, Grid, LinearProgress,
} from '@material-ui/core';
import { format } from 'date-fns'

import Store from '../Store';
import { addMeasure } from '../api';


const form = ({ isSubmitting, handleSubmit, submitForm }) => (
    <form onSubmit={handleSubmit}>
        <Grid container spacing={2}
            alignItems='center'
        >
            <Grid item>
                <Field
                    id="date"
                    type="datetime-local"
                    label="Date"
                    name="date"
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    id="value"
                    type="number"
                    label="Value"
                    name="value"
                    component={TextField}
                />
            </Grid>
            {isSubmitting && <LinearProgress />}
            <Grid item>
                <Button size='large'
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                >Add</Button>
            </Grid>
        </Grid>
    </form>
)


const AddMeasure = () => {
    const store = useContext(Store);
    return (
        <Formik
            initialValues={{
                'date': format(new Date(), 'YYYY-MM-DDTHH:mm'),
                'value': 0
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                values.date = new Date(values.date).toISOString()
                addMeasure(store, values);
            }}
        >
            {form}
        </Formik>
    );
}

export default AddMeasure
