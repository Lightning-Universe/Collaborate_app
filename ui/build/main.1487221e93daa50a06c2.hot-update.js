"use strict";
globalThis["webpackHotUpdatecreate_react_app"]("main",{

/***/ "./src/Metrics.js":
/*!************************!*\
  !*** ./src/Metrics.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Metrics)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ "./node_modules/react-code-blocks/dist/react-code-blocks.esm.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _Train__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Train */ "./src/Train.js");
/* harmony import */ var react_scrollable_feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollable-feed */ "./node_modules/react-scrollable-feed/dist/index.es.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ProgressBar */ "./src/components/ProgressBar.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Title */ "./src/components/Title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/sean.narenthiran/Code/lightning-collaborative/ui/src/Metrics.js",
    _s = __webpack_require__.$Refresh$.signature();


















const CardContentNoPadding = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["default"])(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"])(`
  padding: 0;
  height: "100%",
  "&:last-child": {
      paddingBottom: 0
    }
  }
`);

function Progress(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        height: "50%",
        p: 2,
        display: 'flex',
        mb: 1,
        mt: 2,
        flexDirection: 'column',
        background: "transparent",
        borderRadius: 2,
        border: 1,
        borderColor: "#ffffff44",
        boxShadow: '0'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
          xs: 1,
          sm: 2,
          md: 3
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 6,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
            variant: "h5",
            align: "left",
            color: "text.secondary",
            component: "p",
            sx: {
              letterSpacing: 3
            },
            children: "GLOBAL PROGRESS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
            variant: "body2",
            align: "left",
            color: "text.secondary",
            component: "p",
            sx: {
              letterSpacing: 1
            },
            children: "Progress for the collaborative training run."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        eta: props.eta,
        progress: props.progress,
        epoch: props.epoch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
          xs: 1,
          sm: 2,
          md: 3
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
            sx: {
              p: 2,
              display: 'flex',
              mb: 1,
              mt: 2,
              flexDirection: 'column',
              background: "transparent",
              borderRadius: 2,
              border: 1,
              borderColor: "#ffffff44",
              boxShadow: '0'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                variant: "h6",
                sx: {
                  color: 'white',
                  letterSpacing: 3
                },
                children: "STATISTICS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 22
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
              disableGutters: true,
              id: "left",
              sx: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
                disableGutters: true,
                sx: {
                  pl: 0,
                  pr: 2
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "caption",
                    sx: {
                      color: 'white'
                    },
                    children: "GLOBAL EPOCH ETA"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "h5",
                    sx: {
                      color: 'white'
                    },
                    children: props.eta
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
                disableGutters: true,
                sx: {
                  pl: 0,
                  pr: 0
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "caption",
                    sx: {
                      color: 'white'
                    },
                    children: "NUMBER OF PEERS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "h5",
                    sx: {
                      color: 'white'
                    },
                    children: props.peers
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
            sx: {
              p: 2,
              display: 'flex',
              mb: 1,
              mt: 2,
              flexDirection: 'column',
              background: "transparent",
              borderRadius: 2,
              border: 1,
              borderColor: "#ffffff44",
              boxShadow: '0'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                variant: "h6",
                sx: {
                  color: 'white',
                  letterSpacing: 3
                },
                children: "METRICS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 22
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
              disableGutters: true,
              id: "left",
              sx: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
                disableGutters: true,
                sx: {
                  pl: 0,
                  pr: 2
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "caption",
                    sx: {
                      color: 'white'
                    },
                    children: "TRAINING LOSSA"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "h5",
                    sx: {
                      color: 'white'
                    },
                    children: props.eta
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_c = Progress;
function Metrics(props) {
  _s();

  const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  const [epoch, setEpoch] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  const [peers, setPeers] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  const [eta, setEta] = react__WEBPACK_IMPORTED_MODULE_0__.useState('00:00:00');
  var lightningState = props.lightningState;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (lightningState) {
      var _lightningState$flows;

      let work_state = (_lightningState$flows = lightningState.flows.train_flow.works.work_0) === null || _lightningState$flows === void 0 ? void 0 : _lightningState$flows.vars;

      if (work_state && work_state !== null && work_state !== void 0 && work_state.progress_state) {
        setProgress(work_state.progress_state.progress);
        setEpoch(work_state.progress_state.epoch);
        setEta(work_state.progress_state.eta);
        setPeers(work_state.progress_state.peers);
      }
    }
  }, [lightningState]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
      sx: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h2",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          ml: 1,
          letterSpacing: 3
        },
        children: "\u200B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "body1",
        align: "left",
        color: "text.secondary",
        component: "p",
        sx: {
          ml: 1,
          letterSpacing: 1
        },
        children: "\u200B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), Progress({
        eta,
        progress,
        epoch,
        peers
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sx: {
          borderRadius: 2,
          height: "100%"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          sx: {
            p: 0,
            height: "100%",
            '&:last-child': {
              pb: 0
            },
            backgroundColor: '#282a36'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
            sx: {
              height: "300px",
              overflowY: "auto",
              width: '100%',
              pb: 0,
              backgroundColor: '#282a36'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_scrollable_feed__WEBPACK_IMPORTED_MODULE_3__["default"], {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.CopyBlock, {
                text: props.logState,
                language: "bash",
                showLineNumbers: false,
                wrapLines: true,
                theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.dracula,
                customStyle: {
                  paddingLeft: 20
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

_s(Metrics, "ClR5bKwtMH3BYaMJU75wXyC4hXc=");

_c2 = Metrics;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Progress");
__webpack_require__.$Refresh$.register(_c2, "Metrics");

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
/******/ 	__webpack_require__.h = () => ("bca93bd4d55d8f826ba3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1487221e93daa50a06c2.hot-update.js.map