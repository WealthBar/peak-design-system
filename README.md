# Peak Design System

> The Peak Design System

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# serve build in production from /dist
yarn start
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Manual Kubernetes deployment

If you're trying to deploy it to a Kubernetes cluster, such as a local Minikube one, you need [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/), [Helm](https://helm.sh/) setup, with [Chartroom](https://github.com/wealthbar/chartroom) installed as a repo.

### Setting up dependencies
If you need these setup,

``` bash
brew install kubernetes-cli helm
helm repo add --username <your-github-username> --password <github-personal-access-token> chartroom 'https://raw.githubusercontent.com/WealthBar/chartroom/master/'
helm repo update
```

Make sure that kubectl is configured to point at a cluster (outside the scope of this, contact someone on the team who knows ops)

### Deploying to cluster

After that, from the root of this repo, you can install Peak on the cluster with,

``` bash
helm dep update ./charts/peak
kubectl create namespace peak && helm install peak ./charts/peak --set certificate.enabled=false --namespace peak
```

To view the status of your deployment,

``` bash
kubectl get all -n peak
```

If you're deploying to a production cluster, you will want to point at the correct values file and remove `--set certificate.enabled=false`

### Deleting from cluster

To remove it from the cluster,

``` bash
helm delete peak -n peak
kubectl delete namespace peak
```

## Knowledge Base

Links and extra relevant information for this repo can be found [here](https://paper.dropbox.com/doc/WSH2FfqsF4M4lrXLFs73E)
