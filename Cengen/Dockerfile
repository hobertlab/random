FROM core.harbor.neuroworm.science/docker-cache/rocker/shiny-verse:4.1.1
# That script requires the rocker imges or an image with the littler R package
RUN apt-get update && apt-get install -y \
    libglpk-dev \
    default-jre \
    && rm -rf /var/lib/apt/lists/*
RUN install2.r --error --skipinstalled \
    shinyjs \
    shinybusy \
    shinythemes \
    ggridges \
    DT \
    cowplot \
    Rglpk \
    Seurat \
    pheatmap \
    expss \
    plotly \
    xlsx
ADD CengenAppJul8 /srv/shiny-server
# Bakes in the CENGEN data
ADD Dataset_6July_2021.rda  /srv/shiny-server/Dataset_6July_2021.rda
