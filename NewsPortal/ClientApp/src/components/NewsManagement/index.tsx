import {
  Button,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import { Loader } from "common/";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "store/categories/actions";
import { getCategoriesLoadingSelector } from "store/categories/selectors";
import CategoryMultiselect from "./CategoryMultiselect";
import { Steps, StepsName } from "./constants";
import { styles } from "./styles";

const stepKeys = Array.from(StepsName.keys());

interface IProps extends WithStyles<typeof styles> {}

const NewsManagement = withStyles(styles)(({ classes }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const isLoadingCategories = useSelector(getCategoriesLoadingSelector);

  const [activeStepKey, setActiveStepKey] = useState<Steps>(stepKeys[0]);

  const isFirstStep = activeStepKey === 0;
  const isLastStep = activeStepKey === stepKeys.length - 1;

  const onClickNext = () => !isLastStep && setActiveStepKey(activeStepKey + 1);
  const onClickPrevious = () => !isFirstStep && setActiveStepKey(activeStepKey - 1);

  const ActiveStepComponent = {
    [Steps.Category]: isLoadingCategories ? <Loader /> : <CategoryMultiselect />,
    [Steps.Settings]: null,
    [Steps.Submit]: null,
  };

  return (
    <Paper variant="outlined" square className={classes.wrapper}>
      <Stepper activeStep={activeStepKey}>
        {stepKeys.map((step) => (
          <Step key={StepsName.get(step)}>
            <StepLabel>{StepsName.get(step)}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container className={classes.content}>
        {ActiveStepComponent[activeStepKey]}
        <Grid container spacing={2} justify="flex-end">
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={onClickPrevious}
              disabled={isFirstStep}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={onClickNext} disabled={isLastStep}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});

export default NewsManagement;
