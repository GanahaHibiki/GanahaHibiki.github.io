# Kubernetes on QNAP NAS

## MySQL
### MySQL command line
```
kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h ${IP ADDRESS} -p${PASSWORD}
```

### PhpMyAdmin
Web: [http://192.168.1.104:61345/](http://192.168.1.104:61345/)
user: root
pwd: ${PASSWORD}

