# 版本发布指南

本文档介绍如何更新版本并发布到 npm。

## 前置条件

1. 确保已登录 npm 账号

```bash
npm login
```

2. 确保代码已提交并推送到远程仓库

## 版本更新流程

### 1. 创建 Changeset 文件

在 `.changeset/` 目录下创建一个 markdown 文件，命名格式为 `描述性名称.md`：

```bash
# 文件路径: .changeset/my-change.md
```

文件内容格式：

```markdown
---
"@xto/包名": patch | minor | major
---

变更描述内容
```

版本类型说明：
- `patch`: 补丁版本 (1.0.0 → 1.0.1)，用于 bug 修复
- `minor`: 小版本 (1.0.0 → 1.1.0)，用于新功能
- `major`: 大版本 (1.0.0 → 2.0.0)，用于破坏性变更

### 2. 更新版本号

运行 changeset version 命令：

```bash
pnpm changeset version
```

此命令会：
- 更新所有受影响包的 `package.json` 版本号
- 更新 `CHANGELOG.md` 文件

### 3. 构建所有包

```bash
pnpm build:all
```

### 4. 发布到 npm

按照依赖顺序发布包：

```bash
# 1. 发布核心包（无依赖）
cd packages/core && npm publish --access public

# 2. 发布依赖 core 的包
cd packages/base && npm publish --access public
cd packages/data && npm publish --access public
cd packages/feedback && npm publish --access public
cd packages/form && npm publish --access public
cd packages/layout && npm publish --access public
cd packages/navigation && npm publish --access public

# 3. 发布依赖其他包的包
cd packages/business && npm publish --access public
```

### 5. 清理 Changeset 文件

发布完成后，删除已使用的 changeset 文件：

```bash
rm .changeset/your-change-file.md
```

### 6. 提交更改

```bash
git add .
git commit -m "chore: version packages"
git push
```

## 快速发布脚本

### 发布所有包（按依赖顺序）

```bash
#!/bin/bash
# release-all.sh

set -e

echo "📦 Building all packages..."
pnpm build:all

echo "🚀 Publishing packages..."

# Core (no dependencies)
echo "Publishing @xto/core..."
cd packages/core && npm publish --access public && cd ../..

# Packages that depend on core only
echo "Publishing @xto/base..."
cd packages/base && npm publish --access public && cd ../..

echo "Publishing @xto/data..."
cd packages/data && npm publish --access public && cd ../..

echo "Publishing @xto/feedback..."
cd packages/feedback && npm publish --access public && cd ../..

echo "Publishing @xto/form..."
cd packages/form && npm publish --access public && cd ../..

echo "Publishing @xto/layout..."
cd packages/layout && npm publish --access public && cd ../..

echo "Publishing @xto/navigation..."
cd packages/navigation && npm publish --access public && cd ../..

# Packages that depend on other packages
echo "Publishing @xto/business..."
cd packages/business && npm publish --access public && cd ../..

echo "✅ All packages published successfully!"
```

### 使用方式

将脚本保存为 `scripts/release-all.sh`，然后运行：

```bash
chmod +x scripts/release-all.sh
./scripts/release-all.sh
```

## 单个包发布

如果只修改了单个包，可以单独发布：

```bash
# 1. 修改版本号
cd packages/包名
# 手动修改 package.json 版本号

# 2. 构建
pnpm build

# 3. 发布
npm publish --access public
```

## 注意事项

1. **依赖版本问题**: 发布前确保 `package.json` 中的依赖是实际版本号，而不是 `workspace:*`

   ```json
   // ❌ 错误
   "dependencies": {
     "@xto/core": "workspace:*"
   }

   // ✅ 正确
   "dependencies": {
     "@xto/core": "^1.0.0"
   }
   ```

2. **发布顺序**: 必须按照依赖关系顺序发布，先发布被依赖的包

3. **npm 账号**: 确保有权限发布到 `@xto` scope

4. **版本号**: 每次发布版本号必须比 npm 上已存在的版本高

## 包依赖关系

```
@xto/core (无依赖)
    │
    ├── @xto/base
    ├── @xto/data
    ├── @xto/feedback
    ├── @xto/form
    ├── @xto/layout
    └── @xto/navigation
            │
            └── @xto/business (依赖 base, form, data, core)
```

## 常见问题

### Q: 发布失败提示版本已存在

A: 版本号需要比已发布的高，修改 `package.json` 中的版本号后重试

### Q: 发布失败提示权限不足

A: 确保登录了正确的 npm 账号，且有 `@xto` scope 的发布权限

### Q: 安装时报错找不到 workspace 依赖

A: 确保发布前将 `workspace:*` 替换为实际版本号