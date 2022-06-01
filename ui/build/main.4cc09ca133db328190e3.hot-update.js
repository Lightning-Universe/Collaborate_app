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
          xs: 8,
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
                    children: "CONTRIBUTION"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "h5",
                    sx: {
                      color: 'white'
                    },
                    children: `${props.contribution}%`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
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
          xs: 4,
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
                lineNumber: 64,
                columnNumber: 22
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
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
                    children: "TRAINING LOSS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "h5",
                    sx: {
                      color: 'white'
                    },
                    children: props.loss
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
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
  const [epoch, setEpoch] = react__WEBPACK_IMPORTED_MODULE_0__.useState('-');
  const [peers, setPeers] = react__WEBPACK_IMPORTED_MODULE_0__.useState('-');
  const [contribution, setContribution] = react__WEBPACK_IMPORTED_MODULE_0__.useState('-');
  const [eta, setEta] = react__WEBPACK_IMPORTED_MODULE_0__.useState('-');
  const [loss, setLoss] = react__WEBPACK_IMPORTED_MODULE_0__.useState('-');
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

        if (work_state.contribution) {
          setContribution(work_state.contribution);
        }

        if (work_state.loss) {
          setLoss(work_state.loss);
        }
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
        lineNumber: 112,
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
        lineNumber: 115,
        columnNumber: 9
      }, this), Progress({
        eta,
        progress,
        epoch,
        peers,
        contribution,
        loss
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
                lineNumber: 123,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

_s(Metrics, "4TSyysz67NUPI5d94AmfjxmeBdM=");

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

/***/ }),

/***/ "./src/components/ProgressBar.js":
/*!***************************************!*\
  !*** ./src/components/ProgressBar.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollaborativeLinearProgress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/linearProgressClasses.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/sean.narenthiran/Code/lightning-collaborative/ui/src/components/ProgressBar.js";







const BorderLinearProgress = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref => {
  let {
    theme
  } = _ref;
  return {
    height: 4,
    borderRadius: 5,
    [`&.${_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_4__["default"].colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
    },
    [`& .${_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_4__["default"].bar}`]: {
      borderRadius: 2,
      backgroundColor: "#3db2ff"
    }
  };
});
_c = BorderLinearProgress;

function LinearProgressWithLabel(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      mt: 2
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      display: "inline",
      sx: {
        mr: 2,
        pr: 2
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "body2",
        color: "text.secondary",
        sx: {
          fontFamily: 'Roboto Mono'
        },
        children: ["Global Iteration:", props.epoch]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        width: "100%",
        mr: 1
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BorderLinearProgress, {
        variant: "determinate",
        value: props.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        minWidth: 35,
        mr: 2
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "body2",
        color: "text.secondary",
        children: `${props.value}%`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_c2 = LinearProgressWithLabel;
function CollaborativeLinearProgress(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      width: '100%'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LinearProgressWithLabel, {
      value: props.progress,
      eta: props.eta,
      epoch: props.epoch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
_c3 = CollaborativeLinearProgress;

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "BorderLinearProgress");
__webpack_require__.$Refresh$.register(_c2, "LinearProgressWithLabel");
__webpack_require__.$Refresh$.register(_c3, "CollaborativeLinearProgress");

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

/***/ }),

/***/ "./src/components/Title.js":
/*!*********************************!*\
  !*** ./src/components/Title.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/sean.narenthiran/Code/lightning-collaborative/ui/src/components/Title.js";





function Title(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "h2",
    variant: "h6",
    color: "primary",
    gutterBottom: true,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = Title;
Title.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

var _c;

__webpack_require__.$Refresh$.register(_c, "Title");

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

/***/ }),

/***/ "./node_modules/@mui/material/LinearProgress/LinearProgress.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/material/LinearProgress/LinearProgress.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _linearProgressClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./linearProgressClasses */ "./node_modules/@mui/material/LinearProgress/linearProgressClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "color", "value", "valueBuffer", "variant"];

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;













const TRANSITION_DURATION = 4; // seconds

const indeterminate1Keyframe = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.keyframes)(_t || (_t = _`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`));
const indeterminate2Keyframe = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.keyframes)(_t2 || (_t2 = _`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`));
const bufferKeyframe = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.keyframes)(_t3 || (_t3 = _`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`));

