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
import MuiTooltip, { tooltipClasses } from '@mui/material/Tooltip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CopyBlock, dracula } from "react-code-blocks";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const ColorButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#6e58d7",
  '&:hover': {
    backgroundColor: "#614eb9",
  },
}));
const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);
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
  border: 0,
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

function Options(props) {
  var powerSGDChange = (e) => {
    props.setPowerSGD(e.target.checked)
  };
  var optimizeCommunication = (e) => {
    props.setOptimizeCommunication(e.target.checked)
  };
  var optimizeMemory = (e) => {
    props.setOptimizeMemory(e.target.checked)
  };
  if (props.presetConfig || props.flowRunning) {
    return (
      <Box sx={{ width: "100%", display: 'flex' }}>
        <FormGroup row={true}>
          <FormControlLabel labelPlacement="start" control={<Switch disabled={true} checked={props.optimizeCommunication} size="small" sx={{ color: "#6e58d7" }} />} label={<Typography sx={{ fontSize: 14 }}>Optimize Communication</Typography>} />
          <FormControlLabel labelPlacement="start" control={<Switch disabled={true} checked={props.optimizeMemory} size="small" sx={{ color: "#6e58d7" }} />} label={<Typography sx={{ fontSize: 14 }}>Optimize GPU Memory</Typography>} />
          <FormControlLabel labelPlacement="start" control={<Switch disabled={true} checked={props.powerSGD} size="small" sx={{ color: "#6e58d7" }} />} label={<Typography sx={{ fontSize: 14 }}>PowerSGD</Typography>} />
        </FormGroup>
      </Box>
    );
  }
  return (
    <Box sx={{ width: "100%", display: 'flex', mb: 2, mt: 1 }}>
      <FormGroup row={true}>
        <FormControlLabel labelPlacement="start" control={<Switch onChange={optimizeCommunication} size="small" sx={{ color: "#6e58d7" }} />} label={<Typography sx={{ fontSize: 14 }}>Optimize Communication</Typography>} />
        <FormControlLabel labelPlacement="start" control={<Switch onChange={optimizeMemory} size="small" sx={{ color: "#6e58d7" }} />} label={<Typography sx={{ fontSize: 14 }}>Optimize GPU Memory</Typography>} />
        <FormControlLabel labelPlacement="start" control={<Switch onChange={powerSGDChange} size="small" sx={{ color: "#6e58d7" }} />} label={<Typography sx={{ fontSize: 14 }}>PowerSGD</Typography>} />
      </FormGroup>
    </Box>
  );
}
function DiscreteBatchSizeSlider(props) {
  var handleChange = (index, value) => {
    props.setBatchSize(value)
  };
  return (
    <Box sx={{ width: "80%", ml: 1, mb: 2 }}>
      <Slider
        size="small"
        aria-label="Batch Size"
        defaultValue={8192}
        valueLabelDisplay="auto"
        step={512}
        marks={[{ label: '4096', value: 4096 }, { label: '8192', value: 8192 }, { label: '16384', value: 16384 }]}
        min={0}
        max={16384}
        onChange={handleChange}
        sx={{ color: "#FFFFFF" }}
        disabled={props.presetConfig || props.flowRunning}
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
    devices.push({ label: (k + 1), value: (k + 1) });
  });
  return (
    <Box sx={{ width: "80%", ml: 1, mb: 2 }}>
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
        sx={{ color: "#FFFFFF" }}
        disabled={props.flowRunning}
      />
    </Box>
  );
}

function CheckButton(checksFailed, flowRunning, complete) {
  if (flowRunning || checksFailed) {
    if (complete === 'complete') {
      return (<CheckIcon fontSize="small" sx={{ fontSize: 16, color: "#43d043" }} />)
    }
    if (complete === 'failed') {
      return (<ErrorOutlineIcon color="error" fontSize="small" sx={{ fontSize: 16 }} />)
    }
    return (<RotateRightIcon fontSize="small" sx={{ fontSize: 16 }} />)
  }
  return (<RadioButtonUncheckedIcon fontSize="small" sx={{ fontSize: 16 }} />)
}

