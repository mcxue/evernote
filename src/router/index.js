import { createRouter, createWebHashHistory} from 'vue-router'
import Login from '../pages/Login.vue'
import NotebookList from '../pages/NotebookList.vue'
import NoteDetail from '../pages/NoteDetail.vue'
import TrashDetail from '../pages/TrashDetail.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/notebooks', component: NotebookList },
  { path: '/note/:noteId', component: NoteDetail },
  { path: '/trash/:noteId', component: TrashDetail },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router