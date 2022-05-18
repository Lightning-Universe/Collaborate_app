import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CheckIcon from '@mui/icons-material/Check';
import Slider from '@mui/material/Slider';
import MuiTooltip, { tooltipClasses }  from '@mui/material/Tooltip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#6e58d7",
  '&:hover': {
    backgroundColor: "#614eb9",
  },
}));
const ColorLoadingButton = styled(LoadingButton)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#6e58d7",
  '&:hover': {
    backgroundColor: "#614eb9",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border:0,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
const LightTooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 0,
    fontSize: 11,
  },
}));

function Options(props){
    var mixedPrecisionChange = (e) => {
      props.setMixedPrecision(e.target.checked)
    };
    var powerSGDChange = (e) => {
      props.setPowerSGD(e.target.checked)
    };
    var overlapCommunication = (e) => {
      props.setOverlapCommunication(e.target.checked)
    };
    var optimizeMemory = (e) => {
      props.setOptimizeMemory(e.target.checked)
    };
    if (props.presetConfig) {
        return (
        <Box sx={{ width: "100%", display:'flex'}}>
            <FormGroup row={true}>
                <FormControlLabel labelPlacement="start" control={<Switch disabled={true} checked={true} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>Mixed Precision</Typography>} />
                <FormControlLabel labelPlacement="start" control={<Switch disabled={true} checked={true} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>PowerSGD</Typography>} />
                <FormControlLabel labelPlacement="start" control={<Switch disabled={true} checked={true} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>Overlap Communication</Typography>} />
                <FormControlLabel labelPlacement="start" control={<Switch disabled={true} checked={true} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>Optimize GPU Memory</Typography>} />
            </FormGroup>
        </Box>
        );
    }
    return (
    <Box sx={{ width: "100%", display:'flex', mb: 2, mt:1}}>
        <FormGroup row={true}>
            <FormControlLabel labelPlacement="start" control={<Switch onChange={mixedPrecisionChange}size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>Mixed Precision</Typography>} />
            <FormControlLabel labelPlacement="start" control={<Switch onChange={powerSGDChange} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>PowerSGD</Typography>} />
            <FormControlLabel labelPlacement="start" control={<Switch onChange={overlapCommunication} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>Overlap Communication</Typography>} />
            <FormControlLabel labelPlacement="start" control={<Switch onChange={optimizeMemory} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>Optimize GPU Memory</Typography>} />
        </FormGroup>
    </Box>
    );
}
function DiscreteBatchSizeSlider(props) {
  var handleChange = (index, value) => {
    props.setBatchSize(value)
  };
  return (
    <Box sx={{ width: "80%", ml:1 , mb:2}}>
      <Slider
        size="small"
        aria-label="Compression"
        defaultValue={8192}
        valueLabelDisplay="auto"
        step={512}
        marks={[{label:'4096', value:4096}, {label:'8192', value:8192}, {label:'16384', value:16384}]}
        min={0}
        max={16384}
        onChange={handleChange}
        sx={{color: "#FFFFFF"}}
        disabled={props.presetConfig}
      />
    </Box>
  );
}
function DiscreteCompressionSlider(props) {
  var states = ['None', 'FP16', 'Adaptive']
  var handleChange = (index, value) => {
    props.setCompressionState(states[value])
  };
  return (
    <Box sx={{ width: "80%", ml:1 , mb:2}}>
      <Slider
        size="small"
        aria-label="Compression"
        defaultValue={2}
        valueLabelDisplay="off"
        step={1}
        marks={[{label:'None', value:0}, {label:'FP16', value:1}, {label:'Adaptive FP16/INT8', value:2}]}
        min={0}
        max={2}
        onChange={handleChange}
        sx={{color: "#FFFFFF"}}
        disabled={props.presetConfig}
      />
    </Box>
  );
}

function CheckButton(startInstallState, complete) {
    if (startInstallState) {
        if (complete === 'complete'){
            return (<CheckIcon fontSize="small" sx={{ fontSize: 16 }}/>)
        }
        if (complete === 'failed'){
            return (<ErrorOutlineIcon fontSize="small" sx={{ fontSize: 16 }}/>)
        }
        return (<RotateRightIcon fontSize="small" sx={{ fontSize: 16 }}/>)
    }
    return (<RadioButtonUncheckedIcon fontSize="small" sx={{ fontSize: 16 }}/>)
// all the buttons need their own state for start and completion.
// the way it should work is when the start install state is checked, we change icon
// when the local prop changes from
}

