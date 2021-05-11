'''
Author: wangdachui
Date: 2021-05-11 13:41:36
LastEditTime: 2021-05-11 14:11:09
LastEditors: wangdachui
Description: 
FilePath: \Public-Koa2-Mysql-Sequelize_Server-master\Middleware\python\sendMail.py
'''
import smtplib
from email.header import Header
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import sys

'''
@Author: wangdachui
@Date: 2021-05-11 13:56:43
@description: 调用python发送邮件
@param {sender} 发送邮箱
@param {receiver} 接受邮箱
@param {password} 授权码
'''

def sendMail(sender,receiver,password):
    smtpserver = 'smtp.qq.com'
    username = 'username'
    mail_title = 'mail title!'
    # 创建一个带附件的实例
    message = MIMEMultipart()
    message['From'] = sender
    message['To'] = receiver
    message['Subject'] = Header(mail_title, 'utf-8')
    # 邮件正文内容
    # mail_msg = """
    # <h1>账号：{username} hello</h1>
    # """.format(username=sys.argv[4])   #参数四
    mail_msg ='hello world'
    message.attach(MIMEText(mail_msg, 'plain', 'utf-8'))
    smtpObj = smtplib.SMTP_SSL()  # 注意：如果遇到发送失败的情况（提示远程主机拒接连接），这里要使用SMTP_SSL方法
    smtpObj.connect(smtpserver)
    smtpObj.login(username, password)
    smtpObj.sendmail(sender, receiver, message.as_string())
    print("邮件发送成功！！！")
    smtpObj.quit()



sender=sys.argv[1]
receiver =  sys.argv[2]
password = sys.argv[3]  
sendMail(sender,receiver,password)