sandiegocs.org (pending domain)

## Building

0. Install [Zola](https://www.getzola.org) (v0.17.Z)
1. `zola serve`

## Adding self to team list
The order of people on this list is irrelevant. However, please append yourself, not prepend. Follow the template as everyone else. Ask for help, if you need it.

```js
"user": "your_username",
"name": "John Template", // optional
"bio": "Yes, I did invent templates", // optional
"portfolio": "https://abc.xyz", // optional
"linkedin": "https://linkedin.com/in/john-template" //optional
```

If you want to upload a photo, place a file called `your_username.jpg` in the `static/assets/team/` folder and it will automatically be loaded. Images should be no larger than 500 x 500 and should be less than 10 kilobytes in size (exceptions can be made if you have stubborn photos). 

## Deploying
You need SSH access to the deployment server. [Generate an Ed25519 key-pair (if you don't have one)](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and ask [Matt](https://maatt.fr/contact) (`maatt.fr` on Discord) for access.

0. Install rsync and a `make` tool (like GNU make).
1. `make deploy` or `make deploy-stage`
2. View changes : https://sandiegocs.org or https://staging.sandiegocs.org (currently accessible at https://staging-sdcs.maatt.fr)