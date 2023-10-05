# K8s Cheet Sheet

## Kubernetes Access
- 连接node debug
    ```
    $ kubectl debug node/qnap-k3s-q233a00842 -it --image=ubuntu
    ```
    Yaml中使用hostpath时，是挂载到`/host`目录下
    e.g. `hostpath: "/mnt/data"` 对应节点目录为 `/host/mnt/data`

## Yaml
- kubectl 命令生成yaml文件
    ```
    $ kubectl create deployment web --image=nginx -o yaml --dry-run > my1.yaml
    ```
- kubectl get 导出yaml
    ```
    $ kubectl get deploy nginx -o=yaml > m2.yaml
    ```