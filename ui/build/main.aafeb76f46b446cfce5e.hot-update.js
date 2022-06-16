"use strict";
globalThis["webpackHotUpdatecreate_react_app"]("main",{

/***/ "./src/Train.js":
/*!**********************!*\
  !*** ./src/Train.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Train)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/lab/LoadingButton */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_icons_material_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/RadioButtonUnchecked */ "./node_modules/@mui/icons-material/RadioButtonUnchecked.js");
/* harmony import */ var _mui_icons_material_RotateRight__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/RotateRight */ "./node_modules/@mui/icons-material/RotateRight.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Check */ "./node_modules/@mui/icons-material/Check.js");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/Slider.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormGroup */ "./node_modules/@mui/material/FormGroup/FormGroup.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Switch */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/ErrorOutline */ "./node_modules/@mui/icons-material/ErrorOutline.js");
/* harmony import */ var _mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material/MoreHoriz */ "./node_modules/@mui/icons-material/MoreHoriz.js");
/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ "./node_modules/react-code-blocks/dist/react-code-blocks.esm.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/sean.narenthiran/Code/lightning-collaborative/ui/src/Train.js",
    _s = __webpack_require__.$Refresh$.signature();


























const ColorButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref => {
  let {
    theme
  } = _ref;
  return {
    color: "#FFFFFF",
    backgroundColor: "#6e58d7",
    '&:hover': {
      backgroundColor: "#614eb9"
    }
  };
});
const CardContentNoPadding = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"])(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);
_c = CardContentNoPadding;
const ColorLoadingButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    color: "#FFFFFF",
    backgroundColor: "#6e58d7",
    '&:hover': {
      backgroundColor: "#614eb9"
    },
    '&:disabled': {
      backgroundColor: "#614eb9"
    }
  };
});
_c2 = ColorLoadingButton;
const Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3 => {
  let {
    theme
  } = _ref3;
  return {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 0,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
  };
});
_c3 = Item;
const LightTooltip = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], { ...props,
    classes: {
      popper: className
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 3
  }, undefined);
})(_ref5 => {
  let {
    theme
  } = _ref5;
  return {
    [`& .${_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"].tooltip}`]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: 0,
      fontSize: 11
    }
  };
});
_c4 = LightTooltip;

function Options(props) {
  var powerSGDChange = e => {
    props.setPowerSGD(e.target.checked);
  };

  var optimizeCommunication = e => {
    props.setOptimizeCommunication(e.target.checked);
  };

  var optimizeMemory = e => {
    props.setOptimizeMemory(e.target.checked);
  };

  if (props.presetConfig || props.flowRunning) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        width: "100%",
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
        row: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
          labelPlacement: "start",
          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
            disabled: true,
            checked: props.optimizeCommunication,
            size: "small",
            sx: {
              color: "#6e58d7"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 61
          }, this),
          label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
            sx: {
              fontSize: 14
            },
            children: "Optimize Communication"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 173
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
          labelPlacement: "start",
          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
            disabled: true,
            checked: props.optimizeMemory,
            size: "small",
            sx: {
              color: "#6e58d7"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 61
          }, this),
          label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
            sx: {
              fontSize: 14
            },
            children: "Optimize GPU Memory"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 166
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
          labelPlacement: "start",
          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
            disabled: true,
            checked: props.powerSGD,
            size: "small",
            sx: {
              color: "#6e58d7"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 61
          }, this),
          label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
            sx: {
              fontSize: 14
            },
            children: "PowerSGD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 160
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: "100%",
      display: 'flex',
      mb: 2,
      mt: 1
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
      row: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
        labelPlacement: "start",
        control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onChange: optimizeCommunication,
          size: "small",
          sx: {
            color: "#6e58d7"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 59
        }, this),
        label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
          sx: {
            fontSize: 14
          },
          children: "Optimize Communication"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 150
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
        labelPlacement: "start",
        control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onChange: optimizeMemory,
          size: "small",
          sx: {
            color: "#6e58d7"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 59
        }, this),
        label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
          sx: {
            fontSize: 14
          },
          children: "Optimize GPU Memory"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 143
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
        labelPlacement: "start",
        control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onChange: powerSGDChange,
          size: "small",
          sx: {
            color: "#6e58d7"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 59
        }, this),
        label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
          sx: {
            fontSize: 14
          },
          children: "PowerSGD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 143
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

