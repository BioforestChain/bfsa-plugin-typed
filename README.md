# bfsa-plugin-typed

### 用于@bfsx/plugin组件类型安全
> 具体@bfsx/plugin组件内容可以看 [组件文档](https://docs.plaoc.com/plugin/)

#### vue3使用
> npm i @bfsx/plugin-typed-vue --save
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
> npm i @bfsx/plugin-typed-react --save
```tsx
import { useEffect } from "react";
import { BfcsTopBar, BfcsTopBarButton } from "@bfsx/plugin";
import "@bfsx/plugin-typed-react";

function App() {

    useEffect(() => {
        // onClick事件无效，只能通过下面的方式监听click事件
        const ccc = document.querySelector<BfcsTopBarButton>("#ccc")!;
        ccc.addEventListener("click", () => {
            console.log("点击事件");
        });
    });

    return (
        <div className="App">
            <dweb-top-bar title={"title"} className="topbar">
                <dweb-top-bar-button id="ccc">
                    <dweb-icon
                        source="https://objectjson.waterbang.top/test-vue3/vite.svg"
                        type="AssetIcon"
                    ></dweb-icon>
                </dweb-top-bar-button>
            </dweb-top-bar>
        </div>
    )
}
```

#### preact使用
> npm i @bfsx/plugin-typed-preact --save
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