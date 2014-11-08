#!/bin/bash
 
## Connect to our EC2 instance using SSH. To do this, we have to
## supply the PEM file using -i (Identity File) during connection.
## For the user, we can use "ec2-user" and the public DNS value.
ssh \
-i ./herestory.pem \
ec2-user@ec2-54-148-20-172.us-west-2.compute.amazonaws.com