function Status(checksFailed, flowRunning, complete, value) {
  if (flowRunning || checksFailed) {
    if (complete === 'complete') {
      return (<Typography variant="body2" align="left" fontSize="small" sx={{ fontSize: 14, color: "#43d043" }}>{value}</Typography>)
    }
    if (complete === 'failed') {
      return (<Typography variant="body2" align="left" color="red" fontSize="small" sx={{ fontSize: 14 }}>{value}</Typography>)
    }
    return (<MoreHorizIcon fontSize="small" sx={{ fontSize: 16 }} />)
  }
  return (<RadioButtonUncheckedIcon fontSize="small" sx={{ fontSize: 16 }} />)
}

function setCheck(check, set_prop_fn) {
  if (check != null) {
    if (check === true) {
      set_prop_fn('complete');
    } else {
      set_prop_fn('failed');
    }
  }
}
const Setup = (props) => {

  return (
    <React.Fragment>
      <Paper sx={{ p: 2, display: 'flex', mb: 0.5, mt: 2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
        <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3, mb: 1 }}>
          Train Health Checks
        </Typography>
        <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1, mb: 1 }}>
          Ensures that your environment and internet connection are ready for collaborative training.
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
              <Grid container direction="row" alignItems="center">
                {CheckButton(props.checksFailed, props.flowRunning, props.completeLinux)}
                <Item>Linux</Item>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container direction="row" alignItems="center">
                {CheckButton(props.checksFailed, props.flowRunning, props.completeCUDA)}
                <Item>CUDA Available</Item>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container direction="row" alignItems="center">
                {CheckButton(props.checksFailed, props.flowRunning, props.completePython)}
                <Item>Install Requirements</Item>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container direction="row" alignItems="center">
                {Status(props.checksFailed, props.flowRunning, props.completeMemory, props.memory)}
                <Item>Available CUDA Memory</Item>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container direction="row" alignItems="center">
                {Status(props.checksFailed, props.flowRunning, props.completeInternet, props.bandwidth)}
                <Item>Internet Bandwidth</Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {
          props.warningMessage.split('\n').map(warning => (<Typography variant="body2" align="left" color="error" component="p" sx={{ letterSpacing: 1, mt: 1 }}>{warning}</Typography>))
        }
      </Paper>
    </React.Fragment>
  );
}


function validLink(text) {
  var pieces = text.split('?');

  if (pieces.length !== 3) {
    return false;
  }
  var [peers, config] = [pieces[1], pieces[2]];

  function checkString(string, query) {
    return (string.search(query) === 0);
  }
  if (checkString(config, "config=")) {
    return true;
  } else {
    return false;
  }
}

function parseLink(text) {
  var pieces = text.split('?');
  var config = pieces[2];
  var config = config.replace('config=', '');
  var config = JSON.parse(config);
  return config
}

