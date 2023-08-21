# QTS 5.x

1. 挂载包含autorun.sh的特殊分区
    ```
    $ sudo -i
    $ mount $(/sbin/hal_app --get_boot_pd port_id=0)6 /tmp/config
    ```
2. 新增/修改启动脚本
   ```
   $ vi /tmp/config/autorun.sh
   ```
3. 可直接修改启动脚本，但为了日后更方便维护和更改（不需要每次重新挂载分区），直接在启动脚本里运行一个新的脚本:
   在`/tmp/config/autorun.sh`中加入以下命令
    ```
    $ bash /share/homes/admin/autorun.sh
    ```
4. 增加可执行权限
   ```
   $ chmod +x /tmp/config/autorun.sh
   $ chmod 755 /share/homes/admin/autorun.sh
   ```
5. 取消挂载
   ```
   $ umount /tmp/config
   ```
6. 在Web UI中打开自启动开关
   自启动开关位于：控制面板 -> 系统 -> 硬件 -> 一般设置 -> 启动时运行用户定义的进程

*REF：[https://www.qnap.com.cn/zh-cn/how-to/faq/article/running-your-own-application-at-startup](https://www.qnap.com.cn/zh-cn/how-to/faq/article/running-your-own-application-at-startup)*