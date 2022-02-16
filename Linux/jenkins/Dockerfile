FROM jenkins/jenkins

USER root

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y wget

RUN wget https://packages.microsoft.com/config/debian/11/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  rm packages-microsoft-prod.deb

RUN apt-get update && \
  apt-get install -y apt-transport-https && \
  apt-get update && \
  apt-get install -y dotnet-sdk-5.0

RUN apt-get install -y dotnet-runtime-5.0