function Config(props) {
  var onTextChange = (e) => {
    if (validLink(e.target.value)) {
      props.setInviteText(e.target.value);
      if (props.presetConfig) {
        return;
      }
      var config = parseLink(e.target.value);
      props.setPowerSGD(config.powerSGD);
      props.setBatchSize(config.batchSize);
      props.setOptimizeMemory(config.optimizeMemory);
      props.setOptimizeCommunication(config.optimizeCommunication);
      props.setPresetConfig(true);
    } else {
      props.setPresetConfig(false);
    }

  }

  return (
    <React.Fragment>
      <Paper sx={{ p: 2, display: 'flex', mb: 0.5, mt: 2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
        <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3 }}>
          CONFIGURE
        </Typography>
        <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1, mb: 2 }}>
          Configure your collaborative training run. We will configure the Lightning Trainer for you!
        </Typography>
        <TextField
          id="outlined-textarea"
          label="Joining a collaborative training run? Paste your invite here."
          placeholder="collaborative-..."
          onChange={onTextChange}
          sx={{ mb: 2 }}
        />
        {props.presetConfig && <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1, mb: 2 }}>
          Joining a Lightning Collaborative run, we'll select the configuration for you.
        </Typography>
        }
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <LightTooltip title="All machines connected will accumulate to this batch size before performing a global update step." followCursor>
              <Box>
                <Typography variant="subtitle1" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1 }}>
                  Collaborative Batch Size
                </Typography>
              </Box>
            </LightTooltip>
            {DiscreteBatchSizeSlider(props)}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1 }}>
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
    if (!props.startInstallState) {
      let state = structuredClone(props.lightningState);
      state.flows.train_flow.vars.start_setup = true;
      state.flows.train_flow.vars.invite_link = props.inviteText;
      state.flows.train_flow.vars.power_sgd = props.powerSGD;
      state.flows.train_flow.vars.devices = props.deviceState;
      state.flows.train_flow.vars.optimize_communication = props.optimizeCommunication;
      state.flows.train_flow.vars.optimize_memory = props.optimizeMemory;
      state.flows.train_flow.vars.batch_size = props.batchSize;
      props.updateLightningState(state);
      props.setStartInstallState(true);
      props.setFlowRunning(true);
      props.setChecksFailed(false);
    }
  }

  return (
    <React.Fragment>
      <Paper sx={{ p: 2, display: 'flex', mb: 0.5, mt: 2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3 }}>
              TRAIN
            </Typography>
            <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1 }}>
              Start training on your machine.
            </Typography>
          </Grid>
          <Grid item xs={6} align="center">
            <ColorLoadingButton sx={{ mb: 1, mt: 1, width: '75%', '& .MuiLoadingButton-loadingIndicator': { color: '#48e38e', }, }} onClick={trainClick} loading={props.startInstallState} disabled={props.enableTrainState || props.startInstallState} variant="contained" loadingPosition="start">{props.enableTrainState ? "TRAINING" : (props.flowRunning ? "Running Health Checks" : "START TRAINING")}</ColorLoadingButton>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
