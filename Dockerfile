FROM node:6.9.5
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN DEBIAN_FRONTEND=noninteractive
# RUN apt-get -qq update
# RUN apt-get -y --force-yes install bash wget curl git unzip supervisor g++ make build-essential libssl-dev
# Node
#RUN mkdir -p /tmp/node
#RUN apt-get update --fix-missing
#ENV NVM_DIR /usr/local/nvm
#ENV NODE_VERSION 6.9.4

# Install nvm with node and npm
#RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash \
#    && source $NVM_DIR/nvm.sh \
#    && nvm install $NODE_VERSION \
#    && nvm alias default $NODE_VERSION \
#    && nvm use default

#ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
#ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
RUN mkdir /var/www
WORKDIR /var/www
ADD package.json /var/www/package.json
# ADD . /var/www/
#VOLUME ./:/var/www
#RUN curl -L https://npmjs.org/install.sh | sh
#RUN npm install -g npm
# RUN npm install
RUN npm install -g yarn
ADD start.sh /var/www
ENTRYPOINT ["/bin/bash", "start.sh"]

# CMD ["npm", "start"]