_c5 = Options;

function DiscreteBatchSizeSlider(props) {
  var handleChange = (index, value) => {
    props.setBatchSize(value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: "80%",
      ml: 1,
      mb: 2
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_15__["default"], {
      size: "small",
      "aria-label": "Batch Size",
      defaultValue: 16384,
      valueLabelDisplay: "auto",
      step: 512,
      marks: [{
        label: '4096',
        value: 4096
      }, {
        label: '16384',
        value: 16384
      }, {
        label: '32768',
        value: 32768
      }],
      min: 0,
      max: 32768,
      onChange: handleChange,
      sx: {
        color: "#FFFFFF"
      },
      disabled: props.presetConfig || props.flowRunning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

_c6 = DiscreteBatchSizeSlider;

function DeviceSlider(props) {
  var handleChange = (index, value) => {
    props.setDeviceState(value);
  };

  let devices = [];
  [...Array(props.devices).keys()].forEach(k => {
    devices.push({
      label: k + 1,
      value: k + 1
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: "80%",
      ml: 1,
      mb: 2
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_15__["default"], {
      size: "small",
      "aria-label": "Devices",
      defaultValue: 1,
      valueLabelDisplay: "auto",
      marks: devices,
      min: 0,
      step: null,
      max: props.devices,
      onChange: handleChange,
      sx: {
        color: "#FFFFFF"
      },
      disabled: props.flowRunning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 5
  }, this);
}

_c7 = DeviceSlider;

function CheckButton(checksFailed, flowRunning, complete) {
  if (flowRunning || checksFailed) {
    if (complete === 'complete') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_16__["default"], {
        fontSize: "small",
        sx: {
          fontSize: 16,
          color: "#43d043"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 15
      }, this);
    }

    if (complete === 'failed') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_17__["default"], {
        color: "error",
        fontSize: "small",
        sx: {
          fontSize: 16
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 15
      }, this);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_RotateRight__WEBPACK_IMPORTED_MODULE_18__["default"], {
      fontSize: "small",
      sx: {
        fontSize: 16
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontSize: "small",
    sx: {
      fontSize: 16
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 11
  }, this);
}

_c8 = CheckButton;

function Status(checksFailed, flowRunning, complete, value) {
  if (flowRunning || checksFailed) {
    if (complete === 'complete') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        fontSize: "small",
        sx: {
          fontSize: 14,
          color: "#43d043"
        },
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }, this);
    }

    if (complete === 'failed') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        color: "red",
        fontSize: "small",
        sx: {
          fontSize: 14
        },
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 15
      }, this);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_20__["default"], {
      fontSize: "small",
      sx: {
        fontSize: 16
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontSize: "small",
    sx: {
      fontSize: 16
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 11
  }, this);
}

_c9 = Status;

function setCheck(check, set_prop_fn) {
  if (check != null) {
    if (check === true) {
      set_prop_fn('complete');
    } else {
      set_prop_fn('failed');
    }
  }
}

const Setup = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        p: 2,
        display: 'flex',
        mb: 0.5,
        mt: 2,
        flexDirection: 'column',
        background: "transparent",
        borderRadius: 2,
        border: 1,
        borderColor: "#ffffff44",
        boxShadow: '0'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h5",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 3,
          mb: 1
        },
        children: "Train Health Checks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 1,
          mb: 1
        },
        children: "Ensures that your environment and internet connection are ready for collaborative training."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: {
          width: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
          container: true,
          rowSpacing: 1,
          columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
              container: true,
              direction: "row",
              alignItems: "center",
              children: [CheckButton(props.checksFailed, props.flowRunning, props.completeLinux), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Item, {
                children: "Linux"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
              container: true,
              direction: "row",
              alignItems: "center",
              children: [CheckButton(props.checksFailed, props.flowRunning, props.completeCUDA), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Item, {
                children: "CUDA Available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
              container: true,
              direction: "row",
              alignItems: "center",
              children: [CheckButton(props.checksFailed, props.flowRunning, props.completePython), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Item, {
                children: "Install Requirements"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
              container: true,
              direction: "row",
              alignItems: "center",
              children: [Status(props.checksFailed, props.flowRunning, props.completeMemory, props.memory), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Item, {
                children: "Available CUDA Memory"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
              container: true,
              direction: "row",
              alignItems: "center",
              children: [Status(props.checksFailed, props.flowRunning, props.completeInternet, props.bandwidth), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Item, {
                children: "Internet Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, undefined), props.warningMessage.split('\n').map(warning => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        color: "error",
        component: "p",
        sx: {
          letterSpacing: 1,
          mt: 1
        },
        children: warning
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 60
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 5
  }, undefined);
};

_c10 = Setup;

function validLink(text) {
  var pieces = text.split('?');

  if (pieces.length !== 3) {
    return false;
  }

  var [peers, config] = [pieces[1], pieces[2]];

  function checkString(string, query) {
    return string.search(query) === 0;
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
  return config;
}

function Config(props) {
  var onTextChange = e => {
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
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        p: 2,
        display: 'flex',
        mb: 0.5,
        mt: 2,
        flexDirection: 'column',
        background: "transparent",
        borderRadius: 2,
        border: 1,
        borderColor: "#ffffff44",
        boxShadow: '0'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h5",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 3
        },
        children: "CONFIGURE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 1,
          mb: 2
        },
        children: "Configure your collaborative training run. We will configure the Lightning Trainer for you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
        id: "outlined-textarea",
        label: "Joining a collaborative training run? Paste your invite here.",
        placeholder: "collaborative-...",
        onChange: onTextChange,
        sx: {
          mb: 2
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }, this), props.presetConfig && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 1,
          mb: 2
        },
        children: "Joining a Collaborative Training run, we'll select the configuration for you."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 32
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
          xs: 1,
          sm: 2,
          md: 3
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
          item: true,
          xs: 6,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LightTooltip, {
            title: "All machines connected will accumulate to this batch size before performing a global update step.",
            followCursor: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
                variant: "subtitle1",
                align: "left",
                color: "text.secondary",
                component: "p",
                sx: {
                  letterSpacing: 1
                },
                children: "Collaborative Batch Size"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 13
          }, this), DiscreteBatchSizeSlider(props)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
          item: true,
          xs: 6,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
            variant: "subtitle1",
            align: "left",
            color: "text.secondary",
            component: "p",
            sx: {
              letterSpacing: 1
            },
            children: "GPUs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 13
          }, this), DeviceSlider(props)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, this), Options(props)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 5
  }, this);
}

_c11 = Config;

function StartTrain(props) {
  var trainClick = event => {
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
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        p: 2,
        display: 'flex',
        mb: 0.5,
        mt: 2,
        flexDirection: 'column',
        background: "transparent",
        borderRadius: 2,
        border: 1,
        borderColor: "#ffffff44",
        boxShadow: '0'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
          xs: 1,
          sm: 2,
          md: 3
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
          item: true,
          xs: 6,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
            variant: "h5",
            align: "left",
            color: "text.secondary",
            component: "p",
            sx: {
              letterSpacing: 3
            },
            children: "TRAIN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
            variant: "body2",
            align: "left",
            color: "text.secondary",
            component: "p",
            sx: {
              letterSpacing: 1
            },
            children: "Start training on your machine."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
          item: true,
          xs: 6,
          align: "center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ColorLoadingButton, {
            sx: {
              mb: 1,
              mt: 1,
              width: '75%',
              '& .MuiLoadingButton-loadingIndicator': {
                color: '#48e38e'
              }
            },
            onClick: trainClick,
            loading: props.startInstallState,
            disabled: props.enableTrainState || props.startInstallState,
            variant: "contained",
            loadingPosition: "start",
            children: props.enableTrainState ? "TRAINING" : props.flowRunning ? "Running Health Checks" : "START TRAINING"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 347,
    columnNumber: 5
  }, this);
}

_c12 = StartTrain;

function StopTrain(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        p: 2,
        display: 'flex',
        mb: 0.5,
        mt: 2,
        flexDirection: 'column',
        background: "transparent",
        borderRadius: 2,
        border: 1,
        borderColor: "#ffffff44",
        boxShadow: '0'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
          xs: 1,
          sm: 2,
          md: 3
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
          item: true,
          xs: 6,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
            variant: "h5",
            align: "left",
            color: "text.secondary",
            component: "p",
            sx: {
              letterSpacing: 3
            },
            children: "TRAIN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
            variant: "body2",
            align: "left",
            color: "text.secondary",
            component: "p",
            sx: {
              letterSpacing: 1
            },
            children: "Training has started. Logs should appear on the left soon."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 1
        },
        children: "You can see your local stored metrics in the MONITOR tab."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 1
        },
        children: "To stop training, stop the app."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        p: 2,
        display: 'flex',
        mb: 0.5,
        mt: 2,
        flexDirection: 'column',
        background: "transparent",
        borderRadius: 2,
        border: 1,
        borderColor: "#ffffff44",
        boxShadow: '0'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h5",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 3
        },
        children: "INVITE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body2",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          letterSpacing: 1,
          mb: 1
        },
        children: "Send this link to others to join your training run."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_23__["default"], {
        sx: {
          borderRadius: 2
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CardContentNoPadding, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
            sx: {
              overflowY: 'scroll',
              width: '100%',
              pb: 0,
              backgroundColor: '#282a36'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.CopyBlock, {
              text: props.shareInviteLink,
              language: "bash",
              showLineNumbers: false,
              wrapLines: true,
              theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.dracula,
              customStyle: {
                paddingLeft: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 368,
    columnNumber: 5
  }, this);
}

_c13 = StopTrain;
function Train(props) {
  _s();

  const [stateReceived, setStateReceived] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [startInstallState, setStartInstallState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [enableTrainState, setEnableTrainState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [warningMessage, setWarningMessage] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');
  const [startTraining, setStartTraining] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [flowRunning, setFlowRunning] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [checksFailed, setChecksFailed] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [inviteText, setInviteText] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');
  const [shareInviteLink, setShareInviteLink] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');
  const [deviceState, setDeviceState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(8);
  const [devices, setDevices] = react__WEBPACK_IMPORTED_MODULE_0__.useState(8);
  const [batchSize, setBatchSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1024);
  const [powerSGD, setPowerSGD] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [optimizeCommunication, setOptimizeCommunication] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [optimizeMemory, setOptimizeMemory] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [presetConfig, setPresetConfig] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [completeLinux, setCompleteLinux] = react__WEBPACK_IMPORTED_MODULE_0__.useState('wait');
  const [completeCUDA, setCompleteCUDA] = react__WEBPACK_IMPORTED_MODULE_0__.useState('wait');
  const [completeInternet, setCompleteInternet] = react__WEBPACK_IMPORTED_MODULE_0__.useState('wait');
  const [completePython, setCompletePython] = react__WEBPACK_IMPORTED_MODULE_0__.useState('wait');
  const [completeMemory, setCompleteMemory] = react__WEBPACK_IMPORTED_MODULE_0__.useState('wait');
  const [memory, setMemory] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');
  const [bandwidth, setBandwidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');
  let logState = props.logState;
  let setLogState = props.setLogState;
  let lightningState = props.lightningState;
  let updateLightningState = props.updateLightningState;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (lightningState) {
      var _lightningState$flows, _lightningState$flows2;

      setStateReceived(true);

      if (lightningState.flows.train_flow.vars.flow_running) {
        setStartInstallState(true);
        setFlowRunning(true);
        setChecksFailed(false);
      }

      let checks = (_lightningState$flows = lightningState.flows.train_flow.works.work_0) === null || _lightningState$flows === void 0 ? void 0 : _lightningState$flows.vars;

      if (checks) {
        setCheck(checks.cuda, setCompleteCUDA);
        setCheck(checks.linux, setCompleteLinux);
        setCheck(checks.python, setCompletePython);
        setCheck(checks.internet, setCompleteInternet);
        setCheck(checks.memory, setCompleteMemory);

        if (checks.bandwidth !== null) {
          setBandwidth(checks.bandwidth);
        }

        if (checks.current_memory !== null) {
          setMemory(checks.current_memory);
        }

        if (checks.warning !== null) {
          setWarningMessage(checks.warning);
        }

        if (checks.discovered_devices !== null) {
          setDevices(checks.discovered_devices);
        }

        if (checks.success != null && checks.success != true) {
          setStartInstallState(false);
          setFlowRunning(false);
          setChecksFailed(true);
        }
      }

      if ((_lightningState$flows2 = lightningState.flows.train_flow.works.work_0) !== null && _lightningState$flows2 !== void 0 && _lightningState$flows2.vars.training_started) {
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
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (lightningState) {
      let discovered_devices = lightningState.flows.train_flow.vars.discovered_devices;
      console.log("YOLO", discovered_devices);

      if (discovered_devices) {
        setDevices(discovered_devices);
      }
    }
  }, [lightningState]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_24__["default"], {
      disableGutters: true,
      sx: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h2",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          ml: 1,
          letterSpacing: 3
        },
        children: "Collaborative Training"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "body1",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          ml: 1,
          letterSpacing: 1
        },
        children: "Train a language model collaboratively, using Hivemind and PyTorch Lightning."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_25__["default"], {
        rel: "noopener noreferrer",
        target: "_blank",
        sx: {
          ml: 1,
          letterSpacing: 1
        },
        href: "https://github.com/PyTorchLightning/lightning-collaborative#troubleshooting",
        children: "Troubleshooting Guide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 9
      }, this), startTraining && stateReceived ? StopTrain({
        lightningState,
        updateLightningState,
        shareInviteLink,
        setShareInviteLink,
        setPresetConfig,
        enableTrainState,
        startTraining,
        setStartTraining,
        logState,
        setLogState
      }) : null, !startTraining && stateReceived ? Config({
        flowRunning,
        lightningState,
        updateLightningState,
        shareInviteLink,
        setShareInviteLink,
        enableTrainState,
        inviteText,
        setInviteText,
        devices,
        setDevices,
        deviceState,
        setDeviceState,
        powerSGD,
        setPowerSGD,
        setPresetConfig,
        presetConfig,
        optimizeCommunication,
        setOptimizeCommunication,
        optimizeMemory,
        setOptimizeMemory,
        batchSize,
        setBatchSize
      }) : null, !startTraining && stateReceived ? StartTrain({
        setChecksFailed,
        flowRunning,
        setFlowRunning,
        startInstallState,
        setStartInstallState,
        enableTrainState,
        setEnableTrainState,
        lightningState,
        updateLightningState,
        shareInviteLink,
        setShareInviteLink,
        enableTrainState,
        inviteText,
        devices,
        setDevices,
        deviceState,
        powerSGD,
        optimizeCommunication,
        optimizeMemory,
        batchSize,
        startTraining,
        setStartTraining,
        logState,
        setLogState
      }) : null, Setup({
        checksFailed,
        flowRunning,
        lightningState,
        updateLightningState,
        shareInviteLink,
        setShareInviteLink,
        devices,
        setDevices,
        memory,
        setMemory,
        bandwidth,
        setBandwidth,
        completeLinux,
        setCompleteLinux,
        completeCUDA,
        setCompleteCUDA,
        completeInternet,
        setCompleteInternet,
        completePython,
        setCompletePython,
        completeMemory,
        setCompleteMemory,
        startInstallState,
        setStartInstallState,
        enableTrainState,
        setEnableTrainState,
        warningMessage,
        setWarningMessage
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 505,
    columnNumber: 5
  }, this);
}

_s(Train, "ME/rjeH31PvGjj1JwavLZonS1CI=");

_c14 = Train;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;

__webpack_require__.$Refresh$.register(_c, "CardContentNoPadding");
__webpack_require__.$Refresh$.register(_c2, "ColorLoadingButton");
__webpack_require__.$Refresh$.register(_c3, "Item");
__webpack_require__.$Refresh$.register(_c4, "LightTooltip");
__webpack_require__.$Refresh$.register(_c5, "Options");
__webpack_require__.$Refresh$.register(_c6, "DiscreteBatchSizeSlider");
__webpack_require__.$Refresh$.register(_c7, "DeviceSlider");
__webpack_require__.$Refresh$.register(_c8, "CheckButton");
__webpack_require__.$Refresh$.register(_c9, "Status");
__webpack_require__.$Refresh$.register(_c10, "Setup");
__webpack_require__.$Refresh$.register(_c11, "Config");
__webpack_require__.$Refresh$.register(_c12, "StartTrain");
__webpack_require__.$Refresh$.register(_c13, "StopTrain");
__webpack_require__.$Refresh$.register(_c14, "Train");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e8cdae7ce021307853fc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.aafeb76f46b446cfce5e.hot-update.js.map