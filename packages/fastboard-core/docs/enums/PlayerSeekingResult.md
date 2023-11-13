[@netless/fastboard-core](../README.md) / [Exports](../modules.md) / PlayerSeekingResult

# Enumeration: PlayerSeekingResult

## Table of contents

### Enumeration Members

- [Override](PlayerSeekingResult.md#override)
- [Stopped](PlayerSeekingResult.md#stopped)
- [Success](PlayerSeekingResult.md#success)
- [SuccessButUnnecessary](PlayerSeekingResult.md#successbutunnecessary)

## Enumeration Members

### Override

• **Override** = ``"override"``

跳转事件被另一个跳转操作覆盖，因此被取消

#### Defined in

node_modules/.pnpm/white-web-sdk@2.16.44/node_modules/white-web-sdk/types/index.d.ts:3121

___

### Stopped

• **Stopped** = ``"stopped"``

播放器停止，因而终止本次跳转行为

#### Defined in

node_modules/.pnpm/white-web-sdk@2.16.44/node_modules/white-web-sdk/types/index.d.ts:3125

___

### Success

• **Success** = ``"success"``

跳转进度条成功，并修改了进度

#### Defined in

node_modules/.pnpm/white-web-sdk@2.16.44/node_modules/white-web-sdk/types/index.d.ts:3113

___

### SuccessButUnnecessary

• **SuccessButUnnecessary** = ``"successButUnnecessary"``

跳转进度条成功，但并未更新进度

#### Defined in

node_modules/.pnpm/white-web-sdk@2.16.44/node_modules/white-web-sdk/types/index.d.ts:3117
