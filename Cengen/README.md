# Cengen and its webapp

There is a dockerfile, with an image available at [ccros/cengenapp](https://hub.docker.com/repository/docker/ccros/cengenapp). It will take a bit of time to load the application for each user.

The Cengen data is baked in this Docker image, this is the 6th July 2021 release available on [Dropbox](https://www.dropbox.com/s/4ib83ohled69fj7/Dataset_6July_2021.rda?dl=0). The code is from the [Cengen Github](https://github.com/cengenproject/CengenApp) with Google Analytics removed because it caused a crash... Notably, you will need to download both the Cengen code and data from those links if you want to alter the image.

I am adding a Kubernetes deployment which is certainly overkill and assumes an ingress-nginx controller with certmanager... For personal use, the best option is to install Docker and use the [rocker/shiny](https://hub.docker.com/r/rocker/shiny) instructions, eg the default port is 3838. 
