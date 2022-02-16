sudo apt-get update

sudo apt-get install -y \
    openssh-server \
    git \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io

sudo groupadd docker

sudo usermod -aG docker hades

newgrp docker

sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo mkdir /home/jenkins_home
sudo mkdir /home/rabbitmq_home
sudo mkdir /home/mssql_home

sudo chown 1000:1000 -R /home/jenkins_home
sudo chown 1000:1000 -R /home/rabbitmq_home
sudo chown 1000:1000 -R /home/mssql_home