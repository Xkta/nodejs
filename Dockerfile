# 使用官方 Node.js 20 作为基础镜像
FROM node:20

# 设置工作目录
WORKDIR /app

# 复制依赖描述文件
COPY package.json ./

# 安装依赖
RUN npm install

# 复制项目代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "index.js"]