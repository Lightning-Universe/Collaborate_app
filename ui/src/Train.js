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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
  '&:disabled': {
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
    var optimizeCommunication = (e) => {
      props.setOptimizeCommunication(e.target.checked)
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
                <FormControlLabel labelPlacement="start" control={<Switch disabled={true} checked={true} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>Optimize Communication</Typography>} />
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
            <FormControlLabel labelPlacement="start" control={<Switch onChange={optimizeCommunication} size="small" sx={{color:"#6e58d7"}} />} label={<Typography sx={{ fontSize: 14 }}>Optimize Communication</Typography>} />
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
        aria-label="Batch Size"
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
function DeviceSlider(props) {
  var handleChange = (index, value) => {
    props.setDeviceState(value)
  };
  let devices = [];
  [...Array(props.devices).keys()].forEach(k => {
    devices.push({label: (k+1), value: (k+1)});
  });
  return (
    <Box sx={{ width: "80%", ml:1 , mb:2}}>
      <Slider
        size="small"
        aria-label="Devices"
        defaultValue={1}
        valueLabelDisplay="auto"
        marks={devices}
        min={0}
        step={null}
        max={props.devices}
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
            return (<CheckIcon fontSize="small" sx={{ fontSize: 16, color: "#43d043" }}/>)
        }
        if (complete === 'failed'){
            return (<ErrorOutlineIcon color="error" fontSize="small" sx={{ fontSize: 16 }}/>)
        }
        return (<RotateRightIcon fontSize="small" sx={{ fontSize: 16 }}/>)
    }
    return (<RadioButtonUncheckedIcon fontSize="small" sx={{ fontSize: 16 }}/>)
}

function Status(startInstallState, complete, value) {
    if (startInstallState) {
        if (complete === 'complete'){
            return (<Typography variant="body2" align="left" fontSize="small" sx={{ fontSize: 14, color: "#43d043" }}>{value}</Typography>)
        }
        if (complete === 'failed'){
            return (<Typography variant="body2" align="left" color="red" fontSize="small" sx={{ fontSize: 14 }}>{value}</Typography>)
        }
        return (<MoreHorizIcon fontSize="small" sx={{ fontSize: 16 }}/>)
    }
    return (<RadioButtonUncheckedIcon fontSize="small" sx={{ fontSize: 16 }}/>)
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
            setCheck(checks['memory'], props.setCompleteMemory)
            props.setBandwidth(checks['bandwidth'])
            props.setMemory(checks['current_memory'])
            props.setWarningMessage(checks['warning'])
            props.setDevices(checks['devices'])
            if (checks['complete']) {
                if (checks['success']) {
                    props.setEnableTrainState(true);
                }
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
            <ColorLoadingButton  sx={{mb:1, width:'100%', '& .MuiLoadingButton-loadingIndicator': { color: '#48e38e',},}} onClick={handleSetupClick} loading={!props.enableTrainState && props.startInstallState} disabled={props.enableTrainState} variant="contained">{!props.enableTrainState ? "PRE-CHECK & INSTALL" : "COMPLETE"}</ColorLoadingButton>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Grid container direction="row" alignItems="center">
                        {CheckButton(props.startInstallState, props.completeLinux)}
                        <Item>Linux</Item>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container direction="row" alignItems="center">
                        {CheckButton(props.startInstallState, props.completeCUDA)}
                        <Item>CUDA Available</Item>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container direction="row" alignItems="center">
                        {CheckButton(props.startInstallState, props.completePython)}
                        <Item>Install Requirements</Item>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container direction="row" alignItems="center">
                        {Status(props.startInstallState, props.completeMemory, props.memory)}
                        <Item>Available CUDA Memory</Item>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container direction="row" alignItems="center">
                        {Status(props.startInstallState, props.completeInternet, props.bandwidth)}
                        <Item>Internet Bandwidth</Item>
                      </Grid>
                    </Grid>
                </Grid>
            </Box>
            {
            props.warningMessage.split('\n').map(warning => (<Typography variant="body2" align="left" color="error" component="p" sx={{ letterSpacing: 1, mt:1}}>{warning}</Typography>))
            }
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
        props.setBatchSize(8192);
        props.setOptimizeMemory(true);
        props.setOptimizeCommunication(true);
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
                    <Typography variant="subtitle1" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1}}>
                        GPUs
                    </Typography>
                    {DeviceSlider(props)}
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
        props.state.flows.train_flow.vars['devices'] = props.deviceState;
        props.state.flows.train_flow.vars['optimize_communication'] = props.optimizeCommunication;
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
            if (!state.flows.train_flow.vars['stop_training']) {
                var logs = state.flows.train_flow.vars['logs'];
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
  const [deviceState, setDeviceState] = React.useState(1)
  const [devices, setDevices] = React.useState(1)
  const [batchSize, setBatchSize] = React.useState(1024)
  const [mixedPrecision, setMixedPrecision] = React.useState(false)
  const [powerSGD, setPowerSGD] = React.useState(false)
  const [optimizeCommunication, setOptimizeCommunication] = React.useState(false)
  const [optimizeMemory, setOptimizeMemory] = React.useState(false)


  const [presetConfig, setPresetConfig] = React.useState(false)

  const [completeLinux, setCompleteLinux] = React.useState('wait')
  const [completeCUDA, setCompleteCUDA] = React.useState('wait')
  const [completeInternet, setCompleteInternet] = React.useState('wait')
  const [completePython, setCompletePython] = React.useState('wait')
  const [completeMemory, setCompleteMemory] = React.useState('wait')

  const [memory, setMemory] = React.useState('')
  const [bandwidth, setBandwidth] = React.useState('')


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
        {!startTraining ? Setup({devices, setDevices, memory, setMemory, bandwidth, setBandwidth, completeLinux, setCompleteLinux, completeCUDA, setCompleteCUDA, completeInternet, setCompleteInternet, completePython, setCompletePython, completeMemory, setCompleteMemory, startInstallState, setStartInstallState, enableTrainState, setEnableTrainState, warningMessage, setWarningMessage, state, apiClient, refreshState}): null}
        {!startTraining ? Config({enableTrainState, inviteText, setInviteText, devices, setDevices, deviceState, setDeviceState, mixedPrecision, setMixedPrecision, powerSGD, setPowerSGD, setPresetConfig, presetConfig, optimizeCommunication, setOptimizeCommunication, optimizeMemory, setOptimizeMemory, batchSize, setBatchSize}): null}
        {!startTraining ? StartTrain({enableTrainState, inviteText, devices, setDevices, deviceState, mixedPrecision, powerSGD, optimizeCommunication, optimizeMemory, batchSize, startTraining, setStartTraining, stopTraining, setStopTraining, logState, setLogState, state, apiClient, refreshState}): null}
        {startTraining ? StopTrain({stopTraining, setStopTraining, setPresetConfig, enableTrainState, startTraining, setStartTraining, logState, setLogState, state, apiClient, refreshState}): null}
      </Container>
  </React.Fragment>
  );
}