function setCheck(check, set_prop_fn){
    if (check != null) {
        if (check === true) {
            set_prop_fn('complete');
        } else {
            set_prop_fn('failed');
        }
     }
}
function Setup(props) {

  var sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  var handleSetupClick = (event) => {
     if (props.startInstallState) {
          return;
        }
        props.setStartInstallState(true);
        console.log(props.state)
        props.state.flows.setup_flow.vars['start'] = true;
        props.apiClient.setState(props.state);
        props.refreshState();

        function check_fn() {
            props.apiClient.getState().then(check)
        }

        function check(state){
            var checks = state.flows.setup_flow.works.environment_check.vars
            setCheck(checks['cuda'], props.setCompleteCUDA)
            setCheck(checks['linux'], props.setCompleteLinux)
            setCheck(checks['python'], props.setCompletePython)
            setCheck(checks['internet'], props.setCompleteInternet)
            if (checks['complete']) {
                props.setEnableTrainState(true);
            } else {
                console.log("rechecking state", props.state)
                sleep(1000).then(check_fn);
            }
        }
        props.apiClient.getState().then(check)

  }

  return (
    <React.Fragment>
        <Paper sx={{ p: 2, display: 'flex', mb:0.5, mt:2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
            <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3, mb:1 }}>
                SETUP
            </Typography>
            <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1, mb:1 }}>
                Ensure that your environment and internet connection are ready for collaborative training.
            </Typography>
            <ColorLoadingButton onClick={handleSetupClick} loading={!props.enableTrainState && props.startInstallState} disabled={props.enableTrainState} variant="contained" sx={{ mb:1, width:'100%' }}>{!props.enableTrainState ? "PRE-CHECK & INSTALL" : "COMPLETE"}</ColorLoadingButton>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                      <Grid container direction="row" alignItems="center">
                        {CheckButton(props.startInstallState, props.completeLinux)}
                        <Item>Linux</Item>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container direction="row" alignItems="center">
                        {CheckButton(props.startInstallState, props.completeCUDA)}
                        <Item>CUDA Available</Item>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container direction="row" alignItems="center">
                        {CheckButton(props.startInstallState, props.completeInternet)}
                        <Item>Sufficient Internet Connection</Item>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container direction="row" alignItems="center">
                        {CheckButton(props.startInstallState, props.completePython)}
                        <Item>Python Environment</Item>
                      </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="body2" align="left" color="error" component="p" sx={{ letterSpacing: 1, mb:1, mt:1}}>
                {props.warningMessage}
            </Typography>
          </Paper>
    </React.Fragment>
  );
}
function Config(props) {
  var onTextChange = (e) => {
      props.setInviteText(e.target.value);
      // todo: this should be the works responsibility somehow
      if (e.target.value === 'LIT'){
        if (props.presetConfig){
            return;
        }
        props.setMixedPrecision(true);
        props.setPowerSGD(true);
        props.setCompressionState('Adaptive');
        props.setBatchSize(8192);
        props.setOptimizeMemory(true);
        props.setOverlapCommunication(true);
        props.setPresetConfig(true);
      } else {
        props.setPresetConfig(false);
      }

  }

  return (
    <React.Fragment>
        <Paper sx={{ p: 2, display: 'flex', mb:0.5, mt:2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
            <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3 }}>
                CONFIGURE
            </Typography>
            <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1, mb:2}}>
                Configure your collaborative training run. We will configure the Lightning Trainer for you!
            </Typography>
            <TextField
              id="outlined-textarea"
              label="Joining a collaborative training run? Paste your invite here."
              placeholder="collaborative-..."
              multiline
              onChange={onTextChange}
              sx ={{mb:2}}
            />
            {props.presetConfig && <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1, mb:2}}>
                Joining the Global Lightning Collaborative run, we'll select the configuration for you.
            </Typography>
            }
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <LightTooltip title="All machines connected will accumulate to this batch size before performing a global update step." followCursor>
                <Box>
                    <Typography variant="subtitle1" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1}}>
                        Collaborative Batch Size
                    </Typography>
                </Box>
            </LightTooltip>
            {DiscreteBatchSizeSlider(props)}
                </Grid>
                <Grid item xs={6}>
                            <LightTooltip title="Reduces communication bottlenecks by reducing precision." followCursor>
                <Box>
                    <Typography variant="subtitle1" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1}}>
                        Compression
                    </Typography>
                </Box>
            </LightTooltip>
            {DiscreteCompressionSlider(props)}
                </Grid>
            </Grid>
            {Options(props)}
        </Paper>
    </React.Fragment>
  );
}
function StartTrain(props) {
  var trainClick = (event) => {
     if (props.startTraining) {
          return;
        }
        props.setStartTraining(true);
        props.setStopTraining(false);

        props.state.flows.train_flow.vars['start_training'] = true;
        props.state.flows.train_flow.vars['invite_link'] = props.inviteText;
        props.state.flows.train_flow.vars['mixed_precision'] = props.mixedPrecision;
        props.state.flows.train_flow.vars['power_sgd'] = props.powerSGD;
        props.state.flows.train_flow.vars['compression_state'] = props.compressionState;
        props.state.flows.train_flow.vars['overlap_communication'] = props.overlapCommunication;
        props.state.flows.train_flow.vars['optimize_memory'] = props.optimizeMemory;
        props.state.flows.train_flow.vars['batch_size'] = props.batchSize;
        props.apiClient.setState(props.state);

        function logs_fn() {
            props.apiClient.getState().then(logs);
        }

        var sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        function logs(state){
            console.log(state.flows.train_flow.vars['stop_training']);
            if (!state.flows.train_flow.vars['stop_training']) {
                var logs = state.flows.train_flow.works.train.vars['logs'];
                props.setLogState(logs);
                sleep(500).then(logs_fn);
            }
        }
        props.apiClient.getState().then(logs)
  }
  return (
    <React.Fragment>
        <Paper sx={{ p: 2, display: 'flex', mb:0.5, mt:2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3 }}>
                        TRAIN
                    </Typography>
                    <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1}}>
                        Start training on your machine.
                    </Typography>
                </Grid>
                <Grid item xs={6}  align="center">
                    <ColorButton onClick={trainClick} disabled={!props.enableTrainState} variant="contained" sx={{ mt:1, display: 'flex', width:'50%'}}>START TRAINING</ColorButton>
                </Grid>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}
