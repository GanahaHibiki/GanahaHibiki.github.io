# K8s Cheet Sheet

## Yaml
- kubectl 命令生成yaml文件
    ```
    $ kubectl create deployment web --image=nginx -o yaml --dry-run > my1.yaml
    ```
- kubectl get 导出yaml
    ```
    $ kubectl get deploy nginx -o=yaml > m2.yaml
    ```