# Lightning Collaborative

Collaboratively train a model with friends/colleagues or scale on cloud compute.

<div align="center">
   <img src="https://storage.googleapis.com/grid-packages/pytorch-lightning-app/pl-app-thumbnail.png" width="70%">
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
yarn build

# alternative
# starts a running browser that is updated everytime a change is made
yarn run dev
```

You can also get around requirements and use our `dummy_train.py` script by passing an environment variable locally:

```
DEBUG=1 lightning run app app.py
```

## Known issues

- Running in the cloud takes a considerable time to start. This is due to the re-installation of requirements
- Multiple GPUs are not supported. Will be supported before launch!
- A very small model is training. This is parimily due to RAM restrictions.
- I can’t seem to pass the link to a friend to train! The V0 has single GPU machine working (I know, not collaborative but a start).
- UI is smaller when using cloud, this makes things look all funny.

## Hopeful goals

- Can we add Mac support? the blocker is hivemind; more work will need to be done to see how viable it is to make hivemind mac supported
- Make the checks actually work; what is a sufficient internet connection?