function StopTrain(props) {
  var trainClick = (event) => {
     if (props.stopTraining) {
          return;
        }
        props.setStopTraining(true);
        props.setStartTraining(false);
        props.setPresetConfig(false);

        function stop_training(state){
            state.flows.train_flow.vars['start_training'] = false;
            state.flows.train_flow.vars['stop_training'] = true;
            props.apiClient.setState(state);
            console.log(props.apiClient.getState().then(function temp(state) {console.log(state)}))
        }

        props.apiClient.getState().then(stop_training)


  }
  return (
    <React.Fragment>
        <Paper sx={{ p: 2, display: 'flex', mb:0.5, mt:2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3 }}>
                        TRAIN
                    </Typography>
                    <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1}}>
                        Training started. Logs should appear on the left soon.
                    </Typography>
                </Grid>
                <Grid item xs={6}  align="center">
                    <ColorButton onClick={trainClick} disabled={!props.enableTrainState} variant="contained" sx={{ mt:1, display: 'flex', width:'50%'}}>STOP TRAINING</ColorButton>
                </Grid>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}
export default function Train(props){

  const [startInstallState, setStartInstallState] = React.useState(false)
  const [enableTrainState, setEnableTrainState] = React.useState(false)
  const [warningMessage, setWarningMessage] = React.useState('')
  const [startTraining, setStartTraining] = React.useState(false)
  const [stopTraining, setStopTraining] = React.useState(false)
  const [inviteText, setInviteText] = React.useState('')
  const [compressionState, setCompressionState] = React.useState('Adaptive')
  const [batchSize, setBatchSize] = React.useState(1024)
  const [mixedPrecision, setMixedPrecision] = React.useState(false)
  const [powerSGD, setPowerSGD] = React.useState(false)
  const [overlapCommunication, setOverlapCommunication] = React.useState(false)
  const [optimizeMemory, setOptimizeMemory] = React.useState(false)


  const [presetConfig, setPresetConfig] = React.useState(false)

  const [completeLinux, setCompleteLinux] = React.useState('wait')
  const [completeCUDA, setCompleteCUDA] = React.useState('wait')
  const [completeInternet, setCompleteInternet] = React.useState('wait')
  const [completePython, setCompletePython] = React.useState('wait')

  var state = props.state;
  var apiClient = props.apiClient;
  var refreshState = props.refreshState;
  var logState = props.logState;
  var setLogState = props.setLogState;

  return (
  <React.Fragment>
      <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', width:'50%'}}>
        <Typography variant="h2" align="left" color="text.secondary" component="p" sx={{ ml: 1, letterSpacing: 3 }}>
          Lightning Collaborative
        </Typography>
        <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ ml: 1, letterSpacing: 1 }}>
          Join our collaborative training run, using Lightning Flash to train a translation model!
        </Typography>
        {!startTraining ? Setup({completeLinux, setCompleteLinux, completeCUDA, setCompleteCUDA, completeInternet, setCompleteInternet, completePython, setCompletePython, startInstallState, setStartInstallState, enableTrainState, setEnableTrainState, warningMessage, state, apiClient, refreshState}): null}
        {!startTraining ? Config({enableTrainState, inviteText, setInviteText, compressionState, setCompressionState, mixedPrecision, setMixedPrecision, powerSGD, setPowerSGD, setPresetConfig, presetConfig, overlapCommunication, setOverlapCommunication, optimizeMemory, setOptimizeMemory, batchSize, setBatchSize}): null}
        {!startTraining ? StartTrain({enableTrainState, inviteText, compressionState, mixedPrecision, powerSGD, overlapCommunication, optimizeMemory, batchSize, startTraining, setStartTraining, stopTraining, setStopTraining, logState, setLogState, state, apiClient, refreshState}): null}
        {startTraining ? StopTrain({stopTraining, setStopTraining, setPresetConfig, enableTrainState, startTraining, setStartTraining, logState, setLogState, state, apiClient, refreshState}): null}
      </Container>
  </React.Fragment>
  );
}
