# Lightning Collaborative

<div align="center">
   <img src="https://github.com/PyTorchLightning/lightning-collaborative/blob/bb576092648a1998f6873cd801ddcf5379c2123c/images/icon.png?raw=true" width="10%">
   <div align="center">
      Collaboratively scale training a model with friends/colleagues or cloud compute.
   </div>
</div>

## Installation

```
git clone git@github.com:PyTorchLightning/lightning-collaborative.git
cd lightning-collaborative
pip install -r requirements.txt
pip install -e .

lightning run app app.py
```

## Development

Requires npm/node & yarn to be installed to create the build. We'll eventually ship the build once it's ready.

When working on the UI, the build will need to be re-built everytime you change something.

```
npm i --legacy-peer-deps
yarn build

# alternative
# starts a running browser that is updated everytime a change is made
yarn run dev
```

You can also start the app in terminal only mode:

```
TERMINAL_MODE=1 lightning run app app.py
```

You can skip the environment checks via an environment variable:

```
SKIP_ENV_CHECK=1 lightning run app app.py
```

## Known issues

- The internet check isn't real all the time. Sometimes it disconnects for no reason.
- A very small model is training. This is parimily due to RAM restrictions.

## Hopeful goals

- Can we add Mac support? the blocker is hivemind; more work will need to be done to see how viable it is to make hivemind mac supported
- Make the checks actually work; what is a sufficient internet connection?
- Dropdown box to show the code that's actually being run.
