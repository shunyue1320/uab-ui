import { default as Button } from "./button/button.vue";
import { default as ButtonGroup } from "./button/button-group.vue";
import { default as Col } from "./grid/col.vue";
import { default as Row } from "./grid/row.vue";
import { default as Icon } from "./icon/icon.vue";
import { default as Input } from "./input/input.vue";
import { default as Content } from "./layout/content.vue";
import { default as Footer } from "./layout/footer.vue";
import { default as Header } from "./layout/header.vue";
import { default as Layout } from "./layout/layout.vue";
import { default as Sider } from "./layout/sider.vue";
import { default as Popover } from "./popover/popover.vue";
import { default as TableColumn } from "./table/table-column.vue";
import { default as Table } from "./table/table.vue";
import { default as TabsBody } from "./tabs/tabs-body.vue";
import { default as TabsHead } from "./tabs/tabs-head.vue";
import { default as TabsItem } from "./tabs/tabs-item.vue";
import { default as TabsPane } from "./tabs/tabs-pane.vue";
import { default as Tabs } from "./tabs/tabs.vue";

const components = [
  Button,
  ButtonGroup,
  Col,
  Row,
  Icon,
  Input,
  Content,
  Footer,
  Header,
  Layout,
  Sider,
  Popover,
  TableColumn,
  Table,
  TabsBody,
  TabsHead,
  TabsItem,
  TabsPane,
  Tabs
]

export const version = "1.0.1"
export {
  Button,
  ButtonGroup,
  Col,
  Row,
  Icon,
  Input,
  Content,
  Footer,
  Header,
  Layout,
  Sider,
  Popover,
  TableColumn,
  Table,
  TabsBody,
  TabsHead,
  TabsItem,
  TabsPane,
  Tabs
}

function install(vue) {
  components.forEach((component) => {
    vue.component(component.name, component)
  })
}

export default {
  install
}