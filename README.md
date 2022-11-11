# bfsa-plugin-typed

### 用于@bfsx/plugin组件类型安全
> 具体@bfsx/plugin组件内容可以看 [组件文档](https://docs.plaoc.com/plugin/)

#### vue3使用
```vue
<script lang="ts" setup>
import { BfcsTopBar } from "@bfsx/plugin";
import { DwebTopBar } from "@bfsx/plugin-typed-vue";

const topbar = document.querySelector<BfcsTopBar>("dweb-top-bar");
const title = "vue3";
</script>

<template>
    <dweb-top-bar :title="title"></dweb-top-bar>
</template>
```
#### react使用
```tsx
import { BfcsTopBar } from "@bfsx/plugin";
import "@bfsx/plugin-typed-react";

function App() {
    return (
        <div className="App">
            <dweb-top-bar title={"title"} className="topbar"></dweb-top-bar>
        </div>
    )
}
```

#### preact使用
```tsx
import { BfcsTopBar } from "@bfsx/plugin";
import "@bfsx/plugin-typed-preact";

function App() {
    return (
        <div className="App">
            <dweb-top-bar title={"title"} className="topbar"></dweb-top-bar>
        </div>
    )
}
```