const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`, variant],
    dashed: ['dashed', `dashedColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`],
    bar1: ['bar', `barColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`, (variant === 'indeterminate' || variant === 'query') && 'bar1Indeterminate', variant === 'determinate' && 'bar1Determinate', variant === 'buffer' && 'bar1Buffer'],
    bar2: ['bar', variant !== 'buffer' && `barColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`, variant === 'buffer' && `color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`, (variant === 'indeterminate' || variant === 'query') && 'bar2Indeterminate', variant === 'buffer' && 'bar2Buffer']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_7__["default"])(slots, _linearProgressClasses__WEBPACK_IMPORTED_MODULE_8__.getLinearProgressUtilityClass, classes);
};

const getColorShade = (theme, color) => {
  if (color === 'inherit') {
    return 'currentColor';
  }

  return theme.palette.mode === 'light' ? (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.lighten)(theme.palette[color].main, 0.62) : (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.darken)(theme.palette[color].main, 0.5);
};

const LinearProgressRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_10__["default"])('span', {
  name: 'MuiLinearProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(ownerState.color)}`], styles[ownerState.variant]];
  }
})(_ref => {
  let {
    ownerState,
    theme
  } = _ref;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    height: 4,
    zIndex: 0,
    // Fix Safari's bug during composition of different paint.
    '@media print': {
      colorAdjust: 'exact'
    },
    backgroundColor: getColorShade(theme, ownerState.color)
  }, ownerState.color === 'inherit' && ownerState.variant !== 'buffer' && {
    backgroundColor: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'currentColor',
      opacity: 0.3
    }
  }, ownerState.variant === 'buffer' && {
    backgroundColor: 'transparent'
  }, ownerState.variant === 'query' && {
    transform: 'rotate(180deg)'
  });
});
const LinearProgressDashed = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_10__["default"])('span', {
  name: 'MuiLinearProgress',
  slot: 'Dashed',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.dashed, styles[`dashedColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(ownerState.color)}`]];
  }
})(_ref2 => {
  let {
    ownerState,
    theme
  } = _ref2;
  const backgroundColor = getColorShade(theme, ownerState.color);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    position: 'absolute',
    marginTop: 0,
    height: '100%',
    width: '100%'
  }, ownerState.color === 'inherit' && {
    opacity: 0.3
  }, {
    backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`,
    backgroundSize: '10px 10px',
    backgroundPosition: '0 -23px'
  });
}, (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.css)(_t4 || (_t4 = _`
    animation: ${0} 3s infinite linear;
  `), bufferKeyframe));
const LinearProgressBar1 = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_10__["default"])('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar1',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles[`barColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(ownerState.color)}`], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar1Indeterminate, ownerState.variant === 'determinate' && styles.bar1Determinate, ownerState.variant === 'buffer' && styles.bar1Buffer];
  }
})(_ref3 => {
  let {
    ownerState,
    theme
  } = _ref3;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    transition: 'transform 0.2s linear',
    transformOrigin: 'left',
    backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : theme.palette[ownerState.color].main
  }, ownerState.variant === 'determinate' && {
    transition: `transform .${TRANSITION_DURATION}s linear`
  }, ownerState.variant === 'buffer' && {
    zIndex: 1,
    transition: `transform .${TRANSITION_DURATION}s linear`
  });
}, _ref4 => {
  let {
    ownerState
  } = _ref4;
  return (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.css)(_t5 || (_t5 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), indeterminate1Keyframe);
});
const LinearProgressBar2 = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_10__["default"])('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar2',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles[`barColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(ownerState.color)}`], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar2Indeterminate, ownerState.variant === 'buffer' && styles.bar2Buffer];
  }
})(_ref5 => {
  let {
    ownerState,
    theme
  } = _ref5;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    transition: 'transform 0.2s linear',
    transformOrigin: 'left'
  }, ownerState.variant !== 'buffer' && {
    backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : theme.palette[ownerState.color].main
  }, ownerState.color === 'inherit' && {
    opacity: 0.3
  }, ownerState.variant === 'buffer' && {
    backgroundColor: getColorShade(theme, ownerState.color),
    transition: `transform .${TRANSITION_DURATION}s linear`
  });
}, _ref6 => {
  let {
    ownerState
  } = _ref6;
  return (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.css)(_t6 || (_t6 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), indeterminate2Keyframe);
});
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

const LinearProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function LinearProgress(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_11__["default"])({
    props: inProps,
    name: 'MuiLinearProgress'
  });

  const {
    className,
    color = 'primary',
    value,
    valueBuffer,
    variant = 'indeterminate'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    color,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const rootProps = {};
  const inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      let transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = `translateX(${transform}%)`;
    } else if (true) {
      console.error('MUI: You need to provide a value prop ' + 'when using the determinate or buffer variant of LinearProgress .');
    }
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      let transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar2.transform = `translateX(${transform}%)`;
    } else if (true) {
      console.error('MUI: You need to provide a valueBuffer prop ' + 'when using the buffer variant of LinearProgress.');
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(LinearProgressRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState,
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other, {
    children: [variant === 'buffer' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinearProgressDashed, {
      className: classes.dashed,
      ownerState: ownerState
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinearProgressBar1, {
      className: classes.bar1,
      ownerState: ownerState,
      style: inlineStyles.bar1
    }), variant === 'determinate' ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinearProgressBar2, {
      className: classes.bar2,
      ownerState: ownerState,
      style: inlineStyles.bar2
    })]
  }));
});
 true ? LinearProgress.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),

  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['inherit', 'primary', 'secondary']), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string)]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_13___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object)]),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number),

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number),

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['buffer', 'determinate', 'indeterminate', 'query'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinearProgress);

/***/ }),

/***/ "./node_modules/@mui/material/LinearProgress/linearProgressClasses.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mui/material/LinearProgress/linearProgressClasses.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getLinearProgressUtilityClass": () => (/* binding */ getLinearProgressUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");

function getLinearProgressUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiLinearProgress', slot);
}
const linearProgressClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiLinearProgress', ['root', 'colorPrimary', 'colorSecondary', 'determinate', 'indeterminate', 'buffer', 'query', 'dashed', 'dashedColorPrimary', 'dashedColorSecondary', 'bar', 'barColorPrimary', 'barColorSecondary', 'bar1Indeterminate', 'bar1Determinate', 'bar1Buffer', 'bar2Indeterminate', 'bar2Buffer']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linearProgressClasses);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2be029bfe20334f5ced2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4cc09ca133db328190e3.hot-update.js.map