function StopTrain(props) {
  return (
    <React.Fragment>
      <Paper sx={{ p: 2, display: 'flex', mb: 0.5, mt: 2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3 }}>
              TRAIN
            </Typography>
            <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1 }}>
              Training has started. Logs should appear on the left soon.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1 }}>
          You can see your local stored metrics in the LOCAL MONITOR tab.
        </Typography>
        <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1 }}>
          If joining the Lightning Collaborative Run, You can see the global metrics on W&B in the GLOBAL MONITOR tab.
        </Typography>
        <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1 }}>
          To stop training, stop the app.
        </Typography>
      </Paper>
      <Paper sx={{ p: 2, display: 'flex', mb: 0.5, mt: 2, flexDirection: 'column', background: "transparent", borderRadius: 2, border: 1, borderColor: "#ffffff44", boxShadow: '0' }}>
        <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 3 }}>
          INVITE
        </Typography>
        <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ letterSpacing: 1, mb: 1 }}>
          Send this link to others to join your training run.
        </Typography>
        <Card sx={{ borderRadius: 2 }}>
          <CardContentNoPadding>
            <Box sx={{ overflowY: 'scroll', width: '100%', pb: 0, backgroundColor: '#282a36' }}>
              <CopyBlock
                text={props.shareInviteLink}
                language={"bash"}
                showLineNumbers={false}
                wrapLines
                theme={dracula}
                customStyle={{ paddingLeft: 20 }}
              />
            </Box>
          </CardContentNoPadding>
        </Card>
      </Paper>
    </React.Fragment>
  );
}
export default function Train(props) {
  const [stateReceived, setStateReceived] = React.useState(false)
  const [startInstallState, setStartInstallState] = React.useState(false)
  const [enableTrainState, setEnableTrainState] = React.useState(false)
  const [warningMessage, setWarningMessage] = React.useState('')
  const [startTraining, setStartTraining] = React.useState(false)
  const [flowRunning, setFlowRunning] = React.useState(false)
  const [checksFailed, setChecksFailed] = React.useState(false)
  const [inviteText, setInviteText] = React.useState('')
  const [shareInviteLink, setShareInviteLink] = React.useState('')
  const [deviceState, setDeviceState] = React.useState(1)
  const [devices, setDevices] = React.useState(1)
  const [batchSize, setBatchSize] = React.useState(1024)
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


  let logState = props.logState;
  let setLogState = props.setLogState;
  let lightningState = props.lightningState;
  let updateLightningState = props.updateLightningState;

  React.useEffect(() => {
    if (lightningState) {
      setStateReceived(true);
      if (lightningState.flows.train_flow.vars.flow_running) {
          setStartInstallState(true);
          setFlowRunning(true);
          setChecksFailed(false);
      }
      let checks = lightningState.flows.train_flow.works.work_0?.vars;
      if (checks) {
        setCheck(checks.cuda, setCompleteCUDA)
        setCheck(checks.linux, setCompleteLinux)
        setCheck(checks.python, setCompletePython)
        setCheck(checks.internet, setCompleteInternet)
        setCheck(checks.memory, setCompleteMemory)
        if (checks.bandwidth !== null) {
          setBandwidth(checks.bandwidth)
        }
        if (checks.current_memory !== null) {
          setMemory(checks.current_memory)
        }
        if (checks.warning !== null) {
          setWarningMessage(checks.warning)
        }
        if (checks.discovered_devices !== null) {
          setDevices(checks.discovered_devices)
        }
        if ((checks.success != null) && (checks.success != true)) {
          setStartInstallState(false);
          setFlowRunning(false);
          setChecksFailed(true);
        }
      }
      if (lightningState.flows.train_flow.works.work_0?.vars.training_started) {
        var logs = lightningState.flows.train_flow.vars.logs;
        setLogState(logs);
        setStartTraining(true);
        setEnableTrainState(true);
        setFlowRunning(true);
      }
      if (lightningState.flows.train_flow.vars.share_link) {
        var shareInviteLink = lightningState.flows.train_flow.vars.share_link;
        setShareInviteLink(shareInviteLink);
      }
    }
  }, [lightningState]);

  React.useEffect(() => {
    if (lightningState) {
      let discovered_devices = lightningState.flows.train_flow.vars.discovered_devices;
      if (discovered_devices) {
        setDevices(discovered_devices);
      }
    }
  }, [lightningState]);

  return (
    <React.Fragment>
      <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        <Typography variant="h2" align="left" color="text.secondary" component="p" sx={{ ml: 1, letterSpacing: 3 }}>
          Lightning Collaborative
        </Typography>
        <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ ml: 1, letterSpacing: 1 }}>
          Train collaboratively, using Lightning Transformers to train a language model.
        </Typography>
        {startTraining && stateReceived ? StopTrain({ lightningState, updateLightningState, shareInviteLink, setShareInviteLink, setPresetConfig, enableTrainState, startTraining, setStartTraining, logState, setLogState }) : null}
        {!startTraining && stateReceived ? Config({ flowRunning, lightningState, updateLightningState, shareInviteLink, setShareInviteLink, enableTrainState, inviteText, setInviteText, devices, setDevices, deviceState, setDeviceState, powerSGD, setPowerSGD, setPresetConfig, presetConfig, optimizeCommunication, setOptimizeCommunication, optimizeMemory, setOptimizeMemory, batchSize, setBatchSize }) : null}
        {!startTraining && stateReceived ? StartTrain({ setChecksFailed, flowRunning, setFlowRunning, startInstallState, setStartInstallState, enableTrainState, setEnableTrainState, lightningState, updateLightningState, shareInviteLink, setShareInviteLink, enableTrainState, inviteText, devices, setDevices, deviceState, powerSGD, optimizeCommunication, optimizeMemory, batchSize, startTraining, setStartTraining, logState, setLogState }) : null}
        {Setup({ checksFailed, flowRunning, lightningState, updateLightningState, shareInviteLink, setShareInviteLink, devices, setDevices, memory, setMemory, bandwidth, setBandwidth, completeLinux, setCompleteLinux, completeCUDA, setCompleteCUDA, completeInternet, setCompleteInternet, completePython, setCompletePython, completeMemory, setCompleteMemory, startInstallState, setStartInstallState, enableTrainState, setEnableTrainState, warningMessage, setWarningMessage })}
      </Container>
    </React.Fragment>
  );
}
